import {type Metadata} from 'next'
import {Container} from '@/components/Container'
import {GridList, GridListItem} from '@/components/GridList'
import {GridPattern} from '@/components/GridPattern'
import {PageIntro} from '@/components/PageIntro'
import {SectionIntro} from '@/components/SectionIntro'
import imageLaptop from '@/images/laptop.jpg'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import {ContactEn} from "@/components/Contact/ContactEn";
import {ProcessSection} from "@/components/Process/ProcessSection";


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
                        Our values at Ape Dev GmbH revolve around excellence, collaboration, and innovation. We uphold
                        integrity, prioritize customer-centricity, and maintain adaptability and transparency in all our
                        endeavors. These principles underpin our commitment to delivering outstanding results while
                        fostering strong partnerships.
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
                            We adjust and evolve as your project progresses, accommodating changes and challenges with
                            ease.
                        </GridListItem>
                        <GridListItem title="Honest">
                            We maintain open and honest communication, providing clarity and trust throughout the
                            project.
                        </GridListItem>
                        <GridListItem title="Communicative">
                            We foster a collaborative environment, keeping you informed and involved in every decision.
                        </GridListItem>
                        <GridListItem title="Innovative">
                            We bring fresh ideas and cutting-edge solutions to drive the success of your project,
                            pushing the boundaries of what&apos;s possible.
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
                    <ProcessSection title="Discover" definition="In this initial phase, we immerse ourselves in understanding your organization&apos;s unique
                    needs and objectives." image={imageWhiteboard}
                                    list={[{
                                        label: "Listen and Learn",
                                        text: "We engage with your key stakeholders to gather insights, challenges, and aspirations for digitalization."
                                    },
                                        {
                                            label: "Assessment",
                                            text: "We conduct a thorough assessment of your current digitalization initiatives, identifying gaps and opportunities."
                                        },
                                        {
                                            label: "Roadmap Development",
                                            text: "We collaboratively create a roadmap for future digitalization initiatives, keeping your organization adaptable and future-proof."

                                        }]}
                                    outcome={"A comprehensive understanding of your digitalization requirements, user needs, and a clear\n" +
                                            "roadmap for moving forward."}/>

                    <ProcessSection title="Co-Create & Develop" definition="In this collaborative phase, we work closely with your team to design and develop digital
                            solutions that meet your objectives." image={imageLaptop}
                                    list={[{
                                        label: "Co-Creation Workshops",
                                        text: "Collaborative brainstorming sessions to ideate and prioritize digitalization initiatives."
                                    },
                                        {
                                            label: "Agile Development",
                                            text: "We develop and deploy digital solutions in iterative cycles, allowing for continuous feedback and improvement."
                                        },
                                        {
                                            label: "Monitoring & Optimization",
                                            text: "Continuous monitoring of system performance and user feedback to make data-driven improvements."
                                        }
                                    ]}
                                    outcome={"A set of digital solutions that are customer-centric, tailored to your specific needs, and\n" +
                                            "                        developed iteratively for continuous improvement."}/>
                    <ProcessSection
                            title="Deploy & Evolve"
                            definition="In the final phase, we focus on deployment and continuous improvement, ensuring your
                            digitalization initiatives evolve with changing needs."
                            image={imageMeeting}

                            list={[{
                                label: "Deployment & Training",
                                text: "Smooth deployment of solutions, accompanied by user training and support."
                            },
                                {
                                    label: "Monitoring & Optimization",
                                    text: "Continuous monitoring of system performance and user feedback to make data-driven improvements."
                                },
                                {
                                    label: "Roadmap Development",
                                    text: "Collaboratively create a roadmap for future digitalization initiatives, keeping your organization adaptable and future-proof."
                                }
                            ]}
                            outcome={"Successfully deployed, customer-centric digital solutions that evolve over time, staying\n" +
                                    "                        aligned with your business goals and the ever-changing digital landscape."}/>
                    <Values/>

                    <ContactEn/>
                </div>
            </>
    )
}
