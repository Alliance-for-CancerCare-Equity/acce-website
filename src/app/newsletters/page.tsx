import { type Metadata } from 'next'
import fs from 'fs'
import path from 'path'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Newsletters',
}

type Newsletter = {
  title: string
  date: string
  description: string
  pdfUrl: string
  imageUrl: string
}

const newslettersContent: {
  header: string
  title: string
  intro_1: string
  intro_2: string
  issues_title: string
  subscribe_title: string
  subscribe_subtitle: string
  newsletters?: Newsletter[]
} = {
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
  // If no PDFs are found, we can optionally populate a static fallback list here.
}

function getNewsletterIssues(): Newsletter[] {
  try {
    const dir = path.join(process.cwd(), 'public', 'newsletter')
    if (!fs.existsSync(dir)) return []

    const files = fs
      .readdirSync(dir)
      .filter((f) => f.toLowerCase().endsWith('.pdf'))

    function pickImage(baseName: string, dateText: string, year?: number) {
      const lc = `${baseName} ${dateText}`.toLowerCase()
      const imgDir = path.join(process.cwd(), 'public', 'newsletter_images')
      function prefer(base: string) {
        // Prefer year-specific file when available, fall back to base
        if (year) {
          const yName = `${base.replace(/\.jpg$/i, '')}-${year}.jpg`
          const yRel = `/newsletter_images/${yName}`
          const yAbs = path.join(imgDir, yName)
          if (fs.existsSync(yAbs)) return yRel
        }
        const rel = `/newsletter_images/${base}`
        const abs = path.join(imgDir, base)
        return fs.existsSync(abs) ? rel : '/images/about_us.jpg'
      }
      function preferMonth(monthBase: string) {
        // Try month-year override (e.g., august-2024.jpg), then month default (august.jpg)
        if (year) {
          const yName = `${monthBase}-${year}.jpg`
          const yRel = `/newsletter_images/${yName}`
          const yAbs = path.join(imgDir, yName)
          if (fs.existsSync(yAbs)) return yRel
        }
        const rel = `/newsletter_images/${monthBase}.jpg`
        const abs = path.join(imgDir, `${monthBase}.jpg`)
        if (fs.existsSync(abs)) return rel
        return ''
      }
      if (/(april|may|june)/.test(lc)) return prefer('spring.jpg')
      if (/(july|august)/.test(lc)) {
        // Month-specific override for July/August
        const monthOverride = lc.includes('august')
          ? preferMonth('august')
          : lc.includes('july')
            ? preferMonth('july')
            : ''
        return monthOverride || prefer('summer.jpg')
      }
      if (/october/.test(lc)) return prefer('fall-2.jpg')
      if (/(september)/.test(lc)) return prefer('fall.jpg')
      if (/(november|december|january|february|march)/.test(lc))
        return prefer('winter.jpg')
      return prefer('fall.jpg')
    }

    function sanitizeTitle(value: string) {
      // Remove non-printable characters, collapse whitespace
      return value
        .replace(/[\x00-\x09\x0B-\x1F\x7F]+/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
    }

    // Manual overrides for titles and descriptions keyed by normalized filename
    const manualOverrides: Record<string, { title: string; description: string }> = {
      // 2024 issues
      alliancelenzapriljune: {
        title: 'Fueling Care: New Patients Funded, Equipment Delivered',
        description:
          'Highlights from April–June 2024: funding chemotherapy and surgery for patients in Ghana and Canada, delivering essential equipment to community clinics, and growing our volunteer network.',
      },
      alliancelenzaugust2024: {
        title: 'Mid‑Year Momentum: Treatment Funding and Community Drives',
        description:
          'This issue spotlights newly funded patients, volunteer mobilization across chapters, and partner‑led community drives that keep lifesaving care within reach.',
      },
      alliancelenzseptember2024: {
        title: 'Back‑to‑Care: Patient Stories, Clinic Support, Volunteers',
        description:
          'Patient and family stories, clinic support updates in Ghana, and new volunteer roles in Kitchener‑Waterloo to expand access to care.',
      },
      alliancelenzoctober2024: {
        title: 'Breast Cancer Awareness: Screening, Support, Fundraising',
        description:
          'Awareness month highlights: community screening initiatives, support resources for patients and families, and fundraising that pays for treatment and unfunded medications.',
      },
      alliancelenznovember2024: {
        title: 'Year‑End Giving: Unfunded Medications and Lifesaving Care',
        description:
          'Your generosity closes gaps in coverage. Read how year‑end gifts fund unfunded medications, transport, and treatment for patients in need.',
      },
      // 2025 issue (include both normalized variants for safety)
      '2025octoberaccelens': {
        title: 'Expanding Access: New Partners, More Patients Reached',
        description:
          'New partnerships, expanded patient support, and impact milestones across Canada and Ghana—plus ways you can help accelerate equitable care.',
      },
      '2025octoberaccelenz': {
        title: 'Expanding Access: New Partners, More Patients Reached',
        description:
          'New partnerships, expanded patient support, and impact milestones across Canada and Ghana—plus ways you can help accelerate equitable care.',
      },
    }

    function normalizeKey(filePathOrName: string) {
      const base = path.parse(filePathOrName).name.toLowerCase()
      // Remove spaces and punctuation, unify lens→lenz
      return base
        .replace(/lens/g, 'lenz')
        .replace(/[^a-z0-9]+/g, '')
    }

    const items = files.map((file) => {
      const fullPath = path.join(dir, file)
      let stat: fs.Stats | null = null
      try {
        stat = fs.statSync(fullPath)
      } catch {
        // ignore
      }

      const base = path.parse(file).name
      // Attempt to split a series name from a date-ish suffix
      let series = 'Alliance Lenz'
      let date = ''
      const prefixes = [
        /^Alliance\s+Lenz/i,
        /^Alliance\s+Lens/i,
        /^ACCE\s+Lenz/i,
        /^ACCE\s+Lens/i,
        /^Lenz/i,
        /^Lens/i,
      ]
      let matchedPrefix = ''
      for (const re of prefixes) {
        const m = base.match(re)
        if (m) {
          matchedPrefix = m[0]
          break
        }
      }
      if (matchedPrefix) {
        date = base.slice(matchedPrefix.length).trim().replace(/\s+/g, ' ')
      }

      // Extract year if present, otherwise fall back to file mtime year
      const yearMatch = base.match(/(?:^|\D)((?:19|20)\d{2})(?:\D|$)/)
      const mtime = stat?.mtime ?? new Date()
      const fallbackYear = new Date(mtime).getFullYear()
      const year = yearMatch ? parseInt(yearMatch[1], 10) : fallbackYear

      // If we didn't get a date from a recognized prefix, try to parse month or range from anywhere in the filename
      if (!date) {
        const months = '(january|february|march|april|may|june|july|august|september|october|november|december)'
        const rangeRe = new RegExp(`${months}\\s*[-–]\\s*${months}`, 'i')
        const singleRe = new RegExp(months, 'i')
        const rangeMatch = base.match(rangeRe)
        if (rangeMatch) {
          const m1 = rangeMatch[1]
          const m2 = rangeMatch[2]
          date = `${m1[0].toUpperCase()}${m1.slice(1).toLowerCase()}–${m2[0].toUpperCase()}${m2.slice(1).toLowerCase()}`
        } else {
          const m = base.match(singleRe)
          if (m) {
            const mm = m[0]
            date = `${mm[0].toUpperCase()}${mm.slice(1).toLowerCase()}`
          }
        }
      }

      // Normalize a hyphen range to an en dash and append year if missing
      let displayDate = date.replace(/\s*-\s*/g, '–').trim()
      const hasYearInDate = /(19|20)\d{2}/.test(displayDate)
      if (displayDate && !hasYearInDate) displayDate = `${displayDate} ${year}`
      if (!displayDate && year) displayDate = String(year)

      // Manual override lookup; fall back to date-based title
      const key = normalizeKey(file)
      const override = manualOverrides[key]
      const finalTitle = override?.title || 'Alliance Lenz'
      const description =
        override?.description ||
        'Patient support updates, equipment for clinics, and ways to get involved.'

      return {
        title: finalTitle,
        date: displayDate || '',
        description,
        pdfUrl: `/newsletter/${encodeURIComponent(file)}`,
        imageUrl: pickImage(base, displayDate, year),
        // @ts-ignore: we keep mtime for sorting only, not in type
        _mtime: stat?.mtimeMs ?? 0,
        // internal key for ordering
        _key: key,
      } as Newsletter & { _mtime?: number; _key: string }
    }) as (Newsletter & { _mtime?: number; _key: string })[]

    // Hardcoded order to avoid environment differences (newest → oldest)
    const manualOrder = [
      '2025octoberaccelens',
      '2025octoberaccelenz',
      'alliancelenznovember2024',
      'alliancelenzoctober2024',
      'alliancelenzseptember2024',
      'alliancelenzaugust2024',
      'alliancelenzapriljune',
    ]
    const orderIndex = new Map<string, number>()
    manualOrder.forEach((k, i) => orderIndex.set(k, i))

    items.sort((a, b) => {
      const ai = orderIndex.has(a._key)
        ? (orderIndex.get(a._key) as number)
        : Number.MAX_SAFE_INTEGER
      const bi = orderIndex.has(b._key)
        ? (orderIndex.get(b._key) as number)
        : Number.MAX_SAFE_INTEGER
      if (ai !== bi) return ai - bi
      // Fallback stable sort: by date string desc then title
      if (a.date !== b.date) return a.date < b.date ? 1 : -1
      return a.title.localeCompare(b.title)
    })

    // Strip helper field
    return items.map(({ _mtime, _key, ...rest }) => rest)
  } catch {
    return []
  }
}

function PageHeader() {
  return (
    <div className="bg-white py-16 sm:py-20">
      <Container>
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-blue-600">
            {newslettersContent.header}
          </p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            {newslettersContent.title}
          </h1>
          <p className="mt-6 text-xl/8 text-slate-700">
            {newslettersContent.intro_1}
          </p>
          <p className="mt-4 text-base/7 text-slate-600">
            {newslettersContent.intro_2}
          </p>
        </div>
      </Container>
    </div>
  )
}

function NewsletterCard({
  item,
}: {
  item: Newsletter
}) {
  return (
    <article className="flex flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200">
      <div className="relative h-56 w-full">
        <Image
          fill
          src={item.imageUrl}
          alt={item.title}
          className="object-cover"
          sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold leading-7 tracking-tight text-slate-900">
          {item.title}
        </h3>
        <p className="mt-1 text-sm/6 text-slate-500">{item.date}</p>
        <p className="mt-3 text-base/7 text-slate-600">{item.description}</p>
        <div className="mt-6">
          <Link
            href={item.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-blue-600 px-3.5 py-2 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          >
            Read PDF
          </Link>
        </div>
      </div>
    </article>
  )
}

function IssuesGrid({ items }: { items: Newsletter[] }) {
  return (
    <div className="bg-white pb-8 sm:pb-12">
      <Container>
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-slate-900">
          {newslettersContent.issues_title}
        </h2>
        {items.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((nl, idx) => (
              <NewsletterCard key={`${nl.title}-${nl.date}-${idx}`} item={nl} />
            ))}
          </div>
        ) : (
          <p className="mt-6 text-base/7 text-slate-600">No newsletters found.</p>
        )}
      </Container>
    </div>
  )
}

