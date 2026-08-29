import { type Metadata } from 'next'
import Image, { type StaticImageData } from 'next/image'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

import portrait from '../../../../public/tim_long/tim-portrait.jpg'
import tim1 from '../../../../public/tim_long/tim-1.jpg'
import tim3 from '../../../../public/tim_long/tim-3.jpg'
import tim4 from '../../../../public/tim_long/tim-4.jpg'
import tim5 from '../../../../public/tim_long/tim-5.jpg'
import tim6 from '../../../../public/tim_long/tim-6.jpg'
import tim7 from '../../../../public/tim_long/tim-7.jpg'
import tim8 from '../../../../public/tim_long/tim-8.jpg'
import tim9 from '../../../../public/tim_long/tim-9.jpg'
import tim10 from '../../../../public/tim_long/tim-10.jpg'
import tim11 from '../../../../public/tim_long/tim-11.jpg'
import fundQr from '../../../../public/images/acce_tim_long_fund_qr.png'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.accecan.ca'

/** The dedicated CanadaHelps fund set up in Tim Long's memory. */
const DONATE_URL = 'https://www.canadahelps.org/en/dn/148964'

export const metadata: Metadata = {
  title: 'Tim Long Memorial Fund',
  description:
    'Honor the life and legacy of Timothy Alan Long (1967–2025) by supporting pediatric cancer patients in Ghana through a dedicated fund at the Alliance for CancerCare Equity.',
  alternates: { canonical: `${SITE_URL}/giving-options/tim-long` },
  openGraph: {
    title: 'Tim Long Memorial Fund | Alliance for CancerCare Equity',
    description:
      'In loving memory of Timothy Alan Long. A legacy of love, hope, and compassion — supporting pediatric cancer patients in Ghana.',
    url: `${SITE_URL}/giving-options/tim-long`,
    images: [
      {
        url: `${SITE_URL}/tim_long/memorial-poster.jpg`,
        width: 1600,
        height: 1067,
        alt: 'In loving memory of Timothy Alan Long, 1967–2025',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tim Long Memorial Fund',
    description:
      'Honoring Tim Long by giving hope to children fighting cancer in Ghana.',
    images: [`${SITE_URL}/tim_long/memorial-poster.jpg`],
  },
}

/**
 * Ghana's flag rendered as a section divider, echoing the memorial poster.
 */
function GhanaWave({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={className}
    >
      <path d="M0 34C280 4 520 44 760 30C1000 16 1220 8 1440 26V48C1220 30 1000 38 760 52C520 66 280 26 0 56V34Z" fill="#C0392B" />
      <path d="M0 56C280 26 520 66 760 52C1000 38 1220 30 1440 48V70C1220 52 1000 60 760 74C520 88 280 48 0 78V56Z" fill="#D4A03C" />
      <path d="M0 78C280 48 520 88 760 74C1000 60 1220 52 1440 70V90H0V78Z" fill="#1a7f74" />
      <path d="M712 46L719.5 57.5L733 57.5L722 65L726 78L712 70L698 78L702 65L691 57.5L704.5 57.5L712 46Z" fill="#2D3436" />
    </svg>
  )
}

const story = {
  heading: 'Honoring Tim’s life by giving hope to children fighting cancer in Ghana',
  paragraphs: [
    'Tim Long was a person who believed deeply in the value of every life, and he had a special love for children. His kindness, compassion, and genuine care for others left a lasting impression on the people who knew him.',
    'When Tim passed away after his own battle with cancer, those who loved him wanted to find a meaningful way to honor his memory, one that reflected the values he held close to his heart.',
    'That is why we are establishing this fundraising initiative in Tim’s honor to support pediatric cancer patients in Ghana.',
  ],
  closing: [
    'For children facing cancer, the journey can be especially difficult. Beyond the diagnosis and treatment, families may face significant financial, emotional, and practical challenges. Through this fund, we hope to help ease some of those burdens and bring greater hope and support to children and families navigating childhood cancer in Ghana.',
    'This cause is deeply personal because it reflects something Tim cared about: children and their well-being. While we can no longer share life with Tim, we can carry forward the love and compassion he showed by extending a helping hand to children who need it most.',
  ],
}

const impact = [
  {
    title: 'Provide life-saving treatment',
    body: 'Helping children access the care, treatment, and resources they need during an incredibly difficult time.',
    accent: 'teal' as const,
  },
  {
    title: 'Support families and caregivers',
    body: 'Easing the financial, emotional, and practical burdens that families carry alongside a diagnosis.',
    accent: 'lavender' as const,
  },
  {
    title: 'Give children a fighting chance',
    body: 'Turning remembrance into hope, and compassion into action, for children who need it most.',
    accent: 'gold' as const,
  },
]

const accentStyles = {
  teal: 'bg-teal-50 ring-teal-200 text-teal-700',
  lavender: 'bg-lavender-50 ring-lavender-200 text-lavender-700',
  gold: 'bg-gold-50 ring-gold-200 text-gold-700',
}

const legacy = {
  heading: 'Turning memory into a legacy',
  paragraphs: [
    'We invite Tim’s family, friends, colleagues, and everyone whose life he touched to join us in transforming our remembrance of him into something that can make a lasting difference.',
    'Every donation, no matter the size, is an expression of love for Tim and an investment in the life and hope of a child.',
    'Together, we can honor Tim not only by remembering the life he lived, but by helping create brighter possibilities for children whose lives have been affected by cancer.',
  ],
}

const gallery: { src: StaticImageData; alt: string }[] = [
  { src: tim7, alt: 'Tim on a hilltop, a city spread out behind him' },
  { src: tim3, alt: 'Tim sharing a toast with a loved one' },
  { src: tim10, alt: 'Tim on a walk above a river valley' },
  { src: tim9, alt: 'Tim outdoors on a winter walk' },
  { src: tim5, alt: 'Tim wearing kente cloth' },
  { src: tim8, alt: 'Tim smiling at an outdoor gathering' },
]

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold-100 via-gold-50 to-lavender-100">
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute -top-20 -left-24 h-96 w-96 rounded-full bg-gold-300/30 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-[28rem] w-[28rem] rounded-full bg-lavender-300/30 blur-3xl" />

      <Container className="relative py-16 sm:py-24 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="animate-fade-up min-w-0 lg:col-span-5">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
              <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-gold-400/40 to-lavender-400/30 blur-xl" />
              <Image
                src={portrait}
                alt="Timothy Alan Long"
                priority
                sizes="(min-width: 1024px) 30rem, 24rem"
                className="relative rounded-3xl shadow-strong ring-4 ring-white"
              />
            </div>
          </div>

          <div className="animate-fade-up min-w-0 lg:col-span-7">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
              In loving memory of
            </p>
            <h1 className="mt-3 font-display text-5xl font-bold tracking-tight text-charcoal-900 sm:text-6xl lg:text-7xl">
              Timothy Alan Long
            </h1>
            <div className="mt-5 flex items-center gap-4">
              <span className="h-px w-12 flex-none bg-gold-500" />
              <span className="font-display text-xl font-semibold tracking-wide text-charcoal-700">
                1967 &ndash; 2025
              </span>
              <span className="h-px flex-auto bg-gold-300" />
            </div>
            <p className="mt-8 font-display text-2xl font-semibold text-gold-700 sm:text-3xl">
              A legacy of love, hope, and compassion.
            </p>
            <p className="mt-6 max-w-2xl text-lg/8 text-charcoal-700">
              Tim believed that every child deserves a chance to grow, dream, and
              live. In his memory, we are raising funds to support pediatric
              cancer patients in Ghana.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={DONATE_URL} color="cta" size="lg">
                Donate in Tim&rsquo;s memory
              </Button>
              <Button href="#tims-story" variant="outline" color="charcoal" size="lg">
                Read Tim&rsquo;s story
              </Button>
            </div>
          </div>
        </div>
      </Container>

      <GhanaWave className="block h-16 w-full sm:h-20" />
    </section>
  )
}

