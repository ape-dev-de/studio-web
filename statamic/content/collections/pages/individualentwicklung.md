---
id: individualentwicklung
blueprint: page
title: Individualentwicklung
slug: individualentwicklung
seo_title: 'Individualentwicklung — PHP, Laravel, moderne Architekturen'
seo_description: 'Maßgeschneiderte Software-Entwicklung mit Fokus auf PHP & Laravel. Architektur, DevOps, Sicherheit. Kunden: TQG, cosinex.'
og_image:
  - brand/og/individualentwicklung.png
blocks:
  -
    id: ind-hero
    type: hero
    title: 'Software, die mit Ihnen wächst.'
    wink_word: wächst
    has_subtitle: true
    subtitle: Individualentwicklung
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Maßgeschneiderte Anwendungen, primär in PHP und Laravel. Wir kennen den Unterschied zwischen "fertig" und "wartbar" — und liefern das zweite.'
    background_type: none
    text_alignment: center
    button_toggle: true
    button_label: 'Projekt skizzieren'
    button_link: '/kontakt'
  -
    id: ind-features
    type: feature_multiple
    has_subtitle: true
    subtitle: Was Sie bekommen
    title: 'Mehr als Code.'
    has_description: false
    columns: '3'
    text_alignment: left
    has_border: true
    has_icon: true
    features:
      -
        id: if-arch
        type: feature_item
        icon_type: generic
        icon_name: cube
        title: 'Architektur, die hält.'
        description: 'Hexagonal/Onion-Architektur, klare Module, Ports & Adapter. Tests an den richtigen Stellen — nicht überall, aber dort, wo es zählt.'
        enabled: true
      -
        id: if-devops
        type: feature_item
        icon_type: generic
        icon_name: arrow-path
        title: 'DevOps mitgedacht.'
        description: 'CI/CD, Container, K3s, Monitoring. Wer eine Anwendung baut, ohne sie zu betreiben, baut nur die Hälfte.'
        enabled: true
      -
        id: if-security
        type: feature_item
        icon_type: generic
        icon_name: shield-check
        title: 'Sicherheit by default.'
        description: 'Secret Management, Vault-Integration, OWASP-Standards, regelmäßige Updates. Compliance ist kein Nachgedanke.'
        enabled: true
      -
        id: if-team
        type: feature_item
        icon_type: generic
        icon_name: users
        title: 'In Ihrem Team.'
        description: 'Wir setzen uns nicht zwischen Sie und Ihre Anwendung. Code-Übergabe, Doku, Pair-Programming mit Ihren Entwicklern — wenn Sie wollen.'
        enabled: true
      -
        id: if-stack
        type: feature_item
        icon_type: generic
        icon_name: code
        title: 'Pragmatischer Stack.'
        description: 'PHP 8.x, Laravel 11+/12, MongoDB oder PostgreSQL, React/Inertia wo Frontend gefragt ist. Keine Hype-Frameworks aus Prinzip.'
        enabled: true
      -
        id: if-honest
        type: feature_item
        icon_type: generic
        icon_name: check
        title: 'Ehrliche Schätzungen.'
        description: 'Wir sagen, was wir nicht wissen. Wenn ein Sprint länger dauert, hören Sie das früh — nicht am Tag der Abnahme.'
        enabled: true
    enabled: true
  -
    id: ind-stack
    type: stats
    has_subtitle: true
    subtitle: 'Stack'
    title: 'Womit wir arbeiten.'
    has_description: false
    bg_style: soft
    columns: '4'
    stats:
      -
        id: s-php
        type: stat
        value: 'PHP 8.5'
        label: 'Laravel 12'
        enabled: true
      -
        id: s-db
        type: stat
        value: 'MongoDB · MySQL · Postgres'
        label: 'je nach Anforderung'
        enabled: true
      -
        id: s-react
        type: stat
        value: 'React + Inertia'
        label: 'wenn Frontend nötig'
        enabled: true
      -
        id: s-k8s
        type: stat
        value: 'Kubernetes'
        label: 'deutsche Rechenzentren'
        enabled: true
    enabled: true
  -
    id: ind-customers
    type: logo_cloud
    has_subtitle: true
    subtitle: Auswahl
    title: 'Wer mit uns baut.'
    background_style: white
    logos:
      -
        id: ind-l-tqg
        type: logo_item
        name: TQG
        logo:
          - clients/tqg.webp
        treatment: mono
      -
        id: ind-l-cosinex
        type: logo_item
        name: cosinex
        logo:
          - clients/cosinex.png
        treatment: original
      -
        id: ind-l-esn
        type: logo_item
        name: ESN
        logo:
          - clients/esn.svg
        treatment: mono
      -
        id: ind-l-fitmart
        type: logo_item
        name: Fitmart
        logo:
          - clients/fitmart.svg
        treatment: mono
      -
        id: ind-l-mn
        type: logo_item
        name: 'More Nutrition'
        logo:
          - clients/more-nutrition.webp
        treatment: original
    enabled: true
  -
    id: ind-cta
    type: cta_section
    title: 'Konkretes Vorhaben?'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Beschreiben Sie uns Ihr Problem in zwei Absätzen — wir antworten mit einer ehrlichen Einschätzung statt einem Termin-Vorschlag.'
    bg_style: white
    button_toggle: true
    button_label: 'Anfrage senden'
    button_link: '/kontakt'
    button_variant: primary
    text_alignment: center
    enabled: true
---
