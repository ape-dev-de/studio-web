import {type Metadata} from 'next'

import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {FadeIn} from '@/components/FadeIn'
import {GridList, GridListItem} from '@/components/GridList'
import {GridPattern} from '@/components/GridPattern'
import {PageIntro} from '@/components/PageIntro'
import {SectionIntro} from '@/components/SectionIntro'
import {StylizedImage} from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop@0.5x.webp'
import imageMeeting from '@/images/meeting@0.5x.webp'
import imageWhiteboard from '@/images/whiteboard@0.5x.webp'
import {Section} from "@/components/Section";

function Discover() {
    return (
            <Section title="Entdecken" image={{src: imageWhiteboard}}>
                <div className="space-y-6 text-base text-neutral-600">
                    <p>
                        <strong>Definition:&nbsp;</strong>

                        In dieser ersten Phase tauchen wir tief in das Verständnis der einzigartigen Bedürfnisse und
                        Ziele Ihrer Organisation ein.


                    </p>
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Zuhören und Lernen:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Wir treten in den Dialog mit Ihren Schlüsselakteuren, um Einsichten,
                                Herausforderungen und Bestrebungen bezüglich der Digitalisierung zu sammeln
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Bewertung:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">Eine
                                gründliche Analyse Ihrer aktuellen Systeme und Prozesse, um Schmerzpunkte und
                                Chancen für Verbesserungen zu identifizieren
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Persona-Mapping:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Wir erstellen Kundenpersonas, um Ihre Endnutzer besser zu verstehen und
                                sicherzustellen, dass Lösungen auf ihre Bedürfnisse zugeschnitten sind.
                            </dd>
                        </div>
                    </dl>
                    <p>
                        <strong>Ergebnis:&nbsp;</strong>
                        Ein umfassendes Verständnis Ihrer Anforderungen an die Digitalisierung, der Bedürfnisse der
                        Nutzer und ein klarer Fahrplan für die nächsten Schritte.
                    </p>
                </div>

            </Section>
    )
}

function Build() {
    return (
            <Section title="Gemeinsames Entwickeln & Gestalten" image={{src: imageLaptop, shape: 1}}>
                <div className="space-y-6 text-base text-neutral-600">
                    <p>
                        <strong>Definition:&nbsp;</strong>
                        In dieser kollaborativen Phase arbeiten wir eng mit Ihrem Team zusammen, um digitale
                        Lösungen zu entwerfen und zu entwickeln, die Ihren Zielen entsprechen.
                    </p>
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Co-Creation-Workshops:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Gemeinsame Brainstorming-Sitzungen, um Digitalisierungsinitiativen zu entwickeln
                                und zu priorisieren
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Agiles Entwickeln:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Unter Verwendung agiler Methoden entwickeln und iterieren wir Lösungen in
                                kleinen, kundenzentrierten Schritten.
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Nutzertests:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Regelmäßige Nutzertests und Feedbackschleifen, um sicherzustellen, dass die
                                entwickelten Lösungen den Erwartungen der Nutzer entsprechen.
                            </dd>
                        </div>
                    </dl>
                    <p>
                        <strong>Ergebnis:&nbsp;</strong>
                        Ein Satz von digitalen Lösungen, die kundenzentriert sind, speziell auf Ihre Bedürfnisse
                        zugeschnitten und iterativ für kontinuierliche Verbesserungen entwickelt wurden.
                    </p>
                </div>
            </Section>
    )
}

