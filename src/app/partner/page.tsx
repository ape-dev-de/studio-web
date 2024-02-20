import {type Metadata} from 'next'
import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {GridList, GridListItem} from '@/components/GridList'
import {PageIntro} from '@/components/PageIntro'
import {SectionIntro} from '@/components/SectionIntro'
import {Button} from "@/components/Button";
import Image from "next/image";
import MicrosoftLogo from '@/images/partner/RWCZER.avif';
import WortmannLogo from '@/images/partner/terra-185px.png';

function Points() {
    return (
            <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
                <SectionIntro
                        eyebrow="externe Partner"
                        title="ein Auszug aus unserem Netzwerk an starken Partnern"
                        invert
                >
                </SectionIntro>
                <Container className="mt-16">
                    <GridList maxGridCols={2}>
                        <GridListItem title="Microsoft" invert>
                            <a href="https://microsoft.com" rel="nofollow"><Image src={MicrosoftLogo} className="bg-white h-40 w-auto" alt="Microsoft" unoptimized/></a>
                            <p className={"mt-6"}>Wir Sind Microsoft Partner und vertreiben, installieren und administrieren Microsoft Produkte, wie M365, Azure und Dynamics 365.</p>
                        </GridListItem>
                        <GridListItem title="Wortmann AG" invert>
                            <a href="https://wortmann.de" rel="nofollow"><Image src={WortmannLogo} className="bg-white  h-40 w-auto" alt="Wortmann" unoptimized/></a>
                            <p className={"mt-6"}>
                            Die Wortmann AG (Terra) ist unser Partner wenn es um komplizierte Enterprise-Setups geht.
                            </p>
                        </GridListItem>
                    </GridList>
                    <GridList maxGridCols={3} className={"mt-16"}>
                        <GridListItem title="branchenverzeichnis.org" invert>
                            <a href="https://branchenverzeichnis.org" rel="nofollow">Branchenverzeichnis.org</a>
                        </GridListItem>
                    </GridList>
                </Container>
            </div>
    )
}

export const metadata: Metadata = {
    title: 'Partner',
    description:
            'Wir operieren mit einem Netzwerk aus Partnern, wollen sie dazugehören, dann melden sie sich bei uns.',
}

export default async function About() {
    return (
            <>
                <PageIntro eyebrow="Partner"
                           title="Wir operieren als Ihr technischer Partner">
                    <div className="mt-10 space-y-6 text-base">
                        <p>
                            Wir bei Ape Dev GmbH sind mehr als nur Entwickler. Wir sind Ihr technischer Partner, der
                            eng mit Ihnen zusammenarbeitet, um Ihre Visionen in die digitale Realität umzusetzen.
                        </p>
                        <p className="mt-6">
                            Um das zu erreichen arbeiten wir eng mit Ihnen zusammen, um Ihre Anforderungen zu verstehen.
                            Wir lagern keine Teile des Projekts in andere Länder oder regionen aus, sondern arbeiten
                            ausschließlich mit unserem eigenen Team in Deutschland.
                        </p>
                        <p className="mt-6">
                            Um das zu erreichen arbeiten wir mit einigen Partnern zusammen, die uns dabei helfen,
                            spezifische Ziele zu erreichen oder sie bestmöglich zu beraten.
                            Jedes Projekt wir unter einer NDA behandelt und wir garantieren, dass Ihre Daten bei uns sicher sind.
                            Sollten wir Daten an Dritte weitergeben, so geschieht dies nur mit Ihrer ausdrücklichen Zustimmung.
                        </p>
                        <p className="flex space-evenly gap-12">
                            <Button href="/kontakt">
                                Sie gehören hierher? Kontaktieren Sie uns!
                            </Button>
                        </p>
                    </div>
                </PageIntro>

                <Points></Points>

                <ContactSection/>
            </>
    )
}
