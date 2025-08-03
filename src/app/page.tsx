import { type Metadata } from 'next'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'

export const metadata: Metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Stats />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}