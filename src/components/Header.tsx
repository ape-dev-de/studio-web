'use client'

import Link from 'next/link'
import {Popover} from '@headlessui/react'
import {AnimatePresence, motion} from 'framer-motion'

import {Button} from '@/components/Button'
import {Logo} from '@/components/Logo'
import {NavLinks} from '@/components/NavLinks'

function MenuIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
                <path
                        d="M5 6h14M5 18h14M5 12h14"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                />
            </svg>
    )
}

function CloseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
                <path
                        d="M17 14l-5-5-5 5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                />
            </svg>
    )
}

function MobileNavLink(
        props: Omit<
                React.ComponentPropsWithoutRef<typeof Popover.Button<typeof Link>>,
                'as' | 'className'
        >,
) {
    return (
            <Popover.Button
                    as={Link}
                    className="block text-base leading-7 tracking-tight text-gray-700"
                    {...props}
            />
    )
}

export function PocketHeader() {
    return (
            <header className="px-2 md:px-8 rounded-t-4xl">
                <nav>
                    <div className="relative 10 flex  justify-between py-8 gap-8 md:gap-10 lg:gap-12 pl-8">
                        <div className="md:flex md:gap-10">
                            <Link href="/" aria-label="Home">
                                <Logo className="h-10 w-auto"/>
                            </Link>
                        </div>
                        <div className="hidden md:flex md:gap-10 grow justify-center items-center">
                            <NavLinks/>
                        </div>
                        <div className="hidden md:flex md:gap-10 justify-center items-center">
                            <Button href="/kontakt" className="hidden md:block ">
                                Kontakt aufnehmen
                            </Button>
                        </div>
                        <Popover className="md:hidden flex  gap-8 mr-5">
                            {({open}) => (
                                    <>
                                        <Popover.Button
                                                className="relative z-10  inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                                                aria-label="Toggle site navigation"
                                        >
                                            {({open}) =>
                                                    open ? (
                                                            <CloseIcon className="h-8 w-8"/>
                                                    ) : (
                                                            <MenuIcon className="h-6 w-6"/>
                                                    )
                                            }
                                        </Popover.Button>
                                        <AnimatePresence initial={false}>
                                            {open && (
                                                    <>
                                                        <Popover.Overlay
                                                                static
                                                                as={motion.div}
                                                                initial={{opacity: 0}}
                                                                animate={{opacity: 1}}
                                                                exit={{opacity: 0}}
                                                                className="fixed inset-0 z-1 bg-gray-300/60 backdrop-blur"
                                                        />
                                                        <Popover.Panel
                                                                static
                                                                as={motion.div}
                                                                initial={{opacity: 0, y: -32}}
                                                                animate={{opacity: 1, y: 0}}
                                                                exit={{
                                                                    opacity: 0,
                                                                    y: -32,
                                                                    transition: {duration: 0.2},
                                                                }}
                                                                className="absolute inset-x-0 top-0 z-0 origin-top rounded-2xl bg-gray-50 p-6 shadow-2xl shadow-gray-900/20 gap-4 flex flex-col"
                                                        >
                                                            <Link href="/"><Logo></Logo></Link>
                                                            <div className="space-y-6 mt-8">
                                                                <MobileNavLink href="/about">
                                                                    Über uns
                                                                </MobileNavLink>
                                                                <MobileNavLink href="/process">
                                                                    Prozess
                                                                </MobileNavLink>
                                                            </div>
                                                            <div className="mt-8 flex flex-col gap-4">
                                                                <Button href="/kontakt">Kontakt aufnehmen</Button>
                                                            </div>
                                                        </Popover.Panel>
                                                    </>
                                            )}
                                        </AnimatePresence>
                                    </>
                            )}
                        </Popover>
                    </div>
                </nav>
            </header>
    )
}
