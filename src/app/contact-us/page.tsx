import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

export const metadata: Metadata = {
  title: 'Contact Us',
}

const getContactUsPageContent = () => {
  const filePath = path.join(process.cwd(), 'src', 'content', 'contact-us.md')
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function ContactUsPage() {
  const { contact } = getContactUsPageContent()

  return (
    <>
      <Header />
      <main>
        <Contact {...contact} />
      </main>
      <Footer />
    </>
  )
}