function Invitation() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <svg
            viewBox="0 0 32 32"
            aria-hidden="true"
            className="mx-auto h-10 w-10 fill-gold-400"
          >
            <path d="M13 8v6a8 8 0 0 1-8 8v-4a4 4 0 0 0 4-4H6V8h7Zm14 0v6a8 8 0 0 1-8 8v-4a4 4 0 0 0 4-4h-3V8h7Z" />
          </svg>
          <blockquote className="mt-6 font-display text-3xl font-semibold leading-tight tracking-tight text-charcoal-900 sm:text-4xl">
            Let the memory of Timothy Alan Long be with us forever.
          </blockquote>
        </div>

        <div className="mx-auto mt-14 max-w-3xl space-y-6 text-lg/8 text-charcoal-700">
          <p>
            We invite you to honor the life and legacy of Tim Long by supporting
            the Alliance for CancerCare Equity and making a donation to a
            dedicated fund in memory of Tim Long for pediatric cancer patients in
            Ghana.
          </p>
          <p>
            Your generous contribution will help provide much-needed support and
            care to children facing the challenges of cancer in Ghana. This
            dedicated fund is specifically established to support pediatric
            cancer patients, helping them access the care, treatment, and
            resources they need during an incredibly difficult time.
          </p>
          <p className="font-semibold text-charcoal-900">
            In Tim&rsquo;s honor, we invite you to make a difference in the lives
            of children battling cancer. Together, we can turn remembrance into
            hope and compassion into action.
          </p>
        </div>
      </Container>
    </section>
  )
}

