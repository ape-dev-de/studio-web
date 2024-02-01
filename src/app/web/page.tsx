import {type Metadata} from 'next'
import Image from 'next/image'

import {Border} from '@/components/Border'
import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {FadeIn, FadeInStagger} from '@/components/FadeIn'
import {GridList, GridListItem} from '@/components/GridList'
import {PageIntro} from '@/components/PageIntro'
import {PageLinks} from '@/components/PageLinks'
import {SectionIntro} from '@/components/SectionIntro'
import {StatList, StatListItem} from '@/components/StatList'
import imageAngelaFisher from '@/images/team/angela-fisher.jpg'
import imageBenjaminRussel from '@/images/team/benjamin-russel.jpg'
import imageBlakeReid from '@/images/team/blake-reid.jpg'
import imageChelseaHagon from '@/images/team/chelsea-hagon.jpg'
import imageDriesVincent from '@/images/team/dries-vincent.jpg'
import imageEmmaDorsey from '@/images/team/emma-dorsey.jpg'
import imageJeffreyWebb from '@/images/team/jeffrey-webb.jpg'
import imageKathrynMurphy from '@/images/team/kathryn-murphy.jpg'
import imageLeonardKrasner from '@/images/team/leonard-krasner.jpg'
import imageLeslieAlexander from '@/images/team/leslie-alexander.jpg'
import imageMichaelFoster from '@/images/team/michael-foster.jpg'
import imageWhitneyFrancis from '@/images/team/whitney-francis.jpg'
import {loadArticles} from '@/lib/mdx'
import {Button} from "@/components/Button";
import {ListItem} from "@/components/List";

function Culture() {
    return (
            <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
                <SectionIntro
                        eyebrow="Unser Leitspruch"
                        title="Menschen, Prozesse und Technologie"
                        invert
                >
                    <p>
                        Unser kundenorientierter Ansatz bedeutet, dass wir eng mit Ihnen zusammenarbeiten, um Ihre Vision zu verstehen,
                        sie in die Realität umzusetzen und sicherzustellen,
                        dass Ihr Projekt an der Spitze der Innovation bleibt und kosteneffektive,
                        zeitgerechte und qualitativ hochwertige Ergebnisse liefert.
                    </p>
                </SectionIntro>
                <Container className="mt-16">
                    <GridList>
                        <GridListItem title="Menschen" invert>
                            Unser Team ist unser größtes Kapital,
                            und wir verstehen die Bedeutung einer nahtlosen Synergie zwischen unseren Experten und Ihrem bestehenden Team,
                            um eine kollaborative Partnerschaft zu gewährleisten, die die Stärken beider nutzt,
                            um außergewöhnliche Ergebnisse zu erzielen.
                        </GridListItem>
                        <GridListItem title="Prozesse" invert>
                            Wir leben und fördern agile und Lean-Enterprise-Praktiken und unterstützen einen gestrafften Ansatz,
                            der sich schnell an Veränderungen anpasst und eine nahtlose Zusammenarbeit zwischen Entwicklungs-
                            und Betriebsteams durch unsere DevOps-Expertise fördert.
                        </GridListItem>
                        <GridListItem title="Technologie" invert>
                            Es ist entscheidend, in der sich ständig weiterentwickelnden Technologielandschaft führend zu bleiben,
                            und wir sind verpflichtet, die neuesten Werkzeuge und Technologien zu nutzen,
                            um robuste, skalierbare und hochmoderne Softwarelösungen zu erstellen,
                            die auf Ihre einzigartigen Bedürfnisse zugeschnitten sind.
                        </GridListItem>
                    </GridList>
                </Container>
            </div>
    )
}

export const metadata: Metadata = {
    title: 'Über uns',
    description:
            'Wir glauben, dass unsere Stärke in unserem kollaborativen Ansatz liegt, der unsere Kunden in den Mittelpunkt all unseres Handelns stellt.',
}

export default async function About() {
    return (
            <>
                <PageIntro eyebrow="Digitalisierung" title="Digitalisierung vorantreiben, gemeinsam Innovationen schaffen">
                    <div className="mt-10 space-y-6 text-base">
                        <p>
                            Steigern Sie Ihren Umsatz und Gewinn mit Ape Dev GmbH, und das mit noch weniger Arbeitsaufwand.
                            Maßgeschneiderte Digitalstrategien, die Ihre Prozesse optimieren und Ihre Online-Präsenz revolutionieren.
                        </p>
                        <p>
                            Wir arbeiten immer Hand in Hand mit unseren Kunden, denn es ist  <b> IHR Business</b>.
                            Wir erarbeiten gemeinsam mit Ihnen die beste Lösung für Ihr Unternehmen.
                        </p>
                        <p className="flex space-evenly gap-12">
                            <Button href="https://tidycal.com/ape-dev/digitalisierung">
                                Kostenlose Beratung buchen
                            </Button>
                            <Button href="/process">
                                Mehr erfahren
                            </Button>
                        </p>
                    </div>
                </PageIntro>


                <ContactSection/>
            </>
    )
}
