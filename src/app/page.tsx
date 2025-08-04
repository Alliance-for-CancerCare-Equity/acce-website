import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Stats } from '@/components/Stats'

export const metadata: Metadata = {
  title: 'Home',
}

const getHomePageContent = () => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'home.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function Home() {
  const content = getHomePageContent()

  return (
    <>
      <Header />
      <main>
        <Hero {...content.hero} />
        <Stats {...content.stats} />
        <CallToAction {...content.call_to_action} />
      </main>
      <Footer />
    </>
  )
}
