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
    <section className="relative isolate overflow-hidden bg-charcoal-900 py-24 sm:py-32">
      <div className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20">
          <svg
          viewBox="0 0 1024 1024"
          className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0"
          aria-hidden="true"
        >
          <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
          <defs>
            <radialGradient id="gradient">
              <stop stopColor="#9B8BB8" />
              <stop offset={1} stopColor="#2A9D8F" />
            </radialGradient>
          </defs>
        </svg>
      </div>
      <Container className="relative text-center">
        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
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
    <div className={`group relative flex flex-col gap-6 rounded-2xl p-6 shadow-sm ring-1 transition-all hover:shadow-md sm:flex-row sm:items-center sm:p-8 ${
      isPast ? 'bg-charcoal-50 ring-charcoal-200 opacity-75 grayscale-[50%] hover:grayscale-0 hover:opacity-100' : 'bg-white ring-charcoal-900/5'
    }`}>
      {/* Date Block */}
      <div className={`flex h-20 w-20 flex-none flex-col items-center justify-center rounded-xl ring-1 sm:h-24 sm:w-24 ${
          isPast ? 'bg-charcoal-100 text-charcoal-500 ring-charcoal-200' : 'bg-teal-50 text-teal-600 ring-teal-100'
      }`}>
        <span className="text-sm font-bold tracking-wider">{month}</span>
        <span className="text-3xl font-extrabold">{day}</span>
      </div>

      {/* Content */}
      <div className="flex-auto">
        <h3 className={`text-xl font-semibold leading-8 tracking-tight transition-colors ${
            isPast ? 'text-charcoal-700 group-hover:text-teal-600' : 'text-charcoal-900 group-hover:text-teal-600'
        }`}>
          <Link href={event.href}>
            <span className="absolute inset-0" />
            {event.title}
          </Link>
        </h3>

        <div className="mt-2 flex flex-wrap gap-4 text-sm leading-6 text-charcoal-500">
            <div className="flex items-center gap-x-2">
                <CalendarDaysIcon className="h-5 w-5 text-charcoal-400" aria-hidden="true" />
                <time dateTime={event.dateObj.toISOString()}>{event.dateObj.toLocaleDateString()} • {event.time}</time>
            </div>
            <div className="flex items-center gap-x-2">
                <MapPinIcon className="h-5 w-5 text-charcoal-400" aria-hidden="true" />
                {event.location}
            </div>
        </div>

        <p className="mt-4 text-base leading-7 text-charcoal-600 line-clamp-2">
          {event.excerpt}
        </p>
      </div>

       {/* Optional Image Thumbnail for Desktop */}
       <div className="hidden sm:block flex-none w-32 h-32 relative rounded-lg overflow-hidden bg-charcoal-100">
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
  
  // Sort events: Upcoming (Ascending date), Past (Descending date)
  const upcomingEvents = events
    .filter((e) => e.dateObj >= today)
    .sort((a, b) => a.dateObj.getTime() - b.dateObj.getTime())

  const pastEvents = events
    .filter((e) => e.dateObj < today)
    .sort((a, b) => b.dateObj.getTime() - a.dateObj.getTime())
  
  return (
    <section className="bg-charcoal-50 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-4xl space-y-16">

            {/* Upcoming Events Section */}
            <div>
                 <div className="flex items-center gap-4 mb-8">
                    <h2 className="text-2xl font-bold tracking-tight text-charcoal-900">Upcoming Events</h2>
                    <div className="h-px flex-1 bg-charcoal-200" />
                 </div>

                <div className="space-y-8">
                    {upcomingEvents.length > 0 ? (
                        upcomingEvents.map((event) => (
                            <EventRow key={event.slug} event={event} />
                        ))
                    ) : (
                        <div className="text-center py-12 rounded-2xl bg-white ring-1 ring-charcoal-200 border-dashed border-2 border-charcoal-300">
                            <p className="text-lg text-charcoal-500">No upcoming events at the moment. Check back soon!</p>
                        </div>
                    )}
                </div>
            </div>

            {/* Past Events Section - Only show if there are past events */}
            {pastEvents.length > 0 && (
                <div>
                    <div className="flex items-center gap-4 mb-8">
                        <h2 className="text-2xl font-bold tracking-tight text-charcoal-500">Past Events</h2>
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
      <section className="bg-white">
        <Container className="py-16 sm:py-24">
          <div className="relative isolate overflow-hidden bg-teal-600 px-6 py-24 text-center shadow-2xl rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Stay in the loop
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-teal-100">
              Subscribe to our newsletter to get the latest updates on events, fundraisers, and our mission to improve cancer care equity.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/newsletters#subscribe" variant="secondary" className="bg-white text-teal-600 border-white hover:bg-teal-50">
                Subscribe to Alliance Lenz
              </Button>
              <Link href="/contact-us" className="text-sm font-semibold leading-6 text-white hover:text-teal-50">
                Contact us <span aria-hidden="true">→</span>
              </Link>
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