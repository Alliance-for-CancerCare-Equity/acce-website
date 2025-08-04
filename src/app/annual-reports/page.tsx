import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { AnnualReports } from '@/components/AnnualReports'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Annual Reports',
}

const getAnnualReportsPageContent = () => {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'annual-reports.md',
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function AnnualReportsPage() {
  const { annual_reports } = getAnnualReportsPageContent()

  return (
    <>
      <Header />
      <main>
        <AnnualReports {...annual_reports} />
      </main>
      <Footer />
    </>
  )
}
