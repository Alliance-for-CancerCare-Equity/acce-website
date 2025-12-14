import type { ComponentType } from 'react'

export type EventMeta = {
  title: string
  date: string
  excerpt: string
  imageUrl: string
  location: string
  time: string
}

export type EventEntry = {
  slug: string
  meta: EventMeta
  import: () => Promise<{ default: ComponentType<any> }>
}

const entries: EventEntry[] = [
  {
    slug: 'empowering-communities-2026',
    meta: {
      title: 'Empowering Communities: A Cancer Awareness and Education Event (2026)',
      date: '2026-03-28',
      excerpt:
        'A transformative community event dedicated to cancer education, awareness, prevention, and early detection. Join us in Waterloo.',
      imageUrl: '/event_images/december_2025/community-awareness-event.jpg',
      location: 'Centre for International Governance Innovation (CIGI): 67 Erb St. W, Waterloo, ON',
      time: '9:00 AM – 3:00 PM',
    },
    import: () => import('@/content/events/empowering-communities-2026.mdx'),
  },
]

export function allEvents(): EventEntry[] {
  return [...entries].sort((a, b) => (a.meta.date < b.meta.date ? 1 : -1))
}

export function findEventBySlug(slug: string): EventEntry | undefined {
  return entries.find((e) => e.slug === slug)
}
