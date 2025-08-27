import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { WaysToGive } from '@/components/sections/giving/WaysToGive'

export const metadata: Metadata = {
  title: 'Giving Options',
}

const getGivingOptionsPageContent = () => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'giving-options.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function GivingOptionsPage() {
  const { ways_to_give_page } = getGivingOptionsPageContent()

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
