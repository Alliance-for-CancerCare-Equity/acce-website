import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { GetInvolved } from '@/components/GetInvolved'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Get Involved',
}

export default function GetInvolvedPage() {
  return (
    <>
      <Header />
      <main>
        <GetInvolved />
      </main>
      <Footer />
    </>
  )
}
