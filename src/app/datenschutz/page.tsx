import { type Metadata } from 'next'
import { PageIntro } from '@/components/PageIntro'

export const metadata: Metadata = {
  title: 'Privacy Policy - Ape Dev',
  description: 'Datenschutzerklärung der Ape Dev GmbH',
}

export default async function Privacy() {
  return (
    <>
      <PageIntro eyebrow="Datenschutz" title="Datenschutzerklärung Ape Dev GmbH">

        <div className="border-b border-gray-200 pb-5 mb-6">
          <p>
            Willkommen bei der Datenschutzerklärung der Ape Dev GmbH.<br/>
            Wir erklären Schritt für Schritt, wie wir eure Daten schützen, warum wir sie verarbeiten
            und welche Rechte ihr habt. Unser Ziel: Klar, verständlich und ein wenig locker.
          </p>
          <p className="mt-6">
            Laut <b>Art. 12 DSGVO</b> müssen Informationen über die Verarbeitung personenbezogener Daten in präziser, transparenter,
            verständlicher und leicht zugänglicher Form übermittelt werden.
          </p>
          <p className="mt-6">
            Bei Fragen zu dieser Datenschutzerklärung kontaktiert uns gerne per E-Mail (info@ape-dev.de) oder über das Kontaktformular.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-5 mb-6">
          <h3 className="text-2xl">Einleitung</h3>
          <p>Gilt für die folgenden Domains:</p>
          <ul className="mx-6 bg-gray-200 py-2 px-4 rounded shadow-2xl max-w-sm">
            <li>ape-dev.de</li>
            <li>wissen.ape-dev.de</li>
            <li>kurse.ape-dev.de</li>
          </ul>
          <p className="mt-6">
            Hauptaufgabe: Informationsbeschaffung und -vermittlung. Wir behandeln eure personenbezogenen Daten vertraulich
            und entsprechend der gesetzlichen Datenschutzvorschriften.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-5 mb-6">
          <h3 className="text-2xl">Art 13 DSGVO</h3>
          <p>
            Auch wenn ihr noch nichts eingetragen habt, verarbeiten wir bestimmte Daten wie IP-Adressen, da diese laut EuGH personenbezogen sind.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-5 mb-6">
          <h4 className="text-2xl">Art 13 DSGVO lit a) - Verantwortlicher</h4>
          <ul className="mx-6 bg-gray-200 py-2 px-4 rounded shadow-2xl max-w-sm">
            <li>Ape Dev GmbH</li>
            <li>Sonnenkamp 37A</li>
            <li>21717 Fredenbeck, Deutschland</li>
            <li>Tel.: 04149 233 9823</li>
            <li>E-Mail: info@ape-dev.de</li>
            <li>Vertretungsberechtigt: Alexis Peters</li>
          </ul>
        </div>

        <div className="border-b border-gray-200 pb-5 mb-6">
          <h4 className="text-2xl">Art 13 DSGVO lit b) - Datenschutzbeauftragte*r</h4>
          <p>
            Wir benötigen keinen internen Datenschutzbeauftragten, da wir ein kleines Unternehmen sind und keine vollautomatische Verarbeitung durchführen.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-5 mb-6">
          <h4 className="text-2xl">Art 13 DSGVO lit c) - Zwecke und Rechtsgrundlagen</h4>
          <ul className="mx-6 bg-gray-200 py-2 px-8 rounded shadow-2xl list-disc">
            <li>Beantwortung von Anfragen und Mitteilungen</li>
            <li>Vorvertragliche Maßnahmen / Kommunikation per E-Mail oder Formular (Art. 6 Abs. 1 lit. b DSGVO)</li>
          </ul>
          <p className="mt-6">Rechtsgrundlage: Art. 6 Abs. 1 lit. b und f DSGVO (berechtigtes Interesse).</p>
        </div>

        <div className="border-b border-gray-200 pb-5 mb-6">
          <h4 className="text-2xl">Art 13 DSGVO lit d) - Berechtigte Interessen</h4>
          <ul className="mx-6 bg-gray-200 py-2 px-8 rounded shadow-2xl list-disc">
            <li>Kontaktaufnahme und Kundenanfragen bearbeiten</li>
            <li>Netzwerk- und Informationssicherheit</li>
            <li>Betrugsprävention</li>
          </ul>
          <p className="mt-6">
            Widerspruch möglich: per E-Mail an info@ape-dev.de.
          </p>
        </div>

        <div className="border-b border-gray-200 pb-5 mb-6">
          <h4 className="text-2xl">Art 13 DSGVO lit e + f - Empfänger und Drittlandtransfers</h4>
          <div className="mx-6 bg-gray-200 py-2 px-8 rounded shadow-2xl grid grid-cols-3 md:grid-cols-4 gap-8">
            <TableRow
              topic="Hosting: Github Pages"
              data={["IP-Adresse", "Browserdaten", "Datum und Uhrzeit des Zugriffs", "Geräte- und Browsereinstellungen", "Betriebssystem", "Referrer-URL"]}
            >
              Statische Website-Auslieferung. Daten in den USA, auf Grundlage von Standardvertragsklauseln (SCC). <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">GitHub Datenschutzerklärung</a>
            </TableRow>
            <TableRow
              topic="CDN: Cloudflare"
              data={["IP-Adresse", "Browserdaten", "Datum und Uhrzeit des Zugriffs", "Geräte- und Browsereinstellungen", "Betriebssystem", "Referrer-URL"]}
            >
              Performance & Sicherheit. Daten ggf. in Drittländern auf Basis von SCCs. <a href="https://www.cloudflare.com/privacypolicy/">Cloudflare Datenschutzerklärung</a>
            </TableRow>
            <TableRow topic="Cookies" data={['keine']}>Wir verwenden absolut keine Cookies.</TableRow>
            <TableRow
              topic="Videos: YouTube"
              data={["IP-Adresse", "Browserdaten", "Datum und Uhrzeit des Zugriffs", "Geräte- und Browsereinstellungen", "Betriebssystem", "Referrer-URL", "Localstorage"]}
            >
              Eingebettete YouTube-Videos im erweiterten Datenschutzmodus. Daten ggf. in den USA. <a href="https://policies.google.com/privacy?hl=de">YouTube Datenschutzerklärung</a>
            </TableRow>
            <TableRow topic="Logs" data={['IP-Adresse']}>
              Statistische Auswertung zur Sicherheit. Keine Weitergabe an Dritte.
            </TableRow>
            <TableRow topic="Termin: Calendly" data={['E-Mail-Adresse']}>
              Termine werden auf calendly.com gespeichert. Daten in den USA über das EU-U.S. Data Privacy Framework (DPF) gesichert. 6 Jahre Aufbewahrung von relevanten Geschäftsinformationen.
            </TableRow>
          </div>
        </div>

        <div className="border-b border-gray-200 pb-5 mb-6">
          <h4 className="text-2xl">Art 14 DSGVO - Rechte der Betroffenen</h4>
          <ul className="mx-6 bg-gray-200 py-2 px-8 rounded shadow-2xl list-disc">
            <li>Recht auf Auskunft</li>
            <li>Recht auf Berichtigung</li>
            <li>Recht auf Löschung</li>
            <li>Recht auf Einschränkung der Verarbeitung</li>
            <li>Recht auf Datenübertragbarkeit</li>
            <li>Recht auf Widerspruch</li>
            <li>Recht auf Beschwerde bei einer Aufsichtsbehörde</li>
          </ul>
        </div>
      </PageIntro>
    </>
  )
}

const TableRow = ({ topic, data, children }: { topic: string; data: string[]; children: any }) => {
  return (
    <>
      <div className="text-sm font-medium leading-6 text-gray-900">{topic}</div>
      <ul className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0 list-disc">
        {data.map((d, i) => (
          <li key={`${topic}-${i}`}>{d}</li>
        ))}
      </ul>
      <div className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0 md:col-span-2">{children}</div>
    </>
  )
}
