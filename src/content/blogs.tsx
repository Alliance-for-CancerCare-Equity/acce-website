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
    slug: 'removing-cost-barriers',
    meta: {
      title: 'Removing Cost Barriers: How Monthly Giving Saves Lives',
      date: '2025-10-12',
      excerpt:
        'Predictable monthly support helps patients complete chemotherapy, surgery, and follow-up care without interruption.',
      imageUrl:
        'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2340&auto=format&fit=crop',
      category: 'Impact',
    },
    import: () => import('@/content/blogs/removing-cost-barriers.mdx'),
  },
  {
    slug: 'partner-spotlight-community-clinics',
    meta: {
      title: 'Partner Spotlight: Community Clinics Delivering Care',
      date: '2025-09-21',
      excerpt:
        'Inside the day-to-day of non-profit community healthcare centers — and the equipment that keeps doors open for patients in need.',
      imageUrl:
        'https://images.unsplash.com/photo-1580281780460-82d277b0e3f9?q=80&w=2340&auto=format&fit=crop',
      category: 'Partnerships',
    },
    import: () => import('@/content/blogs/partner-spotlight-community-clinics.mdx'),
  },
  {
    slug: 'what-it-costs-to-beat-cancer-in-ghana',
    meta: {
      title: 'What It Costs to Beat Cancer in Ghana',
      date: '2025-08-18',
      excerpt:
        'A practical breakdown of treatment costs and where philanthropic dollars have the greatest impact for patients and families.',
      imageUrl:
        'https://images.unsplash.com/photo-1628133287834-2c9f7ef0f1c8?q=80&w=2340&auto=format&fit=crop',
      category: 'Research',
    },
    import: () => import('@/content/blogs/what-it-costs-to-beat-cancer-in-ghana.mdx'),
  },
]

export function allPosts(): BlogEntry[] {
  return [...entries].sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))
}

export function findPostBySlug(slug: string): BlogEntry | undefined {
  return entries.find((e) => e.slug === slug)
}
