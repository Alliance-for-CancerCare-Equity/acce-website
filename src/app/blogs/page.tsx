import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'
import { getAllPosts, type BlogMeta } from '@/lib/mdx'

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
    <section className="relative isolate overflow-hidden bg-white">
      <div className="absolute inset-x-0 top-0 -z-10 h-40 bg-gradient-to-b from-lavender-50 to-transparent" />
      <Container className="py-14 sm:py-16">
        <p className="text-base/7 font-semibold text-teal-600">{header}</p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-charcoal-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-3xl text-lg/8 text-charcoal-600">{intro}</p>
      </Container>
    </section>
  )
}

function FeaturePost({ post }: { post: Post }) {
  return (
    <section className="bg-white">
      <Container>
        <Link href={post.href} className="group relative isolate block overflow-hidden rounded-3xl bg-charcoal-50 ring-1 ring-charcoal-200 shadow-sm">
          <div className="relative h-[22rem] sm:h-[26rem]">
            <Image
              fill
              src={post.imageUrl}
              alt={post.title}
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/70 via-charcoal-900/20 to-transparent" />
          </div>
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
            {post.category && (
              <span className="inline-flex items-center rounded-md bg-white/90 px-2 py-1 text-xs font-medium text-charcoal-900 ring-1 ring-charcoal-900/10">
                {post.category}
              </span>
            )}
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              {post.title}
            </h2>
            <p className="mt-2 max-w-3xl text-base/7 text-charcoal-100/90">{post.excerpt}</p>
            <p className="mt-3 text-sm/6 text-charcoal-200">{post.date}</p>
          </div>
        </Link>
      </Container>
    </section>
  )
}

function PostCard({ post }: { post: Post }) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-charcoal-200 shadow-sm">
      <div className="relative h-48">
        <Image fill src={post.imageUrl} alt={post.title} className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center gap-x-3 text-sm text-charcoal-600">
          {post.category && (
            <span className="rounded-md bg-lavender-100 px-2 py-0.5 text-xs font-medium text-lavender-700 ring-1 ring-lavender-200">
              {post.category}
            </span>
          )}
          <time>{post.date}</time>
        </div>
        <h3 className="mt-2 text-lg font-semibold text-charcoal-900">
          <Link href={post.href} className="hover:text-teal-600">
            {post.title}
          </Link>
        </h3>
        <p className="mt-2 text-base/7 text-charcoal-600">{post.excerpt}</p>
        <div className="mt-4">
          <Link href={post.href} className="text-sm font-semibold text-teal-600 hover:text-teal-500">
            Read more →
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
        <section className="bg-white py-12 sm:py-16">
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
    <section className="bg-charcoal-50">
      <Container className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-charcoal-900 sm:text-4xl">
            Join the mission for equitable cancer care
          </h2>
          <p className="mt-4 text-lg/8 text-charcoal-600">
            Fuel treatment, equipment, and patient support — and get stories of impact in your inbox.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/giving-options" variant="cta">
              Donate now
            </Button>
            <Button href="/newsletters#subscribe" variant="secondary">
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

