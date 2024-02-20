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

export const metadata: Metadata = {
    title: 'Webentwicklung',
    description:
            'Entdecken Sie die professionelle Softwareentwicklung von Ape Dev GmbH – maßgeschneidert, technologisch führend und benutzerzentriert. Lassen Sie uns gemeinsam Ihre digitale Zukunft gestalten.',
}


export default async function About() {
    return (
            <>
                <PageIntro eyebrow="professionelle Softwareentwicklung" title="Sicherheit und Compliance für Ihr Unternehmen">
                    <div className="mt-10 space-y-6 text-base">
                        <p>
                            Willkommen bei Ape Dev GmbH, Ihrem Spezialisten für die Entwicklung von professionellen Webapplikationen


                        </p>
                        <p className={"mt-6"}>
                            . Wir verstehen, dass jedes Unternehmen einzigartig ist und seine eigenen Herausforderungen und Ziele hat. Unsere Aufgabe ist es, Ihre individuellen Anforderungen in leistungsstarke, benutzerfreundliche Webapplikationen umzusetzen, die Ihr Geschäft voranbringen. </p>

                        <GridList >
                            <GridListItem title="Individuelle Lösungen" >
                                Wir bieten maßgeschneiderte Softwareentwicklung, die sich perfekt in Ihr Geschäftsmodell einfügt.
                            </GridListItem>
                            <GridListItem title="Technologische Expertise" >
                                Unsere Entwickler sind versiert in den neuesten Technologien und Frameworks.
                            </GridListItem>
                            <GridListItem title="Agile Entwicklung" >
                                Wir arbeiten eng mit Ihnen zusammen, um flexibel auf Änderungen zu reagieren und die beste Lösung zu liefern.
                            </GridListItem>
                        </GridList>
                        <p className="flex space-evenly gap-12">
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
