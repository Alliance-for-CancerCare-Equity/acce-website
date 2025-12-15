import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { allEvents } from '@/content/events'

export const metadata: Metadata = {
  title: 'Events',
}

type Event = {
  title: string
  date: string
  excerpt: string
  href: string
  imageUrl: string
  location: string
  time: string
}

const eventContent: {
  header: string
  title: string
  intro: string
  events: Event[]
} = {
  header: 'Events',
  title: 'Upcoming Community Events',
  intro:
    'Join us for events dedicated to cancer education, awareness, prevention, and early detection.',
  events: allEvents().map((e) => ({
    title: e.meta.title,
    date: new Date(e.meta.date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }),
    excerpt: e.meta.excerpt,
    href: `/events/${e.slug}`,
    imageUrl: e.meta.imageUrl,
    location: e.meta.location,
    time: e.meta.time,
  })),
}

function EventsHero({ header, title, intro }: { header: string; title: string; intro: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-blue-50 to-transparent" />
      <Container className="py-14 sm:py-16">
        <p className="text-base/7 font-semibold text-blue-600">{header}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg/8 text-slate-600">{intro}</p>
      </Container>
    </section>
  )
}

function FeatureEvent({ event, className }: { event: Event; className?: string }) {
  return (
    <section className={`bg-white ${className || ''}`}>
      <Container>
        <Link href={event.href} className="group relative isolate block overflow-hidden rounded-3xl bg-slate-50 ring-1 ring-slate-200 shadow-sm">
          <div className="relative h-[22rem] sm:h-[26rem]">
            <Image
              fill
              src={event.imageUrl}
              alt={event.title}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-slate-900/20 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            <span className="inline-flex items-center rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-slate-900 ring-1 ring-slate-900/10">
              Upcoming
            </span>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {event.title}
            </h2>
            <p className="mt-2 max-w-3xl text-base/7 text-slate-100/90">{event.excerpt}</p>
            <div className="mt-3 flex flex-col gap-1 text-sm/6 text-slate-200">
                <p>{event.date} • {event.time}</p>
                <p>{event.location}</p>
            </div>
          </div>
        </Link>
      </Container>
    </section>
  )
}

function EventCard({ event }: { event: Event }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
      <div className="relative h-48">
        <Image fill src={event.imageUrl} alt={event.title} className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-x-3 text-sm text-slate-600">
           <time>{event.date}</time>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-slate-900">
          <Link href={event.href} className="hover:text-blue-600">
            {event.title}
          </Link>
        </h3>
        <p className="mt-2 text-base/7 text-slate-600">{event.excerpt}</p>
        <div className="mt-4">
          <Link href={event.href} className="text-sm font-semibold text-blue-600 hover:text-blue-500">
            Event details →
          </Link>
        </div>
      </div>
    </article>
  )
}

function EventsGrid({ events }: { events: Event[] }) {
  const [first, ...rest] = events
  return (
    <>
      {first && <FeatureEvent event={first} className={rest.length === 0 ? "pb-16" : ""} />}
      {rest.length > 0 && (
        <section className="bg-white py-12 sm:py-16">
          <Container>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((e, i) => (
                <EventCard key={`${e.title}-${i}`} event={e} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}

function EventsCta() {
  return (
    <section className="bg-slate-50">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-4xl">
            Support our mission
          </h2>
          <p className="mt-4 text-lg/8 text-slate-600">
            Help us provide cancer education and support to our communities.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/giving-options" color="blue">
              Donate now
            </Button>
            <Button href="/newsletters#subscribe" variant="outline" color="slate">
              Subscribe to Alliance Lenz
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function EventsPage() {
  return (
    <>
      <Header />
      <main>
        <EventsHero header={eventContent.header} title={eventContent.title} intro={eventContent.intro} />
        <EventsGrid events={eventContent.events} />
        <EventsCta />
      </main>
      <Footer />
    </>
  )
}