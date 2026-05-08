---
id: ueber-uns
blueprint: page
title: 'Über uns'
slug: ueber-uns
seo_title: 'Über uns — Menschen, Prozesse, Technologie'
seo_description: 'ape-dev: ein kleines Studio aus Norddeutschland mit Anspruch auf seriöse Software. Menschen, Prozesse, Technologie — in dieser Reihenfolge.'
og_image:
  - brand/og/ueber-uns.png
blocks:
  -
    id: u-hero
    type: hero
    title: 'Klein, regional, ansprechbar.'
    wink_word: ansprechbar
    has_subtitle: true
    subtitle: 'Über uns'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Ein Studio aus Norddeutschland. Wir kennen unsere Kunden persönlich, sind erreichbar wenn es wichtig wird, und reden ohne Sales-Sprache. Vertrauen entsteht in Gesprächen — nicht in Pitchdecks.'
    background_type: none
    text_alignment: center
  -
    id: u-philosophy
    type: feature_single
    has_subtitle: true
    subtitle: 'Leitsatz'
    title: 'Menschen, Prozesse, Technologie.'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'In dieser Reihenfolge. Technik allein löst keine Probleme — wir kennen keinen Fall, in dem ein Tool eine kaputte Organisation gerettet hätte. Deshalb hören wir zuerst zu, schauen uns Prozesse an, und schreiben Code erst, wenn wir sicher sind, dass er das richtige Problem löst.'
    has_image: false
    has_features: false
    enabled: true
  -
    id: u-values
    type: feature_multiple
    has_subtitle: true
    subtitle: 'Werte'
    title: 'Was uns leitet.'
    has_description: false
    columns: '3'
    text_alignment: left
    has_border: true
    has_icon: true
    features:
      -
        id: v-akr
        type: feature_item
        icon_type: generic
        icon_name: check
        title: Akribisch
        description: 'Wir prüfen die Details — auch die, die niemand sieht. Tests, Dokumentation, Migrations-Pfade. Das ist die unsexy Arbeit, die später Zeit spart.'
        enabled: true
      -
        id: v-eff
        type: feature_item
        icon_type: generic
        icon_name: bolt
        title: Effizient
        description: 'Wir lehnen Aufträge ab, bei denen wir keinen klaren Nutzen sehen. Time-and-Material ist kein Geschäftsmodell — wir liefern, was wir versprochen haben.'
        enabled: true
      -
        id: v-anp
        type: feature_item
        icon_type: generic
        icon_name: arrow-path
        title: Anpassungsfähig
        description: 'Anforderungen ändern sich. Wir auch. Aber wir sagen es Ihnen vorher, wenn eine Änderung den Plan auf den Kopf stellt.'
        enabled: true
      -
        id: v-ehr
        type: feature_item
        icon_type: generic
        icon_name: shield-check
        title: Ehrlich
        description: 'Wenn wir es nicht können, sagen wir es. Wenn ein Sprint länger dauert, hören Sie das früh. Wenn ein Konkurrent für Ihren Fall besser ist, sagen wir auch das.'
        enabled: true
      -
        id: v-kom
        type: feature_item
        icon_type: generic
        icon_name: chat
        title: Kommunikativ
        description: 'Status-Updates ohne Aufforderung, Fragen statt Annahmen, klare Sprache statt Buzzwords. Sie sollen jederzeit wissen, woran wir gerade arbeiten.'
        enabled: true
      -
        id: v-inn
        type: feature_item
        icon_type: generic
        icon_name: cube
        title: Innovativ
        description: 'Aber kontrolliert. Wir setzen neue Technologien dann ein, wenn sie ein konkretes Problem besser lösen — nicht, weil sie auf Hacker News trenden.'
        enabled: true
    enabled: true
  -
    id: u-team
    type: testimonial
    has_subtitle: true
    subtitle: 'Persönlich, nicht abstrakt'
    title: 'Sie reden direkt mit uns. Punkt.'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Norddeutschland, kurze Wege. Sie reden direkt mit uns — keine Sales-Schicht, keine Account-Manager, keine Tickets-im-System-Übergabe. Wenn etwas wichtig ist, hören Sie es schnell. Wenn etwas brennt, sind wir erreichbar.'
    layout: single
    testimonials:
      -
        id: t-ap
        type: testimonial_item
        quote: 'Wir treffen unsere Kunden gern persönlich. Vor Ort, am Whiteboard, beim Kaffee — bevor wir Code schreiben.'
        author_name: 'Alexis Peters'
        author_role: 'Geschäftsführer · Ape Dev GmbH'
        enabled: true
    enabled: true
  -
    id: u-cta
    type: cta_section
    title: 'Klingt nach einer Zusammenarbeit?'
    has_description: true
    description:
      -
        type: paragraph
        content:
          -
            type: text
            text: 'Wir sind selektiv mit neuen Mandaten — und wahrscheinlich passen wir nicht zu jedem Projekt. Aber wenn die Werte hier resonieren, lassen Sie uns reden.'
    bg_style: white
    button_toggle: true
    button_label: 'Erstgespräch'
    button_link: '/kontakt'
    button_variant: primary
    text_alignment: center
    enabled: true
---
