import { type Metadata, type Viewport } from 'next'
import Script from 'next/script'
import { Analytics } from '@vercel/analytics/next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000'),
  title: {
    template: '%s | Alliance for CancerCare Equity',
    default: 'Alliance for CancerCare Equity (ACCE) | Advancing Equity in Cancer Care',
  },
  description:
    'ACCE is a registered Canadian charity funding cancer treatment, supporting patients and families, and advancing equity in cancer care across Ghana and Canada.',
  keywords: [
    'cancer care',
    'equity',
    'charity',
    'nonprofit',
    'patient support',
    'Ghana',
    'Canada',
    'healthcare access',
  ],
  authors: [{ name: 'Alliance for CancerCare Equity (ACCE)' }],
  creator: 'Alliance for CancerCare Equity (ACCE)',
  publisher: 'Alliance for CancerCare Equity (ACCE)',
  category: 'Charity',
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    title: 'Alliance for CancerCare Equity (ACCE)',
    siteName: 'Alliance for CancerCare Equity',
    description:
      'ACCE is a registered Canadian charity funding cancer treatment, supporting patients and families, and advancing equity in cancer care across Ghana and Canada.',
    url: '/',
    images: [
      {
        url: '/images/about_us.jpg',
        width: 1200,
        height: 630,
        alt: 'Alliance for CancerCare Equity',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alliance for CancerCare Equity (ACCE)',
    description:
      'Advancing equity in cancer care through treatment funding and support.',
    images: ['/images/about_us.jpg'],
    creator: '@ACCE_CA',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  icons: {
    icon: [
      { url: '/acce_logo.svg', type: 'image/svg+xml' },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#2563eb',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={clsx(
        'h-full scroll-smooth bg-white antialiased font-sans',
        inter.variable,
        lexend.variable,
      )}
    >
      <body suppressHydrationWarning className="flex h-full flex-col">
        {children}
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-16499928311"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16499928311');
          `}
        </Script>
        <Analytics />
      </body>
    </html>
  )
}
