import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Team } from '@/components/Team'

export const metadata: Metadata = {
  title: 'Meet the Board',
}

const getMeetTheBoardPageContent = () => {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'meet-the-board.md',
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function MeetTheBoardPage() {
  const { team } = getMeetTheBoardPageContent()

  return (
    <>
      <Header />
      <main>
        <Team {...team} />
      </main>
      <Footer />
    </>
  )
}
