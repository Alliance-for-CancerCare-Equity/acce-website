import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProjectPage } from '@/components/ProjectPage'

export const metadata: Metadata = {
  title: 'Promote and Advance Cancer Research',
}

const getPageContent = () => {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'promote-and-advance-cancer-research.md',
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function PromoteAndAdvanceCancerResearchPage() {
  const { project_page } = getPageContent()

  return (
    <>
      <Header />
      <main>
        <ProjectPage {...project_page} />
      </main>
      <Footer />
    </>
  )
}