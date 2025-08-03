import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { InvolvedPage } from '@/components/InvolvedPage'

export const metadata: Metadata = {
  title: 'Become a Partner',
}

export default function PartnerWithUsPage() {
  return (
    <>
      <Header />
      <main>
        <InvolvedPage
          title="Partner With Us"
          subtitle="Partner with ACCE: Advance Equity. Transform Lives."
        >
          <p>
            At the Alliance for CancerCare Equity (ACCE), we are on a mission to
            make cancer care accessible to those who need it most—regardless of
            income, geography, or background. But we cannot do it alone.
            Achieving equity in cancer care takes partnership. It takes people
            and organizations willing to stand in the gap and say,
            &quot;Everyone deserves a chance to fight—and survive—cancer.&quot;
          </p>
          <p className="mt-8">
            We invite individuals, businesses, faith communities, and
            organizations to join us as partners in this life-saving work.
          </p>
          <p className="mt-8">
            When you partner with ACCE, you become part of a movement that is
            providing real, tangible support to cancer patients in Ghana and
            underserved communities in Canada. Your partnership can take many
            forms—financial contributions, in-kind support, employee giving
            campaigns, sponsorships, co-branded fundraising initiatives, or
            collaborative awareness efforts.
          </p>
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-slate-900">
            Why partner with ACCE?
          </h2>
          <ul className="mt-6 list-disc space-y-4 pl-6">
            <li>Purpose with impact: Your support directly funds treatment, medication, and care for patients in urgent need.</li>
            <li>Community engagement: Strengthen your brand&apos;s commitment to social good and health equity.</li>
            <li>Shared values: Together, we can champion justice, compassion, and dignity in healthcare.</li>
          </ul>
        </InvolvedPage>
      </main>
      <Footer />
    </>
  )
}