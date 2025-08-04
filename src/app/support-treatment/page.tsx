import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { ApplicationForm } from '@/components/ApplicationForm'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Treatment Support',
}

const getSupportTreatmentPageContent = () => {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'support-treatment.md',
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function TreatmentSupportPage() {
  const { application_form } = getSupportTreatmentPageContent()

  return (
    <>
      <Header />
      <main>
        <ApplicationForm {...application_form} />
      </main>
      <Footer />
    </>
  )
}
