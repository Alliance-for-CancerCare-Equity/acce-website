import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { About } from '@/components/sections/about/About'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Who We Are',
}

const getWhoWeArePageContent = () => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'who-we-are.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function WhoWeArePage() {
  const { about_us_page } = getWhoWeArePageContent()

  return (
    <>
      <Header />
      <main>
        <About {...about_us_page} />
      </main>
      <Footer />
    </>
  )
}