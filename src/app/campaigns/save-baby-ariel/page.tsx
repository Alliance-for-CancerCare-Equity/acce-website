import { type Metadata } from 'next'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: "Save Baby Ariel's Life",
}

export default function SaveBabyArielPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-gold-100 via-lavender-50 to-teal-50">
          <div className="absolute inset-0 bg-dot-pattern opacity-20" />
          <div className="absolute top-20 left-10 w-72 h-72 bg-gold-300/30 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-lavender-300/30 rounded-full blur-3xl" />

          <Container className="relative py-20 sm:py-28">
            <div className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-sm font-medium text-gold-700 ring-1 ring-inset ring-gold-200 mb-6">
              Urgent Campaign
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl max-w-4xl">
              Save Baby Ariel&apos;s Life: She&apos;s Only 14 Months and Fighting Liver Cancer
            </h1>
            <p className="mt-6 text-xl/8 text-charcoal-600 max-w-2xl">
              Baby Ariel needs urgent treatment for liver cancer. Your support can help save her life and give her a chance at a healthy future.
            </p>
          </Container>
        </section>

        {/* Coming Soon */}
        <section className="bg-gold-50 py-20 sm:py-28">
          <Container>
            <div className="mx-auto max-w-2xl text-center">
              <div className="inline-flex size-20 items-center justify-center rounded-full bg-gold-100 text-gold-600 mb-8">
                <svg className="size-10" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <h2 className="font-display text-3xl font-bold text-charcoal-900">
                Full campaign details coming soon
              </h2>
              <p className="mt-4 text-lg text-charcoal-600">
                We are preparing more information about Baby Ariel and her treatment needs. Your donation today can make an immediate difference.
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
