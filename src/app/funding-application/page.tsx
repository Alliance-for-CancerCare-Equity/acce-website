import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/layout/Footer'
import { FundingApplication } from '@/components/forms/FundingApplication'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Funding Application',
}

const getFundingApplicationPageContent = () => {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'funding-application.md',
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function FundingApplicationPage() {
  const { funding_application } = getFundingApplicationPageContent()

  return (
    <>
      <Header />
      <main>
        <FundingApplication {...funding_application} />
      </main>
      <Footer />
    </>
  )
}