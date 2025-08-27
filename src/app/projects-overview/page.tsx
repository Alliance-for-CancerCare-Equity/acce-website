import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { OurProjects } from '@/components/sections/projects/OurProjects'

export const metadata: Metadata = {
  title: 'Projects Overview',
}

const getProjectsOverviewPageContent = () => {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'projects-overview.md',
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function ProjectsOverviewPage() {
  const { our_projects } = getProjectsOverviewPageContent()

  return (
    <>
      <Header />
      <main>
        <OurProjects {...our_projects} />
      </main>
      <Footer />
    </>
  )
}