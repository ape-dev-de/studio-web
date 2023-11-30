import i18nextConfig from "../../next-i18next.config";
import {redirect} from "next/navigation";

export default async function HomeDefault(query: {locale: string}) {

    let locale: string = query.locale;

    if (locale == undefined || i18nextConfig.i18n.locales.includes(locale)) {
        locale = i18nextConfig.i18n.defaultLocale
    }

    return redirect(`/${locale}/`);
}