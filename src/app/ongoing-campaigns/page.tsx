import { type Metadata } from 'next'

import { Campaigns } from '@/components/Campaigns'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Ongoing Campaigns',
}

export default function OngoingCampaignsPage() {
  return (
    <>
      <Header />
      <main>
        <Campaigns />
      </main>
      <Footer />
    </>
  )
}
