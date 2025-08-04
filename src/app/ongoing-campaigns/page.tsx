import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

import { Campaigns } from '@/components/sections/campaigns/Campaigns'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Ongoing Campaigns',
}

const getOngoingCampaignsPageContent = () => {
  const filePath = path.join(
    process.cwd(),
    'src',
    'content',
    'ongoing-campaigns.md',
  )
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { data } = matter(fileContents)
  return data
}

export default function OngoingCampaignsPage() {
  const { ongoing_campaigns_page } = getOngoingCampaignsPageContent()

  return (
    <>
      <Header />
      <main>
        <Campaigns {...ongoing_campaigns_page} />
      </main>
      <Footer />
    </>
  )
}
