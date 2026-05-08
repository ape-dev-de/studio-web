# Legal Audit — ape-dev.de
**Scope:** `impressum.md` und `datenschutz.md` gegen § 5 DDG, § 36 VSBG, Art. 13 DSGVO, § 25 TTDSG, § 38 BDSG.
**Stand:** 2026-05-08. Quelle der Wahrheit: Verified Company Facts + tatsächliche Stack-Nutzung im Repo (Antlers-Layout, Forms-Blueprint, AltchaController).

---

## 1. Executive Summary

**Must-fix (rechtlicher Hard-Fail oder akute Lücke):**
- **Impressum:** Es fehlt die Angabe **„Inhaltlich verantwortlich i.S.d. § 18 Abs. 2 MStV"**. Da die Site redaktionelle Inhalte (Blog/Compliance-Texte) enthält, ist diese Angabe Pflicht.
- **Datenschutz:** Das **Kontaktformular** ist bisher nirgends als Verarbeitungsvorgang beschrieben — weder Felder, noch Speicherort, noch Aufbewahrungsfrist. Art. 13 DSGVO ist hier nicht erfüllt.
- **Datenschutz:** **ALTCHA** ist im Kontaktformular im Einsatz (`AltchaFieldtype.php`, `kontakt.yaml`), wird aber in der Erklärung nicht genannt. Auch wenn ALTCHA datenschonend ist, verarbeitet es technisch die IP des Besuchers und ist offenlegungspflichtig (Art. 13(1)(c+e) DSGVO).
- **Datenschutz:** Die Sektion **„Termine: Calendly (optional)"** ist falsch. Im Repo gibt es **keine** Calendly-Einbindung außerhalb der Datenschutzerklärung selbst. Das ist eine Falschangabe und gehört entfernt (oder erst aktiviert, wenn Calendly tatsächlich eingebunden wird).

**Should-fix (rechtlich grenzwertig oder formal unsauber):**
- **Datenschutz:** Aufbau folgt nicht sauber Art. 13 — Speicherdauer (Art. 13(2)(a)) fehlt für die meisten Vorgänge; die Beschwerdestelle (Art. 13(2)(d)) ist nicht namentlich benannt; Erforderlichkeitshinweis (Art. 13(2)(e)) fehlt; Hinweis auf fehlende automatisierte Entscheidungsfindung (Art. 13(2)(f)) fehlt.
- **Datenschutz:** Die Überschrift „Art 14 DSGVO — Rechte der Betroffenen" ist juristisch falsch. Art. 14 betrifft Daten aus Drittquellen. Die Betroffenenrechte stehen in Art. 15–22 DSGVO, ihre Auflistungspflicht in Art. 13(2)(b).
- **Konsistenz Hetzner-Branding:** Die Datenschutz nennt korrekt Hetzner Online GmbH (Pflicht aus Art. 13(1)(e)). Marketing-Pages dürfen weiter „Deutschland" sagen — das ist juristisch sauber. Konflikt nur scheinbar; klar dokumentieren.

**Nice-to-have:**
- Impressum sollte einen Verweis auf die Datenschutzerklärung enthalten und umgekehrt.
- Telefonnummer in internationaler Schreibweise (`+49 4149 233 9823`) gemäß BNetzA-Empfehlung.
- Aufsichtsbehörde namentlich (LfD Niedersachsen) inkl. Adresse + Link.

---

## 2. Impressum-Audit (§ 5 DDG / § 18 MStV)

| # | Pflichtangabe | Status | Anmerkung |
|---|---|---|---|
| 1 | Anbieter inkl. Rechtsform | ✅ | „Ape Dev GmbH" |
| 2 | Vollständige Anschrift | ✅ | Sonnenkamp 37A, 21717 Fredenbeck, DE |
| 3 | Vertretungsberechtigter | ✅ | Alexis Peters, Geschäftsführer |
| 4 | E-Mail (Pflicht) | ✅ | `info@ape-dev.de` |
| 4 | Telefon (empfohlen) | ⚠️ | Vorhanden, aber Format `04149 233 9823` — int. Format `+49 4149 233 9823` empfohlen |
| 5 | Handelsregister + Gericht + HRB | ✅ | „Amtsgericht Tostedt, HRB 210 340" |
| 6 | USt-IdNr. (§ 27a UStG) | ✅ | DE 365 243 422 |
| 7 | Wirtschafts-IdNr. | N/A | Rollout läuft, noch nicht universell Pflicht |
| 8 | Aufsichtsbehörde | N/A | IT-Studio ist nicht zulassungspflichtig |
| 9 | Berufsbezeichnung / Kammer | N/A | Kein reglementierter Beruf |
| 10 | Link zur OS-Plattform (Art. 14 ODR-VO) | ✅ | Vorhanden, korrekte URL |
| 11 | Verbraucherschlichtung (§ 36 VSBG) | ✅ | Klarstellung „nicht bereit/verpflichtet" vorhanden |
| 12 | Inhaltlich verantwortlich (§ 18 Abs. 2 MStV) | ❌ | Fehlt — bei redaktionellen Inhalten Pflicht |
| – | Haftung für Inhalte | ⚠️ | Zitiert korrekt §§ 7–10 DDG (post-2024-Reform) — aber nutzt im Wortlaut nur „Diensteanbieter" + „Informationen", nicht „Telemedien"; Formulierung ist OK |
| – | Haftung für Links | ❌ | Fehlt — nicht zwingend, aber stark empfohlen seit BGH I ZR 39/08 |
| – | Urheberrecht | ❌ | Fehlt — nicht zwingend, aber kundenfreundlich |
| – | Platzhalter / „wird nachgetragen" | ✅ | Keine vorhanden |

