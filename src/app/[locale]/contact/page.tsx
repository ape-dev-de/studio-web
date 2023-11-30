import {type Metadata} from 'next'
import {PageIntro} from '@/components/PageIntro'
import {ContactForm} from "@/components/Contact/ContactForm";
import {ContactPage} from "@/components/Contact/ContactPage";
import {ContactDetails} from "@/components/Contact/ContactDetails";

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Let’s work together. We can’t wait to hear from you.',
}

export default function Contact() {
    return (
            <>
                <PageIntro eyebrow="Contact us" title="Let’s work together">
                    <p>We can’t wait to hear from you.</p>
                </PageIntro>

                <ContactPage>
                    <ContactForm/>
                    <ContactDetails offices="Our offices" officesText="
                    We&apos;re a 100% Remote Company. If you want to meet us in person instead, give us a mail and
                    we&apos;ll meet you at your office."
                                    emails={[
                                        {
                                            label: 'Inquiries',
                                            email: 'info@ape-dev.[locale]'
                                        }]}
                                    email="Email us"

                    />
                </ContactPage>
            </>
    )
}
