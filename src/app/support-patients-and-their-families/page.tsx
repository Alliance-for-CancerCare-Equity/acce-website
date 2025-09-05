import { type Metadata } from 'next'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ProjectPage } from '@/components/sections/ProjectPage'

export const metadata: Metadata = {
  title: 'Support Patients and their Families',
}

const supportPatientsAndFamiliesContent = {
  header: 'ACCE Projects',
  title: 'We Support Patients with Cancer and their Families',
  imageUrl:
    'https://images.unsplash.com/photo-1629360067822-89c74b25bb66?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt: 'Caregiver offering comfort and support to a patient.',
  col1_p1:
    'Alliance for CancerCare Equity (ACCE) is committed to enhancing the well-being of patients with cancer and their families by facilitating access to supportive community groups and specialized counseling services. We understand the importance of emotional support in the journey through cancer, ensuring every individual receives compassionate care and guidance when they need it most.',
  col1_p2:
    'Our support extends beyond counseling. We connect patients with navigation resources, financial assistance for unfunded essentials, transportation support, and respite options for caregivers. By coordinating with community partners and care teams, we help families manage the practical burdens of treatment so they can focus on healing.',
  col2_p1:
    'We also promote peer-support groups, survivorship programming, and culturally safe services that honor the values and preferences of each family. From diagnosis through survivorship, ACCE works alongside patients to reduce isolation, improve access to care, and build stronger support networks in both Canada and Ghana.',
  buttonText: 'Get Involved',
  buttonHref: '/opportunities',
}

export default function SupportPatientsAndTheirFamiliesPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectPage {...supportPatientsAndFamiliesContent} />
      </main>
      <Footer />
    </>
  )
}
