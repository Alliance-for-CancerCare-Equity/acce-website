import { type Metadata } from 'next'

import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'About Us',
}

export default function AboutUsPage() {
  return (
    <>
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </>
  )
}