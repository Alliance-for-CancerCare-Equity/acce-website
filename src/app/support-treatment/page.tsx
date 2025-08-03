import { type Metadata } from 'next'

import { ApplicationForm } from '@/components/ApplicationForm'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Treatment Support',
}

export default function TreatmentSupportPage() {
  return (
    <>
      <Header />
      <main>
        <ApplicationForm />
      </main>
      <Footer />
    </>
  )
}