import { type Metadata } from 'next'

import { Header } from '@/components/layout/Header'
import { NewsletterSubscribe } from '@/components/sections/NewsletterSubscribe'
import { NeedsSpotlight } from '@/components/sections/NeedsSpotlight'
import { StoriesCarousel } from '@/components/sections/StoriesCarousel'
import { JourneyTimeline } from '@/components/sections/JourneyTimeline'
import { ImpactCalculator } from '@/components/sections/ImpactCalculator'
import { CommunityWall } from '@/components/sections/CommunityWall'
import { PathwayCards } from '@/components/sections/PathwayCards'
import { Footer } from '@/components/layout/Footer'
import { Hero } from '@/app/home-sections'

export const metadata: Metadata = {
  title: 'Home',
}

const homePageContent = {
  hero: {
    title_part1: 'Advancing Equity in Cancer Care',
    title_part2_styled: 'for All',
    subtitle:
      'The Alliance for CancerCare Equity (ACCE) is on a mission to ensure that every cancer patient receives equitable, high-quality care, regardless of their financial status. We provide compassionate support for patients and their families throughout their entire journey.',
    button1: {
      text: 'Donate',
      href: '/giving-options',
    },
    button2: {
      text: 'Learn More',
      href: '/who-we-are',
    },
    eventButton: {
      text: '2026 Cancer Awareness Event',
      href: '/events/empowering-communities-2026',
    },
  },
  newsletter: {
    title: 'Stay Updated',
    subtitle: 'Subscribe to our newsletter to receive the latest news, stories, and impact reports.',
  },
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header overlay />
      <main>
        <Hero {...homePageContent.hero} />
        <NeedsSpotlight />
        <StoriesCarousel />
        <JourneyTimeline />
        <ImpactCalculator />
        <CommunityWall />
        <PathwayCards />
        <NewsletterSubscribe {...homePageContent.newsletter} />
      </main>
      <Footer />
    </div>
  )
}
