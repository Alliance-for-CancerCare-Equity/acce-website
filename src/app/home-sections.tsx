'use client'

import Image from 'next/image'
import Link from 'next/link'
import adisaImage from '../../public/stories/adisa.jpg'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { CompactFooter } from '@/components/layout/Footer'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'

// Urgency Ticker Component
function UrgencyTicker() {
  const items = [
    { icon: '❤️', text: '65+ patients supported' },
    { icon: '🏥', text: '3 hospitals partnered' },
    { icon: '💰', text: '$100k+ raised for treatment' },
    { icon: '🌍', text: 'Serving communities across Ghana' },
    { icon: '🎗️', text: 'Fighting for cancer care equity' },
  ]

  // Duplicate items for seamless loop
  const tickerItems = [...items, ...items]

  return (
    <div className="absolute top-0 left-0 right-0 z-30 bg-charcoal-900/90 backdrop-blur-sm overflow-hidden">
      <div className="animate-scroll-left flex whitespace-nowrap py-2.5">
        {tickerItems.map((item, index) => (
          <span
            key={index}
            className="inline-flex items-center gap-2 px-8 text-sm text-white/90"
          >
            <span>{item.icon}</span>
            <span>{item.text}</span>
            <span className="text-gold-400 ml-4">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

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
    <section className="relative min-h-screen overflow-x-hidden">
      {/* Urgency Ticker */}
      <UrgencyTicker />

      {/* Full-bleed Background Image with Ken Burns effect */}
      <div className="absolute inset-0">
        <Image
          alt="Rukmini Adjetey - Cancer Survivor supported by ACCE"
          src="/stories/rukmini.jpg"
          fill
          priority
          className="object-cover object-center animate-ken-burns"
        />
        {/* Gradient overlays for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-900/70 to-charcoal-900/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/80 via-transparent to-transparent" />
      </div>

      {/* Content positioned bottom-left (asymmetric) */}
      <div className="relative z-20 min-h-screen flex items-end">
        <div className="w-full pb-20 pt-32 sm:pb-28 lg:pb-32">
          <Container>
            <div className="max-w-3xl">
              {/* Event Badge */}
              {eventButton && (
                <Link
                  href={eventButton.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-inset ring-white/20 hover:bg-white/20 transition-colors mb-8"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500"></span>
                  </span>
                  {eventButton.text}
                  <span aria-hidden="true" className="ml-1">→</span>
                </Link>
              )}

              {/* Large emotional headline */}
              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[0.95]">
                Every Cancer Patient Deserves a{' '}
                <span className="relative inline-block">
                  <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-gold-300 to-gold-500">
                    Fighting Chance
                  </span>
                  <span className="absolute -bottom-2 left-0 w-full h-3 bg-gradient-to-r from-teal-500/50 to-lavender-500/50 blur-sm" />
                </span>
              </h1>

              <p className="mt-8 text-lg sm:text-xl text-white/80 max-w-2xl leading-relaxed">
                {subtitle}
              </p>

              {/* CTAs */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href={button1.href} color="cta" size="xl" className="animate-pulse-subtle">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    {button1.text} Now
                  </span>
                </Button>
                <Button href={button2.href} variant="outline" color="white" size="lg">
                  {button2.text}
                </Button>
              </div>

              {/* Quick stats row */}
              <div className="mt-16 flex flex-wrap gap-8 sm:gap-12 border-t border-white/10 pt-8">
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                    <AnimatedNumber value={65} />+
                  </div>
                  <div className="text-sm text-white/60 mt-1">Patients Helped</div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                    $<AnimatedNumber value={100} />k+
                  </div>
                  <div className="text-sm text-white/60 mt-1">Raised for Care</div>
                </div>
                <div>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-white">
                    <AnimatedNumber value={3} />
                  </div>
                  <div className="text-sm text-white/60 mt-1">Partner Hospitals</div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden sm:block">
        <div className="flex flex-col items-center gap-2 text-white/50">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full animate-bounce" />
          </div>
        </div>
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
  title: string
  subtitle: string
  description?: string
  items: Stat[]
}

export function Stats({ title, subtitle, description, items }: StatsProps) {
  return (
    <section className="relative isolate overflow-hidden bg-lavender-50 py-24 sm:py-32">
      {/* Decorative pattern */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30" />

      {/* Gold accent orb */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-200/40 rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
            {title}
          </h2>
          <p className="mt-2 font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
            {subtitle}
          </p>
          {description && (
            <p className="mt-6 text-lg/8 text-charcoal-600">{description}</p>
          )}
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {items.map((stat, index) => (
            <div
              key={stat.name}
              className="relative bg-white rounded-2xl p-8 shadow-soft hover:shadow-medium transition-shadow border-t-4 border-teal-500"
            >
              <dt className="text-sm font-medium text-charcoal-500 uppercase tracking-wide">
                {stat.name}
              </dt>
              <dd className="mt-2 flex items-baseline">
                <span className="font-display text-4xl font-bold tracking-tight text-charcoal-900">
                  {stat.prefix}
                  {stat.animate ? (
                    <AnimatedNumber value={stat.value} />
                  ) : (
                    stat.value
                  )}
                  {stat.suffix}
                </span>
              </dd>
              {/* Gold highlight on hover */}
              <div className="absolute bottom-0 left-4 right-4 h-1 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
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
    <section className="relative z-20 min-h-[100dvh] -mt-10 sm:-mt-16 lg:-mt-24 pb-10 sm:pb-16 lg:pb-24 overflow-hidden flex items-center bg-gradient-warm">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-lavender-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gold-300/30 rounded-full blur-3xl" />

      <Container className="relative z-10 pb-24 lg:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <hgroup>
            <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">{title}</h2>
            <p className="mt-2 font-display text-5xl font-bold tracking-tight text-charcoal-900 sm:text-6xl">
              {subtitle}
            </p>
          </hgroup>
          <p className="mx-auto mt-6 max-w-2xl text-xl/8 text-charcoal-600">
            {content}
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={button.href} color="cta" size="xl">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                {button.text}
              </span>
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
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      href: '/support-treatment',
      color: 'teal',
    },
    {
      name: 'Community Support',
      description: 'We provide comprehensive support to patients and families, ensuring they never face cancer alone.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 5.472m0 0a9.09 9.09 0 00-3.261-3.223 3 3 0 014.714-3.088M12 12.75a5.995 5.995 0 01-5.058-5.472m0 0A5.995 5.995 0 0112 6.75a5.995 5.995 0 015.058 6m0 0a5.995 5.995 0 01-5.058 5.472M12 12.75V3m0 9.75V21" />
        </svg>
      ),
      href: '/support-patients-and-their-families',
      color: 'lavender',
    },
    {
      name: 'Research & Education',
      description: 'We advance cancer research and educate communities to improve prevention and early detection.',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="size-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.516 50.552 50.552 0 00-2.658.813m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      href: '/promote-and-advance-cancer-research',
      color: 'gold',
    },
  ]

  const colorStyles = {
    teal: {
      bg: 'bg-teal-50',
      icon: 'bg-teal-500',
      border: 'border-teal-200',
      hover: 'hover:border-teal-400 hover:shadow-glow-teal',
      link: 'text-teal-600 hover:text-teal-700',
    },
    lavender: {
      bg: 'bg-lavender-50',
      icon: 'bg-lavender-500',
      border: 'border-lavender-200',
      hover: 'hover:border-lavender-400 hover:shadow-glow-lavender',
      link: 'text-lavender-600 hover:text-lavender-700',
    },
    gold: {
      bg: 'bg-gold-50',
      icon: 'bg-gold-500',
      border: 'border-gold-200',
      hover: 'hover:border-gold-400 hover:shadow-glow-gold',
      link: 'text-gold-600 hover:text-gold-700',
    },
  }

  return (
    <section className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-sm font-semibold text-teal-600 uppercase tracking-wider">Our Impact</h2>
          <p className="mt-2 font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-balance">
            Comprehensive care for every step of the journey
          </p>
          <p className="mt-6 text-lg/8 text-charcoal-600">
            We are dedicated to bridging the gap in cancer care through three key pillars of action.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {pillars.map((pillar) => {
              const styles = colorStyles[pillar.color as keyof typeof colorStyles]
              return (
                <div
                  key={pillar.name}
                  className={`relative flex flex-col rounded-2xl ${styles.bg} border-2 ${styles.border} ${styles.hover} p-8 transition-all duration-300`}
                >
                  <dt className="flex items-center gap-x-4 text-lg font-semibold text-charcoal-900">
                    <div className={`flex size-12 flex-none items-center justify-center rounded-xl ${styles.icon} text-white shadow-medium`}>
                      {pillar.icon}
                    </div>
                    {pillar.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base/7 text-charcoal-600">
                    <p className="flex-auto">{pillar.description}</p>
                    <p className="mt-6">
                      <Link href={pillar.href} className={`text-sm font-semibold ${styles.link} transition-colors`}>
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              )
            })}
          </dl>
        </div>
      </div>
    </section>
  )
}

export function FeatureStory() {
  return (
    <section className="bg-lavender-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-12 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-charcoal-900 px-6 pb-9 pt-64 shadow-strong sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <Image
                className="absolute inset-0 size-full object-cover brightness-110"
                src={adisaImage}
                alt="Adisa Iddrisu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/50 to-transparent" />

              {/* Decorative accent */}
              <div className="absolute top-4 left-4 w-16 h-1 bg-gold-400 rounded-full" />

              <figure className="relative isolate">
                <blockquote className="mt-6 text-xl/8 font-semibold text-white">
                  <p>
                    &ldquo;I am so grateful to ACCE for coming to my aid. I was diagnosed with breast cancer and I didn&apos;t have money for the surgery. ACCE paid for my surgery and chemotherapy.&rdquo;
                  </p>
                </blockquote>
                <figcaption className="mt-6 text-sm/6 leading-6 text-charcoal-200">
                  <strong className="font-semibold text-gold-400">Adisa Iddrisu</strong>
                  <span className="mx-2">–</span>
                  <span>Breast Cancer Survivor</span>
                </figcaption>
              </figure>
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-lavender-600 uppercase tracking-wider">Real Stories</div>
            <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
              We are changing lives, one patient at a time.
            </h2>
            <p className="mt-6 text-xl/8 text-charcoal-600">
              Behind every statistic is a person with a family, dreams, and a future worth fighting for. Our mission is to ensure that financial barriers do not stand in the way of life-saving treatment.
            </p>
            <p className="mt-6 text-base/7 text-charcoal-600">
              From covering surgery costs to funding chemotherapy and providing emotional support, we walk alongside patients every step of the way.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Button href="/patients-stories" color="teal">
                Read more stories
              </Button>
              <Link href="/who-we-are" className="text-sm/6 font-semibold text-charcoal-700 hover:text-teal-600 transition-colors">
                Learn about our mission <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
