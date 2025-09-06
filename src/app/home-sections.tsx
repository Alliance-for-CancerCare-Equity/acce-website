'use client'

import Image from 'next/image'
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
}

export function Hero({
  title_part1,
  title_part2_styled,
  subtitle,
  button1,
  button2,
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
              <div className="mt-10 flex items-center gap-x-6">
                <Button href={button1.href}>{button1.text}</Button>
                <Button href={button2.href} variant="outline">
                  <span className="ml-3">{button2.text}</span>
                </Button>
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
