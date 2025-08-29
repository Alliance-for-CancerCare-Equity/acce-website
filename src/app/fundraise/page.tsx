import { type Metadata } from 'next'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { InvolvedPage } from '@/components/sections/InvolvedPage'

export const metadata: Metadata = {
  title: 'Become a Fundraiser',
}

const fundraiseContent = {
  title: 'Fundraise With ACCE',
  subtitle: 'Fundraise for Equity. Help Change a Life.',
  p1: 'Every day, cancer patients in Ghana and underserved communities in Canada face a painful reality they are fighting for their lives without the resources to afford care. At ACCE, we’re working to change that—but we need champions like you.',
  p2: 'When you fundraise for ACCE, you’re not just raising money—you’re raising hope. You’re helping a mother access chemotherapy, a child get the surgery they need, or a family receive one more chance at healing. Your voice, your network, your effort can open the door to treatment for someone who has nowhere else to turn.',
  p3: 'It’s simple to get started. Create a personal fundraising page on our CanadaHelps Page, share your story, and invite friends, family, and colleagues to join you. Every dollar you raise brings us closer to a world where cancer care is equitable, accessible, and compassionate.',
  h2: 'Turn Your Events into Lifesaving Impact',
  p4: "Transform Your Sporting Events into Fundraisers for Hope Whether you're part of a local soccer league, office softball team, or just love to bowl on weekends—your passion for sports can fuel real change. Rally your teammates, choose ACCE as your cause, and invite friends, family, and fans to pledge donations for every goal, point, or pin.",
  p5: "Celebrate Life's Milestones with Purpose Birthdays, anniversaries, graduations, or the birth of a child—these joyful moments can become powerful opportunities for giving. Instead of gifts, invite your loved ones to donate to ACCE in honor of your special occasion.",
}

export default function FundraisePage() {
  return (
    <>
      <Header />
      <main>
        <InvolvedPage {...fundraiseContent} />
      </main>
      <Footer />
    </>
  )
}