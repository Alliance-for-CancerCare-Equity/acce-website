import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Champions } from '@/components/sections/about/Champions'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'ACCE Champions',
}

const getAcceChampionsPageContent = () => {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'acce-champions.md',
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function AcceChampionsPage() {
  const { champions } = getAcceChampionsPageContent()

  return (
    <>
      <Header />
      <main>
        <Champions {...champions} />
      </main>
      <Footer />
    </>
  )
}