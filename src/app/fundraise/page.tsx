import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { InvolvedPage } from '@/components/InvolvedPage'

export const metadata: Metadata = {
  title: 'Become a Fundraiser',
}

export default function FundraisePage() {
  return (
    <>
      <Header />
      <main>
        <InvolvedPage
          title="Fundraise With ACCE"
          subtitle="Fundraise for Equity. Help Change a Life."
        >
          <p>
            Every day, cancer patients in Ghana and underserved communities in
            Canada face a painful reality: they are fighting for their lives
            without the resources to afford care. At ACCE, we’re working to
            change that—but we need champions like you.
          </p>
          <p className="mt-8">
            When you fundraise for ACCE, you&apos;re not just raising
            money—you’re raising hope. You’re helping a mother access
            chemotherapy, a child get the surgery they need, or a family
            receive one more chance at healing. Your voice, your network, your
            effort can open the door to treatment for someone who has nowhere
            else to turn.
          </p>
          <p className="mt-8">
            It’s simple to get started. Create a personal fundraising page on
            our CanadaHelps Page, share your story, and invite friends, family,
            and colleagues to join you. Every dollar you raise brings us closer
            to a world where cancer care is equitable, accessible, and
            compassionate.
          </p>
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-slate-900">
            Turn Your Events into Lifesaving Impact
          </h2>
          <p className="mt-6">
            Transform Your Sporting Events into Fundraisers for Hope Whether
            you&apos;re part of a local soccer league, office softball team, or
            just love to bowl on weekends—your passion for sports can fuel real
            change. Rally your teammates, choose ACCE as your cause, and invite
            friends, family, and fans to pledge donations for every goal, point,
            or pin.
          </p>
          <p className="mt-8">
            Celebrate Life&apos;s Milestones with Purpose Birthdays,
            anniversaries, graduations, or the birth of a child—these joyful
            moments can become powerful opportunities for giving. Instead of
            gifts, invite your loved ones to donate to ACCE in honor of your
            special occasion.
          </p>
        </InvolvedPage>
      </main>
      <Footer />
    </>
  )
}
