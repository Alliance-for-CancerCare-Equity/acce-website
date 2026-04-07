import { type Metadata } from 'next'
import Image from 'next/image'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Who We Are',
  description:
    'Learn about ACCE\'s mission, vision, and values. We\'re a Canadian charity advancing equity in cancer care for underserved patients in Ghana and beyond.',
}

const whoWeAreContent = {
  vision:
    'A world where every cancer patient receives equitable, high-quality care, regardless of financial status.',
  mission:
    'To promote equity in cancer care from prevention through survivorship, providing comprehensive support to patients and families facing the challenges of this life-threatening illness.',
  about_p1:
    "The Alliance for CancerCare Equity (ACCE) is a registered charity in Canada dedicated to advancing equity in cancer care. We passionately believe that no individual should lose their life to cancer simply because they lack the financial means to afford treatment. Furthermore, we are committed to ensuring that a patient's financial circumstances never dictate their chances of surviving a cancer diagnosis.",
  about_p2:
    "We cover the costs of cancer treatment and related expenses for patients who lack the financial means to pay for their care. By doing so, we alleviate the financial burden on families and empower patients to focus on healing.",
  about_p3:
    "Join us in our quest to redefine cancer care. Together, we can ensure that every individual, regardless of their financial situation, receives the treatment they need to fight cancer and reclaim their future.",
  values: [
    { name: 'Equity', description: 'We remove financial barriers so treatment access is based on need, not income.', color: 'teal' },
    { name: 'Compassion', description: 'We meet patients and families with empathy and dignity at every step.', color: 'lavender' },
    { name: 'Empowerment', description: 'We equip patients with resources, support, and information to make decisions.', color: 'gold' },
    { name: 'Transparency', description: 'We steward resources responsibly and report impact clearly.', color: 'teal' },
    { name: 'Community', description: 'We collaborate across Canada and Ghana to improve outcomes together.', color: 'lavender' },
    { name: 'Integrity', description: 'We uphold the highest ethical standards in care and research.', color: 'gold' },
  ],
  stats: [
    { label: 'Founded', value: '2022' },
    { label: 'Patients supported', value: '65+' },
    { label: 'Amount raised', value: '$100k+' },
  ],
}

const colorStyles = {
  teal: { bg: 'bg-teal-100', text: 'text-teal-600', border: 'border-teal-200' },
  lavender: { bg: 'bg-lavender-100', text: 'text-lavender-600', border: 'border-lavender-200' },
  gold: { bg: 'bg-gold-100', text: 'text-gold-600', border: 'border-gold-200' },
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold-300/30 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:px-8">
        <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
          <div className="relative w-full lg:max-w-xl lg:shrink-0 xl:max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700 ring-1 ring-inset ring-teal-200 mb-6">
              About ACCE
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
              Our Vision
            </h1>
            <p className="mt-4 text-xl/8 text-charcoal-700">{whoWeAreContent.vision}</p>
            <h2 className="mt-10 font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
              Our Mission
            </h2>
            <p className="mt-4 text-xl/8 text-charcoal-700">{whoWeAreContent.mission}</p>
          </div>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:mt-0 lg:pl-4">
            <div className="col-span-2">
              <Image
                alt="ACCE Cancer Awareness event group photo"
                src="/event_images/empowering-communities-2026/CancerAwareness-54.jpg"
                width={7008}
                height={4672}
                className="w-full rounded-2xl bg-lavender-50 object-contain shadow-medium ring-2 ring-lavender-200"
              />
            </div>
            <div>
              <Image
                alt="ACCE community event — morning session"
                src="/event_images/empowering-communities-2026/AM.jpg"
                width={1915}
                height={921}
                className="w-full rounded-2xl bg-teal-50 object-contain shadow-medium ring-2 ring-teal-200"
              />
            </div>
            <div>
              <Image
                alt="ACCE community event — afternoon session"
                src="/event_images/empowering-communities-2026/PM.jpg"
                width={1920}
                height={961}
                className="w-full rounded-2xl bg-gold-50 object-contain shadow-medium ring-2 ring-gold-200"
              />
            </div>
            <div>
              <Image
                alt="ACCE community event — Bev"
                src="/event_images/empowering-communities-2026/Bev.jpg"
                width={1426}
                height={765}
                className="w-full rounded-2xl bg-lavender-50 object-contain shadow-medium ring-2 ring-lavender-200"
              />
            </div>
            <div>
              <Image
                alt="ACCE community event — Natoya"
                src="/event_images/empowering-communities-2026/Natoya.jpg"
                width={5398}
                height={3858}
                className="w-full rounded-2xl bg-teal-50 object-contain shadow-medium ring-2 ring-teal-200"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MissionAndStats() {
  return (
    <section className="bg-lavender-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h2 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
            Who We Are
          </h2>
          <div className="mt-10 flex flex-col gap-x-12 gap-y-16 lg:flex-row">
            <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
              <p className="text-xl/8 text-charcoal-700">{whoWeAreContent.about_p1}</p>
              <p className="mt-8 text-xl/8 text-charcoal-700">{whoWeAreContent.about_p2}</p>
              <p className="mt-6 text-xl/8 text-charcoal-700">{whoWeAreContent.about_p3}</p>
            </div>
            <div className="lg:flex lg:flex-auto lg:justify-center">
              <dl className="space-y-8">
                {whoWeAreContent.stats.map((stat, index) => (
                  <div
                    key={stat.label}
                    className="flex flex-col-reverse gap-y-2 bg-white rounded-2xl p-6 shadow-soft border-l-4 border-teal-500"
                  >
                    <dt className="text-base/7 text-charcoal-500">{stat.label}</dt>
                    <dd className="font-display text-4xl font-bold tracking-tight text-charcoal-900">
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
    <section className="relative mt-0 xl:mx-auto xl:max-w-7xl xl:px-8">
      <div className="relative overflow-hidden">
        <Image
          alt="Patients and providers at a community hospital"
          src="/images/who_we_are.jpg"
          width={2832}
          height={1133}
          className="aspect-[5/2] w-full object-cover xl:rounded-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/40 to-transparent xl:rounded-3xl" />
      </div>
    </section>
  )
}

function OurValues() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
            Our Values
          </h2>
          <p className="mt-6 text-xl/8 text-charcoal-600">
            These principles guide our work with patients, families, partners, and communities.
          </p>
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base/7 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {whoWeAreContent.values.map((value) => {
            const styles = colorStyles[value.color as keyof typeof colorStyles]
            return (
              <div
                key={value.name}
                className={`relative rounded-2xl ${styles.bg} p-8 border-2 ${styles.border} hover:shadow-medium transition-shadow`}
              >
                <div className="flex items-center gap-x-4">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-soft ${styles.text}`}>
                    <ValueIcon name={value.name} />
                  </span>
                  <dt className="text-xl font-bold text-charcoal-900">{value.name}</dt>
                </div>
                <dd className="mt-4 text-base/7 text-charcoal-600">{value.description}</dd>
              </div>
            )
          })}
        </dl>
      </div>
    </section>
  )
}

function ValueIcon({ name }: { name: string }) {
  const common = 'size-6';
  switch (name) {
    case 'Equity':
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

export default function WhoWeArePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurValues />
        <MissionAndStats />
        <WideImage />
      </main>
      <Footer />
    </>
  )
}
