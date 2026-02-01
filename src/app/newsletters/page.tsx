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
    <section className="relative overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold-300/30 rounded-full blur-3xl" />

      <Container className="relative py-20 sm:py-28">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-sm font-medium text-gold-700 ring-1 ring-inset ring-gold-200 mb-6">
            {newslettersContent.header}
          </div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl">
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
    </section>
  )
}

function NewsletterCard({
  item,
}: {
  item: NewsletterMeta
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-charcoal-100 transition-all duration-300 hover:shadow-medium hover:ring-teal-200">
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          fill
          src={item.imageUrl}
          alt={item.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold leading-7 tracking-tight text-charcoal-900 group-hover:text-teal-600 transition-colors">
          {item.title}
        </h3>
        <p className="mt-1 text-sm/6 text-gold-600 font-medium">
          {new Date(item.date).toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'long',
            day: undefined,
          })}
        </p>
        <p className="mt-3 text-base/7 text-charcoal-600 line-clamp-3">{item.excerpt}</p>
        <div className="mt-auto pt-6">
          <Link
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-600 transition-colors"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
            </svg>
            Read PDF
          </Link>
        </div>
      </div>
    </article>
  )
}

function IssuesGrid({ items }: { items: NewsletterMeta[] }) {
  return (
    <section className="bg-lavender-50 py-16 sm:py-24">
      <Container>
        <div className="flex items-center gap-4 mb-10">
          <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900">
            {newslettersContent.issues_title}
          </h2>
          <div className="h-px flex-1 bg-gradient-to-r from-lavender-300 to-transparent" />
        </div>

        {items.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((nl, idx) => (
              <NewsletterCard key={`${nl.title}-${nl.date}-${idx}`} item={nl} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 rounded-2xl bg-white ring-1 ring-charcoal-100 border-2 border-dashed border-charcoal-200">
            <p className="text-lg text-charcoal-500">No newsletters found.</p>
          </div>
        )}
      </Container>
    </section>
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
