import { type Metadata } from 'next'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ProjectPage } from '@/components/sections/ProjectPage'


export const metadata: Metadata = {
  title: 'Fund Cancer Treatment and Related Costs',
}

const fundCancerTreatmentContent = {
  header: 'ACCE Projects',
  title: 'We Fund Cancer Patients Treatment and Related Costs',
  imageUrl:
    'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2691&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt: 'Medical professional preparing chemotherapy medication in a clinical setting.',
  col1_p1:
    "The Alliance for CancerCare Equity (ACCE) is committed to ensuring that a patient's family finances never determine their ability to survive cancer. ACCE achieves this mission by funding the full spectrum of cancer treatments, including radiotherapy, chemotherapy, surgery, and associated costs, for patients in Ghana who lack the financial means to access adequate healthcare services; providing financial support for cancer treatments to uninsured and underinsured patients in Canada (Kitchener-Waterloo); and covering the costs of essential medications that are not funded for patients in Canada (Kitchener-Waterloo).",
  col2_p1:
    "ACCE's dedication extends beyond financial assistance. We alleviate the burden of treatment costs for patients who cannot afford them, enabling them to focus entirely on their recovery. Additionally, we offer emotional support to both cancer patients and their families, ensuring they can navigate this challenging journey with peace of mind and focus on their health and well-being.",
  buttonText: 'Complete a Financial Assistance Form',
  buttonHref: '/funding-application',
}

export default function FundCancerTreatmentPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectPage {...fundCancerTreatmentContent} />
      </main>
      <Footer />
    </>
  )
}
