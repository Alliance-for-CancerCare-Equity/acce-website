import { type Metadata } from 'next'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { ProjectPage } from '@/components/sections/ProjectPage'

export const metadata: Metadata = {
  title: 'Support Community Healthcare Centers',
}

const supportCommunityHealthcareCentersContent = {
  header: 'ACCE Projects',
  title: 'We Equip Non-Profit Community Healthcare Centers',
  imageUrl: '/images/health_centre.png',
  imageAlt: 'Essential cancer-care equipment at a community healthcare center.',
  col1_p1:
    'The Alliance for CancerCare Equity (ACCE) equips non-profit community healthcare centers in Ghana and Canada with the essential diagnostic and treatment equipment needed for quality cancer care. We source, ship, and donate fit-for-purpose equipment so care teams can deliver timely screening, diagnosis, and treatment.',
  col1_p2:
    'Beyond delivery, we handle end-to-end readiness and sustainability: site assessments, installation and commissioning, and hands-on training for frontline staff with biomedical engineers. We also help set up maintenance programs and consumables supply so equipment remains reliable over time.',
  col2_p1:
    'Typical equipment includes infusion pumps and chairs, ultrasound units for guided procedures, pathology and lab analyzers, radiation planning workstations, and essential monitoring devices. Where needed, we also support facility readiness—power conditioning, climate control—to protect equipment, minimize downtime, and improve patient throughput and outcomes.',
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
