import {type Metadata} from 'next'
import {PageIntro} from '@/components/PageIntro'

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
                        title="Impressum nach § 5 DDG
"
                >
                    <div className="bg-white px-4 py-classNamepx-6">
                        <div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Adresse</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            Ape Dev GmbH<br/>
                                            Sonnenkamp 37A<br/>
                                            21717 Fredenbeck
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Vertretungsberechtigt:</dt>
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
                                        <dt className="text-sm font-medium leading-6 text-gray-900">E-Mail-Addresse:</dt>
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
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Domains:</dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            https://ape-dev.de
                                        </dd>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            https://wissen.ape-dev.de
                                        </dd>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            https://kurse.ape-dev.de
                                        </dd>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            https://alexispeters.de
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Registerangaben:
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
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Umsatzsteuerangaben:
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:
                                            DE 365 243 422
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>

                        <div>
                            <div className="mt-6 border-t border-gray-100">
                                <dl className="divide-y divide-gray-100">
                                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt className="text-sm font-medium leading-6 text-gray-900">Konfliktlösung:
                                        </dt>
                                        <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                                            The European Commission provides a platform for online conflict
                                            resolution:https://ec.europa.eu/consumers/odr. You can find our e-mail
                                            address in the legal notice above. We are not willing or obliged to participate in
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
