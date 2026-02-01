import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { NewsletterSubscribe } from '@/components/sections/NewsletterSubscribe'
import { getAllNewsletters, type NewsletterMeta } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Newsletters',
}

const newslettersContent = {
  header: 'Newsletter',
  title: 'Alliance Lenz',
  intro_1:
    'Stories of impact, program updates, and ways to get involved. Explore recent issues of Alliance Lenz to see how your support brings equitable cancer care within reach for patients and families.',
  intro_2:
    'Prefer updates by email? Subscribe below to receive new issues and highlights directly in your inbox.',
  issues_title: 'Recent Issues',
  subscribe_title: 'Subscribe to Alliance Lenz',
  subscribe_subtitle:
    'Get stories of hope, impact updates, and opportunities to help—delivered a few times a year. Unsubscribe anytime.',
}

function PageHeader() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-teal-600">
            {newslettersContent.header}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-charcoal-900 sm:text-5xl">
            {newslettersContent.title}
          </h1>
          <p className="mt-6 text-xl/8 text-charcoal-700">
            {newslettersContent.intro_1}
          </p>
          <p className="mt-4 text-base/7 text-charcoal-600">
            {newslettersContent.intro_2}
          </p>
        </div>
      </Container>
    </div>
  )
}

function NewsletterCard({
  item,
}: {
  item: NewsletterMeta
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-charcoal-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-56 w-full">
        <Image
          fill
          src={item.imageUrl}
          alt={item.title}
          className="object-cover"
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold leading-7 tracking-tight text-charcoal-900">
          {item.title}
        </h3>
        <p className="mt-1 text-sm/6 text-charcoal-500">
             {new Date(item.date).toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'long',
                day: undefined,
              })}
        </p>
        <p className="mt-3 text-base/7 text-charcoal-600">{item.excerpt}</p>
        <div className="mt-6">
          <Link
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-teal-600 px-3.5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-teal-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
          >
            Read PDF
          </Link>
        </div>
      </div>
    </article>
  )
}

function IssuesGrid({ items }: { items: NewsletterMeta[] }) {
  return (
    <div className="bg-white pb-8 sm:pb-12">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-charcoal-900">
          {newslettersContent.issues_title}
        </h2>
        {items.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((nl, idx) => (
              <NewsletterCard key={`${nl.title}-${nl.date}-${idx}`} item={nl} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-base/7 text-charcoal-600">No newsletters found.</p>
        )}
      </Container>
    </div>
  )
}

export default function NewslettersPage() {
  const issues = getAllNewsletters()
  return (
    <>
      <Header />
      <main>
        <PageHeader />
        <IssuesGrid items={issues} />
        <NewsletterSubscribe
          title={newslettersContent.subscribe_title}
          subtitle={newslettersContent.subscribe_subtitle}
        />
      </main>
      <Footer />
    </>
  )
}