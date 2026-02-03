import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { getStoryBySlug, getAllStorySlugs } from '@/lib/stories'

type PageParams = { slug: string }

export function generateStaticParams() {
  const slugs = getAllStorySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { slug } = await params
  const story = getStoryBySlug(slug)
  if (!story) return { title: 'Patient Story' }
  return {
    title: story.title,
    description: `Read ${story.name}'s inspiring story of hope and healing with ACCE.`,
    openGraph: {
      title: story.title,
      description: `Read ${story.name}'s inspiring story of hope and healing with ACCE.`,
      type: 'article',
    },
  }
}

function StoryHeader({
  name,
  title,
}: {
  name: string
  title: string
}) {
  return (
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-20 w-64 h-64 bg-gold-300/30 rounded-full blur-3xl" />

      <Container className="relative pt-12 pb-16 sm:pt-16 sm:pb-20">
        <div className="mb-6">
          <Link
            href="/patients-stories"
            className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
            </svg>
            Back to Patient Stories
          </Link>
        </div>
        <span className="inline-flex items-center rounded-full bg-lavender-100 px-3 py-1 text-xs font-semibold text-lavender-700 ring-1 ring-lavender-200">
          Patient Story
        </span>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl max-w-4xl">
          {title}
        </h1>
        <p className="mt-4 text-lg text-charcoal-600">
          {name}&apos;s journey with ACCE
        </p>
      </Container>
    </section>
  )
}

function StoryContent({
  story,
}: {
  story: ReturnType<typeof getStoryBySlug>
}) {
  if (!story || story.content.length === 0) return null

  return (
    <section className="bg-white py-12 sm:py-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          <div className="relative mb-12 aspect-[4/3] w-full overflow-hidden rounded-3xl shadow-strong ring-2 ring-lavender-200">
            <Image
              fill
              src={story.imageUrl}
              alt={story.name}
              className="object-cover"
              sizes="(min-width: 768px) 48rem, 100vw"
              placeholder="blur"
            />
          </div>

          <div className="prose prose-lg prose-charcoal max-w-none">
            {story.content.map((paragraph, index) => (
              <p key={index} className="text-lg/8 text-charcoal-700 mb-6">
                {paragraph}
              </p>
            ))}
          </div>

          {story.quote && (
            <blockquote className="mt-12 border-l-4 border-gold-400 bg-lavender-50 py-6 px-8 rounded-r-2xl">
              <p className="text-xl/8 font-medium text-charcoal-800 italic">
                &ldquo;{story.quote}&rdquo;
              </p>
              <footer className="mt-4 text-base font-semibold text-lavender-700">
                &mdash; {story.name}
              </footer>
            </blockquote>
          )}
        </div>
      </Container>
    </section>
  )
}

function VideoSection({
  youtubeUrl,
  name,
}: {
  youtubeUrl: string
  name: string
}) {
  const videoId = youtubeUrl.includes('v=')
    ? youtubeUrl.split('v=')[1]?.split('&')[0]
    : youtubeUrl.split('/').pop()

  return (
    <section className="bg-lavender-50 py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-2xl font-bold text-charcoal-900 sm:text-3xl mb-8">
            Listen to {name}&apos;s Story
          </h2>
          <div className="relative aspect-video w-full overflow-hidden rounded-3xl shadow-strong ring-2 ring-lavender-200">
            <iframe
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`${name}'s story`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </Container>
    </section>
  )
}

function StoryCta() {
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
            <Button href="/patients-stories" variant="outline" color="white" size="lg">
              Read more stories
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default async function PatientStoryPage({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { slug } = await params
  const story = getStoryBySlug(slug)

  if (!story) {
    return (
      <>
        <Header />
        <main>
          <section className="bg-lavender-50 py-24">
            <Container>
              <h1 className="font-display text-3xl font-bold text-charcoal-900">Story not found</h1>
              <p className="mt-3 text-lg text-charcoal-600">The patient story you are looking for does not exist.</p>
              <div className="mt-8">
                <Button href="/patients-stories" color="teal">Back to Patient Stories</Button>
              </div>
            </Container>
          </section>
        </main>
        <Footer />
      </>
    )
  }

  const hasContent = story.content.length > 0

  return (
    <>
      <Header />
      <main>
        <StoryHeader name={story.name} title={story.title} />
        {hasContent && <StoryContent story={story} />}
        <VideoSection youtubeUrl={story.youtubeUrl} name={story.name} />
        <StoryCta />
      </main>
      <Footer />
    </>
  )
}
