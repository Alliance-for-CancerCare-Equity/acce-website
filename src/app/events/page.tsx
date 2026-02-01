import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { CalendarDaysIcon, MapPinIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { getAllEvents } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Events',
  description: 'Join the Alliance for CancerCare Equity at our upcoming community events.',
}

type Event = {
  title: string
  dateObj: Date
  excerpt: string
  href: string
  imageUrl: string
  location: string
  time: string
  slug: string
}

function EventsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-charcoal-800 via-charcoal-900 to-charcoal-950 py-24 sm:py-32">
      <div className="absolute inset-0 bg-dot-pattern-light opacity-10" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-lavender-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl" />

      <Container className="relative text-center">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 px-4 py-1.5 text-sm font-medium text-teal-300 ring-1 ring-inset ring-teal-500/30 mb-6">
          Join Us
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight text-white sm:text-6xl">
          Community Events
        </h1>
        <p className="mt-6 text-lg leading-8 text-charcoal-300 max-w-2xl mx-auto">
          Connect, learn, and grow with us. Join our workshops, fundraisers, and awareness sessions to make a real impact in cancer care equity.
        </p>
      </Container>
    </section>
  )
}

function EventRow({ event, isPast = false }: { event: Event; isPast?: boolean }) {
  const month = event.dateObj.toLocaleDateString('en-US', { month: 'short' }).toUpperCase()
  const day = event.dateObj.toLocaleDateString('en-US', { day: 'numeric' })

  return (
    <div className={`group relative flex flex-col gap-6 rounded-2xl p-6 shadow-soft transition-all duration-300 sm:flex-row sm:items-center sm:p-8 ${
      isPast
        ? 'bg-charcoal-50 ring-1 ring-charcoal-200 opacity-75 grayscale-[50%] hover:grayscale-0 hover:opacity-100'
        : 'bg-white ring-1 ring-charcoal-100 hover:shadow-medium hover:ring-teal-200'
    }`}>
      {/* Date Block */}
      <div className={`flex h-20 w-20 flex-none flex-col items-center justify-center rounded-xl ring-1 sm:h-24 sm:w-24 ${
        isPast
          ? 'bg-charcoal-100 text-charcoal-500 ring-charcoal-200'
          : 'bg-gradient-to-br from-teal-50 to-lavender-50 text-teal-600 ring-teal-200'
      }`}>
        <span className="text-sm font-bold tracking-wider">{month}</span>
        <span className="text-3xl font-extrabold">{day}</span>
      </div>

      {/* Content */}
      <div className="flex-auto">
        <h3 className={`font-display text-xl font-bold leading-8 tracking-tight transition-colors ${
          isPast ? 'text-charcoal-700 group-hover:text-teal-600' : 'text-charcoal-900 group-hover:text-teal-600'
        }`}>
          <Link href={event.href}>
            <span className="absolute inset-0" />
            {event.title}
          </Link>
        </h3>

        <div className="mt-2 flex flex-wrap gap-4 text-sm leading-6 text-charcoal-500">
          <div className="flex items-center gap-x-2">
            <CalendarDaysIcon className="h-5 w-5 text-lavender-500" aria-hidden="true" />
            <time dateTime={event.dateObj.toISOString()}>{event.dateObj.toLocaleDateString()} • {event.time}</time>
          </div>
          <div className="flex items-center gap-x-2">
            <MapPinIcon className="h-5 w-5 text-gold-500" aria-hidden="true" />
            {event.location}
          </div>
        </div>

        <p className="mt-4 text-base leading-7 text-charcoal-600 line-clamp-2">
          {event.excerpt}
        </p>
      </div>

      {/* Optional Image Thumbnail for Desktop */}
      <div className="hidden sm:block flex-none w-32 h-32 relative rounded-xl overflow-hidden bg-lavender-50 ring-1 ring-lavender-100">
        <Image
          src={event.imageUrl}
          alt=""
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      <div className="mt-4 flex sm:hidden">
        <span className="text-sm font-semibold text-teal-600">View Details <span aria-hidden="true">&rarr;</span></span>
      </div>
    </div>
  )
}

function EventsList() {
  const rawEvents = getAllEvents()
  const events: Event[] = rawEvents.map((e) => ({
    title: e.title,
    dateObj: new Date(e.date),
    excerpt: e.excerpt,
    href: `/events/${e.slug}`,
    imageUrl: e.imageUrl,
    location: e.location,
    time: e.time,
    slug: e.slug,
  }))

  const today = new Date()

  const upcomingEvents = events
    .filter((e) => e.dateObj >= today)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())

  const pastEvents = events
    .filter((e) => e.dateObj < today)
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime())

  return (
    <section className="bg-lavender-50 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl space-y-16">

          {/* Upcoming Events Section */}
          <div>
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-2xl font-bold tracking-tight text-charcoal-900">Upcoming Events</h2>
              <div className="h-px flex-1 bg-gradient-to-r from-teal-300 to-transparent" />
            </div>

            <div className="space-y-8">
              {upcomingEvents.length > 0 ? (
                upcomingEvents.map((event) => (
                  <EventRow key={event.slug} event={event} />
                ))
              ) : (
                <div className="text-center py-12 rounded-2xl bg-white ring-1 ring-charcoal-100 border-2 border-dashed border-charcoal-200">
                  <p className="text-lg text-charcoal-500">No upcoming events at the moment. Check back soon!</p>
                </div>
              )}
            </div>
          </div>

          {/* Past Events Section */}
          {pastEvents.length > 0 && (
            <div>
              <div className="flex items-center gap-4 mb-8">
                <h2 className="font-display text-2xl font-bold tracking-tight text-charcoal-500">Past Events</h2>
                <div className="h-px flex-1 bg-charcoal-200" />
              </div>

              <div className="space-y-8">
                {pastEvents.map((event) => (
                  <EventRow key={event.slug} event={event} isPast={true} />
                ))}
              </div>
            </div>
          )}

        </div>
      </Container>
    </section>
  )
}

function EventsCta() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="relative isolate overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-charcoal-800 px-6 py-24 text-center rounded-3xl shadow-strong">
          <div className="absolute inset-0 bg-dot-pattern-light opacity-10" />
          <div className="absolute top-10 right-10 w-48 h-48 bg-gold-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-lavender-400/20 rounded-full blur-3xl" />

          <div className="relative">
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay in the loop
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100">
              Subscribe to our newsletter to get the latest updates on events, fundraisers, and our mission to improve cancer care equity.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/newsletters#subscribe" variant="solid" color="white" size="lg">
                Subscribe to Alliance Lenz
              </Button>
              <Link href="/contact-us" className="text-sm font-semibold leading-6 text-white hover:text-gold-300 transition-colors">
                Contact us <span aria-hidden="true">→</span>
              </Link>
            </div>
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
        <EventsHero />
        <EventsList />
        <EventsCta />
      </main>
      <Footer />
    </>
  )
}
