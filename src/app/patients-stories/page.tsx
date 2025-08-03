import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { PatientsStories } from '@/components/PatientsStories'

export const metadata: Metadata = {
  title: 'Patients Stories',
}

export default function PatientsStoriesPage() {
  return (
    <>
      <Header />
      <main>
        <PatientsStories />
      </main>
      <Footer />
    </>
  )
}