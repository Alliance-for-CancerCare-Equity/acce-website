import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/layout/Footer'
import { GetInvolved } from '@/components/sections/involved/GetInvolved'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Get Involved',
}

const getGetInvolvedPageContent = () => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'get-involved.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function GetInvolvedPage() {
  const { get_involved } = getGetInvolvedPageContent()

  return (
    <>
      <Header />
      <main>
        <GetInvolved {...get_involved} />
      </main>
      <Footer />
    </>
  )
}