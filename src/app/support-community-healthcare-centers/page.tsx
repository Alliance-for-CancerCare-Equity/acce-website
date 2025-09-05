import { type Metadata } from 'next'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ProjectPage } from '@/components/sections/ProjectPage'

export const metadata: Metadata = {
  title: 'Support Community Healthcare Centers',
}

const supportCommunityHealthcareCentersContent = {
  header: 'ACCE Projects',
  title: 'We Support Non-Profit Community Healthcare Centers',
  imageUrl:
    'https://images.unsplash.com/photo-1631195414013-85b70ff2c180?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tbXVuaXR5JTIwQ2VudGVyc3xlbnwwfHwwfHx8MA%3D%3D',
  imageAlt: 'A community healthcare center building.',
  col1_p1:
    'The Alliance for CancerCare Equity (ACCE) is dedicated to transforming cancer care at non-profit community healthcare centers in Canada and Ghana. Through our initiative, we provide state-of-the-art medical equipment essential for accurate diagnosis and effective treatment of cancer, ensuring the highest standard of care for patients with cancer.',
  col1_p2:
    'Beyond equipment delivery, we focus on readiness and sustainability: assessing site needs, coordinating installation, and training frontline staff alongside biomedical engineers. We also help establish maintenance plans and consumables pathways so centers can reliably operate imaging, diagnostic, and treatment equipment over time.',
  col2_p1:
    'Typical support includes infusion pumps and chairs, radiation planning workstations, ultrasound units for guided procedures, pathology and lab analyzers, and essential monitoring devices. When feasible, we co-fund facility upgrades (power stabilization, climate control) to safeguard sensitive equipment and reduce downtime—directly improving patient throughput and outcomes.',
  buttonText: 'Learn More About Our Work',
  buttonHref: '/projects-overview',
}

export default function SupportCommunityHealthcareCentersPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectPage {...supportCommunityHealthcareCentersContent} />
      </main>
      <Footer />
    </>
  )
}
