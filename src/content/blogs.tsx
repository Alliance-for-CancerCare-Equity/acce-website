import type { ComponentType } from 'react'

export type BlogMeta = {
  title: string
  date: string
  excerpt: string
  imageUrl: string
  category?: string
}

export type BlogEntry = {
  slug: string
  meta: BlogMeta
  import: () => Promise<{ default: ComponentType<any> }>
}

const entries: BlogEntry[] = [
  {
    slug: 'turning-breath-into-hope',
    meta: {
      title: 'Turning Breath Into Hope: November and the Global Fight Against Lung Cancer',
      date: '2025-11-01',
      excerpt:
        'November is Lung Cancer Awareness Month — a time to confront the leading cause of cancer deaths and close the gap in who gets timely screening, treatment, and support.',
      imageUrl: '/images/about_us.jpg',
      category: 'Lung Cancer Awareness',
    },
    import: () => import('@/content/blogs/turning-breath-into-hope.mdx'),
  },
]

export function allPosts(): BlogEntry[] {
  return [...entries].sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))
}

export function findPostBySlug(slug: string): BlogEntry | undefined {
  return entries.find((e) => e.slug === slug)
}
