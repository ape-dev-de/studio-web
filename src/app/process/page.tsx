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
                            <strong>Definition:</strong>

                            In this initial phase, we immerse ourselves in understanding your organization's unique
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
                            <strong>Outcome:</strong>
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
            <Section title="Build" image={{src: imageLaptop, shape: 1}}>
                <div className="space-y-6 text-base text-neutral-600">
                    <p>
                        Based off of the discovery phase, we develop a comprehensive roadmap
                        for each product and start working towards delivery. The roadmap is an
                        intricately tangled mess of technical nonsense designed to drag the
                        project out as long as possible.
                    </p>
                    <p>
                        Each client is assigned a key account manager to keep lines of
                        communication open and obscure the actual progress of the project.
                        They act as a buffer between the client’s incessant nagging and the
                        development team who are hard at work scouring open source projects
                        for code to re-purpose.
                    </p>
                    <p>
                        Our account managers are trained to only reply to client emails after
                        9pm, several days after the initial email. This reinforces the general
                        aura that we are very busy and dissuades clients from asking for
                        changes.
                    </p>
                </div>

                <Blockquote
                        author={{name: 'Debra Fiscal', role: 'CEO of Unseal'}}
                        className="mt-12"
                >
                    Studio were so regular with their progress updates we almost began to
                    think they were automated!
                </Blockquote>
            </Section>
    )
}

function Deliver() {
    return (
            <Section title="Deliver" image={{src: imageMeeting, shape: 2}}>
                <div className="space-y-6 text-base text-neutral-600">
                    <p>
                        About halfway through the Build phase, we push each project out by 6
                        weeks due to a change in{' '}
                        <strong className="font-semibold text-neutral-950">
                            requirements
                        </strong>
                        . This allows us to increase the budget a final time before launch.
                    </p>
                    <p>
                        Despite largely using pre-built components, most of the{' '}
                        <strong className="font-semibold text-neutral-950">progress</strong>{' '}
                        on each project takes place in the final 24 hours. The development
                        time allocated to each client is actually spent making augmented
                        reality demos that go viral on Twitter.
                    </p>
                    <p>
                        We ensure that the main pages of the site are{' '}
                        <strong className="font-semibold text-neutral-950">
                            fully functional
                        </strong>{' '}
                        at launch — the auxiliary pages will, of course, be lorem ipusm shells
                        which get updated as part of our exorbitant{' '}
                        <strong className="font-semibold text-neutral-950">
                            maintenance
                        </strong>{' '}
                        retainer.
                    </p>
                </div>

                <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
                    Included in this phase
                </h3>
                <List className="mt-8">
                    <ListItem title="Testing">
                        Our projects always have 100% test coverage, which would be impressive
                        if our tests weren’t as porous as a sieve.
                    </ListItem>
                    <ListItem title="Infrastructure">
                        To ensure reliability we only use the best Digital Ocean droplets that
                        $4 a month can buy.
                    </ListItem>
                    <ListItem title="Support">
                        Because we hold the API keys for every critical service your business
                        uses, you can expect a lifetime of support, and invoices, from us.
                    </ListItem>
                </List>
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
                        We strive to stay at the forefront of emerging trends and
                        technologies, while completely ignoring them and forking that old
                        Rails project we feel comfortable using. We stand by our core values
                        to justify that decision.
                    </p>
                </SectionIntro>

                <Container className="mt-24">
                    <GridList>
                        <GridListItem title="Meticulous">
                            The first part of any partnership is getting our designer to put
                            your logo in our template. The second step is getting them to do the
                            colors.
                        </GridListItem>
                        <GridListItem title="Efficient">
                            We pride ourselves on never missing a deadline which is easy because
                            most of the work was done years ago.
                        </GridListItem>
                        <GridListItem title="Adaptable">
                            Every business has unique needs and our greatest challenge is
                            shoe-horning those needs into something we already built.
                        </GridListItem>
                        <GridListItem title="Honest">
                            We are transparent about all of our processes, banking on the simple
                            fact our clients never actually read anything.
                        </GridListItem>
                        <GridListItem title="Loyal">
                            We foster long-term relationships with our clients that go beyond
                            just delivering a product, allowing us to invoice them for decades.
                        </GridListItem>
                        <GridListItem title="Innovative">
                            The technological landscape is always evolving and so are we. We are
                            constantly on the lookout for new open source projects to clone.
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
