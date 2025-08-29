import { type Metadata } from 'next'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { InvolvedPage } from '@/components/sections/InvolvedPage'

export const metadata: Metadata = {
  title: 'Become a Volunteer',
}

const volunteerContent = {
  title: 'Volunteer With Us',
  subtitle: 'Volunteer with Purpose. Stand for Cancer Care Equity.',
  p1: 'Behind every cancer patient we support is a story of courage—and a community that made their care possible. At ACCE, volunteers are the heart of our mission. They are advocates, fundraisers, storytellers, event organizers, and everyday heroes helping to bridge the gap between diagnosis and access to treatment.',
  p2: 'When you volunteer with ACCE, you help ensure that no one faces cancer alone—especially those who cannot afford care.',
  p3: 'Whether you have a few hours a month or time to take on a larger project, your skills, passion, and presence matter. From helping with events, to raising awareness online, to offering professional expertise—we’ll help you find a role that fits your interests and makes real impact.',
  h2: 'Why volunteer?',
  p4: 'Because equity in cancer care doesn’t happen by accident. It happens because people like you choose to show up, speak out, and serve.',
  p5: 'Join us. Be the reason someone gets the care they need—and the hope they didn’t think was possible.',
}

export default function VolunteerPage() {
  return (
    <>
      <Header />
      <main>
        <InvolvedPage {...volunteerContent} />
      </main>
      <Footer />
    </>
  )
}