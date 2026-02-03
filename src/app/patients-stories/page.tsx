import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { patientStories } from '@/lib/stories'

export const metadata: Metadata = {
  title: 'Patients Stories',
}

const patientsStoriesContent = {
  title: 'Real Patients, Real Stories',
  subtitle:
    'Alliance for CancerCare Equity is committed to realizing a bold vision of equitable cancer care for every patient in need. As demand for our assistance grows, our commitment to advancing cancer care equity only strengthens.',
}


function StoriesHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold-300/30 rounded-full blur-3xl" />

      <Container className="relative py-20 sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full bg-lavender-100 px-4 py-1.5 text-sm font-medium text-lavender-700 ring-1 ring-inset ring-lavender-200 mb-6">
          Patient Stories
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl max-w-3xl">
          {patientsStoriesContent.title}
        </h1>
        <p className="mt-6 max-w-2xl text-xl/8 text-charcoal-600">
          {patientsStoriesContent.subtitle}
        </p>
      </Container>
    </section>
  )
}

function PatientsStories() {
  return (
    <section className="bg-lavender-50 py-20 sm:py-28">
      <Container>
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
        >
          {patientStories.map((story) => {
            const hasFullStory = story.content.length > 0
            const href = hasFullStory
              ? `/patients-stories/${story.slug}`
              : story.youtubeUrl
            const linkProps = hasFullStory
              ? {}
              : { target: '_blank' as const, rel: 'noopener noreferrer' }

            return (
              <li key={story.name}>
                <Link href={href} {...linkProps} className="group block">
                  <div className="relative h-80 w-full overflow-hidden rounded-3xl bg-white shadow-soft ring-2 ring-lavender-200 transition-all duration-300 group-hover:shadow-medium group-hover:ring-teal-300">
                    {/* Blurred background fill */}
                    <Image
                      fill
                      className="object-cover scale-110 blur-md opacity-40"
                      src={story.imageUrl}
                      alt=""
                      aria-hidden
                      sizes="(min-width: 1024px) 20rem, (min-width: 640px) 24rem, 100vw"
                    />
                    {/* Foreground image */}
                    <Image
                      fill
                      className="relative z-10 object-contain object-center"
                      src={story.imageUrl}
                      alt={story.name}
                      sizes="(min-width: 1024px) 20rem, (min-width: 640px) 24rem, 100vw"
                      placeholder="blur"
                    />
                    {/* Play button / Read story overlay */}
                    <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="flex size-16 items-center justify-center rounded-full bg-teal-500 shadow-strong">
                        {hasFullStory ? (
                          <svg className="size-7 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                          </svg>
                        ) : (
                          <svg className="size-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </div>
                    </div>
                    {/* Badge for full stories */}
                    {hasFullStory && (
                      <div className="absolute top-4 right-4 z-20">
                        <span className="inline-flex items-center rounded-full bg-gold-400 px-3 py-1 text-xs font-semibold text-charcoal-900">
                          Full Story
                        </span>
                      </div>
                    )}
                  </div>
                  <h3 className="mt-6 font-display text-xl font-bold leading-8 tracking-tight text-charcoal-900 group-hover:text-teal-600 transition-colors">
                    {story.name}
                  </h3>
                  <p className="text-base/7 text-lavender-600 group-hover:text-teal-600 transition-colors flex items-center gap-2">
                    {hasFullStory ? (
                      <>
                        <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
                        </svg>
                        Read her full story
                      </>
                    ) : (
                      <>
                        <svg className="size-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Click to hear {story.name.includes('Emmanuel') ? 'his' : 'her'} story
                      </>
                    )}
                  </p>
                </Link>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}

function StoriesCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-charcoal-800 py-20 sm:py-24">
      <div className="absolute inset-0 bg-dot-pattern-light opacity-10" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-lavender-400/20 rounded-full blur-3xl" />

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Help us write more stories of hope
          </h2>
          <p className="mt-4 text-lg/8 text-teal-100">
            Your donation directly funds life-saving treatment for patients in need.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/giving-options" color="cta" size="lg">
              Donate now
            </Button>
            <Button href="/volunteer" variant="outline" color="white" size="lg">
              Volunteer with us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function PatientsStoriesPage() {
  return (
    <>
      <Header />
      <main>
        <StoriesHero />
        <PatientsStories />
        <StoriesCta />
      </main>
      <Footer />
    </>
  )
}
