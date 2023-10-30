import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoEsn from '@/images/clients/esn/esn_logo.svg'
import logoEsnBlack from '@/images/clients/esn/esn_logo_black.svg'
import logoCF from '@/images/clients/cf/logo-computerfutures-white.svg'
import imageLaptop from '@/images/laptop.jpg'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['The Quality Group GmbH', logoEsn],
  ['ESN', logoEsn],
  ['Fitmart', logoEsn],
  ['More Nutrition', logoEsn],
  ['Synergy', logoEsn],
  ['Foodist', logoEsn],
  ['Movamo', logoEsn],
  ['About You', logoEsn],
  ['Jungheinrich Digital Solutions', logoEsn],
  ['Check24', logoEsn],
  ['Two S', logoEsn],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            We&apos;ve helped hundreds of amazing people to make their clients happier, faster.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-6"
          >
            {clients.map(([client, logo]) => (
              <li key={client} >
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({
  caseStudies,
}: {
  caseStudies: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        title="Harnessing technology for a brighter future"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We believe technology is the answer to the world’s greatest
          challenges. It’s also the cause, so we find ourselves in bit of a
          catch 22 situation.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
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
          Either you are looking for individual contributors or a full team, a small project or a long-term partnership, we are here to help.
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
            <ListItem title="Web Application Development">
              Ready to turn your vision into reality?
              Our web app experts will lead the way to digital success.
              MVP to full-scale product, we’ve got you covered.
              Let&apos;s make it happen.
            </ListItem>
            <ListItem title="E-commerce">
              Revolutionize your online business!
              We craft e-commerce products and integrations that amplify sales and streamline operations.
            </ListItem>
            <ListItem title="Game Development">
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

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

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
            We drive Digitalization with DevOps,
            Lean Enterprise,
            and Agile excellence for rapid,
            efficient development.
            Ready to transform your digital future?
          </p>
        </FadeIn>
      </Container>

      <Clients />


      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia', logo: logoCF }}
      >
        [...] Despite his technical skills as a developer and consultant I can also confirm his social skills since he's very reliable, always on time and has a very high standard regarding his own work. From my side, I would definitely work with him again and can recommend to everybody to do so as well.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