function Deliver() {
    return (
            <Section title="Implementieren & Weiterentwickeln" image={{src: imageMeeting, shape: 2}}>
                <div className="space-y-6 text-base text-neutral-600">
                    <p>
                        <strong>Definition:&nbsp;</strong>
                        In der letzten Phase konzentrieren wir uns auf die Implementierung und kontinuierliche
                        Verbesserung, um sicherzustellen, dass Ihre Digitalisierungsinitiativen sich mit den sich
                        ändernden Bedürfnissen weiterentwickeln.
                    </p>
                    <dl className="divide-y divide-gray-100">
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Implementierung &
                                Schulung:
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Reibungslose Einführung von Lösungen, begleitet von Nutzerschulungen und
                                Unterstützung.
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Überwachung &
                                Optimierung:
                            </dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Kontinuierliche Überwachung der Systemleistung und Nutzerrückmeldungen, um
                                datengesteuerte Verbesserungen vorzunehmen.
                            </dd>
                        </div>
                        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                            <dt className="text-sm font-medium leading-6 text-gray-900">Roadmap-Entwicklung:</dt>
                            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                Gemeinsame Erstellung einer Roadmap für zukünftige Digitalisierungsinitiativen,
                                um Ihre Organisation anpassungsfähig und zukunftssicher zu machen.
                            </dd>
                        </div>
                    </dl>
                    <p>
                        <strong>Ergebnis:&nbsp;</strong>
                        Erfolgreich implementierte, kundenzentrierte digitale Lösungen, die sich über die Zeit
                        weiterentwickeln und mit Ihren Geschäftszielen und der sich ständig verändernden digitalen
                        Landschaft im Einklang bleiben.
                    </p>
                </div>
            </Section>
    )
}

function Values() {
    return (
            <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
                <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-gradient-to-b from-neutral-50">
                    <GridPattern
                            className="absolute inset-0 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_40%,transparent_50%)]"
                            yOffset={-270}
                    />
                </div>

                <SectionIntro
                        eyebrow="Unsere Werte"
                        title="Zuverlässigkeit und Innovation in Balance"
                >
                    <p>
                        Unsere Werte bei Ape Dev GmbH drehen sich um
                        Exzellenz, Zusammenarbeit und Innovation. Wir wahren Integrität, stellen Kundenorientierung in
                        den Vordergrund und bewahren Anpassungsfähigkeit sowie Transparenz in all unseren Bestrebungen.
                        Diese Prinzipien untermauern unser Engagement, herausragende Ergebnisse zu liefern und
                        gleichzeitig starke Partnerschaften zu fördern.

                    </p>
                </SectionIntro>

                <Container className="mt-24">
                    <GridList>
                        <GridListItem title="Akribisch">
                            Wir übersehen kein Detail und gewährleisten höchste Qualität in jedem Aspekt Ihres Projekts
                        </GridListItem>
                        <GridListItem title="Effizient">
                            Wir optimieren Prozesse und Ressourcen, um schnell Ergebnisse zu liefern, ohne die Qualität
                            zu beeinträchtigen.
                        </GridListItem>
                        <GridListItem title="Anpassungsfähig">
                            Wir passen uns an und entwickeln uns weiter, während Ihr Projekt fortschreitet, und nehmen
                            Änderungen und Herausforderungen mühelos an.
                        </GridListItem>
                        <GridListItem title="Ehrlich">
                            Wir pflegen eine offene und ehrliche Kommunikation und bieten Klarheit und Vertrauen während
                            des gesamten Projekts.
                        </GridListItem>
                        <GridListItem title="Kommunikativ">
                            Wir fördern eine kollaborative Umgebung, halten Sie informiert und in jede Entscheidung
                            eingebunden.
                        </GridListItem>
                        <GridListItem title="Innovativ">
                            Wir bringen frische Ideen und modernste Lösungen ein, um den Erfolg Ihres Projekts
                            voranzutreiben und die Grenzen des Möglichen zu erweitern.
                        </GridListItem>
                    </GridList>
                </Container>
            </div>
    )
}

export const metadata: Metadata = {
    title: 'Unser Prozess',
    description:
            'Unser Prozess liefert kontinuierlich Ergebnisse durch iteration und agilen Praktiken.',
}

export default function Process() {
    return (
            <>
                <PageIntro className="hidden sm:block" eyebrow="Unser Prozess"
                           title="Befähigung Ihrer digitalen Transformationsreise">
                    <p>
                        Kundenorientierte Strategien für nahtlosen Fortschritt und kontinuierliche Innovation
                    </p>
                </PageIntro>
                <PageIntro eyebrow="Unser Prozess" className="block sm:hidden"
                           title="Befähigung Ihrer digitalen Transformations- reise">
                    <p>
                        Kundenorientierte Strategien für nahtlosen Fortschritt und kontinuierliche Innovation
                    </p>
                </PageIntro>

                <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
                    <Discover/>
                    <Build/>
                    <Deliver/>
                </div>

                <Values/>

                <ContactSection/>
            </>
    )
}
