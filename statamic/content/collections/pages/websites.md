---
id: websites
blueprint: page
title: Websites
slug: websites
seo_title: 'Websites — Statamic, performant, sicher, ohne Tracker'
seo_description: 'Statamic + React für redaktionell pflegbare Sites, pures React wenn kein CMS gebraucht wird. Lighthouse 100, sub-200ms TTFB, GDPR-konform. Ja, ein Tech-Unternehmen, das auch Websites baut.'
og_image:
  - brand/og/websites.png
blocks:
  -
    id: web-hero
    type: hero
    title: 'Wir bauen auch Websites. Und sind richtig gut darin.'
    has_subtitle: true
    subtitle: Websites
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Ja, ein Tech-Unternehmen, das auch Websites baut. Wir wissen, wie das klingt. Aber wir sind so gut darin, dass wir es Ihnen nicht vorenthalten können — Statamic + React-Frontend, pures React wenn kein CMS gewünscht.'
    background_type: none
    text_alignment: center
    button_toggle: true
    button_label: 'Konkretes Projekt?'
    button_link: '/kontakt'
    secondary_button_label: 'Statamic vs WordPress'
    secondary_button_link: '#vergleich'
  -
    id: web-features
    type: feature_multiple
    has_subtitle: true
    subtitle: 'Was anders ist'
    title: 'Wie unsere Websites laufen.'
    has_description: false
    columns: '3'
    text_alignment: left
    has_border: true
    has_icon: true
    features:
      -
        id: wf-perf
        type: feature_item
        icon_type: generic
        icon_name: bolt
        title: 'Lighthouse 100, sub-200ms TTFB'
        description: 'Statisch gecachte Pages aus Caddy/FrankenPHP, dynamische Endpunkte über Octane mit warmem Laravel-Boot. Optimierte Bilder, kein Render-blocking JS. Performance ist kein nachträglicher Tuning-Schritt — sondern Ausgangsbedingung.'
        enabled: true
      -
        id: wf-security
        type: feature_item
        icon_type: generic
        icon_name: shield-check
        title: 'Sicherheit per Default'
        description: 'CSP/HSTS/SRI streng konfiguriert, automatische Updates, ALTCHA Proof-of-Work statt CAPTCHA, kein /wp-admin als Angriffsziel.'
        enabled: true
      -
        id: wf-privacy
        type: feature_item
        icon_type: generic
        icon_name: lock
        title: 'Keine Tracker, keine Cookies'
        description: 'Standardmäßig kein Google, kein Meta, kein Cookie-Banner. Wenn Analytics, dann self-hosted (Plausible). DSGVO-konform aus Prinzip, nicht aus Pflicht.'
        enabled: true
      -
        id: wf-cms
        type: feature_item
        icon_type: generic
        icon_name: pencil
        title: 'Redaktion ohne Frust'
        description: 'Statamic mit Block-Builder. Sie pflegen Inhalte selbst, in vertrauter Optik, ohne Plugin-Hölle. Ihre Redaktion versteht das System in 30 Minuten.'
        enabled: true
      -
        id: wf-eu
        type: feature_item
        icon_type: generic
        icon_name: globe
        title: 'Eigene Infrastruktur in Deutschland'
        description: 'Kubernetes mit Flux-GitOps, cert-manager für TLS, ausschließlich deutsche Server. Sie wissen, wo Ihre Website läuft — und wer Zugriff hat.'
        enabled: true
      -
        id: wf-react
        type: feature_item
        icon_type: generic
        icon_name: code
        title: 'React vorne, immer.'
        description: 'Statamic liefert das Backend + die Redaktion, das Frontend ist React (Inertia oder pure SPA). Wenn ein Projekt gar kein CMS braucht — z.B. cesaris-consulting.com — bauen wir das Frontend ohne Statamic, nur React.'
        enabled: true
    enabled: true
  -
    id: web-portfolio
    type: portfolio_stack
    anchor_id: portfolio
    has_subtitle: true
    subtitle: Portfolio
    title: 'Sites, die wir gebaut haben.'
    has_description: false
    tagline: 'Keine generischen Templates. Individuelle Layouts.'
    items:
      -
        id: pf-self
        type: portfolio_item
        image:
          - portfolio/ape-dev.png
        category_label: Tech
        project_title: 'ape-dev.de'
        description: 'Eat your own dogfood — diese Site. Statamic 6, eigene Block-Bibliothek, dunkles Tech-Design für ein technisches Publikum, kein Tracker, Lighthouse 100.'
        url: 'https://ape-dev.de'
        link_label: 'ape-dev.de besuchen'
      -
        id: pf-ecbg
        type: portfolio_item
        image:
          - portfolio/ecbg-stade.png
        category_label: 'Warm, einladend'
        project_title: 'ecbg-stade.de'
        description: 'Evangelische Christen-Baptisten-Gemeinde Stade. Helle Farben und einladender Ton statt Tech-Härte. Audio-Streaming der Predigten und eigene Nextcloud-Instanz — Daten bleiben in Deutschland.'
        url: 'https://ecbg-stade.de'
        link_label: 'ecbg-stade.de besuchen'
      -
        id: pf-hvmn
        type: portfolio_item
        image:
          - portfolio/havemann-holding.png
        category_label: Enterprise
        project_title: 'havemann-holding.de'
        description: 'Holding-Auftritt mit mehreren Geschäftsfeldern, Stellen-Listing und Bewerber-Workflow. Ruhiges Editorial-Design für ein Enterprise-Publikum, Block-Builder für die Redaktion komplett selbstpflegbar.'
        url: 'https://havemann-holding.de'
        link_label: 'havemann-holding.de besuchen'
      -
        id: pf-cesaris
        type: portfolio_item
        image:
          - portfolio/cesaris-consulting.png
        category_label: Corporate
        project_title: 'cesaris-consulting.com'
        description: 'Personalvermittlung mit Fokus auf Vertraulichkeit. Klares Corporate-Design in Blau-Tönen, animierte Landing, integrierte Tools — pures React, ohne CMS.'
        url: 'https://cesaris-consulting.com'
        link_label: 'cesaris-consulting.com besuchen'
    enabled: true
  -
    id: web-vergleich
    type: comparison_table
    title: 'Statamic vs. WordPress.'
    has_subtitle: true
    subtitle: 'Warum Statamic'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'WordPress ist großartig — wir nutzen es selbst, wo es passt. Aber für die meisten KMU-Websites ist Statamic die ehrlichere Wahl. Hier ist, warum.'
    highlight_label: Statamic
    alternative_label: WordPress
    rows:
      -
        id: r-cve
        criterion: 'Sicherheit (offengelegte CVEs)'
        highlight_value: '~30'
        highlight_note: 'GitHub Security Advisories, gesamtes Statamic-Projekt'
        alternative_value: '~7.966 allein in 2024'
        alternative_note: 'Patchstack 2024 · 96% in Plugins, 4% Themes, 7 in Core'
      -
        id: r-perf
        criterion: Performance
        highlight_value: 'Static-Cache + Octane'
        highlight_note: '~5 ms statisch · ~20 ms dynamisch (warmer Laravel-Boot)'
        alternative_value: 'PHP-Rendering pro Request'
        alternative_note: '200–500 ms ohne Cache-Plugins'
      -
        id: r-db
        criterion: 'Datenbank-Wartung'
        highlight_value: 'Keine nötig'
        highlight_note: 'Optional MySQL/Postgres bei sehr großen Sites'
        alternative_value: 'MySQL Pflicht'
        alternative_note: 'Backups, Updates, MyISAM/InnoDB-Migration über Jahre'
      -
        id: r-security
        criterion: 'Angriffsfläche'
        highlight_value: 'Flat-File, kein DB-Login'
        highlight_note: 'Kein /wp-admin als Standard-Eintrittsvektor'
        alternative_value: 'Plugin-Ökosystem'
        alternative_note: '1.614 Plugins 2024 wegen Sicherheitslücken aus Repo entfernt (Patchstack)'
      -
        id: r-content
        criterion: 'Content-Modell'
        highlight_value: 'Blueprints + Fieldsets'
        highlight_note: 'Strukturiert von Anfang an'
        alternative_value: 'Custom Fields via Plugin (ACF)'
        alternative_note: 'Funktioniert, aber nachträglich aufgesetzt'
      -
        id: r-cost
        criterion: 'Lizenzkosten'
        highlight_value: 'Free reicht fast immer'
        highlight_note: 'Pro nur für Multi-User-CP nötig (ab 259 € einmalig)'
        alternative_value: 'Kostenlos'
        alternative_note: 'Aber: viele Funktionen via Premium-Plugins kostenpflichtig'
      -
        id: r-extend
        criterion: 'Erweiterbarkeit / IDE'
        highlight_value: 'Laravel-Basis'
        highlight_note: 'Jeder Laravel-Dev kann sauber erweitern · REST/GraphQL/Eloquent out of box'
        alternative_value: 'WP-spezifische APIs'
        alternative_note: 'Hook/Filter-System, kein modernes IDE-Tooling'
      -
        id: r-future
        criterion: 'Wartung in 5 Jahren'
        highlight_value: 'Klare Code-Basis, Laravel'
        alternative_value: 'Plugin-Kombination spezifisch'
        alternative_note: 'Plugins sterben, Updates brechen'
      -
        id: r-edit
        criterion: 'Redaktions-Erfahrung'
        highlight_value: 'Block-Builder, Live Preview'
        alternative_value: 'Gutenberg / Classic'
        alternative_note: 'Solide, aber überladen'
    footnote: 'Quellen: Statamic GitHub Security Advisories (Stand Mai 2026), Patchstack „State of WordPress Security 2024". WordPress hat ein riesiges Ökosystem — die meisten Sicherheitslücken stammen aus Plugins, nicht aus dem Core. Nicht jedes Projekt braucht Statamic; manchmal ist WordPress die richtige Antwort. Aber selten.'
  -
    id: web-cta
    type: cta_section
    title: 'Eine Website, die Sie selbst pflegen können?'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Schicken Sie uns Ihre aktuelle URL und ein, zwei Sätze zum Plan. Wir prüfen, ob ein Re-Launch oder ein Stage-by-Stage-Refresh Sinn ergibt.'
    bg_style: white
    button_toggle: true
    button_label: 'Anfrage senden'
    button_link: '/kontakt'
    button_variant: primary
    text_alignment: center
    enabled: true
---
