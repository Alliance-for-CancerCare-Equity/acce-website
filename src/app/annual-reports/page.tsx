import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { AnnualReports } from '@/components/sections/about/AnnualReports'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

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
