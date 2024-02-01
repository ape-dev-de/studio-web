import Link from 'next/link'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import {SocialMedia, socialMediaProfiles} from '@/components/SocialMedia'
import {AnimatePresence, motion} from "framer-motion";
import {useRef, useState} from "react";

const navigation = [
  {
    title: 'Seiten',
    links: [
      { title: 'Über uns', href: '/about' },
      { title: 'Prozess', href: '/process' },
      { title: 'Kontakt', href: '/kontakt' },
    ],
  },
  {
    title: 'Dienstleistungen',
    links: [
      { title: 'Digitalisierung', href: '/digitalisierung' },/**
      { title: 'Webentwicklung ', href: '/web' },
      { title: '3D Virtualisierung & Game Dev ', href: '/gamedev' }, */
    ],
  },
  {
    title: 'Legal',
    links: [
      { title: 'Imprint', href: '/imprint' },
      { title: 'Privacy Policy ', href: '/datenschutz' },
    ],
  },
]

function Navigation() {
  return (
    <nav className="">
      <ul role="list" className="flex flex-wrap">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex} className="mx-8 mb-6">
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <NavSection section={section} />
          </li>
        ))}
      </ul>
    </nav>
  )
}
function NavSection({section}: { section: {title: string; links: { title: string; href: string }[] }}) {

    let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
    let timeoutRef = useRef<number | null>(null)

    return <ul role="list" className="mt-4 text-sm text-neutral-700">
        {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                    <Link
                            key={link.title}
                            href={link.href}
                            className="relative -mx-3 bg-gray-200 rounded-xl px-3 py-2 text-md text-gray-700 transition-colors delay-150 hover:text-gray-100 hover:delay-0 "
                            onMouseEnter={() => {
                                if (timeoutRef.current) {
                                    window.clearTimeout(timeoutRef.current)
                                }
                                setHoveredIndex(linkIndex)
                            }}
                            onMouseLeave={() => {
                                timeoutRef.current = window.setTimeout(() => {
                                    setHoveredIndex(null)
                                }, 200)
                            }}
                    >
                        <AnimatePresence>
                            {hoveredIndex === linkIndex && (
                                    <motion.span
                                            className="absolute inset-0 rounded-lg bg-gray-700"
                                            layoutId="hoverBackground"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1, transition: { duration: 0.15 } }}
                                            exit={{
                                                opacity: 0,
                                                transition: { duration: 0.15 },
                                            }}
                                    />
                            )}
                        </AnimatePresence>
                        <span className="relative z-10">{link.title}</span>
                    </Link>
                </li>
        ))}
    </ul>
}

function ArrowIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

function NewsletterForm() {
  return (
    <form className="max-w-sm">
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40 ">
      <FadeIn>
        <div className="flex place-content-between px-4 md:px-12 flex-wrap">
          <Navigation />
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
              <div className="flex flex-col gap-2 text-sm text-neutral-700">
                  <SocialMedia className="mt-6" />
                  <span>
                  © Ape Dev GmbH {new Date().getFullYear()}
                  </span>
              </div>
        </div>
      </FadeIn>
    </Container>
  )
}
