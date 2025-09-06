import { type Metadata } from 'next'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ProjectPage } from '@/components/sections/ProjectPage'

export const metadata: Metadata = {
  title: 'Promote and Advance Cancer Research',
}

const promoteAndAdvanceCancerResearchContent = {
  header: 'ACCE Projects',
  title: 'We Promote and Advance Cancer Research',
  imageUrl:
    'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  imageAlt: 'A scientist working in a research lab.',
  col1_p1:
    'We are at the forefront of education and cancer research, driving breakthroughs in understanding the origins, prevention, screening, diagnosis, control, and management of cancer and other diseases in both Canada and Ghana. By conducting innovative research, we aim to pioneer new treatments and approaches that will shape the future of healthcare worldwide. Join us in our mission to make a profound impact on global health through cutting-edge research and education initiatives.',
  col1_p2:
    'Our approach emphasizes equitable research partnerships, community engagement, and capacity building. We support data infrastructure, ethics governance, and training programs that empower clinicians, scientists, and students to lead high-impact studies. This ensures findings are translated into accessible, real-world improvements in care.',
  col2_p1:
    'Priority areas include screening and early detection, implementation science, and addressing disparities in outcomes across populations. We foster collaboration between Canadian and Ghanaian institutions, promote open science where possible, and disseminate results through publications and community forums—turning evidence into action.',
}

export default function PromoteAndAdvanceCancerResearchPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectPage {...promoteAndAdvanceCancerResearchContent} />
      </main>
      <Footer />
    </>
  )
}
