import { type Metadata } from 'next'
import Link from 'next/link'

import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'

/**
 * `accecan.ca/donate` is printed on ACCE campaign materials but was never a
 * route, so it returned a 404. The site is a static export, so there is no
 * server to issue a 3xx — this page forwards with a meta refresh and shows a
 * link as the fallback.
 */
const TARGET = '/giving-options'

export const metadata: Metadata = {
  alternates: { canonical: '/giving-options' },
  title: 'Donate',
  description: 'Ways to give to the Alliance for CancerCare Equity.',
  robots: { index: false, follow: true },
}

export default function DonateRedirect() {
  return (
    <>
      <meta httpEquiv="refresh" content={`0; url=${TARGET}`} />
      <main className="flex min-h-full flex-col items-center justify-center bg-gradient-hero px-6 py-24 text-center">
        <Link href="/home" aria-label="Home">
          <Logo className="h-12 w-auto" />
        </Link>
        <h1 className="mt-10 font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
          Taking you to our giving options&hellip;
        </h1>
        <p className="mt-4 max-w-lg text-lg/8 text-charcoal-600">
          If you are not redirected automatically, use the button below to
          choose how you would like to give.
        </p>
        <div className="mt-10">
          <Button href={TARGET} color="cta" size="lg">
            Continue to giving options
          </Button>
        </div>
      </main>
    </>
  )
}
