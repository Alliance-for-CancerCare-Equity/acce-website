import { type Metadata } from 'next'
import Link from 'next/link'

import { BlogImage } from '@/components/ui/BlogImage'
import { Container } from '@/components/ui/Container'
import { formatDate } from '@/lib/formatDate'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { NewsletterSubscribe } from '@/components/sections/NewsletterSubscribe'
import { getAllNewsletters, type NewsletterMeta } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Newsletters',
  description:
    'Browse ACCE\'s newsletter archive. Quarterly updates on patient stories, fundraising progress, upcoming events, and cancer care initiatives.',
}

const newslettersContent = {
  header: 'Newsletter',
  title: 'Alliance Lenz',
  intro_1:
    'Stories of impact, program updates, and ways to get involved. Explore recent issues of Alliance Lenz to see how your support brings equitable cancer care within reach for patients and families.',
  intro_2:
    'Prefer updates by email? Subscribe below to receive new issues and highlights directly in your inbox.',
  issues_title: 'Latest Issue',
  more_title: 'More Issues',
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

function formatIssueDate(date: string) {
  return formatDate(date, { year: 'numeric', month: 'long' })
}

const pdfIconPath =
  'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z'

function FeatureNewsletter({ item }: { item: NewsletterMeta }) {
  return (
    <Link
      href={item.pdfUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group grid grid-cols-1 overflow-hidden rounded-3xl bg-white shadow-medium ring-2 ring-lavender-200 transition-all duration-300 hover:shadow-strong hover:ring-teal-300 lg:grid-cols-2"
    >
      <BlogImage
        src={item.imageUrl}
        alt={item.title}
        priority
        sizes="(min-width: 1024px) 40rem, 100vw"
        className="aspect-[3/2] lg:aspect-auto lg:min-h-[26rem]"
      />
      <div className="flex flex-col justify-center gap-4 p-8 sm:p-10 lg:p-12">
        <span className="inline-flex w-fit items-center rounded-full bg-gold-100 px-3 py-1 text-xs font-semibold text-gold-700 ring-1 ring-inset ring-gold-200">
          {newslettersContent.issues_title}
        </span>
        <h3 className="font-display text-2xl font-bold tracking-tight text-charcoal-900 transition-colors group-hover:text-teal-600 sm:text-3xl lg:text-4xl">
          {item.title}
        </h3>
        <p className="text-sm/6 font-medium text-gold-600">{formatIssueDate(item.date)}</p>
        <p className="text-base/7 text-charcoal-600">{item.excerpt}</p>
        <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-teal-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors group-hover:bg-teal-600">
          <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d={pdfIconPath} />
          </svg>
          Read PDF
        </span>
      </div>
    </Link>
  )
}

function NewsletterCard({
  item,
}: {
  item: NewsletterMeta
}) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-charcoal-100 transition-all duration-300 hover:shadow-medium hover:ring-teal-200">
      <BlogImage
        src={item.imageUrl}
        alt={item.title}
        sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
        className="aspect-[3/2]"
      />
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-lg font-bold leading-7 tracking-tight text-charcoal-900 group-hover:text-teal-600 transition-colors">
          {item.title}
        </h3>
        <p className="mt-1 text-sm/6 text-gold-600 font-medium">
          {formatIssueDate(item.date)}
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
              <path strokeLinecap="round" strokeLinejoin="round" d={pdfIconPath} />
            </svg>
            Read PDF
          </Link>
        </div>
      </div>
    </article>
  )
}

function IssuesGrid({ items }: { items: NewsletterMeta[] }) {
  const [latest, ...rest] = items

  if (!latest) {
    return (
      <section className="bg-lavender-50 py-16 sm:py-24">
        <Container>
          <div className="text-center py-12 rounded-2xl bg-white ring-1 ring-charcoal-100 border-2 border-dashed border-charcoal-200">
            <p className="text-lg text-charcoal-500">No newsletters found.</p>
          </div>
        </Container>
      </section>
    )
  }

  return (
    <>
      <section className="bg-lavender-50 pt-16 pb-12 sm:pt-24">
        <Container>
          <FeatureNewsletter item={latest} />
        </Container>
      </section>

      {rest.length > 0 && (
        <section className="bg-lavender-50 pb-16 sm:pb-24">
          <Container>
            <div className="flex items-center gap-4 mb-10">
              <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900">
                {newslettersContent.more_title}
              </h2>
              <div className="h-px flex-1 bg-gradient-to-r from-lavender-300 to-transparent" />
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((nl, idx) => (
                <NewsletterCard key={`${nl.title}-${nl.date}-${idx}`} item={nl} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
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
