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
    slug: 'acce-journey',
    meta: {
      title: 'ACCE Journey: How a Vision for Equity Became a Lifeline for Cancer Patients Across Borders',
      date: '2025-12-29',
      excerpt:
        'The journey of the Alliance for CancerCare Equity (ACCE) did not begin with an organization or a boardroom discussion. It began with a simple and heartbreaking observation.',
      imageUrl: '/images/acce_journey.jpg',
      category: 'Our Journey',
    },
    import: () => import('@/content/blogs/acce-journey.mdx'),
  },
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
  {
    slug: 'five-ways-to-make-an-impact-this-giving-tuesday',
    meta: {
      title: 'Five Ways to Make an Impact This Giving Tuesday',
      date: '2025-11-28',
      excerpt:
        'GivingTuesday is the world’s largest generosity movement. Founded in 2012, its goal is to establish an annual day dedicated to giving.',
      imageUrl: '/images/giving_tuesday.jpg',
      category: 'Giving Tuesday',
    },
    import: () =>
      import('@/content/blogs/five-ways-to-make-an-impact-this-giving-tuesday.mdx'),
  },
  {
    slug: 'stomach-cancer-is-silent',
    meta: {
      title: 'Stomach Cancer is Silent - but your voice doesn’t have to be',
      date: '2025-11-28',
      excerpt:
        'November recognizes Gastric Cancer, also known as stomach cancer, which forms when there’s a genetic mutation in the DNA of your stomach cells.',
      imageUrl: '/images/stomach_cancer_ribbon.jpg',
      category: 'Gastric Cancer Awareness',
    },
    import: () => import('@/content/blogs/stomach-cancer-is-silent.mdx'),
  },
]

export function allPosts(): BlogEntry[] {
  return [...entries].sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))
}

export function findPostBySlug(slug: string): BlogEntry | undefined {
  return entries.find((e) => e.slug === slug)
}
