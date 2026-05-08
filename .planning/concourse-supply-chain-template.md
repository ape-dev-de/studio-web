# Concourse Supply-Chain Template

Wiederverwendbares Pattern für **SBOM + Vulnerability-Scan + Cosign-Attestation**
zwischen `build-image` und `put` in jeder Consumer-Pipeline (`pipelines/websites/*`,
analog `pipelines/klarkonform/*`, `pipelines/persotron/*`).

---

## Warum nicht im `_statamic-base`-Build

Das Base-Image enthält weder `vendor/` (Composer-Deps) noch `public/build/`
(Vite-Output) noch App-Code. Die echte CVE-Fläche entsteht erst, wenn der
Consumer `composer install` und `npm run build` über das Base-Image legt.
Scan auf Base-Ebene würde nur Wolfi-OS + FrankenPHP-Binary erfassen — beide
rollen ohnehin via Mirror-Pipeline mit eigenem Scan-Schritt durch.

**Fazit:** Scan gehört in die Consumer-Pipeline, eine Stufe vor dem Image-Push.

---

## Mirror-Voraussetzungen

`pipelines/infra/registry-mirror/image-list.yaml` ergänzen:

```yaml
  # ------------------------------------------------------------------
  # Supply-Chain Tooling (für consumer-pipeline scan tasks)
  # ------------------------------------------------------------------
  - name: chainguard/syft
    upstream: cgr.dev/chainguard/syft:latest
    mirror: registry.ape-dev.de/mirror/chainguard/syft
    version_strategy: inspect-label
    stable_alias: "latest"
    scan: false
    sign: true
    used_by:
      - pipelines/websites/*/pipeline.yaml (sbom task)
      - pipelines/klarkonform/app/pipeline.yaml (sbom task, future)

  - name: chainguard/grype
    upstream: cgr.dev/chainguard/grype:latest
    mirror: registry.ape-dev.de/mirror/chainguard/grype
    version_strategy: inspect-label
    stable_alias: "latest"
    scan: false
    sign: true
    used_by:
      - pipelines/websites/*/pipeline.yaml (vulnerability-scan task)
      - pipelines/klarkonform/app/pipeline.yaml (vulnerability-scan task, future)
```

`chainguard/cosign` ist bereits gemirrored (siehe `image-list.yaml`).

---

## Template-Snippet

In jede Consumer-`pipeline.yaml` als YAML-Anchor oder Resource-Type aufgenommen.
Empfohlene Stelle: Anchor am Top, Aufruf nach jedem `build-image`, vor `put`.

### YAML-Anchors am Top der pipeline.yaml

```yaml
# Re-usable supply-chain task block. Reference via <<: *sbom-and-scan
# in any build job that produces image/image.tar.
sbom-and-scan: &sbom-and-scan
  - task: sbom
    config:
      platform: linux
      image_resource:
        type: registry-image
        source:
          repository: registry.ape-dev.de/mirror/chainguard/syft
          tag: latest
      inputs:
        - name: image
      outputs:
        - name: sbom
      run:
        path: /usr/bin/syft
        args:
          - oci-archive:image/image.tar
          - -o
          - cyclonedx-json=sbom/sbom.cdx.json
          - -o
          - spdx-json=sbom/sbom.spdx.json

  - task: grype-scan
    config:
      platform: linux
      image_resource:
        type: registry-image
        source:
          repository: registry.ape-dev.de/mirror/chainguard/grype
          tag: latest
      inputs:
        - name: sbom
      params:
        # CRITICAL = block. Bei high oder lower nur reporten, nicht failen.
        # Pro Pipeline kann man das via params überschreiben.
        FAIL_ON: critical
      run:
        path: /usr/bin/grype
        args:
          - sbom:sbom/sbom.cdx.json
          - --fail-on
          - $((FAIL_ON))
          - --output
          - table

  - task: cosign-attest
    config:
      platform: linux
      image_resource:
        type: registry-image
        source:
          repository: registry.ape-dev.de/mirror/chainguard/cosign
          tag: latest-dev
      inputs:
        - name: image
        - name: sbom
        - name: docker-config
      params:
        COSIGN_KEY: ((cosign.private-key))
        COSIGN_PASSWORD: ((cosign.password))
        DOCKER_CONFIG: docker-config
      run:
        path: /bin/sh
        args:
          - -exc
          - |
            # Sign image + attach SPDX SBOM as in-toto attestation.
            # Both land in the registry alongside the image manifest.
            cosign sign --key env://COSIGN_KEY \
                        --tlog-upload=false \
                        oci-archive:image/image.tar
            cosign attest --predicate sbom/sbom.spdx.json \
                          --type spdxjson \
                          --key env://COSIGN_KEY \
                          --tlog-upload=false \
                          oci-archive:image/image.tar
```

