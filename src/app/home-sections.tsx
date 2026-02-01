'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'
import adisaImage from '../../public/stories/adisa.jpg'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { CompactFooter } from '@/components/layout/Footer'
import { GradientOrb, WaveDivider } from '@/components/decorative'

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
    <section className="relative min-h-screen overflow-hidden bg-white">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb variant="lavender-teal" size="xl" className="-top-48 -right-48 opacity-40" />
        <GradientOrb variant="gold-lavender" size="lg" className="bottom-1/4 -left-32 opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="relative z-20 pt-32 lg:w-full lg:max-w-2xl lg:pt-14">
          <div className="relative px-6 py-24 sm:py-32 lg:px-8 lg:py-56 lg:pr-0">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
              {/* Eyebrow badge */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-lavender-100 px-4 py-1.5 text-sm font-medium text-lavender-700">
                <span className="h-1.5 w-1.5 rounded-full bg-lavender-500 animate-pulse" />
                Making cancer care accessible to all
              </div>

              <h1 className="text-5xl font-bold tracking-tight text-charcoal-800 sm:text-7xl">
                {title_part1}{' '}
                <span className="relative whitespace-nowrap">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 418 42"
                    className="absolute top-2/3 left-0 h-[0.58em] w-full fill-teal-200"
                    preserveAspectRatio="none"
                  >
                    <path d="M203.371.916c-26.013-2.078-76.686 1.963-124.73 9.946L67.3 12.749C35.421 18.062 18.2 21.766 6.004 25.934 1.244 27.561.828 27.778.874 28.61c.07 1.214.828 1.121 9.595-1.176 9.072-2.377 17.15-3.92 39.246-7.496C123.565 7.986 157.869 4.492 195.942 5.046c7.461.108 19.25 1.696 19.17 2.582-.107 1.183-7.874 4.31-25.75 10.366-21.992 7.45-35.43 12.534-36.701 13.884-2.173 2.308-.202 4.407 4.442 4.734 2.654.187 3.263.157 15.593-.78 35.401-2.686 57.944-3.488 88.365-3.143 46.327.526 75.721 2.23 130.788 7.584 19.787 1.924 20.814 1.98 24.557 1.332l.066-.011c1.201-.203 1.53-1.825.399-2.335-2.911-1.31-4.893-1.604-22.048-3.261-57.509-5.556-87.871-7.36-132.059-7.842-23.239-.254-33.617-.116-50.627.674-11.629.54-42.371 2.494-46.696 2.967-2.359.259 8.133-3.625 26.504-9.81 23.239-7.825 27.934-10.149 28.304-14.005.417-4.348-3.529-6-16.878-7.066Z" />
                  </svg>
                  <span className="relative text-teal-600">{title_part2_styled}</span>
                </span>
              </h1>

              <p className="mt-8 text-xl font-medium text-charcoal-600 leading-relaxed">
                {subtitle}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-4">
                <Button href={button1.href} variant="cta" size="lg">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  {button1.text}
                </Button>
                <Button href={button2.href} variant="secondary" size="lg">
                  {button2.text}
                </Button>
                {eventButton && (
                  <Button href={eventButton.href} variant="ghost" size="lg" className="text-lavender-700 hover:bg-lavender-50">
                    <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {eventButton.text}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Image */}
      <div className="relative z-10 hidden lg:absolute lg:top-14 lg:bottom-0 lg:right-0 lg:block lg:w-1/2 lg:[clip-path:polygon(12%_0,100%_0,100%_100%,0_100%)]">
        <Image
          alt=""
          src="/images/home.jpg"
          fill
          priority
          className="object-cover object-[50%_60%]"
        />
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/30 to-transparent" />
      </div>

      {/* Wave transition */}
      <WaveDivider variant="gentle" color="lavender" className="-bottom-1" />
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

// Animated counter hook
function useCounter(target: number, duration: number = 2000, shouldStart: boolean = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!shouldStart) return

    const startTime = Date.now()
    const animate = () => {
      const elapsed = Date.now() - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easeOut = 1 - (1 - progress) * (1 - progress)
      setCount(Math.floor(easeOut * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [target, duration, shouldStart])

  return count
}

function StatCard({ stat, index, isVisible }: { stat: Stat; index: number; isVisible: boolean }) {
  const count = useCounter(stat.value, 2000, isVisible && (stat.animate ?? false))

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-[var(--shadow-soft)] transition-all duration-500 hover:shadow-[var(--shadow-medium)] hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Gold accent top border */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold-300 via-gold-400 to-gold-300" />

      <dt className="text-sm font-medium text-charcoal-500 uppercase tracking-wide">
        {stat.name}
      </dt>
      <dd className="mt-3 text-5xl font-bold tracking-tight text-teal-600">
        {stat.prefix}
        {stat.animate ? count.toLocaleString() : stat.value.toLocaleString()}
        {stat.suffix}
      </dd>
    </div>
  )
}

export function Stats({ title, subtitle, description, items }: StatsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="relative py-24 sm:py-32 bg-lavender-50">
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-sm font-medium text-gold-700 mb-4">
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {title}
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-charcoal-800 sm:text-5xl">
            {subtitle}
          </h2>
          {description && (
            <p className="mt-6 text-lg text-charcoal-600">{description}</p>
          )}
        </div>
        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
          {items.map((stat, index) => (
            <StatCard key={stat.name} stat={stat} index={index} isVisible={isVisible} />
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
      {/* Decorative gradient */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb variant="teal-gold" size="xl" className="top-1/4 left-1/4 opacity-20" />
      </div>

      <Container className="relative z-10 pb-24 lg:pb-28">
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700 mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {title}
          </div>
          <h2 className="text-5xl font-bold tracking-tight text-charcoal-800 sm:text-6xl">
            {subtitle}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-charcoal-600">
            {content}
          </p>
          <div className="mt-10 flex justify-center">
            <Button href={button.href} variant="cta" size="lg">
              <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
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
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
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

  const colorClasses = {
    teal: {
      icon: 'bg-teal-500 text-white',
      hover: 'hover:border-teal-400',
      link: 'text-teal-600 hover:text-teal-700',
    },
    lavender: {
      icon: 'bg-lavender-500 text-white',
      hover: 'hover:border-lavender-400',
      link: 'text-lavender-600 hover:text-lavender-700',
    },
    gold: {
      icon: 'bg-gold-500 text-white',
      hover: 'hover:border-gold-400',
      link: 'text-gold-600 hover:text-gold-700',
    },
  }

  return (
    <section className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700 mb-4">
            Our Impact
          </div>
          <h2 className="text-4xl font-bold tracking-tight text-charcoal-800 sm:text-5xl">
            Comprehensive care for every step of the journey
          </h2>
          <p className="mt-6 text-lg text-charcoal-600">
            We are dedicated to bridging the gap in cancer care through three key pillars of action.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {pillars.map((pillar) => (
              <div
                key={pillar.name}
                className={`group relative flex flex-col rounded-2xl border-2 border-charcoal-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-medium)] ${colorClasses[pillar.color as keyof typeof colorClasses].hover}`}
              >
                <dt className="flex items-center gap-x-4 text-lg font-semibold text-charcoal-800">
                  <div className={`flex size-12 flex-none items-center justify-center rounded-xl ${colorClasses[pillar.color as keyof typeof colorClasses].icon}`}>
                    {pillar.icon}
                  </div>
                  {pillar.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base text-charcoal-600">
                  <p className="flex-auto">{pillar.description}</p>
                  <p className="mt-6">
                    <Link
                      href={pillar.href}
                      className={`text-sm font-semibold inline-flex items-center gap-1 ${colorClasses[pillar.color as keyof typeof colorClasses].link}`}
                    >
                      Learn more
                      <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
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
    <section className="relative bg-lavender-50 py-24 sm:py-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb variant="lavender-teal" size="xl" className="-top-48 -right-48 opacity-30" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {/* Image with quote overlay */}
          <div className="lg:pr-4">
            <div className="relative overflow-hidden rounded-3xl bg-charcoal-900 shadow-2xl">
              <Image
                className="aspect-[4/5] w-full object-cover brightness-110 saturate-0"
                src={adisaImage}
                alt="Adisa Iddrisu"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/40 to-transparent" />

              {/* Quote badge */}
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 rounded-full bg-lavender-500/90 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
                </svg>
                Patient Story
              </div>

              {/* Quote content */}
              <div className="absolute inset-x-0 bottom-0 p-8">
                <blockquote className="text-xl font-medium text-white leading-relaxed">
                  &ldquo;I am so grateful to ACCE for coming to my aid. I was diagnosed with breast cancer and I didn&apos;t have money for the surgery. ACCE paid for my surgery and chemotherapy.&rdquo;
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <div className="h-px flex-1 bg-lavender-400/50" />
                  <figcaption className="text-sm text-lavender-200">
                    <strong className="font-semibold text-white">Adisa Iddrisu</strong> — Breast Cancer Survivor
                  </figcaption>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-lavender-200 px-4 py-1.5 text-sm font-medium text-lavender-700 mb-4">
              Real Stories
            </div>
            <h2 className="text-4xl font-bold tracking-tight text-charcoal-800 sm:text-5xl">
              We are changing lives, one patient at a time.
            </h2>
            <p className="mt-6 text-xl text-charcoal-600">
              Behind every statistic is a person with a family, dreams, and a future worth fighting for. Our mission is to ensure that financial barriers do not stand in the way of life-saving treatment.
            </p>
            <p className="mt-6 text-base text-charcoal-600">
              From covering surgery costs to funding chemotherapy and providing emotional support, we walk alongside patients every step of the way.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/patients-stories" variant="primary" size="lg">
                Read more stories
              </Button>
              <Link href="/who-we-are" className="group inline-flex items-center gap-2 text-sm font-semibold text-charcoal-700 hover:text-teal-600 transition-colors">
                Learn about our mission
                <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
