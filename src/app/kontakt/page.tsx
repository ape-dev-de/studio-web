import { useId } from 'react'
import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import {NoSSR} from "next/dist/shared/lib/lazy-dynamic/dynamic-no-ssr";

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pb-4 pt-12 text-base/6 text-neutral-950 ring-4 ring-transparent transition focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5 group-first:rounded-t-2xl group-last:rounded-b-2xl"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute left-6 top-1/2 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950 peer-[:not(:placeholder-shown)]:-translate-y-4 peer-[:not(:placeholder-shown)]:scale-75 peer-[:not(:placeholder-shown)]:font-semibold peer-[:not(:placeholder-shown)]:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function RadioInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  return (
    <label className="flex gap-x-3">
      <input
        type="radio"
        {...props}
        className="h-6 w-6 flex-none appearance-none rounded-full border border-neutral-950/20 outline-none checked:border-[0.5rem] checked:border-neutral-950 focus-visible:ring-1 focus-visible:ring-neutral-950 focus-visible:ring-offset-2"
      />
      <span className="text-base/6 text-neutral-950">{label}</span>
    </label>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last rounded-2xl shadow-2xl">
        <div className="tidycal-embed" data-path="ape-dev/kontakt" suppressHydrationWarning={true}></div>

        <script src="https://assets.tidycal.com/js/embed.js" async></script>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        Geschäftsräume
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        Birkenweg 5F<br />
        21717 Deinste<br />
        info@ape-dev.de<br />
        04149 233 9823
      </p>
        <p className="mt-6 text-base text-neutral-600">
            Wir operieren Remote in ganz Deutschland. Wenn Sie uns trotzdem persönlich treffen möchten, schreiben Sie uns eine Mail und wir kommen zu Ihnen.
      </p>
        <div className="flex gap-8 mt-4">
            <Button href="https://aitable.ai/share/shrK8Cz4PXxAzx7GuvlXX" target="_blank" rel="nofollow">
                Rückruf vereinbaren
            </Button>

            <Button href="https://tidycal.com/ape-dev/kontakt" target="_blank" rel="nofollow">
                Videocall vereinbaren
            </Button>
        </div>



      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Schreiben sie uns
        </h2>
        <dl className="mt-6 grid grid-cols-1 gap-8 text-sm sm:grid-cols-2">
          {[
            ['Allgemeine Anfragen', 'info@ape-dev.de']
          ].map(([label, email]) => (
            <div key={email}>
              <dt className="font-semibold text-neutral-950">{label}</dt>
              <dd>
                <Link
                  href={`mailto:${email}`}
                  className="text-neutral-600 hover:text-neutral-950"
                >
                  {email}
                </Link>
              </dd>
            </div>
          ))}
        </dl>
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Kontakt',
  description: 'Lassen Sie uns zusammenarbeiten. Wir freuen uns auf Ihre Nachricht.'
}

export default function Contact() {
  return (
    <>
      <PageIntro eyebrow="Kontakt" title="Lassen sie uns gemeinsam großes bewirken.">
        <p>Buchen sie einen Termin oder rufen sie uns an. Wir können es nicht erwarten mit Ihnen zusammen zu arbeiten.</p>
      </PageIntro>

      <Container className="mt-24">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </>
  )
}
