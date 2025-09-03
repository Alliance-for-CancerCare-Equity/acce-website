import { type Metadata } from 'next'

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
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Hope for Gilda Tuffour: A 10-Year-Old Girl Fighting Brain Cancer
          </h1>
          <p className="mt-6 text-lg/8 text-slate-600">
            This page is coming soon. Please check back later for more
            information.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
