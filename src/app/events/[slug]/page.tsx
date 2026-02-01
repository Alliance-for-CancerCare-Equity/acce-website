import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { CalendarDaysIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { getEventBySlug, getEventSlugs } from '@/lib/mdx'

type PageParams = { slug: string }

export function generateStaticParams() {
  const slugs = getEventSlugs()
  return slugs.map((file) => ({ slug: file.replace(/\.mdx$/, '') }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = getEventBySlug(slug)
  if (!entry) return { title: 'Events' }
  return {
    title: entry.meta.title,
    description: entry.meta.excerpt,
    openGraph: {
      title: entry.meta.title,
      description: entry.meta.excerpt,
      images: [{ url: entry.meta.imageUrl }],
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.meta.title,
      description: entry.meta.excerpt,
      images: [entry.meta.imageUrl],
    },
  }
}

function EventHeader({
  title,
  date,
  location,
  time,
  imageUrl,
}: {
  title: string
  date: string
  location: string
  time: string
  imageUrl: string
}) {
  return (
    <section className="relative bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern-light opacity-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-lavender-500/20 rounded-full blur-3xl" />

      <Container className="relative pt-12 pb-8 sm:pt-16">
        <div className="mb-6">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-400 hover:text-teal-300 transition-colors"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Events
          </Link>
        </div>

        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>

        <div className="mt-6 flex flex-wrap gap-6 text-base">
          <div className="flex items-center gap-2 text-teal-300">
            <CalendarDaysIcon className="size-5" />
            <span>
              {new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center gap-2 text-lavender-300">
            <ClockIcon className="size-5" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-gold-300">
            <MapPinIcon className="size-5" />
            <span>{location}</span>
          </div>
        </div>
      </Container>

      <Container className="relative pb-12">
        <div className="relative mx-auto aspect-[16/9] max-w-5xl overflow-hidden rounded-3xl shadow-strong ring-2 ring-white/10">
          <Image fill src={imageUrl} alt={title} className="object-cover" sizes="(min-width: 1280px) 80rem, (min-width: 1024px) 64rem, (min-width: 640px) 100vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent" />
        </div>
      </Container>
    </section>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog-prose mx-auto max-w-3xl text-base/7 text-charcoal-700">
      {children}
    </div>
  )
}

function EventCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lavender-100 via-gold-50 to-teal-50 py-16 sm:py-20">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-10 right-10 w-48 h-48 bg-lavender-300/30 rounded-full blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-bold text-charcoal-900 sm:text-3xl">
            More ways to get involved
          </h2>
          <p className="mt-4 text-lg text-charcoal-600">
            Join our community in the fight for cancer care equity.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/giving-options" color="cta" size="lg">
              Donate now
            </Button>
            <Button href="/volunteer" variant="outline" color="charcoal" size="lg">
              Volunteer with us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default async function EventPage({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { slug } = await params
  const entry = getEventBySlug(slug)
  if (!entry) {
    return (
      <>
        <Header />
        <main>
          <section className="bg-lavender-50 py-24">
            <Container>
              <h1 className="font-display text-3xl font-bold text-charcoal-900">Event not found</h1>
              <p className="mt-3 text-lg text-charcoal-600">The event you are looking for does not exist.</p>
              <div className="mt-8">
                <Button href="/events" color="teal">Back to Events</Button>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main>
        <EventHeader
          title={entry.meta.title}
          date={entry.meta.date}
          location={entry.meta.location}
          time={entry.meta.time}
          imageUrl={entry.meta.imageUrl}
        />
        <section className="bg-white py-12 sm:py-16">
          <Container>
            <Prose>
              <MDXRemote source={entry.content} components={{ Button }} />
            </Prose>
          </Container>
        </section>
        <EventCta />
      </main>
      <Footer />
    </>
  )
}
