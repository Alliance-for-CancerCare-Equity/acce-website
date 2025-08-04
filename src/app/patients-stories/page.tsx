import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { PatientsStories } from '@/components/sections/projects/PatientsStories'

export const metadata: Metadata = {
  title: 'Patients Stories',
}

const getPatientsStoriesPageContent = () => {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'patients-stories.md',
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function PatientsStoriesPage() {
  const { patients_stories } = getPatientsStoriesPageContent()

  return (
    <>
      <Header />
      <main>
        <PatientsStories {...patients_stories} />
      </main>
      <Footer />
    </>
  )
}
