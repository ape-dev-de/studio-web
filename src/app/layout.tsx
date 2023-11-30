import { type Metadata } from 'next'

import { RootLayout } from '@/components/RootLayout'
import i18nextConfig from '../../next-i18next.config'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Ape Dev',
    default: 'Ape Dev - Software Development made in Germany',
  },icons: [
        {url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png'},
        {url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png'},
        {url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png'},
        {url: '/browserconfig.xml', rel: 'msapplication-config'},
        {url: '/favicon.ico', rel: 'shortcut icon'},
        {url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon'},
        {url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png'},
        {url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png'},
        {url: '/mstile-70x70.png', sizes: '70x70', rel: 'msapplication-square70x70logo'},
        {url: '/mstile-144x144.png', sizes: '144x144', rel: 'msapplication-square144x144logo'},
        {url: '/mstile-150x150.png', sizes: '150x150', rel: 'msapplication-TileImage'},
        {url: '/mstile-310x150.png', sizes: '310x150', rel: 'msapplication-TileImage'},
        {url: '/mstile-310x310.png', sizes: '310x310', rel: 'msapplication-TileImage'},
        {url: '/safari-pinned-tab.svg', color: '#5bbad5', rel: 'mask-icon'},
        {url: '/site.webmanifest', rel: 'manifest'},
    ],
}

export default function Layout(props: { children: React.ReactNode }) {
    return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <body className="flex min-h-full flex-col">
        <RootLayout>{props.children}</RootLayout>
      </body>
    </html>
  )
}
