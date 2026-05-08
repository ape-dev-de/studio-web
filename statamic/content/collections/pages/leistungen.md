---
id: leistungen
blueprint: page
title: Leistungen
slug: leistungen
seo_title: 'Leistungen — Strategie, Modernisierung, Software, Compliance'
seo_description: 'Was Ape Dev liefert: Modernisierungs- und Digitalisierungs-Beratung, eigene Compliance-Werkzeuge, PHP/Laravel-Individualentwicklung, performante Websites.'
og_image:
  - brand/og/leistungen.png
blocks:
  -
    id: leist-hero
    type: hero
    title: 'Strategisches Sparring trifft Software-Engineering.'
    has_subtitle: true
    subtitle: Leistungen
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Wir helfen Unternehmen, ihre größten Herausforderungen zu lösen — vom Plan über die Modernisierung bis zur Implementierung. Vier Disziplinen, eine Haltung: erst verstehen, dann liefern.'
    background_type: none
    text_alignment: center
  -
    id: leist-list
    type: feature_multiple
    has_subtitle: false
    title: ''
    has_description: false
    columns: '2'
    text_alignment: left
    has_border: true
    has_icon: true
    features:
      -
        id: l-modern
        type: feature_item
        icon_type: generic
        icon_name: arrow-path
        title: 'Modernisierung & Digitalisierung'
        description: 'Analyse, Plan für die nächsten Jahre, optionale Umsetzungsbegleitung. M365-Rollouts, System-Ablösungen, Prozess-Digitalisierung.'
        link: 'entry::modernisierung'
        enabled: true
      -
        id: l-comp
        type: feature_item
        icon_type: generic
        icon_name: shield-check
        title: 'Compliance-Werkzeuge'
        description: 'klarkonform und ein zweites Compliance-Produkt. Eigene KI, airgapped in deutschen Servern, Tenant-isoliert.'
        link: 'entry::compliance'
        enabled: true
      -
        id: l-individual
        type: feature_item
        icon_type: generic
        icon_name: code
        title: 'Individualentwicklung'
        description: 'Wenn Standard nicht reicht: PHP/Laravel-Anwendungen, hexagonale Architektur, mit DevOps-Brille. Für Kunden mit echten Anforderungen.'
        link: 'entry::individualentwicklung'
        enabled: true
      -
        id: l-web
        type: feature_item
        icon_type: generic
        icon_name: globe
        title: 'Websites'
        description: 'Statamic + React für redaktionell pflegbare Sites, pures React wenn kein CMS gebraucht wird. Performance, Sicherheit, GDPR. Plus: warum Statamic?'
        link: 'entry::websites'
        enabled: true
    enabled: true
  -
    id: leist-cta
    type: cta_section
    title: 'Welches Thema betrifft Sie?'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Schreiben Sie uns kurz, was bei Ihnen ansteht — wir antworten innerhalb von zwei Werktagen.'
    bg_style: soft
    button_toggle: true
    button_label: 'Kontakt aufnehmen'
    button_link: '/kontakt'
    button_variant: primary
    text_alignment: center
    enabled: true
---
