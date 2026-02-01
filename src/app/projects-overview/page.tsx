import { type Metadata } from 'next'
import Image from 'next/image'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Projects Overview',
}

const projectsOverviewContent = {
  header: 'Our Projects',
  title: 'Advancing Equity in Cancer Care',
  subtitle:
    'Cancer continues to be a major global health challenge, with significant implications, especially in sub-Saharan Africa. By 2030, it is anticipated that the region will experience over 1 million deaths and more than 1.4 million new cases annually.',
  section_1_p_1:
    "Disturbingly, Africa is also projected to bear half of the world's childhood cancers by 2050*. In Ghana alone, despite an estimated 24,000 new cases each year among its 31 million population, only approximately 3,500 patients receive treatment annually—highlighting a stark disparity. Tragically, around 15,800 lives are lost to cancer yearly in the country**. Financial constraints further exacerbate this crisis, with over half of treated patients unable to afford to complete their treatment.",
  section_1_p_2:
    "Addressing this urgent issue, Alliance for CancerCare Equity (ACCE) champions health equity by",
  commitments: [
    'Covering the expenses for the full spectrum of cancer treatments, including radiotherapy, chemotherapy, surgery, and associated costs, for patients in Ghana who lack the financial means to access adequate healthcare services.',
    'Providing financial support for cancer treatments to uninsured and underinsured patients in Canada (Kitchener-Waterloo).',
    'Assisting with the costs of essential, yet unfunded, medications for patients in Canada (Kitchener-Waterloo).',
    'Offering access to supportive networks and counseling services for cancer patients and their families.',
    'Providing essential medical equipment for the diagnosis and treatment of patients with cancer in non-profit community healthcare centers',
    'Conducting vital research into cancer and other diseases to advance understanding and management in both Canada and Ghana',
  ],
  footnote_1:
    "'* Cancer in sub-Saharan Africa: a Lancet Oncology Commission. The lancet oncology, 2022-05-09. Published online May 9, 2022 https://doi.org/10.1016/S1470-2045(21)00720-8'",
  footnote_2:
    "'** International Agency for Research on Cancer (IARC), World Health Organization (WHO). Ghana: https://gco.iarc.fr/today/data/factsheets/populations/288-ghana-fact-sheets.pdf'",
  images: [
    {
      alt: 'Medical research',
      src: 'https://images.unsplash.com/photo-1564732005956-20420ebdab60?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      alt: 'Patient support',
      src: 'https://images.unsplash.com/photo-1517120026326-d87759a7b63b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      alt: 'Chemotherapy treatment',
      src: 'https://images.unsplash.com/photo-1579154204449-47c454770447?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      alt: 'Medical equipment',
      src: 'https://images.unsplash.com/photo-1648047547783-8d64bf80c17f?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
}

interface ImageItem {
  alt: string
  src: string
}

function ProjectsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-300/30 rounded-full blur-3xl" />

      <Container className="relative py-20 sm:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700 ring-1 ring-inset ring-teal-200 mb-6">
            {projectsOverviewContent.header}
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl">
            {projectsOverviewContent.title}
          </h1>
          <p className="mt-6 text-xl/8 text-charcoal-600">
            {projectsOverviewContent.subtitle}
          </p>
        </div>
      </Container>
    </section>
  )
}

function ProjectsContent({ images }: { images: ImageItem[] }) {
  return (
    <section className="bg-lavender-50 py-20 sm:py-28">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <p className="text-lg/8 text-charcoal-700">
              {projectsOverviewContent.section_1_p_1}
            </p>
            <p className="mt-8 text-lg/8 text-charcoal-700">
              {projectsOverviewContent.section_1_p_2}
            </p>

            <ul className="mt-8 space-y-4">
              {projectsOverviewContent.commitments.map((commitment, idx) => (
                <li key={idx} className="flex gap-4">
                  <div className="flex-none">
                    <div className="flex size-8 items-center justify-center rounded-lg bg-teal-100 text-teal-600">
                      <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-base/7 text-charcoal-600">{commitment}</p>
                </li>
              ))}
            </ul>

            <div className="mt-10 p-6 bg-white rounded-2xl shadow-soft border-l-4 border-gold-500">
              <p className="text-sm text-charcoal-500">{projectsOverviewContent.footnote_1}</p>
              <p className="mt-2 text-sm text-charcoal-500">{projectsOverviewContent.footnote_2}</p>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {images.map((image, index) => (
                <div
                  key={image.alt}
                  className={`relative aspect-square overflow-hidden rounded-2xl shadow-medium ring-2 ring-white ${
                    index % 2 !== 0 ? 'lg:-mt-12' : ''
                  }`}
                >
                  <Image
                    fill
                    alt={image.alt}
                    src={image.src}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function ProjectsCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-charcoal-800 py-20 sm:py-24">
      <div className="absolute inset-0 bg-dot-pattern-light opacity-10" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-lavender-400/20 rounded-full blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Support our mission
          </h2>
          <p className="mt-4 text-lg/8 text-teal-100">
            Your contribution helps fund life-saving treatment for cancer patients in need.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/giving-options" color="cta" size="lg">
              Donate now
            </Button>
            <Button href="/volunteer" variant="outline" color="white" size="lg">
              Get involved
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function ProjectsOverviewPage() {
  return (
    <>
      <Header />
      <main>
        <ProjectsHero />
        <ProjectsContent images={projectsOverviewContent.images} />
        <ProjectsCta />
      </main>
      <Footer />
    </>
  )
}
