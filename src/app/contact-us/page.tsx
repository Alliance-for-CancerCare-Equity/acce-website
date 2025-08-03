import { type Metadata } from 'next'

import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Contact Us',
}

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main>
        <Contact />
      </main>
      <Footer />
    </>
  )
}
