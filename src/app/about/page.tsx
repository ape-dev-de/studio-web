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
                        eyebrow="Our Slogan"
                        title="People, Process and Technology"
                        invert
                >
                    <p>
                        Our client-centric approach means we work closely with you to understand your vision, transform
                        it into reality, and ensure that your project stays at the forefront of innovation while
                        delivering cost-effective, timely, and high-quality results.
                    </p>
                </SectionIntro>
                <Container className="mt-16">
                    <GridList>
                        <GridListItem title="People" invert>
                            Our team is our greatest asset, and we understand the importance of creating a seamless
                            synergy between our experts and your existing team, ensuring a collaborative partnership
                            that leverages the strengths of both to achieve extraordinary results.
                        </GridListItem>
                        <GridListItem title="Process" invert>
                            We embrace and champion Agile and Lean Enterprise practices, promoting a streamlined
                            approach that adapts swiftly to changes and encourages seamless collaboration between
                            development and operations teams through our DevOps expertise.
                        </GridListItem>
                        <GridListItem title="Technology" invert>
                            Staying ahead in the ever-evolving technology landscape is crucial, and we are committed to
                            harnessing the latest tools and technologies to create robust, scalable, and cutting-edge
                            software solutions tailored to your unique needs.
                        </GridListItem>
                    </GridList>
                </Container>
            </div>
    )
}

const team = [
    {
        title: 'Leadership',
        people: [
            {
                name: 'Leslie Alexander',
                role: 'Co-Founder / CEO',
                image: {src: imageLeslieAlexander},
            },
            {
                name: 'Michael Foster',
                role: 'Co-Founder / CTO',
                image: {src: imageMichaelFoster},
            },
            {
                name: 'Dries Vincent',
                role: 'Partner & Business Relations',
                image: {src: imageDriesVincent},
            },
        ],
    },
    {
        title: 'Team',
        people: [
            {
                name: 'Chelsea Hagon',
                role: 'Senior Developer',
                image: {src: imageChelseaHagon},
            },
            {
                name: 'Emma Dorsey',
                role: 'Senior Designer',
                image: {src: imageEmmaDorsey},
            },
            {
                name: 'Leonard Krasner',
                role: 'VP, User Experience',
                image: {src: imageLeonardKrasner},
            },
            {
                name: 'Blake Reid',
                role: 'Junior Copywriter',
                image: {src: imageBlakeReid},
            },
            {
                name: 'Kathryn Murphy',
                role: 'VP, Human Resources',
                image: {src: imageKathrynMurphy},
            },
            {
                name: 'Whitney Francis',
                role: 'Content Specialist',
                image: {src: imageWhitneyFrancis},
            },
            {
                name: 'Jeffrey Webb',
                role: 'Account Coordinator',
                image: {src: imageJeffreyWebb},
            },
            {
                name: 'Benjamin Russel',
                role: 'Senior Developer',
                image: {src: imageBenjaminRussel},
            },
            {
                name: 'Angela Fisher',
                role: 'Front-end Developer',
                image: {src: imageAngelaFisher},
            },
        ],
    },
]

function Team() {
    return (
            <Container className="mt-24 sm:mt-32 lg:mt-40">
                <div className="space-y-24">
                    {team.map((group) => (
                            <FadeInStagger key={group.title}>
                                <Border as={FadeIn}/>
                                <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
                                    <FadeIn>
                                        <h2 className="font-display text-2xl font-semibold text-neutral-950">
                                            {group.title}
                                        </h2>
                                    </FadeIn>
                                    <div className="lg:col-span-3">
                                        <ul
                                                role="list"
                                                className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                                        >
                                            {group.people.map((person) => (
                                                    <li key={person.name}>
                                                        <FadeIn>
                                                            <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                                                                <Image
                                                                        alt=""
                                                                        {...person.image}
                                                                        className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                                                                />
                                                                <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                                                                    <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                                                                        {person.name}
                                                                    </p>
                                                                    <p className="mt-2 text-sm text-white">
                                                                        {person.role}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </FadeIn>
                                                    </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </FadeInStagger>
                    ))}
                </div>
            </Container>
    )
}

export const metadata: Metadata = {
    title: 'About Us',
    description:
            'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
    let blogArticles = (await loadArticles()).slice(0, 2)

    return (
            <>
                <PageIntro eyebrow="About us" title="Powering Digitalization, Innovating Together">
                    <div className="mt-10 max-w-2xl space-y-6 text-base">
                        <p>
                            Ape Dev GmbH is your trusted partner for cutting-edge software solutions.
                            With a strong focus on DevOps, Lean Enterprise, and Agile practices,
                            we are your go-to experts for hands-on consulting, architecting,
                            and developing software systems.
                            Our success is built on fostering strong partnerships with excellent collaborators,
                            ensuring that your projects are driven by a network of top-notch experts who are dedicated
                            to bringing your vision to life.
                            Let Ape Dev GmbH be your guiding force in the world of software development,
                            where innovation and excellence meet.
                        </p><p>
                        As a software development company, we are not just about writing code; we are about crafting
                        experiences, solving problems, and achieving your goals. Our foundation is built on People,
                        Process, and Technology, and it is this core philosophy that propels us to deliver
                        world-class software solutions.
                        Choose Ape Dev GmbH for a partnership that will help your business thrive in the digital
                        age.
                    </p>
                    </div>
                </PageIntro>

                <Culture/>

                <ContactSection/>
            </>
    )
}
