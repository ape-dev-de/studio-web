import {type Metadata} from 'next'

import {ContactSection} from '@/components/ContactSection'
import {Button} from "@/components/Button";
import logoFestglanz from "@/images/clients/festglanz/festglanz_deko_logo_brush.png";
import logoHolidayHost from "@/images/clients/holidayhost/NoBorderWhiteBG_Holiday_Host_Logo.png.webp";
import Clients from "@/components/Clients";
import {Border} from "@/components/Border";
import {FadeIn, FadeInStagger} from "@/components/FadeIn";
import {Container} from "@/components/Container";
import imageSuccess from "@/images/success@0.5x.webp";
import {Section} from "@/components/Section";

export const metadata: Metadata = {
    title: 'Digitalisierung',
    description:
            'Durch innovativen iterativen Prozess und Synergy aus Fachexpertise und ihrem Business Know-How zum Erfolg',
}

const clients = [
    {client: 'Festglanz', logo: logoFestglanz, url: 'https://festglanz.de/'},
    {client: 'Holiday Host', logo: logoHolidayHost, url: 'https://holidayhost.de/'},
]
export default async function Digitalisierung() {
    return (
            <>
                <Container
                        className="mt-24"
                >
                        <h1>
                          <span className="block font-display text-base font-semibold text-neutral-950">
                            Digitalisierung
                          </span>
                            <span className="sr-only"> - </span>
                            <span
                                    className="mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl"
                            >
                            Digitalisierung vorantreiben, gemeinsam Innovationen schaffen
                          </span>
                        </h1>
                        <div
                                className="mt-10 text-xl text-neutral-600"
                        >
                            <div className="flex flex-wrap md:flex-nowrap justify-between gap-10">
                                <FadeInStagger>
                                    <dl>
                                        <Border as={FadeIn} position="left" className="pl-8 mb-6">
                                            <dd className="font-display ">
                                                Umsatz und Gewinn steigern
                                            </dd>
                                        </Border>
                                        <Border as={FadeIn} position="left" className="pl-8 mb-6">
                                            <dd className="font-display ">
                                                Arbeitsaufwand und Kosten reduzieren
                                            </dd>
                                        </Border>
                                        <Border as={FadeIn} position="left" className="pl-8 mb-6">
                                            <dd className="font-display ">
                                                Hand in Hand mit <b>IHREM Business</b>
                                            </dd>
                                        </Border>
                                        <Border as={FadeIn} position="left" className="pl-8 mb-6">
                                            <dd className="font-display ">
                                                Beratung vor Ort
                                            </dd>
                                        </Border>

                                    </dl>
                                </FadeInStagger>
                                <div className="w-600 grow">
                                    <iframe className="max-w-[100%]" width="600" height="315"
                                            src="https://www.youtube-nocookie.com/embed/0dBcVxxzX-M?si=pyFx7qFlD-nqy-Mx"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            allowFullScreen></iframe>
                                </div>
                            </div>
                            <p className="flex place-content-between md:place-content-start gap-12 m-10">
                                <Button className="px-10" href="https://tidycal.com/ape-dev/digitalisierung"
                                        target="_blank"
                                        rel="nofollow">
                                    Kostenlose Beratung buchen
                                </Button>
                                <Button className="px-10" href="/process">
                                    Mehr erfahren
                                </Button>
                            </p>
                        </div>
                </Container>

                <Section title="Erfolg durch Digitalisierung" image={{src: imageSuccess}} counter={false}>
                    <FadeInStagger>
                        <div className="space-y-6 text-base text-neutral-600">
                            <p>
                                Digitalisierung ist ein Sammelbegriff für Prozesse und Techniken die im Alltag helfen administrative Arbeiten teilweise oder vollständig zu automatisieren.
                            </p>
                            <dl className="divide-y divide-gray-100">
                                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Umsatzsteigernd</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                                        Steigern Sie Ihren Umsatz und Gewinn mit Ape Dev GmbH, und das mit
                                        noch weniger
                                        Arbeitsaufwand.
                                        Maßgeschneiderte Digitalstrategien, die Ihre Prozesse optimieren und
                                        Ihre
                                        Online-Präsenz revolutionieren.
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Flexibel</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                                            Wir arbeiten immer Hand in Hand mit unseren Kunden, denn es
                                            ist <b> IHR
                                            Business</b>.
                                            Wir erarbeiten gemeinsam mit Ihnen die beste Lösung für Ihr
                                            Unternehmen, indem
                                            wir unsere Fachkenntnisse mit Ihren Betriebserfahrungen kombinieren.
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Vor Ort</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                                        Gerne kommen wir vorbei und analysieren und Beraten vor ort in
                                        den Regionen
                                        zwischen Bremen, Stade und Hamburg.
                                    </dd>
                                </div>
                                <div className="px-4 py-6 sm:grid sm:grid-cols-4 sm:gap-4 sm:px-0">
                                    <dt className="text-sm font-medium leading-6 text-gray-900">Kosteneffizient</dt>
                                    <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-3 sm:mt-0">
                                        Die Einsparungen in Geld oder Arbeitskraft rentieren sich häufig schon in den ersten 3 Monaten <br />
                                        Wir bieten echten Service und rechnen nur tatsächlich geleistete Arbeit ab.<br/>
                                        Keine Pakete und keine versteckten Kosten.
                                    </dd>
                                </div>
                            </dl>
                        </div>

                    </FadeInStagger>
                </Section>


                <Clients clients={clients}/>
                <ContactSection/>
            </>
    )
}
