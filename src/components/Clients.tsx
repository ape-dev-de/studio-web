import {Container} from "@/components/Container";
import {FadeIn, FadeInStagger} from "@/components/FadeIn";
import Image, {StaticImageData} from "next/image";

export  default function Clients({clients}: {clients: {client: string, logo: StaticImageData, url: string}[]}) {
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
                            {clients.map(({client, logo, url}) => (
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