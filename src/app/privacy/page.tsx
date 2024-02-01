import {Metadata} from "next";
import {redirect} from "next/navigation";
import {RedirectType} from "next/dist/client/components/redirect";


export const metadata: Metadata = {
    title: 'Privacy',
    description: 'Lassen Sie uns zusammenarbeiten. Wir freuen uns auf Ihre Nachricht.'
}

export default function Privacy() {
    return redirect('/datenschutz', RedirectType.replace)
};
