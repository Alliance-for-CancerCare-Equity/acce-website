import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { allPosts, findPostBySlug } from '@/content/blogs'
import PostProseClient from '@/app/blogs/PostProseClient'

type PageParams = { slug: string }

export function generateStaticParams() {
  return allPosts().map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<PageParams>
}): Promise<Metadata> {
  const { slug } = await params
  const entry = findPostBySlug(slug)
  if (!entry) return { title: 'Blog' }
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

function PostHeader({
  title,
  date,
  category,
  imageUrl,
}: {
  title: string
  date: string
  category?: string
  imageUrl: string
}) {
  return (
    <section className="bg-white">
      <Container className="pt-10 sm:pt-12">
        <div className="mb-6">
          <Link href="/blogs" className="text-sm font-semibold text-slate-600 hover:text-blue-600">
            ← Back to Blog
          </Link>
        </div>
        {category && (
          <span className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-200">
            {category}
          </span>
        )}
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-3 text-sm/6 text-slate-600">
          {new Date(date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>
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

export default async function BlogPostPage({
  params,
}: {
  params: Promise<PageParams>
}) {
  const { slug } = await params
  const entry = findPostBySlug(slug)
  if (!entry) {
    // App Router will route to not-found for this page if we throw
    return (
      <>
        <Header />
        <main>
          <Container className="py-24">
            <h1 className="text-2xl font-semibold text-slate-900">Post not found</h1>
            <p className="mt-2 text-slate-600">The article you’re looking for doesn’t exist.</p>
            <div className="mt-6">
              <Button href="/blogs" color="blue">Back to Blog</Button>
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
        <PostHeader
          title={entry.meta.title}
          date={entry.meta.date}
          category={entry.meta.category}
          imageUrl={entry.meta.imageUrl}
        />
        <section className="bg-white py-12 sm:py-16">
          <Container>
            <Prose>
              <PostProseClient slug={entry.slug} />
            </Prose>
            <div className="mt-10 flex items-center gap-4">
              <Button href="/giving-options" color="blue">Donate</Button>
              <Button href="/newsletters#subscribe" variant="outline" color="slate">Subscribe</Button>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