---

## 3. Datenschutz-Audit (Art. 13 DSGVO + Verarbeitungsvorgänge)

### 3.1 Art. 13-Pflichtbausteine

| Pflicht aus Art. 13 DSGVO | Status | Anmerkung |
|---|---|---|
| (1)(a) Verantwortlicher + Kontakt | ✅ | Vollständig |
| (1)(b) Datenschutzbeauftragter / Begründung Ausnahme | ⚠️ | Ausnahme-Begründung schwammig — § 38 Abs. 1 BDSG sollte zitiert werden |
| (1)(c) Zwecke + Rechtsgrundlagen | ⚠️ | Nur grob; pro Verarbeitung müsste Zweck + konkrete Rechtsgrundlage stehen |
| (1)(d) Berechtigte Interessen | ⚠️ | Genannt, aber nicht je Verarbeitung verknüpft |
| (1)(e) Empfänger / Auftragsverarbeiter | ⚠️ | Hetzner ja, ALTCHA fehlt, E-Mail-Versand-Empfänger fehlt |
| (1)(f) Drittlandtransfers | ⚠️ | DPF/Calendly genannt, aber Calendly ist gar nicht im Einsatz; aktuell de-facto keine Drittlandtransfers — sollte explizit gesagt werden |
| (2)(a) Speicherdauer | ❌ | Nur bei Calendly genannt (6 Jahre); fehlt für Logs, Kontaktformular, E-Mail-Korrespondenz |
| (2)(b) Betroffenenrechte | ✅ | Liste vorhanden — Überschrift „Art. 14" ist falsch (siehe unten) |
| (2)(d) Beschwerderecht + Aufsichtsbehörde | ⚠️ | Recht genannt, Behörde nicht namentlich (LfD Niedersachsen) |
| (2)(e) Erforderlichkeit der Bereitstellung | ❌ | Fehlt vollständig |
| (2)(f) Automatisierte Entscheidungsfindung / Profiling | ❌ | Fehlt — sollte negativ festgestellt werden |
| § 25 TTDSG (Cookies / Endgerätzugriff) | ⚠️ | „Wir verwenden absolut keine Cookies" — gut, aber Bunny-Fonts-CSS ruft externe Ressource (zählt nicht als Cookie, aber als Endgerätezugriff/HTTP-Request mit IP-Übertragung — besser explizit benennen) |

### 3.2 Verarbeitungsvorgänge (jede genannt oder erwartet)

| Vorgang | Erwartet? | Status in der Erklärung | Anmerkung |
|---|---|---|---|
| Webhosting (Hetzner Online GmbH, DE) | ja | ✅ | Anbieter genannt, AVV referenziert, Datenkategorien aufgelistet |
| Server-Logs | ja | ⚠️ | Genannt, aber **Speicherdauer fehlt** (typ. 7–14 Tage) und Rechtsgrundlage (Art. 6(1)(f)) fehlt |
| Webfonts (Bunny Fonts, BunnyWay d.o.o., SI) | ja | ✅ | Korrekt — EU, keine Cookies, keine IP-Protokollierung für Tracking |
| Material Symbols Icons (Bunny Fonts) | ja | ❌ | Im Layout via `fonts.bunny.net/css?family=material-symbols-outlined` — wird durch Bunny-Fonts-Block mit abgedeckt, OK |
| Kontaktformular (`/kontakt.yaml`) | ja | ❌ | **Fehlt komplett** — Felder (Name, E-Mail, Telefon, Nachricht), Zweck, Rechtsgrundlage, Speicherort (Statamic-File-Storage auf Hetzner-Server), Aufbewahrungsfrist, Empfänger (`info@ape-dev.de`) |
| ALTCHA (Proof-of-Work-Captcha) | ja (`AltchaController.php`) | ❌ | **Fehlt komplett** — selbst-gehostet, keine Drittübertragung, aber Verarbeitung ist offenlegungspflichtig |
| E-Mail-Versand (`info@ape-dev.de`, `noreply@ape-dev.de`) | ja | ❌ | E-Mail-Provider müsste benannt werden (vermutlich Mailbox.org oder Hetzner Mail — ist im Repo nicht ersichtlich, Owner-Frage) |
| Calendly | nein (kein Code-Treffer) | ⚠️ | **Falschangabe** — im Repo nicht eingebunden, gehört entfernt |
| Cookies | nein | ✅ | Klare Negativaussage |
| Tracking / Analytics | nein | ✅ | Implizit nicht genannt — sauber, aber sollte explizit verneint werden |
| Social Plugins | nein | n/a | Nicht im Einsatz, keine Pflicht |
| Externe Videos / Maps | nein | n/a | Nicht im Einsatz |

