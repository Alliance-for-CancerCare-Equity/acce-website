import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Team } from '@/components/Team'

export const metadata: Metadata = {
  title: 'Meet the Board',
}

export default function MeetTheBoardPage() {
  return (
    <>
      <Header />
      <main>
        <Team />
      </main>
      <Footer />
    </>
  )
}