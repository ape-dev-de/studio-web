# `websites/statamic-base` — Curated Statamic Runtime

## Pattern

```
1. registry-mirror pipeline:           (existing) mirrors chainguard/wolfi-base → registry.ape-dev.de/mirror/...
2. websites/_statamic-base pipeline:   (NEW)      builds curated FrankenPHP+PHP base atop Wolfi
3. websites/<app> pipeline:             (existing) builds app-image FROM the shared statamic-base
```

**Marketing-Frame**: „Eigenes, kuratiertes Statamic-Runtime-Image — Wolfi-Linux, signiert, gescannt, **keine Supply-Chain-Risiken aus dem Docker-Hub-Ökosystem**." Hat es so auch in `feature_table` auf `/compliance` geschafft.

## Warum Wolfi und nicht `dunglas/frankenphp:*-alpine`

| Aspekt | Wolfi-DIY | Upstream Alpine |
|---|---|---|
| Provenance | Chainguard-build, jede apk-Quelle bekannt + signiert | Docker-Hub-Build, mehrere Maintainer-Hops |
| Shell in Production | optional (latest-dev hat sh, latest hat keine) | immer (busybox) |
| Pflegeaufwand | Extension-Liste explizit, eigene Verantwortung | Upstream wählt für uns |
| Konsistenz mit `klarkonform/app-base` | nein (klarkonform = upstream-mirror) | ja |
| Pflegt sich gut in `feature_table /compliance` ein | **ja** — „kuratiert, signiert" | nein — „aus Docker Hub" liest sich schlechter |

Trade-off: bei Wolfi pflegen wir die Extension-Auswahl selbst, dafür bekommen wir eine ehrliche Aussage zur Supply Chain. Genau die Aussage, die wir auf der Compliance-Seite machen.

## Layout

### A) `infra` repo

#### A.1 `pipelines/infra/registry-mirror/image-list.yaml` — Eintrag prüfen

`chainguard/wolfi-base:latest` und `chainguard/wolfi-base:latest-dev` sind bereits in der Mirror-Liste. **Kein neuer Eintrag nötig.**

(FrankenPHP wird nicht aus Docker Hub gezogen — kommt als Wolfi-apk-Package.)

#### A.2 `pipelines/websites/_statamic-base/Dockerfile` — neue Datei

```dockerfile
# syntax=docker/dockerfile:1.6
#
# websites/statamic-base — kuratierte Statamic-Runtime auf Wolfi.
#
# Build atop chainguard/wolfi-base (mirror) + apk-installed frankenphp +
# explicit PHP-Extensions die Statamic 6 + Laravel Octane brauchen. Keine
# Upstream-Docker-Hub-Abhängigkeiten zur Laufzeit. Image ist signiert
# (Cosign) und gescannt (grype) durch die Concourse-Pipeline.
#
# Konsumiert von:
#   - pipelines/websites/ape-dev-studio/Dockerfile
#   - pipelines/websites/cesaris/Dockerfile
#   - pipelines/websites/demo-pages/Dockerfile
#   - jeder zukünftige Statamic-Site-Build

FROM registry.ape-dev.de/mirror/chainguard/wolfi-base:latest-dev

LABEL org.opencontainers.image.title="websites/statamic-base" \
      org.opencontainers.image.description="Curated FrankenPHP+Octane runtime for Statamic sites (Wolfi-based)" \
      org.opencontainers.image.source="https://github.com/ape-dev-de/infra" \
      org.opencontainers.image.licenses="proprietary" \
      org.opencontainers.image.vendor="ape dev"

# PHP 8.5 + Extensions für Statamic 6 + Laravel Octane
# (Wolfi-Paketnamen — bei Bedarf an aktuellen Catalog adjustieren)
RUN apk add --no-cache \
        frankenphp \
        php-8.5 \
        php-8.5-bcmath \
        php-8.5-curl \
        php-8.5-dom \
        php-8.5-exif \
        php-8.5-fileinfo \
        php-8.5-gd \
        php-8.5-iconv \
        php-8.5-intl \
        php-8.5-mbstring \
        php-8.5-opcache \
        php-8.5-openssl \
        php-8.5-pcntl \
        php-8.5-pdo \
        php-8.5-pdo-sqlite \
        php-8.5-pdo-mysql \
        php-8.5-phar \
        php-8.5-session \
        php-8.5-simplexml \
        php-8.5-sodium \
        php-8.5-tokenizer \
        php-8.5-xml \
        php-8.5-xmlwriter \
        php-8.5-zip \
        composer \
        ca-certificates-bundle \
        tzdata \
 && rm -rf /var/cache/apk/*

# Octane-friendly opcache + JIT defaults
RUN { \
        echo "opcache.enable=1"; \
        echo "opcache.memory_consumption=192"; \
        echo "opcache.max_accelerated_files=20000"; \
        echo "opcache.validate_timestamps=0"; \
        echo "opcache.interned_strings_buffer=16"; \
        echo "opcache.jit=tracing"; \
        echo "opcache.jit_buffer_size=128M"; \
    } > /etc/php/conf.d/zz-opcache.ini \
 && { \
        echo "expose_php=Off"; \
        echo "memory_limit=256M"; \
        echo "upload_max_filesize=20M"; \
        echo "post_max_size=20M"; \
    } > /etc/php/conf.d/zz-prod.ini

# Non-root app user; consuming Dockerfiles use this UID
RUN addgroup -g 1000 app && adduser -u 1000 -G app -h /app -D app

WORKDIR /app
USER app
EXPOSE 80

# Default ENTRYPOINT bleibt frei — App-Dockerfiles setzen ihren eigenen CMD
CMD ["frankenphp", "version"]
```