---

## 4. Konkrete Fixes

### 4.1 Impressum

**Hinzufügen am Ende** (vor oder nach „Haftung für Inhalte"):

```
## Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV

Alexis Peters
Sonnenkamp 37A
21717 Fredenbeck

## Haftung für Links

Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.

## Urheberrecht

Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung der Ape Dev GmbH.
```

**Optional:** Telefonnummer auf `+49 4149 233 9823` umstellen (überall konsistent).

### 4.2 Datenschutzerklärung

**Ersetzen / Ergänzen** der Sektion „Art 13 DSGVO lit e + f":

```markdown
### Art. 13 Abs. 1 lit. e + f DSGVO — Empfänger und Drittlandtransfers

**Webhosting: Hetzner Online GmbH**
Industriestr. 25, 91710 Gunzenhausen, Deutschland.
Server-Standort: Deutschland. Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO geschlossen.
Verarbeitete Daten beim Seitenaufruf: IP-Adresse, Datum/Uhrzeit, Referrer, User-Agent, angefragte URL.
Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Bereitstellung und Sicherheit der Website).

**Server-Logs**
Wir speichern Zugriffslogs maximal 14 Tage. Danach werden sie automatisch gelöscht.
Zweck: IT-Sicherheit, Missbrauchserkennung. Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO.

**Cookies / Tracking / Analytics**
Wir setzen keine Cookies und kein Tracking ein. Keine Analytics-Tools, keine Pixel, keine Social-Plugins.

**Webschriften: Bunny Fonts**
Anbieter: BunnyWay d.o.o., Cesta komandanta Staneta 4A, 4520 Slovenj Gradec, Slowenien (EU).
Bunny Fonts setzt keine Cookies und protokolliert IP-Adressen ausschließlich kurzfristig zur Auslieferung der Schrift, nicht zu Tracking-Zwecken.
Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (einheitliche Darstellung der Website).

**Kontaktformular**
Verarbeitete Felder: Name, E-Mail-Adresse, Telefon (optional), Nachricht.
Zweck: Bearbeitung Ihrer Anfrage.
Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO (Beantwortung allgemeiner Anfragen).
Speicherung: Die Daten werden auf unserem Server bei Hetzner Online GmbH (Deutschland) gespeichert und parallel per E-Mail an info@ape-dev.de versandt.
Aufbewahrung: Anfragen ohne Vertragsbezug löschen wir spätestens 6 Monate nach Abschluss der Korrespondenz. Anfragen mit Vertragsbezug unterliegen den handels- und steuerrechtlichen Aufbewahrungsfristen (§ 257 HGB, § 147 AO — bis zu 10 Jahre).

**Spam-Schutz: ALTCHA**
Zur Absicherung des Kontaktformulars setzen wir ALTCHA ein (Proof-of-Work-Captcha). ALTCHA läuft selbstgehostet auf unserer Infrastruktur in Deutschland; es findet keine Übertragung an Dritte statt. Verarbeitet werden ausschließlich kurzfristig die IP-Adresse und ein technisches Challenge-Token zur Validierung.
Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Schutz vor automatisierten Anfragen).

**Drittlandtransfers**
Wir übermitteln keine personenbezogenen Daten in Drittländer außerhalb der EU/EWR.
```

**Ersetzen** der Sektion „Art 13 DSGVO lit b)":

```
### Art. 13 Abs. 1 lit. b DSGVO — Datenschutzbeauftragte*r

Wir haben keinen Datenschutzbeauftragten bestellt. Die gesetzliche Schwelle nach § 38 Abs. 1 BDSG (mindestens 20 Personen, die ständig personenbezogene Daten automatisiert verarbeiten) wird in unserem Unternehmen nicht erreicht; auch eine Pflicht nach Art. 37 Abs. 1 DSGVO besteht nicht (keine umfangreiche Profilbildung, keine Verarbeitung besonderer Kategorien als Kerntätigkeit).
Anfragen zum Datenschutz richten Sie bitte an info@ape-dev.de.
```

