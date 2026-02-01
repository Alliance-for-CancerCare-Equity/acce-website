import { type Metadata } from 'next'

import { Header } from '@/components/layout/Header'
import { NewsletterSubscribe } from '@/components/sections/NewsletterSubscribe'
import { CallToAction, FeatureStory, Hero, MissionPreview, Stats } from '@/app/home-sections'

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
  stats: {
    title: 'Our track record',
    subtitle: 'Turning generosity into lifesaving care',
    description:
      "We are proud of the progress we've made in the fight for cancer care equity.",
    items: [
      {
        name: 'Amount Raised',
        value: 100,
        prefix: '$',
        suffix: 'k+',
        animate: true,
      },
      {
        name: 'Patients Supported',
        value: 65,
        suffix: '+',
        animate: true,
      },
      {
        name: 'Established',
        value: 2022,
        animate: true,
      },
      {
        name: 'Hospitals Supported',
        value: 3,
        suffix: '+',
      },
    ],
  },
  call_to_action: {
    title: 'Make a Difference',
    subtitle: 'Support Our Mission to Achieve Cancer Care Equity',
    content:
      'Your contribution can help us provide vital financial support, improve healthcare access, and fund life-saving treatments for patients in need.',
    button: {
      text: 'Donate Now',
      href: '/giving-options',
    },
  },
  newsletter: {
    title: 'Stay Updated',
    subtitle: 'Subscribe to our newsletter to receive the latest news, stories, and impact reports.',
  },
}

export default function Home() {
  return (
    <>
      <Header overlay />
      <main>
        <Hero {...homePageContent.hero} />
        <MissionPreview />
        <Stats {...homePageContent.stats} />
        <FeatureStory />
        <NewsletterSubscribe {...homePageContent.newsletter} />
        <CallToAction {...homePageContent.call_to_action} />
      </main>
    </>
  )
}
