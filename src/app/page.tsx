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
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['The Quality Group GmbH', logoTqg, 'https://www.tqgg.de/'],
  ['ESN', logoEsn, 'https://www.esn.com/'],
  ['Computer Futures', logoCF, 'https://www.computerfutures.com/'],
  ['F itmart', logoFitmart, 'https://fitmart.de/'],
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
            Wir haben Hunderten von herausragenden Menschen dabei geholfen, ihre Kunden noch schneller, noch zufriedener zu machen.
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-8 lg:grid-cols-5"
          >
            {clients.map(([client, logo, url]) => (
              <li key={client}  className="h-full">
                <a href={url} target="_blank">
                <FadeIn className="h-full flex flex-row items-center">
                  <Image src={logo} alt={client} unoptimized className={"flex- rounded-md"}/>
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
        eyebrow="Dienstleistungen"
        title="Wir helfen Ihnen, neue Möglichkeiten zu identifizieren, zu erforschen und darauf zu reagieren."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Unabhängig von der Herausforderung verfügen wir über das Know-how, um Ihnen bei der Lösung zu helfen.
          Webanwendungen, Prozessautomatisierung, E-Commerce, 3D-Virtualisierung, Spiele, Mobile Apps und mehr.
          Egal, ob Sie einzelne Mitwirkende oder ein komplettes Team suchen; ein kleines Projekt oder eine langfristige Partnerschaft - wir stehen Ihnen zur Seite.
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
            <ListItem title="Digitaliserung">
              Revolutionieren Sie Ihr Business!
              Entdecken Sie bei Ape Dev, wie Digitalisierung Ihre Effizienz steigert und Kosten senkt. Klicken & transformieren!
            </ListItem>
            <ListItem title="3D & Game Development">
              Wir nutzen wir die fortschrittliche Unity3D-Engine, um Ihre 3D-Virtualisierung und Spieleentwicklung nicht nur zu realisieren,
              sondern zu perfektionieren.
              Wir optimieren jeden Schritt des Entwicklungsprozesses,
              um ein nahtloses und beeindruckendes Spielerlebnis zu garantieren.
              Unsere Expertise sorgt dafür, dass Ihre Vision mit höchster Qualität und Effizienz zum Leben erweckt wird.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata: Metadata = {
  description:
    'Regional betreut, global erfolgreich. Von regionaler Betreuung zu weltweitem Erfolg - mit Ape Dev (eɪp dɛv) als starkem Partner für ganzheitliche digitale Lösungen.' +
          ' Mit präzise abgestimmten Service und individuell konzipierte Lösungen zum globalen Erfolg.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-24 ">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Regional betreut. Global erfolgreich.
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Von regionaler Betreuung zu weltweitem Erfolg - mit Ape Dev (eɪp dɛv) als starkem Partner für ganzheitliche digitale Lösungen.
            Mit präzise abgestimmten Service und individuell konzipierte Lösungen zum globalen Erfolg.
          </p>
        </FadeIn>
      </Container>

      <Clients />


      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Computure Futures', logo: logoCF }}
      >
        [...] Despite his technical skills as a developer and consultant I can also confirm his social skills since he&apos;s very reliable, always on time and has a very high standard regarding his own work. From my side, I would definitely work with him again and can recommend to everybody to do so as well.
      </Testimonial>

      <Services />

      <ContactSection />
    </>
  )
}
