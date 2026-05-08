---
id: compliance
blueprint: page
title: 'Compliance-Werkzeuge'
slug: compliance
seo_title: 'Compliance-Werkzeuge — eigene KI, airgapped in deutschen Servern'
seo_description: 'Compliance-Plattformen aus eigener Entwicklung: klarkonform für KMU, plus ein zweites Produkt für Personaldienstleistung. Eigene KI, ausschließlich in deutschen Rechenzentren, Tenant-isoliert.'
blocks:
  -
    id: c-hero
    type: hero
    title: 'Compliance ohne Komplexität.'
    has_subtitle: true
    subtitle: 'Eigene Produkte'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Wir bauen die Werkzeuge, die uns selbst gefehlt haben. Zwei Produkte, ein Versprechen: Compliance, die Sie nicht jeden Morgen quälen muss — und Ihre Daten verlassen Deutschland nicht.'
    background_type: none
    text_alignment: center
    button_toggle: true
    button_label: 'Closed Beta anfragen'
    button_link: '/kontakt'
  -
    id: c-klarkonform
    type: feature_single
    has_subtitle: true
    subtitle: 'Produkt 01'
    title: 'klarkonform — Compliance ohne Ahnung.'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Die Plattform für kleine und mittlere Unternehmen, die rechtssicher arbeiten wollen, ohne Jura studiert zu haben.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Direkt angebunden an Microsoft 365: Verträge aus SharePoint werden automatisch erkannt, fristgerecht verwaltet und digital signiert. E-Mails sortiert klarkonform nach gesetzlichen Aufbewahrungspflichten, das DSGVO-Verzeichnis pflegt sich praktisch von selbst, und alle Belege landen prüfungssicher beim Steuerberater.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Vom Mitarbeitervertrag über die Inventarliste bis zur Umsatzsteuer-Meldung — klarkonform macht die Pflicht zur Nebensache.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Aktuell in Closed Beta. Erste Pilotkunden onboarden seit Q1.'
    has_image: false
    has_features: true
    features:
      -
        id: kk-m365
        type: feature_item
        icon_type: generic
        icon_name: globe
        title: 'Verträge erkennt sich selbst.'
        description: 'SharePoint-Anbindung mit Graph-API-Webhooks. Klassifikation, Fristenkalender, digitale Signatur — automatisch beim Upload, ohne dass jemand etwas anklicken muss.'
        enabled: true
      -
        id: kk-llm
        type: feature_item
        icon_type: generic
        icon_name: cube
        title: 'E-Mails, sortiert nach Gesetz.'
        description: 'HGB §257 sechs Jahre, AO §147 acht Jahre, Vertragsbezogenes nach Vertragsende — klarkonform liest mit (eigene LLM, austauschbar, deutsche Server), ordnet ein und löscht zur richtigen Zeit. Den Steuerberater freut das.'
        enabled: true
      -
        id: kk-retention
        type: feature_item
        icon_type: generic
        icon_name: shield-check
        title: 'DSGVO-Verzeichnis ohne Excel.'
        description: 'Verarbeitungsverzeichnis pflegt sich aus dem laufenden Betrieb. Keine Tabelle, die niemand mehr aktualisiert — sondern ein lebendes Dokument, das Sie der Aufsichtsbehörde reichen können, wenn sie fragt.'
        enabled: true
    enabled: true
  -
    id: c-second
    type: feature_single
    has_subtitle: true
    subtitle: 'Produkt 02 · Unangekündigt'
    title: 'Compliance für Personaldienstleistung & ANÜ.'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Ein Compliance-Werkzeug für Personalvermittlung, Arbeitnehmerüberlassung und Hiring. Adressiert die regulatorischen Eigenheiten der Branche: AÜG-konforme Pflichten, Equal-Pay-Reporting, IGZ/SCP-Anforderungen — gebaut für mittelständische Personaldienstleister bis hin zu Konzernstrukturen.'
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Name und Launch-Termin werden noch nicht öffentlich kommuniziert. Bei Interesse: bitte Kontakt unter NDA.'
    has_image: false
    has_features: true
    features:
      -
        id: p2-cqrs
        type: feature_item
        icon_type: generic
        icon_name: arrow-path
        title: 'Event-driven via CQRS.'
        description: 'MongoDB für Events, Horizon-Queues für Verarbeitung, Read-Models pro Tenant. Skaliert von 1 zu 1000 ohne Re-Architektur.'
        enabled: true
      -
        id: p2-graphql
        type: feature_item
        icon_type: generic
        icon_name: code
        title: 'GraphQL + OAuth 2.0'
        description: 'Saubere API für Karriere-Sub-Domains, Bewerberportale, Integrationen mit bestehenden HR-Systemen.'
        enabled: true
      -
        id: p2-multi
        type: feature_item
        icon_type: generic
        icon_name: users
        title: 'Mandanten getrennt — bis zur Datenbank.'
        description: 'Bei diesem Produkt: separate Datenbank pro Mandant, Wildcard-Subdomain-Routing, Subscription-Management. Konzern-Strukturen sind kein Edge Case, sondern Default.'
        enabled: true
    enabled: true
  -
    id: c-infra
    type: feature_table
    subtitle: Infrastruktur
    title: 'Wie wir das absichern.'
    lede: 'Defense in Depth. Den gleichen Stack, den wir für unsere eigenen Produkte betreiben, bekommen Compliance-Kunden direkt mit.'
    groups:
      -
        id: g-trust
        group_label: 'Daten, KI & Mandantentrennung'
        rows:
          -
            id: r-llm
            capability: 'Eigene KI, ohne Cloud-Provider'
            implementation_name: 'Self-hosted LLM'
            implementation_note: 'austauschbar · airgapped'
          -
            id: r-tenant
            capability: 'Mandantentrennung in der Anwendung'
            implementation_name: 'Software-Layer'
            implementation_note: 'DB-Isolation optional je Produkt'
          -
            id: r-residenz
            capability: 'Datenresidenz Deutschland'
            implementation_name: 'Ausschließlich deutsche Server'
      -
        id: g-runtime
        group_label: 'Runtime & Netzwerk'
        rows:
          -
            id: r-cilium
            capability: 'Netzwerk-Segmentierung mit Default-DENY'
            implementation_name: Cilium
            implementation_note: 'eBPF · L3–L7'
          -
            id: r-falco
            capability: 'Runtime-Anomalie-Detection'
            implementation_name: Falco
            implementation_note: 'syscall-level alerts'
          -
            id: r-tetragon
            capability: 'eBPF-Syscall-Enforcement'
            implementation_name: Tetragon
            implementation_note: 'kernel-level kill'
          -
            id: r-tls
            capability: 'Verschlüsselung in Transit'
            implementation_name: 'TLS überall'
            implementation_note: cert-manager
      -
        id: g-supply
        group_label: 'Supply Chain & Betrieb'
        rows:
          -
            id: r-base
            capability: 'Eigenes kuratiertes Runtime-Image'
            implementation_name: 'statamic-base'
            implementation_note: 'Wolfi · curated · signed · keine Pull-Throughs'
          -
            id: r-chainguard
            capability: 'Hardened Images mit minimaler CVE-Fläche'
            implementation_name: Chainguard
            implementation_note: 'distroless · daily rebuild'
          -
            id: r-cosign
            capability: 'SBOM + Image-Signaturen'
            implementation_name: 'Syft + Cosign'
            implementation_note: 'SPDX-Attestation'
          -
            id: r-grype
            capability: 'Vulnerability-Scanning vor Deploy'
            implementation_name: 'grype'
            implementation_note: 'CRITICAL = block'
          -
            id: r-kyverno
            capability: 'Policy-as-Code beim Admission'
            implementation_name: Kyverno
            implementation_note: 'cluster-weite Policies'
          -
            id: r-vault
            capability: 'Secret-Management mit Auto-Rotation'
            implementation_name: 'HashiCorp Vault'
          -
            id: r-flux
            capability: 'Auditierbare GitOps-Deployments'
            implementation_name: Flux
            implementation_note: 'Git als Source of Truth'
          -
            id: r-velero
            capability: 'Backup & Disaster Recovery'
            implementation_name: Velero
            implementation_note: 'offsite · getestet'
          -
            id: r-bsi
            capability: 'Compliance-Orientierung'
            implementation_name: 'BSI Grundschutz'
            implementation_note: '+ CIS Benchmark'
    enabled: true
  -
    id: c-cta
    type: cta_section
    title: 'Closed Beta · Pilotkunden gesucht.'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Wir suchen 5–10 mittelständische Unternehmen für die klarkonform-Beta. Reduzierte Pilot-Konditionen, direkter Draht zur Entwicklung, Mitgestaltung an der Roadmap. Ideal: 50–500 Mitarbeitende, M365-Tenant, Compliance-Schmerzen.'
    bg_style: soft
    button_toggle: true
    button_label: 'Beta anfragen'
    button_link: '/kontakt'
    button_variant: primary
    text_alignment: center
    enabled: true
---
