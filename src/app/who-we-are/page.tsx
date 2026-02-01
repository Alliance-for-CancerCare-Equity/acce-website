import { type Metadata } from 'next'
import Image from 'next/image'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

// New layout for the Who We Are page, based on a Tailwind UI pattern

export const metadata: Metadata = {
  title: 'Who We Are',
}

const whoWeAreContent = {
  vision:
    'A world where every cancer patient receives equitable, high-quality care, regardless of financial status.',
  mission:
    'To promote equity in cancer care from prevention through survivorship, providing comprehensive support to patients and families facing the challenges of this life-threatening illness.',
  about_p1:
    'The Alliance for CancerCare Equity (ACCE) is a registered charity in Canada dedicated to advancing equity in cancer care. We passionately believe that no individual should lose their life to cancer simply because they lack the financial means to afford treatment. Furthermore, we are committed to ensuring that a patient’s financial circumstances never dictate their chances of surviving a cancer diagnosis.',
  about_p2:
    "We cover the costs of cancer treatment and related expenses for patients who lack the financial means to pay for their care. By doing so, we alleviate the financial burden on families and empower patients to focus on healing.",
  about_p3:
    "Join us in our quest to redefine cancer care. Together, we can ensure that every individual, regardless of their financial situation, receives the treatment they need to fight cancer and reclaim their future.",
  values: [
    { name: 'Equity', description: 'We remove financial barriers so treatment access is based on need, not income.' },
    { name: 'Compassion', description: 'We meet patients and families with empathy and dignity at every step.' },
    { name: 'Empowerment', description: 'We equip patients with resources, support, and information to make decisions.' },
    { name: 'Transparency', description: 'We steward resources responsibly and report impact clearly.' },
    { name: 'Community', description: 'We collaborate across Canada and Ghana to improve outcomes together.' },
    { name: 'Integrity', description: 'We uphold the highest ethical standards in care and research.' },
  ],
  stats: [
    { label: 'Founded', value: '2022' },
    { label: 'Patients supported', value: '65+' },
    { label: 'Amount raised', value: '$100k+' },
  ],
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-6 pb-0 sm:pt-8 sm:pb-0 lg:px-8">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
            <h1 className="text-5xl font-semibold tracking-tight text-pretty text-charcoal-900 sm:text-6xl">
              Our Vision
            </h1>
            <p className="mt-4 text-xl/8 text-charcoal-700">{whoWeAreContent.vision}</p>
            <h2 className="mt-10 text-5xl font-semibold tracking-tight text-pretty text-charcoal-900 sm:text-6xl">
              Our Mission
            </h2>
            <p className="mt-4 text-xl/8 text-charcoal-700">{whoWeAreContent.mission}</p>
          </div>
          <div className="mt-14 flex justify-end gap-6 sm:-mt-32 sm:justify-start sm:pl-16 lg:mt-0 lg:pl-0">
            <div className="ml-auto w-40 flex-none space-y-6 pt-28 sm:ml-0 sm:pt-60 lg:order-last lg:pt-36 xl:order-0 xl:pt-60">
              <div className="relative">
                <Image
                  alt="Patient support"
                  src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1974&auto=format&fit=crop"
                  width={396}
                  height={528}
                  className="aspect-[2/3] w-full rounded-xl bg-charcoal-50 object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="mr-auto w-40 flex-none space-y-6 sm:mr-0 sm:pt-48 lg:pt-36">
              <div className="relative">
                <Image
                  alt="Care team supporting patients"
                  src="https://images.unsplash.com/photo-1631563019701-efcf403bc5fe?q=80&w=2691&auto=format&fit=crop"
                  width={396}
                  height={528}
                  className="aspect-[2/3] w-full rounded-xl bg-charcoal-50 object-cover shadow-lg"
                />
              </div>
              <div className="relative">
                <Image
                  alt="Community care in hospital"
                  src="https://images.unsplash.com/photo-1631217868902-fa06818573b4?q=80&w=2691&auto=format&fit=crop"
                  width={396}
                  height={528}
                  className="aspect-[2/3] w-full rounded-xl bg-charcoal-50 object-cover shadow-lg"
                />
              </div>
            </div>
            <div className="w-40 flex-none space-y-6 pt-24 sm:pt-0">
              <div className="relative">
                <Image
                  alt="Research and clinical care"
                  src="https://images.unsplash.com/photo-1626315869436-d6781ba69d6e?q=80&w=2670&auto=format&fit=crop"
                  width={396}
                  height={528}
                  className="aspect-[2/3] w-full rounded-xl bg-charcoal-50 object-cover shadow-lg"
                />
              </div>
              <div className="relative">
                <Image
                  alt="Family support and recovery"
                  src="https://images.unsplash.com/photo-1548710123-e11f2e941a89?w=1000&auto=format&fit=crop&q=60"
                  width={396}
                  height={528}
                  className="aspect-[2/3] w-full rounded-xl bg-charcoal-50 object-cover shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionAndStats() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-charcoal-900 sm:text-5xl">
            Who We Are
          </h2>
          <div className="mt-6 flex flex-col gap-x-8 gap-y-16 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl/8 text-charcoal-700">{whoWeAreContent.about_p1}</p>
              <p className="mt-8 text-base/7 text-charcoal-600">{whoWeAreContent.about_p2}</p>
              <p className="mt-6 text-base/7 text-charcoal-600">{whoWeAreContent.about_p3}</p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="w-64 space-y-8 xl:w-80">
                {whoWeAreContent.stats.map((stat) => (
                  <div key={stat.label} className="flex flex-col-reverse gap-y-2">
                    <dt className="text-base/7 text-charcoal-600">{stat.label}</dt>
                    <dd className="text-4xl font-semibold tracking-tight text-charcoal-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WideImage() {
  return (
    <section className="mt-24 sm:mt-32 xl:mx-auto xl:max-w-7xl xl:px-8">
      <Image
        alt="Patients and providers at a community hospital"
        src="/images/who_we_are.jpg"
        width={2832}
        height={1133}
        className="aspect-[5/2] w-full object-cover outline outline-1 -outline-offset-1 outline-black/5 xl:rounded-3xl"
      />
    </section>
  )
}

function OurValues() {
  return (
    <section className="mx-auto mt-0 max-w-7xl px-6 sm:mt-0 lg:px-8">
      {/* Simple inline icons for each value */}
      {/**/}
      <ValueIconDefs />
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-charcoal-900 sm:text-5xl">
          Our Values
        </h2>
        <p className="mt-6 text-xl/8 text-charcoal-700">
          These principles guide our work with patients, families, partners, and communities.
        </p>
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 text-base/7 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {whoWeAreContent.values.map((value) => (
          <div key={value.name}>
            <div className="flex gap-x-4">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-teal-50 ring-1 ring-teal-100">
                <ValueIcon name={value.name} />
              </span>
              <dt className="text-xl font-semibold leading-8 text-charcoal-900">{value.name}</dt>
            </div>
            <dd className="mt-2 pl-12 text-lg/8 text-charcoal-600">{value.description}</dd>
          </div>
        ))}
      </dl>
    </section>
  )
}

function ValueIcon({ name }: { name: string }) {
  const common = 'size-6 text-teal-600';
  switch (name) {
    case 'Equity':
      // Simple balance scale
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
          <g stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 4v14M5 8h14" />
            <path d="M7.5 8l-3 4h6l-3-4zM19.5 8l-3 4h6l-3-4z" />
            <path d="M3 20h18" />
          </g>
        </svg>
      )
    case 'Compassion':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
          <path
            d="M12 21s-6-4.5-6-9a6 6 0 0 1 11.2-3.2A6 6 0 0 1 18 12c0 4.5-6 9-6 9z"
            fill="currentColor"
          />
        </svg>
      )
    case 'Empowerment':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
          <path d="M13 2 3 14h7l-1 8 12-14h-8l1-6z" fill="currentColor" />
        </svg>
      )
    case 'Transparency':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6S2 12 2 12z" />
            <circle cx="12" cy="12" r="3" />
          </g>
        </svg>
      )
    case 'Community':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
          <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="8" cy="9" r="3" />
            <circle cx="16" cy="9" r="3" />
            <path d="M2 19c1.5-3 5-4 6-4s4.5 1 6 4M14 16c1-.6 2.5-1 4-1 2 0 3 .6 4 1.5" />
          </g>
        </svg>
      )
    case 'Integrity':
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
          <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z" fill="currentColor" opacity="0.15" />
          <path d="M12 3l8 3v6c0 5-4 8-8 9-4-1-8-4-8-9V6l8-3z" fill="none" stroke="currentColor" strokeWidth="1.5" />
          <path d="M9 12l2 2 4-4" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    default:
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className={common}>
          <circle cx="12" cy="12" r="5" fill="currentColor" />
        </svg>
      )
  }
}

function ValueIconDefs() {
  return null
}

export default function WhoWeArePage() {
  return (
    <>
      <Header />
      <main className="pb-24 sm:pb-32">
        <Hero />
        <OurValues />
        <MissionAndStats />
        <WideImage />
      </main>
      <Footer />
    </>
  )
}
