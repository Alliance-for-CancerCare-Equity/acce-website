import { type Metadata } from 'next'

import { Champions } from '@/components/Champions'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'ACCE Champions',
}

export default function AcceChampionsPage() {
  return (
    <>
      <Header />
      <main>
        <Champions />
      </main>
      <Footer />
    </>
  )
}
