import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { EquipmentApplicationForm } from '@/components/forms/EquipmentApplicationForm'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Equipment Support',
}

const getEquipmentSupportPageContent = () => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'equipment.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function EquipmentSupportPage() {
  const { equipment_application_form } = getEquipmentSupportPageContent()

  return (
    <>
      <Header />
      <main>
        <EquipmentApplicationForm {...equipment_application_form} />
      </main>
      <Footer />
    </>
  )
}
