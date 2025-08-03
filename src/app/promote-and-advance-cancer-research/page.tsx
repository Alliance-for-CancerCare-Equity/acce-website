import { type Metadata } from 'next'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { ProjectPage } from '@/components/ProjectPage'

export const metadata: Metadata = {
  title: 'Promote and Advance Cancer Research',
}

export default function PromoteAndAdvanceCancerResearchPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectPage
          title="ACCE Projects"
          subtitle="We Promote and Advance Cancer Research"
          imageUrl="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        >
          <div>
            <p>
              We are at the forefront of education and cancer research, driving
              breakthroughs in understanding the origins, prevention,
              screening, diagnosis, control, and management of cancer and other
              diseases in both Canada and Ghana. By conducting innovative
              research, we aim to pioneer new treatments and approaches that
              will shape the future of healthcare worldwide. Join us in our
              mission to make a profound impact on global health through
              cutting-edge research and education initiatives.
            </p>
          </div>
        </ProjectPage>
      </main>
      <Footer />
    </>
  )
}
