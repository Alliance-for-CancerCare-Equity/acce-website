import { type Metadata } from 'next'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Save Baby Ariel’s Life',
}

export default function SaveBabyArielPage() {
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Save Baby Ariel’s Life: She’s Only 14 Months and Fighting Liver
            Cancer
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
