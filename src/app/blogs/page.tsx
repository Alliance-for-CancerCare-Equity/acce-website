import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { getAllPosts } from '@/lib/mdx'

export const metadata: Metadata = {
  title: 'Blog',
}

type Post = {
  title: string
  date: string
  excerpt: string
  href: string
  imageUrl: string
  category?: string
}

const blogContent = {
  header: 'Stories & News',
  title: 'Insights from the Frontline of Cancer Care Equity',
  intro:
    'Updates, reflections, and research notes from ACCE — covering impact stories, partnerships, and the practical realities of funding lifesaving care.',
}

function BlogHero({ header, title, intro }: { header: string; title: string; intro: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold-300/30 rounded-full blur-3xl" />

      <Container className="relative py-20 sm:py-28">
        <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700 ring-1 ring-inset ring-teal-200 mb-6">
          {header}
        </div>
        <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-xl/8 text-charcoal-600">{intro}</p>
      </Container>
    </section>
  )
}

function FeaturePost({ post }: { post: Post }) {
  return (
    <section className="bg-lavender-50 py-12">
      <Container>
        <Link href={post.href} className="group relative isolate block overflow-hidden rounded-3xl bg-white shadow-medium ring-2 ring-lavender-200 hover:shadow-strong hover:ring-teal-300 transition-all duration-300">
          <div className="relative h-[22rem] sm:h-[26rem]">
            <Image
              fill
              src={post.imageUrl}
              alt={post.title}
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/30 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            {post.category && (
              <span className="inline-flex items-center rounded-full bg-teal-500 px-3 py-1 text-xs font-semibold text-white">
                {post.category}
              </span>
            )}
            <h2 className="mt-3 font-display text-2xl font-bold tracking-tight text-white sm:text-3xl">
              {post.title}
            </h2>
            <p className="mt-2 max-w-3xl text-base/7 text-white/90">{post.excerpt}</p>
            <p className="mt-3 text-sm/6 text-gold-300 font-medium">{post.date}</p>
          </div>
        </Link>
      </Container>
    </section>
  )
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-soft ring-1 ring-charcoal-100 hover:shadow-medium hover:ring-teal-200 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <Image
          fill
          src={post.imageUrl}
          alt={post.title}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-x-3 text-sm">
          {post.category && (
            <span className="rounded-full bg-lavender-100 px-3 py-0.5 text-xs font-semibold text-lavender-700 ring-1 ring-lavender-200">
              {post.category}
            </span>
          )}
          <time className="text-charcoal-500">{post.date}</time>
        </div>
        <h3 className="mt-3 font-display text-lg font-bold text-charcoal-900 group-hover:text-teal-600 transition-colors">
          <Link href={post.href}>
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-base/7 text-charcoal-600 line-clamp-3">{post.excerpt}</p>
        <div className="mt-auto pt-4">
          <Link href={post.href} className="inline-flex items-center gap-1 text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors">
            Read more
            <svg className="size-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}

function PostsGrid({ posts }: { posts: Post[] }) {
  const [first, ...rest] = posts
  return (
    <>
      {first && <FeaturePost post={first} />}
      {rest.length > 0 && (
        <section className="bg-white py-16 sm:py-20">
          <Container>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <PostCard key={`${p.title}-${i}`} post={p} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </>
  )
}

function BlogCta() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-charcoal-800">
      <div className="absolute inset-0 bg-dot-pattern-light opacity-10" />
      <div className="absolute top-10 right-10 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-lavender-400/20 rounded-full blur-3xl" />

      <Container className="relative py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Join the mission for equitable cancer care
          </h2>
          <p className="mt-4 text-lg/8 text-teal-100">
            Fuel treatment, equipment, and patient support — and get stories of impact in your inbox.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/giving-options" color="cta" size="lg">
              Donate now
            </Button>
            <Button href="/newsletters#subscribe" variant="outline" color="white" size="lg">
              Subscribe to Alliance Lenz
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default function BlogsPage() {
  const rawPosts = getAllPosts()
  const posts: Post[] = rawPosts.map((p) => ({
    title: p.title,
    date: new Date(p.date).toLocaleDateString(undefined, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }),
    excerpt: p.excerpt,
    href: `/blogs/${p.slug}`,
    imageUrl: p.imageUrl,
    category: p.category,
  }))

  return (
    <>
      <Header />
      <main>
        <BlogHero header={blogContent.header} title={blogContent.title} intro={blogContent.intro} />
        <PostsGrid posts={posts} />
        <BlogCta />
      </main>
      <Footer />
    </>
  )
}
