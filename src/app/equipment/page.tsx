import { type Metadata } from 'next'

import { EquipmentApplicationForm } from '@/components/EquipmentApplicationForm'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Equipment Support',
}

export default function EquipmentSupportPage() {
  return (
    <>
      <Header />
      <main>
        <EquipmentApplicationForm />
      </main>
      <Footer />
    </>
  )
}