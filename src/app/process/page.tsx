import {type Metadata} from 'next'

import {Blockquote} from '@/components/Blockquote'
import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {FadeIn} from '@/components/FadeIn'
import {GridList, GridListItem} from '@/components/GridList'
import {GridPattern} from '@/components/GridPattern'
import {List, ListItem} from '@/components/List'
import {PageIntro} from '@/components/PageIntro'
import {SectionIntro} from '@/components/SectionIntro'
import {StylizedImage} from '@/components/StylizedImage'
import {TagList, TagListItem} from '@/components/TagList'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'

function Section({
                     title,
                     image,
                     children,
                 }: {
    title: string
    image: React.ComponentPropsWithoutRef<typeof StylizedImage>
    children: React.ReactNode
}) {
    return (
            <Container className="group/section [counter-increment:section]">
                <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
                    <div className="flex justify-center">
                        <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
                            <StylizedImage
                                    {...image}
                                    sizes="(min-width: 1024px) 41rem, 31rem"
                                    className="justify-center lg:justify-end lg:group-even/section:justify-start"
                            />
                        </FadeIn>
                    </div>
                    <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
                        <FadeIn>
                            <div
                                    className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
                                    aria-hidden="true"
                            />
                            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
                                {title}
                            </h2>
                            <div className="mt-6">{children}</div>
                        </FadeIn>
                    </div>
                </div>
            </Container>
    )
}

function Discover() {
    return (
            <Section title="Discover" image={{src: imageWhiteboard}}>
                <div className="space-y-6 text-base text-neutral-600">
                    <p>
                        <p>
                            <strong>Definition:&nbsp;</strong>

                            In this initial phase, we immerse ourselves in understanding your organization&apos;s unique
                            needs and objectives.
                        </p>
                        <p>
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Listen and Learn:</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">We engage with your key stakeholders to gather
                                        insights, challenges, and aspirations for digitalization.
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Assessment:</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">A thorough analysis of your current systems and
                                        processes, identifying pain points and opportunities for improvement.
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Persona Mapping:</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">We create customer personas to better understand
                                        your end-users, ensuring solutions are tailored to their needs.
                                    </dd>
                                </div>
                            </dl>
                        </p>
                        <p>
                            <strong>Outcome:&nbsp;</strong>
                            A comprehensive understanding of your digitalization requirements, user needs, and a clear
                            roadmap for moving forward.
                        </p>
                    </p>
                </div>

            </Section>
    )
}

function Build() {
    return (
            <Section title="Co-Create & Develop" image={{src: imageLaptop, shape: 1}}>
                <div className="space-y-6 text-base text-neutral-600">
                    <p>
                        <p>
                            <strong>Definition:&nbsp;</strong>
                            In this collaborative phase, we work closely with your team to design and develop digital solutions that meet your objectives.
                        </p>
                        <p>
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Co-Creation Workshops:</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        Collaborative brainstorming sessions to ideate and prioritize digitalization initiatives.
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Agile Development:</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        Utilizing Agile methodologies, we develop and iterate solutions in small, customer-centric increments.
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">User Testing:</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        Regular user testing and feedback loops to ensure the developed solutions align with user expectations.
                                    </dd>
                                </div>
                            </dl>
                        </p>
                        <p>
                            <strong>Outcome:&nbsp;</strong>
                            A set of digital solutions that are customer-centric, tailored to your specific needs, and developed iteratively for continuous improvement.
                        </p>
                    </p>
                </div>
            </Section>
    )
}

function Deliver() {
    return (
            <Section title="Deploy & Evolve" image={{src: imageMeeting, shape: 2}}>
                <div className="space-y-6 text-base text-neutral-600">
                    <p>
                        <p>
                            <strong>Definition:&nbsp;</strong>
                            the final phase, we focus on deployment and continuous improvement, ensuring your digitalization initiatives evolve with changing needs.
                        </p>
                        <p>
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Deployment & Training:</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        Smooth deployment of solutions, accompanied by user training and support.
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Monitoring & Optimization:</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        Continuous monitoring of system performance and user feedback to make data-driven improvements.
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Roadmap Development:</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                        Collaboratively create a roadmap for future digitalization initiatives, keeping your organization adaptable and future-proof.
                                    </dd>
                                </div>
                            </dl>
                        </p>
                        <p>
                            <strong>Outcome:&nbsp;</strong>
                            Successfully deployed, customer-centric digital solutions that evolve over time, staying aligned with your business goals and the ever-changing digital landscape.
                        </p>
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
                        eyebrow="Our values"
                        title="Balancing reliability and innovation"
                >
                    <p>
                        Our values at Ape Dev GmbH revolve around excellence, collaboration, and innovation. We uphold integrity, prioritize customer-centricity, and maintain adaptability and transparency in all our endeavors. These principles underpin our commitment to delivering outstanding results while fostering strong partnerships.
                    </p>
                </SectionIntro>

                <Container className="mt-24">
                    <GridList>
                        <GridListItem title="Meticulous">
                            We leave no detail overlooked, ensuring the highest quality in every aspect of your project.

                        </GridListItem>
                        <GridListItem title="Efficient">
                            We optimize processes and resources to deliver results quickly without compromising quality.
                        </GridListItem>
                        <GridListItem title="Adaptable">
                            We adjust and evolve as your project progresses, accommodating changes and challenges with ease.
                        </GridListItem>
                        <GridListItem title="Honest">
                            We maintain open and honest communication, providing clarity and trust throughout the project.
                        </GridListItem>
                        <GridListItem title="Communicative">
                            We foster a collaborative environment, keeping you informed and involved in every decision.
                        </GridListItem>
                        <GridListItem title="Innovative">
                            We bring fresh ideas and cutting-edge solutions to drive the success of your project, pushing the boundaries of what&apos;s possible.
                        </GridListItem>
                    </GridList>
                </Container>
            </div>
    )
}

export const metadata: Metadata = {
    title: 'Our Process',
    description:
            'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default function Process() {
    return (
            <>
                <PageIntro eyebrow="Our process" title="Empowering Your Digital Transformation Journey">
                    <p>
                        Customer-Centric Strategies for Seamless Progress and Continuous Innovation
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
