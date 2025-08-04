import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { InvolvedPage } from '@/components/InvolvedPage'

export const metadata: Metadata = {
  title: 'Become a Volunteer',
}

const getVolunteerPageContent = () => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'volunteer.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function VolunteerPage() {
  const { involved_page } = getVolunteerPageContent()

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
