'use client'

import Image from 'next/image'
import Link from 'next/link'
import adisaImage from '../../public/stories/adisa.jpg'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import backgroundCta from '@/images/background-call-to-action.jpg'
import { CompactFooter } from '@/components/layout/Footer'

interface HeroProps {
  title_part1: string
  title_part2_styled: string
  subtitle: string
  button1: {
    text: string
    href: string
  }
  button2: {
    text: string
    href: string
  }
  eventButton?: {
    text: string
    href: string
  }
}

export function Hero({
  title_part1,
  title_part2_styled,
  subtitle,
  button1,
  button2,
  eventButton,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-20 pt-14 lg:w-full lg:max-w-2xl">
          {/* Removed legacy diagonal overlay; image now uses clip-path for a consistent diagonal edge. */}

          <div className="relative px-6 py-32 sm:py-40 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              <h1 className="text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-7xl dark:text-white">
                {title_part1}{' '}
                <span className="relative whitespace-nowrap text-blue-600">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-2/3 left-0 h-[0.58em] w-full fill-blue-300/70"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                  </svg>
                  <span className="relative">{title_part2_styled}</span>
                </span>
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
                {subtitle}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-4">
                <Button href={button1.href}>{button1.text}</Button>
                <Button href={button2.href} variant="outline">
                  <span className="ml-3">{button2.text}</span>
                </Button>
                {eventButton && (
                   <Button href={eventButton.href} color="white" className="ring-1 ring-inset ring-slate-200 text-blue-600 hover:bg-blue-50">
                     {eventButton.text}
                   </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-10 hidden lg:absolute lg:top-14 lg:bottom-0 lg:right-0 lg:block lg:w-1/2 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
        <Image
          alt=""
          src="/images/home.jpg"
          fill
          priority
          className="object-cover object-[50%_60%]"
        />
      </div>
    </section>
  )
}

interface Stat {
  name: string
  value: number
  prefix?: string
  suffix?: string
  animate?: boolean
}

interface StatsProps {
  title: string // small label
  subtitle: string // big heading
  description?: string // optional paragraph under heading
  items: Stat[]
}

export function Stats({ title, subtitle, description, items }: StatsProps) {
  // Reworked to use the provided stats section pattern
  // while preserving dynamic page content (title, subtitle, items).
  const formatted = items.map((s, i) => ({
    id: i + 1,
    name: s.name,
    value: `${s.prefix ?? ''}${s.value}${s.suffix ?? ''}`,
  }))

  return (
    <section className="relative isolate overflow-hidden bg-white py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-base/8 font-semibold text-indigo-600">
            {title}
          </h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            {subtitle}
          </p>
          {description && (
            <p className="mt-6 text-lg/8 text-gray-700">{description}</p>
          )}
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 text-gray-900 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {formatted.map((stat) => (
            <div
              key={stat.id}
              className="flex flex-col gap-y-3 border-l border-slate-200 pl-6"
            >
              <dt className="text-sm/6">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}

interface CallToActionProps {
  title: string
  subtitle: string
  content: string
  button: {
    text: string
    href: string
  }
}

export function CallToAction({
  title,
  subtitle,
  content,
  button,
}: CallToActionProps) {
  return (
    <section className="relative z-20 min-h-[100dvh] -mt-10 sm:-mt-16 lg:-mt-24 pb-10 sm:pb-16 lg:pb-24 overflow-hidden flex items-center bg-white">
      <Container className="relative z-10 pb-24 lg:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <hgroup>
            <h2 className="text-base/7 font-semibold text-blue-600">{title}</h2>
            <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-slate-900 sm:text-6xl">
              {subtitle}
            </p>
          </hgroup>
          <p className="mx-auto mt-6 max-w-2xl text-xl/8 text-pretty text-slate-600">
            {content}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={button.href} color="blue">
              {button.text}
            </Button>
          </div>
        </div>
      </Container>
      <div className="absolute inset-x-0 bottom-0 z-10">
        <CompactFooter />
      </div>
    </section>
  )
}

export function MissionPreview() {
  const pillars = [
    {
      name: 'Treatment Funding',
      description: 'We cover the costs of cancer treatment and related expenses for patients who lack financial means.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: '/support-treatment',
    },
    {
      name: 'Community Support',
      description: 'We provide comprehensive support to patients and families, ensuring they never face cancer alone.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.472m0 0a9.09 9.09 0 00-3.261-3.223 3 3 0 014.714-3.088M12 12.75a5.995 5.995 0 01-5.058-5.472m0 0A5.995 5.995 0 0112 6.75a5.995 5.995 0 015.058 6m0 0a5.995 5.995 0 01-5.058 5.472M12 12.75V3m0 9.75V21" />
        </svg>
      ),
      href: '/support-patients-and-their-families',
    },
    {
      name: 'Research & Education',
      description: 'We advance cancer research and educate communities to improve prevention and early detection.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="size-6 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.516 50.552 50.552 0 00-2.658.813m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      href: '/promote-and-advance-cancer-research',
    },
  ]

  return (
    <section className="bg-slate-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base/7 font-semibold text-blue-600">Our Impact</h2>
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl lg:text-balance">
            Comprehensive care for every step of the journey
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            We are dedicated to bridging the gap in cancer care through three key pillars of action.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div key={pillar.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base/7 font-semibold text-slate-900">
                  <div className="flex size-10 flex-none items-center justify-center rounded-lg bg-blue-600">
                    {pillar.icon}
                  </div>
                  {pillar.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base/7 text-slate-600">
                  <p className="flex-auto">{pillar.description}</p>
                  <p className="mt-6">
                    <Link href={pillar.href} className="text-sm/6 font-semibold text-blue-600">
                      Learn more <span aria-hidden="true">→</span>
                    </Link>
                  </p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

export function FeatureStory() {
  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-gray-900 px-6 pb-9 pt-64 shadow-2xl sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 size-full object-cover brightness-125 saturate-0"
                src={adisaImage}
                alt="Adisa Iddrisu"
              />
              <div className="absolute inset-0 bg-gray-900/70 mix-blend-multiply" />
              <div className="absolute left-1/2 top-1/2 -ml-16 -translate-x-1/2 -translate-y-1/2 transform-gpu blur-3xl" aria-hidden="true">
                <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-40" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} />
              </div>
              <figure className="relative isolate">
                <blockquote className="mt-6 text-xl/8 font-semibold text-white">
                  <p>
                    “I am so grateful to ACCE for coming to my aid. I was diagnosed with breast cancer and I didn&apos;t have money for the surgery. ACCE paid for my surgery and chemotherapy.”
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm/6 leading-6 text-gray-300">
                  <strong className="font-semibold text-white">Adisa Iddrisu</strong> – Breast Cancer Survivor
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-base/7 font-semibold text-blue-600">Real Stories</div>
            <h2 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
              We are changing lives, one patient at a time.
            </h2>
            <p className="mt-6 text-xl/8 text-slate-600">
              Behind every statistic is a person with a family, dreams, and a future worth fighting for. Our mission is to ensure that financial barriers do not stand in the way of life-saving treatment.
            </p>
            <p className="mt-6 text-base/7 text-slate-600">
              From covering surgery costs to funding chemotherapy and providing emotional support, we walk alongside patients every step of the way.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button href="/patients-stories" color="blue">
                Read more stories
              </Button>
              <Link href="/who-we-are" className="text-sm/6 font-semibold text-slate-900">
                Learn about our mission <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
