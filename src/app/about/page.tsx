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
                <PageIntro eyebrow="Über uns" title="Digitalisierung vorantreiben, gemeinsam Innovationen schaffen">
                    <div className="mt-10 max-w-2xl space-y-6 text-base">
                        <p>
                            Ape Dev GmbH ist Ihr vertrauensvoller Partner für zukunftsweisende Softwarelösungen.
                            Mit einem starken Fokus auf <b>DevOps, Lean Enterprise und agilen Praktiken</b> sind wir Ihre Experten für praxisnahe Beratung, Architektur und Entwicklung von Softwaresystemen.
                            Unser Erfolg basiert auf der Pflege starker Partnerschaften mit ausgezeichneten Mitarbeitern,
                            um sicherzustellen, dass Ihre Projekte von einem Netzwerk erstklassiger Fachleute vorangetrieben werden,
                            die sich der Verwirklichung Ihrer Vision verschrieben haben.
                            Lassen Sie Ape Dev GmbH Ihre treibende Kraft in der Welt der Softwareentwicklung sein,
                            wo Innovation und Exzellenz aufeinandertreffen.
                        </p><p>
                        Als Softwareentwicklungsunternehmen geht es uns nicht nur um das Schreiben von Code;
                        es geht uns darum, Erlebnisse zu schaffen, <b>Probleme zu lösen und Ihre Ziele zu erreichen</b>.
                        Unsere Grundlage baut auf den Säulen Menschen, Prozesse und Technologie auf,
                        und es ist diese Kernphilosophie, die uns antreibt, erstklassige Softwarelösungen zu liefern.
                        Wählen Sie Ape Dev GmbH für eine Partnerschaft, die Ihrem Unternehmen hilft, im digitalen Zeitalter zu gedeihen.
                    </p>
                    </div>
                </PageIntro>

                <Culture/>

                <ContactSection/>
            </>
    )
}
