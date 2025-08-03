import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Patients Stories',
}

export default function PatientsStoriesPage() {
  return (
    <>
      <Header />
      <main>
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Patients Stories
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
