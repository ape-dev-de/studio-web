---
id: kunden
blueprint: page
title: Kunden
slug: kunden
seo_title: 'Kunden — Mittelstand, Konzern, Public Sector'
seo_description: 'Wer mit Ape Dev arbeitet: TQG, cosinex, Cesaris, Festglanz, ESN, More Nutrition, Foodist, Movamo, About You, Holiday Host und weitere.'
og_image:
  - brand/og/kunden.png
blocks:
  -
    id: k-hero
    type: hero
    title: 'Vertrauen, das nicht laut wird.'
    has_subtitle: true
    subtitle: Kunden
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Wir nennen unsere Kunden — aber wir behaupten keine Case Studies, die wir nicht haben. Was wir haben: langjährige Beziehungen über Mittelstand, Konzern und öffentlichen Sektor.'
    background_type: none
    text_alignment: center
  -
    id: k-logos-all
    type: logo_cloud
    has_subtitle: true
    subtitle: 'Auswahl'
    title: 'Mit wem wir arbeiten.'
    background_style: white
    logos:
      -
        id: k-tqg
        type: logo_item
        name: TQG
        logo:
          - clients/tqg.webp
        treatment: mono
      -
        id: k-cosinex
        type: logo_item
        name: cosinex
        logo:
          - clients/cosinex.png
        treatment: original
      -
        id: k-cesaris
        type: logo_item
        name: Cesaris
      -
        id: k-festglanz
        type: logo_item
        name: Festglanz
        logo:
          - clients/festglanz.png
        treatment: original
      -
        id: k-esn
        type: logo_item
        name: ESN
        logo:
          - clients/esn.svg
        treatment: mono
      -
        id: k-fitmart
        type: logo_item
        name: Fitmart
        logo:
          - clients/fitmart.svg
        treatment: mono
      -
        id: k-mn
        type: logo_item
        name: 'More Nutrition'
        logo:
          - clients/more-nutrition.webp
        treatment: original
      -
        id: k-foodist
        type: logo_item
        name: Foodist
        logo:
          - clients/foodist.png
        treatment: original
      -
        id: k-movamo
        type: logo_item
        name: Movamo
        logo:
          - clients/movamo.webp
        treatment: original
      -
        id: k-aboutyou
        type: logo_item
        name: 'About You'
        logo:
          - clients/aboutyou.jpg
        treatment: original
      -
        id: k-holiday
        type: logo_item
        name: 'Holiday Host'
        logo:
          - clients/holiday-host.webp
        treatment: mono
      -
        id: k-ecbg
        type: logo_item
        name: ECBG
      -
        id: k-hvmn
        type: logo_item
        name: 'Havemann Holding'
    enabled: true
  -
    id: k-segments
    type: feature_multiple
    has_subtitle: true
    subtitle: 'Wo wir arbeiten'
    title: 'Drei Segmente.'
    has_description: false
    columns: '3'
    text_alignment: left
    has_border: true
    has_icon: true
    features:
      -
        id: ks-mid
        type: feature_item
        icon_type: generic
        icon_name: cube
        title: Mittelstand
        description: 'Inhabergeführt, 50–500 Mitarbeitende, oft regional verwurzelt. Festglanz, Movamo, Holiday Host. Hier arbeiten wir am intensivsten — kurze Wege, klare Entscheidungen.'
        enabled: true
      -
        id: ks-corp
        type: feature_item
        icon_type: generic
        icon_name: chart-bar
        title: Konzern
        description: 'Komplexe Strukturen, mehrere Stakeholder, längere Sales-Zyklen. About You, ESN, More Nutrition. Wir liefern in Teilprojekten, nicht in Multi-Year-Programmen.'
        enabled: true
      -
        id: ks-public
        type: feature_item
        icon_type: generic
        icon_name: globe
        title: 'B2B-SaaS & Software-Lieferanten'
        description: 'Software-Hersteller für regulierte Branchen, mit Anforderungen die über Standard-CMS hinausgehen. TQG, cosinex.'
        enabled: true
    enabled: true
  -
    id: k-cta
    type: cta_section
    title: 'Werden Sie Teil dieser Liste?'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Schreiben Sie uns Ihre Situation in zwei Absätzen. Wir antworten innerhalb von zwei Werktagen mit einer ehrlichen Einschätzung.'
    bg_style: soft
    button_toggle: true
    button_label: 'Anfrage senden'
    button_link: '/kontakt'
    button_variant: primary
    text_alignment: center
    enabled: true
---
