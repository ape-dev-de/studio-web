import {useTranslation} from "next-i18next";
import {PageIntro} from "@/components/PageIntro";
import React from "react";
import {SectionIntro} from "@/components/SectionIntro";
import {GridList, GridListItem} from "@/components/GridList";
import {Container} from "@/components/Container";
import {ContactSection} from "@/components/ContactSection";

export function AboutPage() {
    const {t} = useTranslation('common');

    return <>
        <PageIntro eyebrow={t("About Us Eyebrow")} title={t("About Us Title")}>
            <div className="mt-10 max-w-2xl space-y-6 text-base">
                <p>
                    {t("About Us Intro")}
                </p><p>
                {t("About Us Intro2")}

            </p>
            </div>
        </PageIntro>

        <Culture/>

        <ContactSection />
    </>

}


function Culture() {
    const {t} = useTranslation('common');
    return (
            <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
                <SectionIntro
                        eyebrow={t("Slogan Label")}
                        title={t("Slogan")}
                        invert
                >
                    <p>
                        {t("Culture")}
                    </p>
                </SectionIntro>
                <Container className="mt-16">
                    <GridList>
                        <GridListItem title={t("Culture People Label")} invert>
                            {t("Culture People")}
                        </GridListItem>
                        <GridListItem title={t("Culture People Label")} invert>
                            {t("Culture People")}
                        </GridListItem>
                        <GridListItem title={t("Culture Technology Label")} invert>
                            {t("Culture Technology")}
                        </GridListItem>
                    </GridList>
                </Container>
            </div>
    )
}