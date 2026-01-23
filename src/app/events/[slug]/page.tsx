import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { MDXRemote } from 'next-mdx-remote/rsc'

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
    <section className="bg-white">
      <Container className="pt-10 sm:pt-12">
        <div className="mb-6">
          <Link href="/events" className="text-sm font-semibold text-slate-600 hover:text-blue-600">
            ← Back to Events
          </Link>
        </div>
        
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <div className="mt-4 flex flex-col gap-2 text-base text-slate-600">
            <p className="font-medium">
            {new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
            {' • '}{time}
            </p>
            <p>{location}</p>
        </div>
      </Container>
      <Container>
        <div className="relative mx-auto mt-8 aspect-[16/9] max-w-5xl overflow-hidden rounded-2xl shadow-md">
          <Image fill src={imageUrl} alt={title} className="object-cover" sizes="(min-width: 1280px) 80rem, (min-width: 1024px) 64rem, (min-width: 640px) 100vw, 100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
        </div>
      </Container>
    </section>
  )
}

function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div className="blog-prose mx-auto max-w-3xl text-base/7 text-slate-700">
      {children}
    </div>
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
          <Container className="py-24">
            <h1 className="text-2xl font-semibold text-slate-900">Event not found</h1>
            <p className="mt-2 text-slate-600">The event you’re looking for doesn’t exist.</p>
            <div className="mt-6">
              <Button href="/events" color="blue">Back to Events</Button>
            </div>
          </Container>
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
              <MDXRemote source={entry.content} />
            </Prose>
             
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}