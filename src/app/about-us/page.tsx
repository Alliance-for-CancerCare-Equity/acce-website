import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { About } from '@/components/About'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'About Us',
}

const getAboutUsPageContent = () => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'about-us.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function AboutUsPage() {
  const { about_us_page } = getAboutUsPageContent()

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