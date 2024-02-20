import {type Metadata} from 'next'
import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {GridList, GridListItem} from '@/components/GridList'
import {PageIntro} from '@/components/PageIntro'
import {SectionIntro} from '@/components/SectionIntro'
import {Button} from "@/components/Button";

function Points() {
    return (
            <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
                <SectionIntro
                        eyebrow="Vorteile"
                        title="Unsere Dienstleistungen der DSGVO"
                        invert
                >
                </SectionIntro>
                <Container className="mt-16">
                    <GridList maxGridCols={2}>
                        <GridListItem title="DSGVO-Konformitätsprüfung" invert> <br />
                            Überprüfung Ihrer bestehenden Prozesse und Systeme. <br />
                            Identifikation von Datenschutzrisiken. <br />
                            Entwicklung von Maßnahmenplänen zur Risikominimierung.
                        </GridListItem>
                        <GridListItem title="Datenschutzschulungen" invert> <br />
                            Interaktive Workshops für Mitarbeiter. <br />
                            Sensibilisierung für Datenschutz und Datensicherheit. <br />
                            Schulungsmaterialien, die auf Ihr Unternehmen zugeschnitten sind.
                        </GridListItem>
                        <GridListItem title="Datenschutzberatung" invert> <br />
                            Fachkundige Beratung zu datenschutzrechtlichen Fragen. <br />
                            Unterstützung bei der Umsetzung von Datenschutzmaßnahmen. <br />
                            Laufende Betreuung und Beratung durch zertifizierte Datenschutzexperten.
                        </GridListItem>
                        <GridListItem title="Datenschutzmanagement" invert> <br />
                            Erstellung und Pflege von Verfahrensverzeichnissen. <br />
                            Unterstützung bei der Erstellung von Datenschutzerklärungen. <br />
                            Regelmäßige Datenschutz-Audits
                        </GridListItem>
                    </GridList>
                </Container>
            </div>
    )
}

export const metadata: Metadata = {
    title: 'Dateschutzbeauftragter',
    description:
            'Mit einem externen Datenschutzbeauftragten von Ape Dev GmbH erfüllen Sie die Anforderungen der DSGVO und schützen Ihr Unternehmen vor Bußgeldern, in der Regel günstiger als ein interner Datenschutzbeauftragter.',
}

export default async function About() {
    return (
            <>
                <PageIntro eyebrow="Externer Datenschutzbeauftragter"
                           title="Sicherheit und Compliance für Ihr Unternehmen">
                    <div className="mt-10 space-y-6 text-base">
                        <p>
                            Schützen Sie Ihre Daten und wahren Sie die Privatsphäre Ihrer Kunden mit Ape Dev GmbH
                        </p>
                        <p className="mt-6">
                            In der heutigen digitalen Welt ist der Schutz personenbezogener Daten wichtiger denn je. Mit Ape Dev GmbH als Ihrem externen Datenschutzbeauftragten stellen Sie sicher, dass Ihr Unternehmen die strengen Anforderungen der Datenschutz-Grundverordnung (DSGVO) und anderer relevanter Gesetze nicht nur erfüllt, sondern übertrifft. Unsere Expertise sorgt für die nötige Sicherheit, damit Sie sich voll und ganz auf Ihr Kerngeschäft konzentrieren können.
                        </p>
                        <p className="mt-6">
                            Verstöße gegen den Datenschutz können zu hohen Bußgeldern bis zu 20 Millionen Euro oder 4% des weltweiten Jahresumsatzes führen. Mit Ape Dev GmbH als Ihrem externen Datenschutzbeauftragten vermeiden Sie diese Risiken und schützen Ihr Unternehmen vor finanziellen Schäden.
                        </p>
                        <p className="flex space-evenly gap-12">
                            <Button href="/konktakt">
                                jetzt konsultieren und Bußgelde vermeiden
                            </Button>
                        </p>
                    </div>
                </PageIntro>

                <Points></Points>

                <ContactSection/>
            </>
    )
}
