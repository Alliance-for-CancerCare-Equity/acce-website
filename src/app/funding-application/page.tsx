import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { FundingApplication } from '@/components/FundingApplication'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Funding Application',
}

export default function FundingApplicationPage() {
  return (
    <>
      <Header />
      <main>
        <FundingApplication />
      </main>
      <Footer />
    </>
  )
}