> **Note für Infra**: Wolfi-Paketnamen können sich von dem oben unterscheiden. Verifizieren via `apk search php-8.5` im Wolfi-Catalog vor erstem Build.

#### A.3 `pipelines/websites/_statamic-base/pipeline.yaml`

Pattern 1:1 vom `pipelines/klarkonform/app/build-app-base` Job. Trigger:

- `infra-repo` change in `pipelines/websites/_statamic-base/`
- `wolfi-base-mirror` neuer Digest (kaskadiert via passed-Constraint in den App-Pipelines)

Outputs nach `registry.ape-dev.de/websites/statamic-base:latest` mit Cosign-Signatur und grype-Scan-Report.

#### A.4 `pipelines/websites/ape-dev-studio/pipeline.yaml` — Patch

Resource hinzufügen:
```yaml
  - name: statamic-base-image
    type: registry-image
    icon: docker
    source:
      repository: registry.ape-dev.de/websites/statamic-base
      username: ((registry.username))
      password: ((registry.password))
      tag: latest
```

Plus passed-Constraint im `build-image` Job damit App-Builds bei Base-Update neu rollen.

### B) `ape-dev-studio` repo: bereits angepasst

`Dockerfile` zeigt jetzt auf `registry.ape-dev.de/websites/statamic-base:latest`. Bis das Image existiert, schlägt der Build fehl — das ist beabsichtigt, signalisiert dem Infra-Team das fehlende Stück.

`composer.json` hat `laravel/octane: ^2.5`.

`.env` hat `STATAMIC_STATIC_CACHING_STRATEGY=full`.

`nginx.conf` und `ops/supervisord.conf` gelöscht.

### C) Public-facing wording

Auf `/compliance` im Security-Stack hinzugefügt:

| Capability | Implementation | Note |
|---|---|---|
| Container-Basis ohne Drittanbieter-Risiko | `statamic-base` | Wolfi · curated · signed |

So liest sich der Wolfi-Aufwand auch im Marketing als Pluspunkt.

## Verbleibend für Infra-Team

1. `pipelines/websites/_statamic-base/Dockerfile` + `pipeline.yaml` aus Pattern `klarkonform/app/build-app-base` zusammensetzen
2. Cosign-Signatur + grype-Scan im Pipeline-Step (gleicher Pattern wie mirror-pipeline)
3. `pipelines/websites/ape-dev-studio/pipeline.yaml` patchen mit der `statamic-base-image` Resource + passed-Constraint
4. Erste Build-Run auslösen (Concourse), Image landet auf `registry.ape-dev.de/websites/statamic-base:latest`
5. ape-dev-studio Pipeline triggert sich neu; resultierender Pod läuft mit FrankenPHP+Octane

## Image-Größen-Schätzung

- `chainguard/wolfi-base:latest-dev`: ~22 MB
- `+ frankenphp + PHP 8.5 + Extensions`: ~60–80 MB
- `websites/statamic-base` ≈ **80–100 MB compressed**
- `ape-dev-studio` final ≈ 90–110 MB compressed (App-Code dazu)

Vergleich aktueller Stack (nginx + php-fpm + supervisord auf Alpine): ~110 MB compressed, drei Prozesse, drei Configs.
