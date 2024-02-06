import {type Metadata} from 'next'
import Image from 'next/image'
import Link from 'next/link'

import {Blockquote} from '@/components/Blockquote'
import {Border} from '@/components/Border'
import {Button} from '@/components/Button'
import {ContactSection} from '@/components/ContactSection'
import {Container} from '@/components/Container'
import {FadeIn, FadeInStagger} from '@/components/FadeIn'
import {PageIntro} from '@/components/PageIntro'
import {Testimonial} from '@/components/Testimonial'
import logoEsn from '@/images/clients/esn/esn_logo.svg'
import {formatDate} from '@/lib/formatDate'
import {type CaseStudy, type MDXEntry, loadCaseStudies} from '@/lib/mdx'

export const metadata: Metadata = {
    title: 'Imprint - Ape Dev',
    description:
            'Legal information about Ape Dev, including kontakt details and legal notices.',
}

export default async function Imprint() {

    return (
            <>
                <PageIntro
                        eyebrow="Legal Notice"
                        title="Details according to § 5 TMG (German Telemedia Act)
"
                >
                    <div className="bg-white px-4 py-classNamepx-6">
                        <div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Address</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            Ape Dev GmbH<br/>
                                            Birkenweg 5F<br/>
                                            21717 Deinste
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Represented by:</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            Alexis Peters
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Phone:</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            (+49) 04149 233 9823
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Email:</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            info@ape-dev.de
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Domain:</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            https://ape-dev.de
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Registration court
                                            and registration number:
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            Handelsregister B des
                                            Amtsgerichts Tostedt, HRB 210 340
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Conflict
                                            resolution:
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            The European Commission provides a platform for online conflict
                                            resolution:https://ec.europa.eu/consumers/odr. You can find our e-mail address
                                            in the legal notice above.We are not willing or obliged to participate in
                                            conflict resolution proceedings before a consumer arbitration board.
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </div>


                </PageIntro>
            </>
    )
}
