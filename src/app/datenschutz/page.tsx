import {type Metadata} from 'next'
import {PageIntro} from '@/components/PageIntro'

export const metadata: Metadata = {
    title: 'Privacy poliy - Ape Dev',
    description:
            'Privacy Policy for Ape Dev GmbH',
}

export default async function Privacy() {

    return (
            <>
                <PageIntro
                        eyebrow="Datenschutz"
                        title="Datenschutzerklärung Ape Dev GmbH"
                >

                    <div className="border-b border-gray-200 pb-5 mb-6">
                        <p>
                            War eigentlich klar dass man sich hier wiedersieht. <br/>
                            Natürlich schaut ihr bei einem Datnschutzexperten auch auf die eigene
                            Datenschutzerklärung. <br/>
                            Wäre ja auch komisch wenn die nicht stimmen würde. Daher hier eine etwas andere Form der
                            Datenschutzerklärung
                            die euch vielleicht auch hilft eure eigene zu schreiben und euch sogar ein wenig zum
                            schmunzeln bringt.
                        </p>

                        <p className="mt-6">Erstmal zum Gesetztestext und der Form dieser Datenschutzerklärung, laut <b>Art.
                            12 DSGVO</b> heißt es nämlich</p>
                        <p className="block w-full rounded-md border-2 p-4 text-gray shadow-sm ring-1 ring-inset bg-white m-4">[...]
                            die sich auf die Verarbeitung beziehen, in präziser, transparenter, verständlicher und
                            leicht zugänglicher Form in einer klaren und einfachen Sprache zu übermitteln;</p>
                        <p>
                            Hand aufs Herz, wer von euch hat schonmal eine Datenschutzerklärung gelesen und
                            verstanden? <br/>
                            Wir gehen hier Schritt für Schritt Absatz für Absatz durch und erklären euch was wir damit
                            meinen und warum wir das so machen.
                        </p>

                        <p className="mt-6">Wenn ihr Fragen zur beschaffenheit UNSERER Datenschutzerklärung habt,
                            kontaktiert uns mit den unten stehenden Kontaktdaten</p>
                    </div>

                    <div className="border-b border-gray-200 pb-5 mb-6">
                        <h3 className="text-2xl">Einleitung</h3>
                        <p>Dies ist die Datenschutzerklärung der Domains</p>
                            <ul className="mx-6 bg-gray-200 py-2 px-4 rounded shadow-2xl max-w-sm">
                                <li>ape-dev.de</li>
                                <li>wissen.ape-dev.de</li>
                                <li>kurse.ape-dev.de</li>
                            </ul>
                        <p>
                            deren Hauptaufgabe in der Informationsbeschaffung und -vermittlung liegt. Wir nehmen den
                            Schutz
                            eurer persönlichen Daten sehr ernst. Wir behandeln eure personenbezogenen Daten vertraulich
                            und
                            entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
                        </p>
                        <p className="mt-6">
                            Diese Datenschutzerklärung ist nur für die oben genannten Domains gültig.
                            Für andere Domains, offline-aktivitäten oder
                            persönliche Gespräche, Vertragsgespräche und Beratungen können andere
                            Datenschutzbestimmungen gelten.
                        </p>
                    </div>

                    <div className="border-b border-gray-200 pb-5 mb-6">
                        <h3 className="text-2xl">Art 13 DSGVO</h3>
                        <p>Artikel 13 gibt ne ganze menge Dinge an, die wir euch mitteilen müssen. <br/>
                            nämlich alle personenbezogenen Daten die wir von euch speichern. <br/>
                            Da könnte man fast denken, hey, ich hab noch nichts eingetragen, also speichert ihr auch
                            nichts von mir. <br/>
                        </p>
                        <p>
                            <b>FALSCH</b>
                        </p>
                        <p>
                            Laut Gerichtsbeschluss des EuGH sind auch IP-Adressen personenbezogene Daten. <br/>
                            Also jetzt nochmal von vorn. Hiermit teilen wir hochoffiziell folgendes mit:
                        </p>
                    </div>
                    <div className="border-b border-gray-200 pb-5 mb-6">
                        <h4 className="text-2xl">Art 13 DSGVO lit a)</h4>
                        <p>Name und Kontaktdaten des Verantwortlichen</p>
                        <p>
                            Verantwortlich für die Datenverarbeitung auf dieser Website ist:
                        </p>
                        <ul className="mx-6 bg-gray-200 py-2 px-4 rounded shadow-2xl max-w-sm">
                            <li>Ape Dev GmbH</li>
                            <li>Birkenweg 5F</li>
                            <li>21717 Deinste</li>
                            <li>Deutschland</li>
                            <li>Tel.: 04149 233 9823</li>
                            <li>E-Mail: info@ape-dev.de</li>
                            <li>Vertretungsberechtigt: Alexis Peters</li>
                        </ul>
                        <p>
                            Das war nicht so schwer, oder? <br/> weitere Informationen bekommt ihr wenn nötig im, auch
                            verpflichtenden Impressum.
                        </p>
                    </div>

                    <div className="border-b border-gray-200 pb-5 mb-6">
                        <h4 className="text-2xl">Art 13 DSGVO lit b)</h4>
                        <p>Datenschutzbeauftragte*r</p>
                        <p>
                            Kurz gesagt: haben wir nicht, brauchen wir nicht. <br/>
                            Wir sind ein kleines Unternehmen und haben die verpflichtende Mitarbeiteranzahl nicht
                            erreicht und verarbeiten auch nicht vollautomatisch daten. <br/>
                            Damit sind wir erstmal fein raus. <br/>
                            Übrigens: Ist der Datenschutzbeauftragte*r ein Geschäftsführer oder in leitender Position
                            einer anderen Funktion, könnte es zu einem Interessenkonflikt kommen. <br/>
                            Das wäre dann nicht so gut. <br/> Ist das bei euch der Fall, dann konsultiert am besten
                            einen externen Datenschutzbeauftragten, zum beispiel uns.
                        </p>
                    </div>
                    <div className="border-b border-gray-200 pb-5 mb-6">
                        <h4 className="text-2xl">Art 13 DSGVO lit c)</h4>
                        <p>Zwecke und Grundlage der Datenverarbeitung</p>
                        <p>
                            Leider müsssen wir euch mitteilen, zu welchem <b>Zweck</b> wir eure Daten verarbeiten und
                            auf welcher rechtlichen Grundlage wir das tun.
                        </p>
                        <p className="py-6">
                            Das ist im Moment noch ganz einfach
                        </p>
                        <ul className="mx-6 bg-gray-200 py-2 px-8 rounded shadow-2xl list-disc">
                            <li className="py-2">Zwecke der Datenverarbeitung</li>
                            <li className="py-2">Um Ihnen Informationen über unsere Produkte und Dienstleistungen
                                bereitzustellen und um Marketingmaßnahmen durchzuführen.
                            </li>
                            <li className="py-2">Um auf Ihre Anfragen und Mitteilungen zu reagieren und um mit Ihnen in
                                Kontakt zu treten.
                            </li>
                        </ul>
                        <p className="py-6">
                            Rechtliche Grundlage ist Artikel 6 Absatz 1 lit. f DSGVO, nämlich unser &quot;berechtigtes
                            Interesse&quot; an der Verarbeitung der Daten. <br/>
                        </p>
                    </div>

                    <div className="border-b border-gray-200 pb-5 mb-6">
                        <h4 className="text-2xl">Art 13 DSGVO lit d)</h4>
                        <p>Berechtigte Interessen </p>
                        <p>
                            Sobald man die Datenerhebung auf Artikel 6 Absatz 1 lit. f DSGVO stützt, muss man die
                            berechtigten Interessen angeben, die die Verarbeitung rechtfertigen. Das sind bei uns:
                        </p>

                        <ul className="mx-6 bg-gray-200 py-2 px-8 rounded shadow-2xl  list-disc">
                            <li className="py-2">Direktmarketing: Die Verarbeitung personenbezogener Daten zum Zwecke
                                der Direktwerbung kann als eine einem berechtigten Interesse dienende Verarbeitung
                                betrachtet werden, solange die betroffene Person ihr Widerspruchsrecht (Art. 21 DSGVO)
                                nicht ausgeübt hat.
                            </li>
                            <li className="py-2">Netzwerk- und Informationssicherheit: Zum Schutz vor Cyberangriffen
                                oder Datenlecks kann die Verarbeitung personenbezogener Daten erforderlich sein, um die
                                Sicherheit des Netzwerks und der Informationen des Verantwortlichen zu gewährleisten.
                            </li>
                            <li className="py-2">Betrugsprävention: Die Verarbeitung kann notwendig sein, um Betrug oder
                                rechtswidriges Verhalten zu verhindern und aufzudecken.
                            </li>
                        </ul>
                        <p className="py-6">An dieser Stelle müssen wir erwähnen dass du jederzeit das Recht hast einen
                            Widerspruch gegen die weitere Verarbeitung einlegen kannst, willst du das tun, dann schließe
                            einfach den Browser, denn wir haben keine Möglichkeit dich mit Content zu beliefern ohne
                            deine IP-Addresse zu kennen</p>

                    </div>


                    <div className="border-b border-gray-200 pb-5 mb-6">
                        <h4 className="text-2xl">Art 13 DSGVO lit e + f</h4>
                        <p>Empfänger und personenbezogene Daten </p>
                        <p>
                            Jetzt gehts ans eingemachte. <br/>
                            Hier müssen wir euch mitteilen, an wen wir eure Daten weitergeben und welche Daten das
                            sind. <br/>
                            Besonderer Augenmerk liegt bei Empfängern in Drittländern, also Ländern außerhalb der EU
                            (bis auf Ausnahmen). Denn diese haben, laut DSGVO, ein geringeres Datenschutzniveau als die
                            EU. Dort könnte es z.b. legal sein eure Daten frei hin und her-zu-schicken und das wollen
                            wir nicht.
                            Daher müssen wir euch mitteilen welche Daten wir an wen weitergeben und ob diese in
                            Drittländern verarbeitet werden, und falls ja, wie diese besonders geschützt sind um dem
                            EU-Datenschutzniveau zu entsprechen.
                        </p>
                        <div className="mx-6 bg-gray-200 py-2 px-8 rounded shadow-2xl grid grid-cols-3 md:grid-cols-4 gap-8">
                            <TableRow
                                    topic="Hosting: Github Pages"
                                    data={"IP-Adresse, Browserdaten, Datum und Uhrzeit des Zugriffs, Geräte- und Browsereinstellungen, Betriebssystem, Referrer-URL".split(",")
                                    }>Diese Daten sind technisch notwendig um HTML Seiten auszuliefern. Wir verwenden Github Pages als Hoster für unseren Webcontent, der in statischer Form vorliegt und ausgeliefert wird. Github Pages wird in den USA gehostet. Github Pages ist zertifiziert mit u.a. ISO-27001 und dem Privacy-Shield-Framework. Githubs Datenschutzerklärung finden sie <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">hier</a></TableRow>
                        <TableRow
                                    topic="CDN: Cloudflare"
                                    data={"IP-Adresse, Browserdaten, Datum und Uhrzeit des Zugriffs, Geräte- und Browsereinstellungen, Betriebssystem, Referrer-URL".split(",")
                                    }>
                            Um die Ladezeiten unserer Website zu optimieren und die Sicherheit zu erhöhen, verwenden wir Cloudflare als CDN. Ein CDN ist ein globales Netz aus Servern, der den Inhalt unserer Seiten zwischenspeichert um ihn schneller auszuliefern, es kann also sein, wenn auch nicht zwingend, dass die Daten Drittländer passieren. Cloudflare ist zertifiziert mit u.a. ISO-27001 und dem Privacy-Shield-Framework. Cloudflares Datenschutzerklärung finden sie <a href="https://www.cloudflare.com/privacypolicy/">hier</a>
                        </TableRow>
                            <TableRow
                                    topic="Cookies"
                                    data={"keine".split(",")
                                    }>
                                Wir verwenden absolut keine Cookies
                            </TableRow>
                            <TableRow
                                    topic="Videos: YouTube"
                                    data={"IP-Adresse, Browserdaten, Datum und Uhrzeit des Zugriffs, Geräte- und Browsereinstellungen, Betriebssystem, Referrer-URL, Localstorage".split(",")
                                    }>
                                Teilweise verwenden wir eingebettete Videos von YouTube. YouTube ist ein Dienst von Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA. Die eingebetteten Videos sind im erweiterten Datenschutzmodus eingebettet, das bedeutet, dass keine Cookies gesetzt werden, bis das Video abgespielt wird. Wenn das Video abgespielt wird, kann es sein, dass Daten an Google LLC übertragen werden. Google LLC ist zertifiziert mit u.a. ISO-27001 und dem Privacy-Shield-Framework. Googles Datenschutzerklärung finden sie <a href="https://policies.google.com/privacy?hl=de">hier</a><br />
                            </TableRow>
                            <TableRow
                                    topic="Logs"
                                    data={"IP-Adresse".split(",")
                                    }>
                                Logs, die ihre IP-Addresse beinhalten, werden teilweise von unserem Hoster Github Pages und CDN Cloudflare gespeichert. Logs werden nur statistisch ausgewertet und dienen der Sicherheit. Die Daten werden nicht an Dritte weitergegeben. Githubs Datenschutzerklärung finden sie <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement">hier</a> und Cloudflares Datenschutzerklärung finden sie <a href="https://www.cloudflare.com/privacypolicy/">hier</a>
                            </TableRow>
                            <TableRow
                                    topic="Termin: Calendly"
                                    data={"E-Mail-Addresse".split(",")
                                    }>
                                Bei einer Buchung eines Termins über Calendly werden die Daten an Calendly weitergegeben. Calendly ist ein Dienst von Calendly LLC, 3423 Piedmont Road NE, Atlanta, GA 30305, USA. Calendly LLC ist zertifiziert mit u.a. ISO-27001 und dem Privacy-Shield-Framework. Calendlys Datenschutzerklärung finden sie <a href="https://calendly.com/de/pages/privacy">hier</a>.
                                Dieser Termin wird in unserem Outlook Exchange Kalender eingetragen und dort gespeichert. Microsoft ist zertifiziert mit u.a. ISO-27001 und dem Privacy-Shield-Framework. Microsofts Datenschutzerklärung finden sie <a href="https://privacy.microsoft.com/de-de/privacystatement">hier</a>
                                Sollten sie weitere Informationen eingetragen haben, die relevante Geschäftsinformationen darstellen, sind wir verpflichtet diesen Termin, oder eine Kopie davon 6 Jahre aufzubewahren. Diese Daten werden nicht an Dritte weitergegeben.
                            </TableRow>
                            <TableRow topic="Wissensdatenkbank" data={"IP-Adresse, Browserdaten, Datum und Uhrzeit des Zugriffs, Geräte- und Browsereinstellungen, Betriebssystem, Referrer-URL".split(",")}>
                                Die Wissensdatenbank ist ein Produkt der Eniston Knowledge Base, ivy.mayhem® GmbH, Westenberg 9, 27432 Bremervörde Deutschland. Die Daten werden in Deutschland verarbeitet. Enistons Datenschutzerklärung finden sie <a href="https://www.eniston.io/privacy-policy">hier</a>
                            </TableRow>
                            <TableRow
                                    topic="Chatbot ODIN AI"
                                    data={"IP-Addresse, benutzereingegebene Daten".split(",")
                                    }>
                                Odin AI ist ein Large Language Model von ODIN AI, Hauptsitz Kalifornien, Los Angeles, USA. Die Daten werden in den USA verarbeitet. ODIN AI ist zertifiziert mit u.a. ISO-27001. ODIN AI Datenschutzerklärung finden sie <a href="https://www.getodin.ai/privacy-policy">hier</a>
                            </TableRow>

                        </div>
                    </div>
                    <div className="border-b border-gray-200 pb-5 mb-6">
                        <h4 className="text-2xl">Art 14 DSGVO</h4>
                        <p>
                            Jetzt kommt nochmal ein Riesen haufen Text, der euch belehren soll welche Rechte ihr habt wenn ihr eure Daten bei uns hinterlasst. Wir versuchen das so einfach wie möglich zu halten, aber es ist halt ein Gesetz und das ist halt kompliziert.
                        </p>
                        <p className="mt-6">
                            <strong>1. Recht auf Auskunft</strong><br />
                            Ihr habt das Recht zu erfahren, welche Daten wir von euch gespeichert haben. Das ist euer gutes Recht und wir werden euch diese Daten auch zur Verfügung stellen. Dafür müsst ihr uns nur eine E-Mail schreiben.
                        </p>
                        <p className="mt-6">
                            <strong>2. Recht auf Berichtigung</strong><br />
                            Ihr habt das Recht, dass wir eure Daten berichtigen, oder vervollständigen. Das ist euer gutes Recht und wir werden das auch tun. Dafür müsst ihr uns nur eine E-Mail schreiben.
                        </p>
                        <p className="mt-6">
                            <strong>3. Recht auf Löschung</strong><br />
                            Ihr habt das Recht, dass wir eure Daten löschen. Das ist euer gutes Recht und wir werden das auch tun. Dafür müsst ihr uns nur eine E-Mail schreiben.
                        </p>
                        <p className="mt-6">
                            <strong>4. Recht auf Einschränkung der Verarbeitung</strong><br />
                            Ihr habt das Recht, dass wir die Verarbeitung eurer Daten einschränken. Das ist euer gutes Recht und wir werden das auch tun. Dafür müsst ihr uns nur eine E-Mail schreiben.
                        </p>
                        <p className="mt-6">
                            <strong>5. Recht auf Datenübertragbarkeit</strong><br />
                            Ihr habt das Recht, dass wir euch eure Daten in einem maschinenlesbaren Format zur Verfügung stellen. Das ist euer gutes Recht und wir werden das auch tun. Dafür müsst ihr uns nur eine E-Mail schreiben.
                        </p>
                        <p className="mt-6">
                            <strong>6. Recht auf Widerspruch</strong><br />
                            Ihr habt das Recht, dass wir die Verarbeitung eurer Daten einstellen. Das ist euer gutes Recht und wir werden das auch tun. Dafür müsst ihr uns nur eine E-Mail schreiben.
                        </p>
                        <p className="mt-6">
                            <strong>7. Recht auf Beschwerde bei einer Aufsichtsbehörde</strong><br />
                            Ihr habt das Recht, dass ihr euch bei einer Aufsichtsbehörde beschweren könnt.
                        </p>
                    </div>
                </PageIntro>
            </>
    )

}

const TableRow = ({
                      topic,
                      data,
                      children
                  }: { topic: string, data: string[], children: any }) => {
    return <>
        <div className="text-sm font-medium leading-6 text-gray-900">{topic}</div>
        <ul className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0 list-disc">
            {data.map((d, i) => <li key={`${topic}-${i}`}>{d}</li>)}
        </ul>
        <div className="mt-1 text-sm leading-6 text-gray-700 sm:mt-0 md:col-span-2">
            {children}
        </div>
    </>

}
