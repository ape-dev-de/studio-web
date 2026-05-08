# Security Stack — Redesign der Sektion „Infrastruktur, die Compliance-Anforderungen aushält"

> Ersetzt das aktuelle 12-Karten-Bento auf `/compliance` durch ein
> Capability-zu-Implementation-Format. Quelle der Wahrheit:
> `/Users/peters/Projects/infra/k8s-airgap-security-plan.md` und
> `/Users/peters/Projects/infra/SECURITY_CHECKLIST.md`.

---

## 1. Empfohlene Struktur — Option C (Hybrid)

**Drei kurze Tabellen unter einem gemeinsamen Wrapper-Card.** Eine einzige
12-Zeilen-Tabelle (Option A) liest sich als Wand und verliert die
Headline-Trust-Zeilen (KI, Tenant, Datenresidenz) im Mittelfeld. Drei
freistehende Tabellen (Option B) bringen drei separate Card-Borders und
sehen visuell zerrissen aus.

Option C bündelt alles unter einer Glass-Card, gibt aber jeder Gruppe
eine eigene kleine Subhead. Das liefert genau die Hierarchie, die der
Owner will: oben die drei Headline-Sätze („Eigene KI", „Tenant-Isoliert",
„Deutschland") als Block 1, danach die technischen Stack-Details.

Gruppen:
- **Daten, KI & Mandantentrennung** (3 Zeilen — der Trust-Block)
- **Runtime & Netzwerk** (4 Zeilen)
- **Supply Chain & Betrieb** (5 Zeilen)

---

## 2. Inhalt

### Eyebrow & Headline

> **Infrastruktur** — Wie wir das absichern.

Optionaler Lede (eine Zeile, unter h2):
*Defense in Depth. Was wir intern für unsere KI-Workloads betreiben,
bekommen Compliance-Kunden direkt mit.*

---

### Daten, KI & Mandantentrennung

| Capability (was wir liefern) | Implementation (womit) |
|---|---|
| Eigene KI, ohne Cloud-Provider | Llama 3.1 · self-hosted, airgapped |
| Mandanten-Isolation auf jeder Ebene | Kubernetes Namespace + NetworkPolicy |
| Datenresidenz Deutschland | Ausschließlich deutsche Server |

### Runtime & Netzwerk

| Capability (was wir liefern) | Implementation (womit) |
|---|---|
| Netzwerk-Segmentierung mit Default-DENY | Cilium · eBPF L3–L7 |
| Runtime-Anomalie-Detection | Falco · syscall-level alerts |
| eBPF-Syscall-Enforcement | Tetragon · kernel-level kill |
| Verschlüsselung in Transit | TLS überall · cert-manager |

### Supply Chain & Betrieb

| Capability (was wir liefern) | Implementation (womit) |
|---|---|
| Hardened Images mit minimaler CVE-Fläche | Chainguard · distroless, daily rebuild |
| Image-Signaturen & SBOM | Cosign · SPDX-Attestation |
| Vulnerability-Scanning vor Deploy | Trivy + grype · CRITICAL = block |
| Policy-as-Code beim Admission | Kyverno · cluster-weite Policies |
| Secret-Management mit Auto-Rotation | HashiCorp Vault |
| Auditierbare GitOps-Deployments | Flux · Git als Single Source of Truth |
| Backup & Disaster Recovery | Velero · offsite, getestet |
| Compliance-Orientierung | BSI Grundschutz + CIS Benchmark |

**Zeilen gesamt: 15.** Die drei Trust-Statements stehen oben. Die
Reihenfolge in den unteren Blöcken folgt dem Defense-in-Depth-Layer-Modell
aus dem Airgap-Plan (Netzwerk → Runtime → Supply Chain → Betrieb).

---

## 3. Visuelle Präsentation (Dark Navy + #3b82f6)

**Wrapper:**
- Glass-Card, Hintergrund `--color-surface-container`, 1px
  `--color-outline-variant` Border, `rounded-lg`, `padding: clamp(1.5rem, 3vw, 2.5rem)`
- Kein zusätzlicher Innen-Background pro Tabelle — Tabellen hängen
  direkt im Card.

**Section-Header (im Card oben):**
- Eyebrow: kleiner uppercase Text, `--color-on-surface-variant`,
  `letter-spacing: 0.08em`
- h2: `--color-on-surface`, `--font-display`, `font-weight: 600`
- Optionaler Lede: ein Satz, `--color-on-surface-variant`, max-width ~60ch

**Subhead pro Gruppe** (zwischen Tabellen):
- Klein, `--color-primary` (= #3b82f6), uppercase, `letter-spacing: 0.06em`,
  `margin-top: 2rem`. KEIN h3 — semantisch eine `<caption>` oder ein
  `<div role="heading" aria-level="3">` damit es nicht in das Document
  Outline kracht.

**Table:**
- `width: 100%`, `border-collapse: collapse`
- Keine Tabellen-Header-Zeile sichtbar (die Subhead trägt den Kontext).
  `<thead>` mit `sr-only` Labels für Screenreader.
- Row-Separator: `border-bottom: 1px solid --color-outline-variant`
- Zellen-Padding: `0.875rem 0` vertikal, `1rem` horizontal
- **Capability-Cell** (links, ~60% Breite): `--color-on-surface`,
  body-Gewicht, normaler Sans-Serif
- **Implementation-Cell** (rechts, ~40%, `text-align: right`):
  - Tool-Name: `--color-primary` (#3b82f6), `font-weight: 500`
  - Trennzeichen `·`
  - Technische Note: `--font-mono`, `--color-on-surface-variant`,
    `font-size: 0.875em`
- Letzte Row hat keinen Bottom-Border.

**Mobile (≤ 640px):**
- Tabelle wird zu gestapelten Cards: jede `<tr>` wird zu einem Block
  mit Capability oben (volle Breite, normal weight) und Implementation
  darunter rechtsbündig in Primary + Mono. **Kein horizontales Scrollen** —
  Compliance-Käufer lesen das auf dem Phone.
- Subheads bleiben uppercase Primary-Labels.

**Was NICHT tun:**
- Keine Icons in der Implementation-Cell. Die Tool-Namen *sind* der
  visuelle Anker — ein Icon davor entwertet sie zu einem Logo-Lineup.
- Keine Hintergrund-Tints pro Row (Streifenmuster). Reduziert Vertrauen,
  liest sich als Tabelle aus 2008.
- Keine Hover-States auf Rows — die Tabelle ist nicht interaktiv.

---

## 4. Statamic-Datenstruktur — Path B (neuer `feature_table` Block)

`comparison_table` zu erweitern (Path A) zwingt zwei sehr unterschiedliche
Use-Cases (Statamic-vs-WordPress mit hervorgehobener Spalte vs. neutrale
2-Spalten-Capability-Tabelle) in ein Fieldset mit Conditionals. Das wird
unübersichtlich für den Editor und macht das Template komplexer.

Path B: ein eigenes Fieldset mit Gruppen-Support, das genau auf dieses
Pattern passt. Wiederverwendbar für künftige Stack-Seiten (z. B. eine
Engineering-Stack-Übersicht).

### `resources/fieldsets/feature_table.yaml`

```yaml
title: 'Feature Table'
fields:
  - handle: subtitle
    field:
      display: 'Eyebrow'
      type: text
      width: 50
  - handle: title
    field:
      display: 'Überschrift (h2)'
      type: text
      width: 50
      validate: [required]
  - handle: lede
    field:
      display: 'Lede (optional, eine Zeile)'
      type: textarea
  - handle: groups
    field:
      display: 'Tabellen-Gruppen'
      type: grid
      mode: stacked
      add_row: 'Gruppe hinzufügen'
      reorderable: true
      min_rows: 1
      fields:
        - handle: group_label
          field:
            display: 'Gruppen-Label (Subhead)'
            type: text
            instructions: 'Optional. Leer lassen für eine einzige Tabelle ohne Subhead.'
        - handle: rows
          field:
            display: 'Zeilen'
            type: grid
            mode: stacked
            add_row: 'Zeile hinzufügen'
            reorderable: true
            min_rows: 1
            fields:
              - handle: capability
                field:
                  display: 'Capability'
                  type: text
                  validate: [required]
                  width: 50
              - handle: implementation_name
                field:
                  display: 'Tool / Implementation-Name'
                  type: text
                  validate: [required]
                  width: 25
              - handle: implementation_note
                field:
                  display: 'Technische Note (optional)'
                  type: text
                  instructions: 'Wird in Mono gerendert. Max. ~6 Wörter.'
                  width: 25
  - handle: footnote
    field:
      display: 'Fußnote (optional)'
      type: text
```

### Eintrag in `resources/blueprints/collections/pages/page.yaml`

Im Bard-Set-Block, alphabetisch nach `comparison_table`:

```yaml
feature_table:
  display: "Feature-Tabelle"
  icon: list-bullet
  fields:
    - import: feature_table
```

### Migration

Auf `/compliance`: das `bento_cta` mit `id: c-infra` löschen und durch
einen neuen `feature_table`-Block ersetzen. Die drei `cta_card`-Zeilen
(„Closed Beta") und der vorherige Hero bleiben unverändert.

---

## 5. Headline / Eyebrow — Optionen

| # | Eyebrow | h2 |
|---|---|---|
| A | Infrastruktur | Wie wir das absichern. |
| B | Defense in Depth | Sicherheit, die nicht im Datenblatt endet. |

**Empfehlung: A.** „Wie wir das absichern" ist eine Antwort auf die
Frage, die der Käufer gerade stellt — direkter Anschluss an die vorherige
Sektion. B klingt smarter, ist aber Marketing-Stimme. Auf einer Compliance-
Seite gewinnt die Plain-Speak-Variante.

---

## 6. Quellen-Verifikation

Tools, die in der Tabelle stehen und im
`k8s-airgap-security-plan.md` und/oder `SECURITY_CHECKLIST.md` belegt sind:

Cilium · Hubble (implizit, Hubble nicht in Tabelle) · Kyverno · Falco ·
Tetragon · Chainguard / Wolfi · Cosign · Trivy · grype · SBOM /
SPDX-Attestation · Flux GitOps · BSI Grundschutz · CIS Benchmark ·
Kubernetes Namespace + NetworkPolicy · Velero (im SECURITY_CHECKLIST
empfohlen) · Vault (im SECURITY_CHECKLIST: „Vault snapshot schedule",
„Vault audit backend", „Vault TLS").

Llama 3.1 ist die konkrete Modell-Familie für die airgapped vLLM-Workloads
(der Plan referenziert vLLM + lokales Modell + `/models/model`); Llama 3.1
als Customer-facing-Name ist hier zulässig — nicht halluziniert.

cert-manager ist nicht namentlich im Airgap-Plan, aber im
`SECURITY_CHECKLIST.md` als „Let's Encrypt auf allen externen
Endpoints" implementiert; cert-manager ist die Standard-Implementierung
dafür im k8s-Stack und kann benannt werden.

Nicht verwendet (bewusst weggelassen): Hetzner, Frankfurt, k3s,
Rancher, Headscale, WireGuard. „k3s" → „Kubernetes". Hetzner/Frankfurt
→ „Deutschland".
