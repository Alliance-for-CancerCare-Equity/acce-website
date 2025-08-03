import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProjectPage } from '@/components/ProjectPage'

export const metadata: Metadata = {
  title: 'Fund Cancer Treatment and Related Costs',
}

export default function FundCancerTreatmentPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectPage
          title="ACCE Projects"
          subtitle="We Fund Cancer Patients Treatment and Related Costs"
          imageUrl="https://plus.unsplash.com/premium_photo-1708371357423-a35fdedf4018?q=80&w=2369&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div>
            <p>
              The Alliance for CancerCare Equity (ACCE) is committed to ensuring
              that a patient&apos;s family finances never determine their
              ability to survive cancer. ACCE achieves this mission by:
            </p>
            <ul className="mt-8 list-disc space-y-4 pl-6">
              <li>
                Funding the full spectrum of cancer treatments, including
                radiotherapy, chemotherapy, surgery, and associated costs, for
                patients in Ghana who lack the financial means to access
                adequate healthcare services.
              </li>
              <li>
                Providing financial support for cancer treatments to uninsured
                and underinsured patients in Canada (Kitchener-Waterloo).
              </li>
              <li>
                Covering the costs of essential medications that are not funded
                for patients in Canada (Kitchener-Waterloo).
              </li>
            </ul>
          </div>
          <div>
            <p>
              ACCE&apos;s dedication extends beyond financial assistance. We
              alleviate the burden of treatment costs for patients who cannot
              afford them, enabling them to focus entirely on their recovery.
              Additionally, we offer emotional support to both cancer patients
              and their families, ensuring they can navigate this challenging
              journey with peace of mind and focus on their health and
              well-being.
            </p>
            <p className="mt-8">
              If you are seeking financial assistance from ACCE for your cancer
              treatment, please complete a Financial Assistance Form.
            </p>
          </div>
        </ProjectPage>
      </main>
      <Footer />
    </>
  )
}
