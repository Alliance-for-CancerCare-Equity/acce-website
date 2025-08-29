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
    'https://images.unsplash.com/photo-1578496781307-30c2b531c05a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFtaWx5JTIwaW4lMjBob3NwaXRhbHxlbnwwfHwwfHx8MA%3D%3D',
  imageAlt: 'A supportive family in a hospital setting.',
  col1_p1:
    'Alliance for CancerCare Equity (ACCE) is committed to enhancing the well-being of patients with cancer and their families by facilitating access to supportive community groups and specialized counseling services. We understand the importance of emotional support in the journey through cancer, ensuring every individual receives compassionate care and guidance when they need it most.',
  buttonText: 'Get Involved',
  buttonHref: '/get-involved',
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
