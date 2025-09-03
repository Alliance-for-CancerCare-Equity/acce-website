import { type Metadata } from 'next'
import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'
import favicon from '../../public/acce_logo.svg'

export const metadata: Metadata = {
  title: {
    template: '%s | ACCE',
    default: 'ACCE',
  },
  description:
    'ACCE is a registered charity in Canada dedicated to advancing equity in cancer care, from prevention through survivorship.',
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
    title: 'ACCE',
    siteName: 'Alliance for CancerCare Equity',
    description:
      'ACCE is a registered charity in Canada dedicated to advancing equity in cancer care, from prevention through survivorship.',
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
  themeColor: '#2563eb',
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
    icon: favicon.src,
  },
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
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
