---
id: startseite
blueprint: page
title: Startseite
slug: startseite
seo_title: 'Ape Dev — Strategie, Modernisierung, Compliance & Software'
seo_description: 'Ape Dev: Wir helfen Unternehmen beim Wachstum und lösen ihre Probleme. Modernisierung, Compliance-Werkzeuge, Individualentwicklung in PHP/Laravel — aus Norddeutschland.'
og_image:
  - brand/og/startseite.png
blocks:
  -
    id: hero-start
    type: hero
    background_type: grid
    title: 'Wir lösen Probleme. Nicht nur Code-Tasks.'
    wink_word: Probleme
    has_subtitle: true
    subtitle: 'Studio · Norddeutschland'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Wir unterstützen Unternehmen beim Wachstum und bei den Themen, die sie nicht intern lösen können — Modernisierung, Digitalisierung, Compliance. Und wenn Sie individuelle Software brauchen, bauen wir die auch.'
    text_alignment: center
    button_toggle: true
    button_label: 'Erstgespräch vereinbaren'
    button_link: '/kontakt'
    secondary_button_label: 'Was wir tun'
    secondary_button_link: '/leistungen'
  -
    id: home-logos
    type: logo_cloud
    has_subtitle: true
    subtitle: 'Vertrauen seit Jahren'
    title: 'Mit Mittelstand, Konzernen und öffentlichem Sektor.'
    background_style: white
    logos:
      -
        id: logo-tqg
        type: logo_item
        name: TQG
        logo:
          - clients/tqg.webp
      -
        id: logo-cosinex
        type: logo_item
        name: cosinex
        logo:
          - clients/cosinex.png
        treatment: original
      -
        id: logo-cesaris
        type: logo_item
        name: Cesaris
      -
        id: logo-festglanz
        type: logo_item
        name: Festglanz
        logo:
          - clients/festglanz.png
        treatment: original
      -
        id: logo-esn
        type: logo_item
        name: ESN
        logo:
          - clients/esn.svg
        treatment: mono
      -
        id: logo-fitmart
        type: logo_item
        name: Fitmart
        logo:
          - clients/fitmart.svg
        treatment: mono
      -
        id: logo-mn
        type: logo_item
        name: 'More Nutrition'
        logo:
          - clients/more-nutrition.webp
        treatment: original
      -
        id: logo-foodist
        type: logo_item
        name: Foodist
        logo:
          - clients/foodist.png
        treatment: original
      -
        id: logo-movamo
        type: logo_item
        name: Movamo
        logo:
          - clients/movamo.webp
        treatment: original
      -
        id: logo-aboutyou
        type: logo_item
        name: 'About You'
        logo:
          - clients/aboutyou.jpg
        treatment: original
      -
        id: logo-holiday
        type: logo_item
        name: 'Holiday Host'
        logo:
          - clients/holiday-host.webp
        treatment: mono
    enabled: true
  -
    id: home-disziplinen
    type: feature_multiple
    has_subtitle: true
    subtitle: 'Vier Disziplinen'
    title: 'Was wir tun.'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Wir starten mit Verstehen — nicht mit Code. Drei Wege, wie wir Unternehmen helfen, plus eigene Produkte für Compliance.'
    columns: '2'
    text_alignment: left
    has_border: true
    has_icon: true
    features:
      -
        id: f-modern
        type: feature_item
        icon_type: generic
        icon_name: arrow-path
        title: 'Modernisierung & Digitalisierung'
        description: 'Wir analysieren Ihre Systemlandschaft, schreiben den Plan für die nächsten Jahre, und begleiten optional die Umsetzung. M365-Rollouts, System-Ablösungen, Prozess-Digitalisierung.'
        link: 'entry::modernisierung'
        enabled: true
      -
        id: f-compliance
        type: feature_item
        icon_type: generic
        icon_name: shield-check
        title: 'Compliance-Werkzeuge'
        description: 'Eigene Produkte: klarkonform für KMU und ein zweites Compliance-Produkt für Personaldienstleistung. Native M365-Integration, eigene KI, deutsche Server, Tenant-isoliert.'
        link: 'entry::compliance'
        enabled: true
      -
        id: f-individual
        type: feature_item
        icon_type: generic
        icon_name: code
        title: 'Individualentwicklung'
        description: 'Wenn Standard-Software nicht passt: maßgeschneiderte Anwendungen, primär in PHP und Laravel. Wir machen das nicht nur — wir machen es auch gut.'
        link: 'entry::individualentwicklung'
        enabled: true
      -
        id: f-web
        type: feature_item
        icon_type: generic
        icon_name: globe
        title: Websites
        description: 'Performant, sicher, ohne Tracker — Statamic mit React-Frontend für Sites mit Redaktion, pures React wenn kein CMS nötig ist. Ja, ein Tech-Unternehmen, das Websites baut.'
        link: 'entry::websites'
        enabled: true
    enabled: true
  -
    id: home-philosophy
    type: feature_single
    title: 'Menschen, Prozesse, Technologie.'
    has_subtitle: true
    subtitle: 'Unser Leitsatz'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Technologie ist der einfachste Teil. Was sie wirklich nützlich macht, sind die Menschen, die sie nutzen, und die Prozesse, in die sie eingebettet ist. Wir arbeiten an allen drei Ebenen — und priorisieren in dieser Reihenfolge.'
    has_image: false
    has_features: true
    features:
      -
        id: ph-people
        type: feature_item
        icon_type: generic
        icon_name: users
        title: 'Mit Menschen, nicht für sie.'
        description: 'Workshops, ehrliche Diskussionen, frühe Prototypen. Wer das System später bedient, wird beim Bau gehört.'
        enabled: true
      -
        id: ph-process
        type: feature_item
        icon_type: generic
        icon_name: arrow-path
        title: 'Prozesse, die zur Realität passen.'
        description: 'Wir verbiegen Software an Prozesse — nicht umgekehrt. Wenn ein Prozess hakt, lösen wir das Problem, bevor wir es in Code gießen.'
        enabled: true
      -
        id: ph-tech
        type: feature_item
        icon_type: generic
        icon_name: cube
        title: 'Technik, die nicht im Weg steht.'
        description: 'Modern genug für die nächsten zehn Jahre, langweilig genug, um sie nachts zu betreiben. Keine Buzzword-Architekturen.'
        enabled: true
    enabled: true
  -
    id: home-cta
    type: cta_section
    title: 'Lassen Sie uns über Ihr Projekt sprechen.'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Erstgespräch unverbindlich, 30 Minuten, ohne Sales-Theater. Wir hören zu und sagen Ihnen ehrlich, ob wir helfen können.'
    bg_style: white
    button_toggle: true
    button_label: 'Termin vereinbaren'
    button_link: '/kontakt'
    button_variant: primary
    text_alignment: center
    enabled: true
---
