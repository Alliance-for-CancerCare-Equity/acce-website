import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { WaysToGive } from '@/components/WaysToGive'

export const metadata: Metadata = {
  title: 'Ways to Give',
}

export default function WaysToGivePage() {
  return (
    <>
      <Header />
      <main>
        <WaysToGive />
      </main>
      <Footer />
    </>
  )
}