**Ersetzen** Überschrift „Art 14 DSGVO" → korrekt **„Art. 13 Abs. 2 lit. b DSGVO — Ihre Rechte als betroffene Person"** und am Ende ergänzen:

```
**Beschwerderecht:** Sie haben das Recht, sich bei einer Aufsichtsbehörde zu beschweren — für uns ist das die Landesbeauftragte für den Datenschutz Niedersachsen, Prinzenstraße 5, 30159 Hannover (https://lfd.niedersachsen.de).

**Erforderlichkeit der Bereitstellung (Art. 13 Abs. 2 lit. e DSGVO):** Die Angabe Ihrer Daten im Kontaktformular ist freiwillig; ohne Name, E-Mail und Nachricht können wir Ihre Anfrage allerdings nicht beantworten.

**Automatisierte Entscheidungsfindung (Art. 13 Abs. 2 lit. f DSGVO / Art. 22 DSGVO):** Es findet keine automatisierte Entscheidungsfindung einschließlich Profiling statt.
```

**Entfernen:** Die Sektion „Termine: Calendly (optional)" komplett — Calendly ist nicht eingebunden.

---

## 5. Open Questions for the Owner

1. **Calendly:** Soll Calendly tatsächlich eingebunden werden? Falls ja: Embed wo? Dann muss die Sektion bleiben (mit DPF-Referenz). Falls nein: ersatzlos streichen.
2. **E-Mail-Provider:** Wer hostet `@ape-dev.de`? Mailbox.org, Hetzner Mail, eigener SMTP, M365? Das ist ein Empfänger im Sinne von Art. 13(1)(e) und gehört in die Erklärung.
3. **Server-Log-Retention:** Wie lange laufen die Hetzner-Reverse-Proxy-/Nginx-/Varnish-Logs tatsächlich (Repo zeigt `nginx.conf` + `VarnishCacheHeaders.php`)? Vorschlag oben: 14 Tage — bestätigen oder Wert nennen.
4. **Kontaktformular-Storage:** Werden eingehende Anfragen tatsächlich auch im Statamic-Storage abgelegt (Statamic Forms tut das standardmäßig) oder nur als E-Mail weitergeleitet? Beeinflusst die Aufbewahrungsfrist.
5. **Inhaltlich verantwortlich (§ 18 MStV):** Ist Alexis Peters auch der redaktionell Verantwortliche? Vorschlag oben geht davon aus.
6. **Backup-Strategie:** Gibt es Velero-Backups (laut `security-stack.md` ja) der Server inkl. Logs/Form-Submissions? Falls ja, sollte das in der Speicherdauer berücksichtigt werden („Backups werden nach X Tagen rotiert").
7. **Newsletter / Marketing-Mails:** Aktuell nicht erwähnt — wird das je gesendet? Falls ja: separater Abschnitt mit Double-Opt-In nötig.

---

## 6. Referenzen (zitierte Normen)

- **DDG** (Digitale-Dienste-Gesetz, 2024, ersetzt TMG): § 5 (Anbieterkennzeichnung), §§ 7–10 (Verantwortlichkeit der Diensteanbieter)
- **MStV** (Medienstaatsvertrag): § 18 Abs. 2 (inhaltlich Verantwortlicher bei journalistisch-redaktionellen Angeboten)
- **DSGVO** (VO (EU) 2016/679): Art. 6 Abs. 1 lit. b und f (Rechtsgrundlagen), Art. 12 (Transparenz), Art. 13 Abs. 1 + 2 (Informationspflichten), Art. 15–22 (Betroffenenrechte), Art. 22 (automatisierte Entscheidungen), Art. 28 (AVV), Art. 37 (Pflicht-DSB), Art. 44 ff. (Drittlandtransfers)
- **BDSG** (2018): § 38 Abs. 1 (Schwelle für Pflicht-DSB in Deutschland: ständig ≥ 20 Personen automatisierte Verarbeitung)
- **TTDSG** (Telekommunikation-Telemedien-Datenschutzgesetz, in Kraft seit 01.12.2021): § 25 (Endgerätezugriff / Cookie-Einwilligung)
- **VSBG** (Verbraucherstreitbeilegungsgesetz): § 36 (Informationspflicht zur Verbraucherschlichtung)
- **ODR-VO** (VO (EU) 524/2013): Art. 14 (Pflicht-Link zur OS-Plattform)
- **HGB** § 257 / **AO** § 147 (handels- und steuerrechtliche Aufbewahrungsfristen)
- **BGH** I ZR 39/08 („AnyDVD") — Linkhaftung
