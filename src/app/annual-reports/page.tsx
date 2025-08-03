import { type Metadata } from 'next'

import { AnnualReports } from '@/components/AnnualReports'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Annual Reports',
}

export default function AnnualReportsPage() {
  return (
    <>
      <Header />
      <main>
        <AnnualReports />
      </main>
      <Footer />
    </>
  )
}