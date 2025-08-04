import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { InvolvedPage } from '@/components/sections/involved/InvolvedPage'

export const metadata: Metadata = {
  title: 'Become a Partner',
}

const getPartnerWithUsPageContent = () => {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'partner-with-us.md',
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function PartnerWithUsPage() {
  const { involved_page } = getPartnerWithUsPageContent()

  return (
    <>
      <Header />
      <main>
        <InvolvedPage {...involved_page} />
      </main>
      <Footer />
    </>
  )
}
