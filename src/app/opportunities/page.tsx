import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Opportunities',
}

const opportunitiesContent = {
  header: 'Get Involved',
  title: 'Join Us in the Fight for Cancer Care Equity',
  subtitle:
    'At the Alliance for CancerCare Equity (ACCE), we believe that no one should be denied cancer treatment because of where they live or how much money they have. Yet every day, patients in Ghana and underserved communities in Canada are forced to choose between food, shelter, and lifesaving care.',
  opportunities_title: 'Current Volunteer Opportunities',
  opportunities: [
    {
      text: 'Social Media & Digital Communications Volunteer',
      href: 'https://www.allianceforcancercareequity.ca/_files/ugd/8b0cc2_e3229ade47174d018dc7be7cec27fcdd.pdf',
    },
    {
      text: 'Event Organizer – Cancer Awareness Day (February 2026) (Volunteer)',
      href: 'https://www.allianceforcancercareequity.ca/_files/ugd/8b0cc2_8042ee40f1ef4b739cdd65b5f7c0c49c.pdf',
    },
  ],
  p1: 'This is not just a health issue—it’s a justice issue.',
  p2: 'We’re working to close the gap by providing direct financial support for cancer treatments, raising awareness, and advocating for equitable healthcare policies. But we can’t do it alone.',
  p3: 'You can make a difference. Whether you give, volunteer, start a fundraiser, or simply spread the word, your action can help save lives and bring dignity to those in their most vulnerable moments.',
  links: [
    {
      text: 'Volunteer With Us',
      href: '/volunteer',
      imageUrl:
        'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      text: 'Partner With Us',
      href: '/partner-with-us',
      imageUrl:
        'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      text: 'Fundraise For Us',
      href: '/ways-to-give',
      imageUrl:
        'https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
}

interface Opportunity {
  text: string
  href: string
}

interface Link {
  text: string
  href: string
  imageUrl: string
}

interface GetInvolvedProps {
  header: string
  title: string
  subtitle: string
  opportunities_title: string
  opportunities: Opportunity[]
  p1: string
  p2: string
  p3: string
  links: Link[]
}

function GetInvolved({
  header,
  title,
  subtitle,
  opportunities_title,
  opportunities,
  p1,
  p2,
  p3,
  links,
}: GetInvolvedProps) {
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
            <h2 className="text-2xl font-semibold tracking-tight text-pretty text-slate-900">
              {opportunities_title}
            </h2>
            <ul className="mt-6 list-disc space-y-2 pl-6 text-base/7 text-slate-600">
              {opportunities.map((opportunity) => (
                <li key={opportunity.text}>
                  <a
                    href={opportunity.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {opportunity.text}
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-base/7 text-slate-600">{p1}</p>
            <p className="mt-8 text-base/7 text-slate-600">{p2}</p>
            <p className="mt-8 text-base/7 text-slate-600">{p3}</p>
          </div>
          <div className="pt-16 lg:row-span-2">
            <div className="-mx-8 grid grid-cols-1 gap-8 sm:-mx-16 lg:mx-0">
              {links.map((link) => (
                <Link
                  key={link.text}
                  href={link.href}
                  className="group relative aspect-video overflow-hidden rounded-2xl shadow-xl"
                >
                  <Image
                    fill
                    src={link.imageUrl}
                    alt={link.text}
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                  <h3 className="absolute bottom-4 left-4 text-2xl font-semibold text-white">
                    {link.text}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default function OpportunitiesPage() {
  return (
    <>
      <Header />
      <main>
        <GetInvolved {...opportunitiesContent} />
      </main>
      <Footer />
    </>
  )
}
