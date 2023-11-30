import {type Metadata} from 'next'
import Image from 'next/image'

import {Container} from '@/components/Container'
import {FadeIn, FadeInStagger} from '@/components/FadeIn'
import {List, ListItem} from '@/components/List'
import {SectionIntro} from '@/components/SectionIntro'
import {StylizedImage} from '@/components/StylizedImage'
import {Testimonial} from '@/components/Testimonial'
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

import imageLaptop from '@/images/laptop.jpg'

import {ContactSection} from "@/components/ContactSection";

const clients = [
    ['The Quality Group GmbH', logoTqg, 'https://www.tqgg.de/'],
    ['ESN', logoEsn, 'https://www.esn.com/'],
    ['Computer Futures', logoCF, 'https://www.computerfutures.com/'],
    ['Fitmart', logoFitmart, 'https://fitmart.de/'],
    ['More Nutrition', logoMn, 'https://morenutrition.de/'],
    //['Synergy', logoSynergy],
    ['Foodist', logoFoodist, 'https://foodist.de/'],
    ['Movamo', logoMovamo, 'https://movamo.de/'],
    ['About You', logoAy, 'https://aboutyou.de/'],
    ['Festglanz', logoFestglanz, 'https://festglanz.de/'],
    ['Holiday Host', logoHolidayHost, 'https://holidayhost.de/'],
    //['Jungheinrich Digital Solutions', logoEsn],
    //['Check24', logoEsn],
    //['Two S', logoEsn],
]

function Clients() {
    return (
            <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56  lg:mx-4">
                <Container>
                    <FadeIn className="flex items-center gap-x-8">
                        <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left ">
                            We&apos;ve helped hundreds of amazing people to make their clients happier, faster.
                        </h2>
                        <div className="h-px flex-auto bg-neutral-800"/>
                    </FadeIn>
                    <FadeInStagger faster>
                        <ul
                                role="list"
                                className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-6"
                        >
                            {clients.map(([client, logo, url]) => (
                                    <li key={client} className="h-full">
                                        <a href={url} target="_blank">
                                            <FadeIn className="h-full flex flex-row items-center">
                                                <Image src={logo} alt={client} unoptimized className={"flex-"}/>
                                            </FadeIn>
                                        </a>
                                    </li>
                            ))}
                        </ul>
                    </FadeInStagger>
                </Container>
            </div>
    )
}


function Services() {
    return (
            <>
                <SectionIntro
                        eyebrow="Services"
                        title="We help you identify, explore and respond to new opportunities."
                        className="mt-24 sm:mt-32 lg:mt-40"
                >
                    <p>
                        No matter the challenge, we have the expertise to help you solve it.
                        Web Applications, E-commerce, Games, Mobile Apps, and more.
                        Either you are looking for individual contributors or a full team, a small project or a
                        long-term partnership, we are here to help.
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
                            <ListItem title="Digitalisation">
                                By offering tailored solutions and personalized consultations,
                                we streamline processes and optimize operations.
                                Our hands-on guidance and innovative technologies empower
                                these businesses to enhance customer experiences and strategically
                                align their digital transformation with their growth objectives.
                            </ListItem>
                            <ListItem title="Web Application Development">
                                Ready to turn your vision into reality?
                                Our web app experts will lead the way to digital success.
                                MVP to full-scale product, we’ve got you covered.
                                Let&apos;s make it happen.
                            </ListItem>
                            <ListItem title="E-commerce">
                                Revolutionize your online business!
                                We craft e-commerce products and integrations that amplify sales and streamline
                                operations.
                            </ListItem>
                            <ListItem title="3D & Game Development">
                                Experience gaming excellence!
                                Our solutions for Unity3D elevate performance,
                                giving your game a competitive edge and enhanced gameplay.
                            </ListItem>
                        </List>
                    </div>
                </Container>
            </>
    )
}

export const metadata: Metadata = {
    description:
            'We are a development studio working at the intersection of design and technology.',
}

export default async function Home(query: { locale: string }) {
    return (
            <>
                <Container className="mt-24 sm:mt-32 md:mt-56">
                    <FadeIn className="max-w-3xl">
                        <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                            Software Development made in Germany
                        </h1>
                        <p className="mt-6 text-xl text-neutral-600">
                            Elevate your tech projects,
                            large or small,
                            with our German-engineered software mastery.
                            We drive Digitalisation with DevOps,
                            Lean Enterprise,
                            and Agile excellence for rapid,
                            efficient development.
                            Ready to transform your digital future?
                        </p>
                    </FadeIn>
                </Container>

                <Clients/>


                <Testimonial
                        className="mt-24 sm:mt-32 lg:mt-40"
                        client={{name: 'Phobia', logo: logoCF}}
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
