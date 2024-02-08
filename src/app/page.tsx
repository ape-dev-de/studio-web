import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {FadeIn, FadeInStagger} from '@/components/FadeIn'
import {List, ListItem} from '@/components/List'
import {SectionIntro} from '@/components/SectionIntro'
import {StylizedImage} from '@/components/StylizedImage'
import {Testimonial} from '@/components/Testimonial'
import Clients from '@/components/Clients'
import logoEsn from '@/images/clients/esn/esn_logo.svg'
import logoCF from '@/images/clients/cf/logo-computerfutures-white.svg'
import logoTqg from '@/images/clients/tqg/logo_white.webp'
import logoFitmart from '@/images/clients/fitmart/fitmart-logo-white--web.svg'
import logoFoodist from '@/images/clients/foodist/Foodist-Logo.png'
import logoMovamo from '@/images/clients/movamo/movamo-gmb-h-logo-xl.webp'
import logoMn from '@/images/clients/mn/More_Logo_Suite_RGB_Primary_Black_v1_16f701c1-b225-4b52-a8e3-659b7fb2a5b6.webp'
import logoAy from '@/images/clients/ay/Aboutyou_logo_1.jpg'
import logoFestglanz from '@/images/clients/festglanz/festglanz_deko_logo_brush.png'
import logoHolidayHost from '@/images/clients/holidayhost/NoBorderWhiteBG_Holiday_Host_Logo.png.webp'

import imageLaptop from '@/images/laptop@0.5x.webp'
import {type CaseStudy, loadCaseStudies, type MDXEntry} from '@/lib/mdx'

const clients = [
    {client: 'The Quality Group GmbH', logo: logoTqg, url: 'https://www.tqgg.de/'},
    {client: 'ESN', logo: logoEsn, url: 'https://www.esn.com/'},
    {client: 'Computer Futures', logo: logoCF, url: 'https://www.computerfutures.com/'},
    {client: 'Fitmart', logo: logoFitmart, url: 'https://fitmart.de/'},
    {client: 'More Nutrition', logo: logoMn, url: 'https://morenutrition.de/'},
    {client: 'Foodist', logo: logoFoodist, url: 'https://foodist.de/'},
    {client: 'Movamo', logo: logoMovamo, url: 'https://movamo.de/'},
    {client: 'About You', logo: logoAy, url: 'https://aboutyou.de/'},
    {client: 'Festglanz', logo: logoFestglanz, url: 'https://festglanz.de/'},
    {client: 'Holiday Host', logo: logoHolidayHost, url: 'https://holidayhost.de/'},
]

function Services() {
    return (
            <>
                <SectionIntro
                        eyebrow="Dienstleistungen"
                        title="Wir helfen Ihnen, neue Möglichkeiten zu identifizieren, zu erforschen und darauf zu reagieren."
                        className="mt-24 sm:mt-32 lg:mt-40"
                >
                    <p>
                        Unabhängig von der Herausforderung verfügen wir über das Know-how, um Ihnen bei der Lösung zu
                        helfen.
                        Webanwendungen, Prozessautomatisierung, E-Commerce, 3D-Virtualisierung, Spiele, Mobile Apps und
                        mehr.
                        Egal, ob Sie einzelne Mitwirkende oder ein komplettes Team suchen; ein kleines Projekt oder eine
                        langfristige Partnerschaft - wir stehen Ihnen zur Seite.
                    </p>
                </SectionIntro>
                <Container className="mt-16">
                    <div className="lg:flex lg:items-center lg:justify-end">
                        <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
                            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                                <StylizedImage
                                        src={imageLaptop}
                                        sizes="(min-width: 1024px) 41rem, 31rem"
                                        className="justify-center lg:justify-end"
                                />
                            </FadeIn>
                        </div>
                        <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
                            <ListItem title="Webanwendungen">
                                Bereit, Ihre Vision Wirklichkeit werden zu lassen?
                                Unsere Experten für Webanwendungen führen Sie auf dem Weg zum digitalen Erfolg.
                                Vom MVP zum vollständigen Produkt - wir stehen Ihnen zur Seite.
                                Lassen Sie es uns verwirklichen.
                            </ListItem>
                            <ListItem title="Digitalisierung">
                                Revolutionieren Sie Ihr Business!
                                Entdecken Sie bei Ape Dev, wie Digitalisierung Ihre Effizienz steigert und Kosten senkt.
                                Klicken & transformieren!
                            </ListItem>
                            <ListItem title="3D & Game Development">
                                Wir nutzen wir die fortschrittliche Unity3D-Engine, um Ihre 3D-Virtualisierung und
                                Spieleentwicklung nicht nur zu realisieren,
                                sondern zu perfektionieren.
                                Wir optimieren jeden Schritt des Entwicklungsprozesses,
                                um ein nahtloses und beeindruckendes Spielerlebnis zu garantieren.
                                Unsere Expertise sorgt dafür, dass Ihre Vision mit höchster Qualität und Effizienz zum
                                Leben erweckt wird.
                            </ListItem>
                        </List>
                    </div>
                </Container>
            </>
    )
}

export const metadata: Metadata = {
    description:
            'Regional betreut, global erfolgreich. Von regionaler Betreuung zu weltweitem Erfolg - mit Ape Dev als starkem Partner für ganzheitliche digitale Lösungen.',
}

export default async function Home() {
    return (
            <>
                <Container className="mt-24 sm:mt-24 ">
                    <div className="max-w-3xl">
                        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                            Regional betreut. Global erfolgreich.
                        </h1>
                        <p className="mt-6 text-xl text-neutral-600">
                            Von regionaler Betreuung zu weltweitem Erfolg - mit Ape Dev (eɪp dɛv) als starkem Partner
                            für ganzheitliche digitale Lösungen.
                            Mit präzise abgestimmten Service und individuell konzipierte Lösungen zum globalen Erfolg.
                        </p>
                    </div>
                </Container>

                <Clients clients={clients}/>


                <Testimonial
                        className="mt-24 sm:mt-32 lg:mt-40"
                        client={{name: 'Computure Futures', logo: logoCF}}
                >
                    [...] Despite his technical skills as a developer and consultant I can also confirm his social
                    skills since he&apos;s very reliable, always on time and has a very high standard regarding his own
                    work. From my side, I would definitely work with him again and can recommend to everybody to do so
                    as well.
                </Testimonial>

                <Services/>

                <ContactSection/>
            </>
    )
}