function TimsStory() {
  return (
    <section id="tims-story" className="scroll-mt-24 bg-lavender-50 py-20 sm:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <div className="space-y-4">
              <Image
                src={tim1}
                alt="Tim out cycling on a hillside trail"
                sizes="(min-width: 1024px) 28rem, 100vw"
                className="rounded-3xl shadow-medium ring-2 ring-white"
              />
              <div className="grid grid-cols-2 gap-4">
                <Image
                  src={tim4}
                  alt="Tim with a loved one at a family gathering"
                  sizes="14rem"
                  className="h-full rounded-2xl object-cover shadow-soft ring-2 ring-white"
                />
                <Image
                  src={tim11}
                  alt="A family photograph from earlier years"
                  sizes="14rem"
                  className="h-full rounded-2xl object-cover shadow-soft ring-2 ring-white"
                />
              </div>
            </div>
          </div>

          <div className="min-w-0 lg:col-span-7">
            <h2 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
              {story.heading}
            </h2>
            <div className="mt-8 space-y-6 text-lg/8 text-charcoal-700">
              {story.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function WhyChildren() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-charcoal-900 to-charcoal-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-dot-pattern-light opacity-10" />
      <div className="absolute -top-24 right-0 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="min-w-0 lg:col-span-5">
            <Image
              src={tim6}
              alt="Tim wearing a kente robe, arms thrown wide"
              sizes="(min-width: 1024px) 26rem, 100vw"
              className="mx-auto rounded-3xl shadow-strong ring-2 ring-gold-500/40"
            />
          </div>

          <div className="min-w-0 lg:col-span-7">
            <div className="space-y-6 text-lg/8 text-charcoal-200">
              {story.closing.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Impact() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
            Your gift can bring treatment, hope, and a brighter tomorrow
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {impact.map((item, i) => (
            <div key={item.title}>
              <div
                className={`h-full rounded-3xl p-8 ring-2 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-medium ${accentStyles[item.accent]}`}
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="size-9 fill-current"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.645 20.374l-.013-.01C6.104 15.642 2.25 12.063 2.25 8.25A4.5 4.5 0 0 1 6.75 3.75c1.632 0 3.195.795 4.125 2.036A5.247 5.247 0 0 1 15 3.75a4.5 4.5 0 0 1 4.5 4.5c0 3.813-3.855 7.392-9.382 12.115l-.013.01a.75.75 0 0 1-.96 0z"
                  />
                </svg>
                <h3 className="mt-6 font-display text-2xl font-bold text-charcoal-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-base/7 text-charcoal-600">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function Gallery() {
  return (
    <section className="bg-gold-50 py-20 sm:py-28">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-gold-700">
            A life remembered
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
            Moments from Tim&rsquo;s life
          </h2>
        </div>

        <div className="mt-14">
          <div className="columns-2 gap-4 sm:columns-3 sm:gap-6 lg:columns-3">
            {gallery.map((photo) => (
              <div
                key={photo.alt}
                className="mb-4 break-inside-avoid sm:mb-6"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  sizes="(min-width: 640px) 22rem, 50vw"
                  className="w-full rounded-2xl shadow-soft ring-2 ring-white transition-shadow duration-300 hover:shadow-medium"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Legacy() {
  return (
    <section className="bg-white py-20 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
            {legacy.heading}
          </h2>
          <div className="mt-8 space-y-6 text-lg/8 text-charcoal-700">
            {legacy.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

function Donate() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lavender-100 via-gold-50 to-gold-100 py-20 sm:py-28">
      <div className="absolute -top-24 left-10 h-80 w-80 rounded-full bg-lavender-300/30 blur-3xl" />
      <div className="absolute -bottom-24 right-10 h-80 w-80 rounded-full bg-gold-300/30 blur-3xl" />

      <Container className="relative">
        <div>
          <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-white shadow-strong ring-2 ring-gold-200">
            <div className="grid gap-10 p-8 sm:p-12 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3">
                <h2 className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl">
                  Give in memory of Tim
                </h2>
                <p className="mt-5 text-lg/8 text-charcoal-700">
                  Thank you for helping us honor Tim Long by giving hope to
                  children and families affected by cancer in Ghana.
                </p>
                <div className="mt-8">
                  <Button href={DONATE_URL} color="cta" size="xl">
                    Donate in Tim&rsquo;s memory
                  </Button>
                </div>
                <p className="mt-6 text-sm/6 text-charcoal-500">
                  Donations are processed securely by CanadaHelps. The Alliance
                  for CancerCare Equity is a registered Canadian charity, and
                  tax receipts are issued for gifts of $20 or more.
                </p>
              </div>

              <div className="lg:col-span-2">
                <div className="mx-auto w-fit rounded-2xl bg-gold-50 p-5 text-center ring-2 ring-gold-200">
                  <a href={DONATE_URL} className="block">
                    <Image
                      src={fundQr}
                      alt="QR code that opens the Tim Long Memorial Fund donation page"
                      width={200}
                      height={200}
                      className="size-48 rounded-lg bg-white p-2"
                    />
                  </a>
                  <p className="mt-4 text-sm/6 text-charcoal-600">
                    Scan with your phone camera to give
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}

function Coda() {
  return (
    <section className="relative overflow-hidden bg-charcoal-900 py-20 sm:py-24">
      <div className="absolute inset-0 bg-dot-pattern-light opacity-10" />
      <Container className="relative">
        <div className="mx-auto max-w-3xl space-y-6 text-center">
          <p className="text-lg/8 text-charcoal-200">
            In memory of Tim Long, may our collective generosity bring comfort to
            families, hope to children, and meaning to his legacy.
          </p>
          <p className="text-lg/8 text-charcoal-200">
            May the love Tim had for children continue to live on through every
            child we are able to support.
          </p>
          <p className="pt-4 font-display text-2xl font-semibold text-gold-400 sm:text-3xl">
            Rest peacefully, Tim. Your memory will live on through the lives
            touched by your legacy.
          </p>
        </div>
      </Container>
    </section>
  )
}

export default function TimLongMemorialPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Invitation />
        <TimsStory />
        <WhyChildren />
        <Impact />
        <Gallery />
        <Legacy />
        <Donate />
        <Coda />
      </main>
      <Footer />
    </>
  )
}
