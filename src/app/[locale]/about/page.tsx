import {type Metadata} from 'next'
import React from "react";
import {AboutPage} from "@/pages/About";


export const metadata: Metadata = {
    title: 'About Us',
    description:
            'We believe that our strength lies in our collaborative approach, which puts our clients at the center of everything we do.',
}

export default async function About() {
    return <AboutPage />
}
