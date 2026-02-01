import { type Metadata } from 'next'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Hope for Gilda',
}

export default function HopeForGildaPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-lavender-100 via-gold-50 to-teal-50">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold-300/30 rounded-full blur-3xl" />

          <Container className="relative py-20 sm:py-28">
            <div className="inline-flex items-center gap-2 rounded-full bg-lavender-100 px-4 py-1.5 text-sm font-medium text-lavender-700 ring-1 ring-inset ring-lavender-200 mb-6">
              Campaign
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl max-w-4xl">
              Hope for Gilda Tuffour: A 10-Year-Old Girl Fighting Brain Cancer
            </h1>
            <p className="mt-6 text-xl/8 text-charcoal-600 max-w-2xl">
              Join us in supporting Gilda as she bravely battles brain cancer. Every contribution brings her closer to the treatment she needs.
            </p>
          </Container>
        </section>

        {/* Coming Soon */}
        <section className="bg-lavender-50 py-20 sm:py-28">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex size-20 items-center justify-center rounded-full bg-lavender-100 text-lavender-600 mb-8">
                <svg className="size-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-bold text-charcoal-900">
                Full campaign details coming soon
              </h2>
              <p className="mt-4 text-lg text-charcoal-600">
                We are preparing more information about Gilda and how you can help. In the meantime, you can contribute directly to support her treatment.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button href="/giving-options" color="cta" size="lg">
                  Donate now
                </Button>
                <Button href="/contact-us" variant="outline" color="charcoal" size="lg">
                  Contact us
                </Button>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
