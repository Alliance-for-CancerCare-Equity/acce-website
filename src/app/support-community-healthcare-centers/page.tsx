import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProjectPage } from '@/components/ProjectPage'

export const metadata: Metadata = {
  title: 'Support Community Healthcare Centers',
}

export default function SupportCommunityHealthcareCentersPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectPage
          title="ACCE Projects"
          subtitle="We Support Non-Profit Community Healthcare Centers"
          imageUrl="https://images.unsplash.com/photo-1631195414013-85b70ff2c180?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29tbXVuaXR5JTIwQ2VudGVyc3xlbnwwfHwwfHx8MA%3D%D"
        >
          <div>
            <p>
              The Alliance for CancerCare Equity (ACCE) is dedicated to
              transforming cancer care at non-profit community healthcare
              centers in Canada and Ghana. Through our initiative, we provide
              state-of-the-art medical equipment essential for accurate
              diagnosis and effective treatment of cancer, ensuring the highest
              standard of care for patients with cancer.
            </p>
          </div>
        </ProjectPage>
      </main>
      <Footer />
    </>
  )
}
