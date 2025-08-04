import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { WaysToGive } from '@/components/WaysToGive'

export const metadata: Metadata = {
  title: 'Ways to Give',
}

const getWaysToGivePageContent = () => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'ways-to-give.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function WaysToGivePage() {
  const { ways_to_give_page } = getWaysToGivePageContent()

  return (
    <>
      <Header />
      <main>
        <WaysToGive {...ways_to_give_page} />
      </main>
      <Footer />
    </>
  )
}