function Subscribe() {
  return (
    <section id="subscribe" className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            {newslettersContent.subscribe_title}
          </h2>
          <p className="mt-6 text-lg/8 text-slate-600">
            {newslettersContent.subscribe_subtitle}
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-xl">
          <form
            action="https://formsubmit.co/info@allianceforcancercareequity.ca"
            method="POST"
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6"
          >
            {/* formsubmit.co helpers */}
            <input type="hidden" name="_subject" value="Newsletter Subscription — ACCE" />
            <input
              type="hidden"
              name="_next"
              value="https://allianceforcancercareequity.ca/newsletters?subscribed=1"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="first-name" className="block text-sm/6 font-semibold text-slate-900">
                First name (optional)
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm/6 font-semibold text-slate-900">
                Last name (optional)
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-slate-900">
                Email address
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start gap-3">
                <input id="consent" name="consent" type="checkbox" required className="mt-1 size-4 rounded border-slate-300 text-blue-600 focus:ring-blue-600" />
                <label htmlFor="consent" className="text-sm/6 text-slate-600">
                  I agree to receive email updates from ACCE. I can unsubscribe at any time.
                </label>
              </div>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" color="blue" className="w-full">Subscribe</Button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm/6 text-slate-500">
            We respect your privacy. We never share your email.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default function NewslettersPage() {
  const issues = getNewsletterIssues()
  return (
    <>
      <Header />
      <main>
        <PageHeader />
        <IssuesGrid items={issues} />
        <Subscribe />
      </main>
      <Footer />
    </>
  )
}
