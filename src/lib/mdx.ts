import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const blogsDirectory = path.join(process.cwd(), 'src/content/blogs')
const eventsDirectory = path.join(process.cwd(), 'src/content/events')
const newslettersDirectory = path.join(process.cwd(), 'src/content/newsletters')

export type BlogMeta = {
  title: string
  date: string
  excerpt: string
  imageUrl: string
  category?: string
  slug: string
}

export type BlogPost = {
  meta: BlogMeta
  content: string
}

export type EventMeta = {
  title: string
  date: string
  excerpt: string
  imageUrl: string
  location: string
  time: string
  slug: string
}

export type EventPost = {
  meta: EventMeta
  content: string
}

export type NewsletterMeta = {
  title: string
  date: string
  excerpt: string
  imageUrl: string
  pdfUrl: string
  slug: string
}

export type NewsletterPost = {
  meta: NewsletterMeta
  content: string
}

// Blog Functions
export function getPostSlugs() {
  return fs.readdirSync(blogsDirectory).filter((file) => file.endsWith('.mdx'))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(blogsDirectory, `${realSlug}.mdx`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      meta: {
        ...data,
        slug: realSlug,
      } as BlogMeta,
      content,
    }
  } catch (e) {
    return undefined
  }
}

export function getAllPosts(): BlogMeta[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== undefined)
    .map((post) => post.meta)
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    
  return posts
}

// Event Functions
export function getEventSlugs() {
  return fs.readdirSync(eventsDirectory).filter((file) => file.endsWith('.mdx'))
}

export function getEventBySlug(slug: string): EventPost | undefined {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(eventsDirectory, `${realSlug}.mdx`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      meta: {
        ...data,
        slug: realSlug,
      } as EventMeta,
      content,
    }
  } catch (e) {
    return undefined
  }
}

export function getAllEvents(): EventMeta[] {
  const slugs = getEventSlugs()
  const events = slugs
    .map((slug) => getEventBySlug(slug))
    .filter((event): event is EventPost => event !== undefined)
    .map((event) => event.meta)
    .sort((event1, event2) => (event1.date > event2.date ? -1 : 1))
    
  return events
}

// Newsletter Functions
export function getNewsletterSlugs() {
  return fs.readdirSync(newslettersDirectory).filter((file) => file.endsWith('.mdx'))
}

export function getNewsletterBySlug(slug: string): NewsletterPost | undefined {
  const realSlug = slug.replace(/\.mdx$/, '')
  const fullPath = path.join(newslettersDirectory, `${realSlug}.mdx`)
  
  try {
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const { data, content } = matter(fileContents)

    return {
      meta: {
        ...data,
        slug: realSlug,
      } as NewsletterMeta,
      content,
    }
  } catch (e) {
    return undefined
  }
}

export function getAllNewsletters(): NewsletterMeta[] {
  const slugs = getNewsletterSlugs()
  const newsletters = slugs
    .map((slug) => getNewsletterBySlug(slug))
    .filter((newsletter): newsletter is NewsletterPost => newsletter !== undefined)
    .map((newsletter) => newsletter.meta)
    .sort((n1, n2) => (n1.date > n2.date ? -1 : 1))
    
  return newsletters
}