### Aufruf in einem build-Job

```yaml
jobs:
  - name: build-image
    plan:
      - in_parallel:
          - get: app-repo
            trigger: true
          - get: statamic-base-runtime
            passed: [build-runtime]
            trigger: true
      - task: prepare-docker-config
        # ... (bestehender Task)
      - task: build-image
        # ... (bestehender Task — produziert image/image.tar)

      # NEU: Supply-Chain-Block (vor put, daher kein Push bei CRITICAL CVEs)
      - <<: *sbom-and-scan

      - put: app-image
        params:
          image: image/image.tar
```

> **Hinweis zu Concourse YAML-Anchors**: Concourse < 7 unterstützt keine
> Top-Level-Anchors innerhalb eines `plan`. Falls eure Concourse-Version das
> nicht akzeptiert, alternativ als Concourse `task_config` File pro Task
> auslagern (`pipelines/_lib/sbom.yml`, `pipelines/_lib/grype-scan.yml`,
> `pipelines/_lib/cosign-attest.yml`) und via `file:` Reference einbinden:
>
> ```yaml
> - task: sbom
>   file: infra-repo/pipelines/_lib/sbom.yml
>   input_mapping: {image: image}
> ```

---

## Failure Semantics

| Layer | Verhalten bei Hit |
|---|---|
| `composer audit` während `composer install` | Warning in Log, kein Fail (Composer-Default) |
| `grype --fail-on critical` | Job rot, **kein Image-Push** |
| `grype` ohne `--fail-on` | Nur Report, Pipeline grün |
| `cosign sign` Fehler | Job rot, kein Push (Build-Output ungültig) |
| Optional: Slack-/Mail-Alarm bei medium/high | Über separates `on_failure` Hook |

Empfehlung: `FAIL_ON=critical` als Default. Für höhere Sensitivity (z. B.
klarkonform, persotron) auf `FAIL_ON=high` setzen — die laufen mit
Compliance-Daten und sollten konservativer sein als ein Marketing-Site.

---

## Was die Consumer in der Tabelle bekommen

Nach erfolgreichem Build liegen im Registry **drei Artefakte** unter dem
Image-Tag:

1. **Das Image selbst** — pushed via `put: app-image`
2. **Cosign-Signatur** — `cosign verify --key <pub>` belegt Herkunft
3. **SPDX-SBOM-Attestation** — `cosign verify-attestation --type spdxjson` liefert die volle Dependency-Liste mit Versionen + Lizenzen

Customer-facing-Wording auf `/compliance` (security-stack feature_table)
ist damit gedeckt:

| Capability | Implementation |
|---|---|
| SBOM + Image-Signaturen | Syft + Cosign · SPDX-Attestation |
| Vulnerability-Scanning vor Deploy | grype · CRITICAL = block |

— jetzt nicht mehr Marketing, sondern verifizierbar pro Image-Tag.

---

## Lokal nachvollziehen

Optional: identische Tools lokal mit Homebrew installiert:

```bash
brew install syft grype cosign
```

Ad-hoc-Scan eines bereits gebauten Images:

```bash
syft <image-ref> -o cyclonedx-json=sbom.cdx.json
grype sbom:sbom.cdx.json --fail-on critical
```

Hilfreich für Pre-Push-Sanity, ersetzt aber nicht den Pipeline-Scan
(letzterer ist die Single-Source-of-Truth, signiert vom Cosign-Key).

---

## Rollout-Reihenfolge

1. **Mirror erweitern** — `chainguard/syft` + `chainguard/grype` in `image-list.yaml`, einmal durch die Mirror-Pipeline laufen lassen
2. **Cosign-Key provisionieren** falls noch nicht vorhanden — Cosign-Vault-Secret an Concourse als `((cosign.private-key))` + `((cosign.password))`
3. **Erstes Pilot-Projekt**: `pipelines/websites/ape-dev-studio/pipeline.yaml` mit dem `<<: *sbom-and-scan` Block patchen (oder die `_lib/`-Variante)
4. **Verifikation**: nach erstem Push einmal manuell:
   ```bash
   cosign verify --key cosign.pub registry.ape-dev.de/ape-dev-studio:latest
   cosign verify-attestation --type spdxjson --key cosign.pub registry.ape-dev.de/ape-dev-studio:latest
   ```
5. **Rollout**: gleiches Pattern in `cesaris`, `demo-pages`, `festglanz`, später `klarkonform/app`, `persotron`
