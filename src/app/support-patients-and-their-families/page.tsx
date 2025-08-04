import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ProjectPage } from '@/components/sections/projects/ProjectPage'

export const metadata: Metadata = {
  title: 'Support Patients and their Families',
}

const getPageContent = () => {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'support-patients-and-their-families.md',
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function SupportPatientsAndTheirFamiliesPage() {
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