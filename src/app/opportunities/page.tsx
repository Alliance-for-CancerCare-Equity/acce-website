import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/layout/Footer'
import { GetInvolved } from '@/components/sections/involved/GetInvolved'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Opportunities',
}

const getOpportunitiesPageContent = () => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'opportunities.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function OpportunitiesPage() {
  const { get_involved } = getOpportunitiesPageContent()

  return (
    <>
      <Header />
      <main>
        <GetInvolved {...get_involved} />
      </main>
      <Footer />
    </>
  )
}