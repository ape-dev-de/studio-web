---
id: modernisierung
blueprint: page
title: 'Modernisierung & Digitalisierung'
slug: modernisierung
seo_title: 'Modernisierung & Digitalisierung — Analyse, Plan, Umsetzung'
seo_description: 'Wir analysieren bestehende Systemlandschaften, schreiben einen Plan für die nächsten Jahre und begleiten optional die Umsetzung. Kunden: Cesaris, Festglanz und mehr.'
og_image:
  - brand/og/modernisierung.png
blocks:
  -
    id: mod-hero
    type: hero
    title: 'Erst verstehen. Dann verändern.'
    wink_word: verstehen
    has_subtitle: true
    subtitle: 'Modernisierung & Digitalisierung'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Bevor wir Code schreiben, hören wir zu. Wir analysieren Ihre Systemlandschaft, dokumentieren ehrlich, was funktioniert und was nicht, und liefern einen mehrjährigen Plan — keinen Foliensatz.'
    background_type: none
    text_alignment: center
    button_toggle: true
    button_label: 'Erstgespräch buchen'
    button_link: '/kontakt'
  -
    id: mod-steps
    type: steps
    has_subtitle: true
    subtitle: 'Wie wir arbeiten'
    title: 'Drei Phasen.'
    has_description: false
    layout: vertical
    bg_style: white
    steps:
      -
        id: step-1
        type: step
        number: '01'
        title: 'Entdecken'
        description: 'Wir setzen uns mit den Menschen zusammen, die das System täglich nutzen. Workshops, Schatten-IT-Audit, Architektur-Review. Am Ende: ein klares Bild Ihres Status quo.'
        enabled: true
      -
        id: step-2
        type: step
        number: '02'
        title: 'Entwickeln'
        description: 'Aus dem Bild wird ein Plan: Roadmap über 1–3 Jahre, Quick-Wins für die nächsten 90 Tage, Risiken offen benannt. Sie bekommen ein Dokument, das Sie auch ohne uns weiterverwenden können.'
        enabled: true
      -
        id: step-3
        type: step
        number: '03'
        title: 'Implementieren'
        description: 'Optional: wir begleiten die Umsetzung — als interner Lead, als externer Partner oder beim Onboarding eines neuen Teams. Sie behalten die Kontrolle.'
        enabled: true
    enabled: true
  -
    id: mod-features
    type: feature_multiple
    has_subtitle: true
    subtitle: Typische Themen
    title: 'Womit Kunden zu uns kommen.'
    has_description: false
    columns: '2'
    text_alignment: left
    has_border: true
    has_icon: true
    features:
      -
        id: mf-m365
        type: feature_item
        icon_type: generic
        icon_name: globe
        title: 'M365-Einführung & -Administration'
        description: 'Tenant-Architektur, Identity, SharePoint, Teams-Governance. Beispiel: bei Cesaris die komplette M365-Stack-Einführung inkl. laufender Administration.'
        enabled: true
      -
        id: mf-legacy
        type: feature_item
        icon_type: generic
        icon_name: arrow-path
        title: 'Legacy-Systeme ablösen'
        description: 'Wir bewerten die Risiken einer Migration ehrlich: was Sie behalten sollten, was Sie ablösen müssen, in welcher Reihenfolge.'
        enabled: true
      -
        id: mf-process
        type: feature_item
        icon_type: generic
        icon_name: numbered-list
        title: 'Prozess-Digitalisierung'
        description: 'Vom papiergetriebenen Workflow zum integrierten Prozess. Beispiel Festglanz: digitale Auftragsabwicklung statt Excel-Listen.'
        enabled: true
      -
        id: mf-strategy
        type: feature_item
        icon_type: generic
        icon_name: chart-bar
        title: 'Tech-Strategie für Mittelständler'
        description: 'Sie haben keinen CTO und auch keinen Bedarf an einem? Wir übernehmen die Technologie-Strategie temporär oder als Sparring-Partner.'
        enabled: true
    enabled: true
  -
    id: mod-customers
    type: logo_cloud
    has_subtitle: true
    subtitle: Auswahl
    title: 'Beispiele.'
    background_style: white
    logos:
      -
        id: m-l-cesaris
        type: logo_item
        name: Cesaris
      -
        id: m-l-festglanz
        type: logo_item
        name: Festglanz
        logo:
          - clients/festglanz.png
        treatment: original
      -
        id: m-l-movamo
        type: logo_item
        name: Movamo
        logo:
          - clients/movamo.webp
        treatment: original
      -
        id: m-l-holiday
        type: logo_item
        name: 'Holiday Host'
        logo:
          - clients/holiday-host.webp
        treatment: mono
    enabled: true
  -
    id: mod-cta
    type: cta_section
    title: 'Klingt das nach Ihrer Situation?'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Erstgespräch 30 Minuten, ohne Verpflichtung. Wir sagen Ihnen ehrlich, ob ein Modernisierungs-Mandat sinnvoll ist — auch wenn die Antwort "nein" lautet.'
    bg_style: soft
    button_toggle: true
    button_label: 'Termin vereinbaren'
    button_link: '/kontakt'
    button_variant: primary
    text_alignment: center
    enabled: true
---
