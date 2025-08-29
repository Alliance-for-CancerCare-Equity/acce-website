import { type Metadata } from 'next'
import Image from 'next/image'

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
    'Addressing this urgent issue, Alliance for CancerCare Equity (ACCE) champion’s health equity by',
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

interface Image {
  alt: string
  src: string
}

interface OurProjectsProps {
  header: string
  title: string
  subtitle: string
  section_1_p_1: string
  section_1_p_2: string
  commitments: string[]
  footnote_1: string
  footnote_2: string
  images: Image[]
}

function OurProjects({
  header,
  title,
  subtitle,
  section_1_p_1,
  section_1_p_2,
  commitments,
  footnote_1,
  footnote_2,
  images,
}: OurProjectsProps) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-blue-600">{header}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-slate-700">
            {subtitle}
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <p className="text-base/7 text-slate-600">{section_1_p_1}</p>
            <p className="mt-8 text-base/7 text-slate-600">{section_1_p_2}</p>
            <ul className="mt-8 list-disc space-y-4 pl-6 text-base/7 text-slate-600">
              {commitments.map((commitment) => (
                <li key={commitment}>{commitment}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm/6 text-slate-500">{footnote_1}</p>
            <p className="mt-2 text-sm/6 text-slate-500">{footnote_2}</p>
          </div>
          <div className="pt-16 lg:row-span-2">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              {images.map((image, index) => (
                <div
                  key={image.alt}
                  className={`relative aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 ${
                    index % 2 !== 0 ? 'lg:-mt-40' : ''
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
        </section>
      </div>
    </div>
  )
}

export default function ProjectsOverviewPage() {
  return (
    <>
      <Header />
      <main>
        <OurProjects {...projectsOverviewContent} />
      </main>
      <Footer />
    </>
  )
}
