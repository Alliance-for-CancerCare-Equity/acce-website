import { type Metadata } from 'next'
import Image from 'next/image'
import {
  ArrowRightIcon,
  CheckIcon,
  HeartIcon,
  PlusIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  alternates: { canonical: '/ongoing-campaigns' },
  title: 'Join the ACCE Impact Club',
  description:
    'Join the ACCE Impact Club with a monthly gift starting at $5. Together, small monthly gifts support patients, families, and more equitable access to cancer care.',
  openGraph: {
    title: 'ACCE Impact Club — Small Monthly Gifts. Lasting Impact.',
    description:
      'For just $5 a month, help build a future where no cancer patient is left behind because they cannot afford the care they need.',
    url: '/ongoing-campaigns',
    images: [
      {
        url: '/impact-club/impact-club-community.webp',
        width: 1600,
        height: 900,
        alt: 'ACCE Impact Club: small gifts, big impact',
      },
    ],
  },
}

const joinOptions = [
  {
    id: 'english',
    lang: 'en',
    label: 'English',
    code: 'EN',
    title: 'Join in English',
    description:
      'Start your monthly contribution at $5, or choose a higher amount, through CanadaHelps.',
    href: 'https://www.canadahelps.org/en/dn/148840',
    qr: '/impact-club/qr-english.png',
    qrAlt: 'QR code for the English ACCE Impact Club donation form',
    scanLabel: 'or scan to join',
    scanHelp: 'Point your phone camera at the code to join in English.',
    styles: 'bg-teal-50 ring-teal-200',
    badgeStyles: 'bg-teal-100 text-teal-700',
  },
  {
    id: 'french',
    lang: 'fr',
    label: 'Français',
    code: 'FR',
    title: 'Adhérer en français',
    description:
      'Faites un don mensuel à partir de 5 $, ou choisissez un montant plus élevé, via CanadaHelps.',
    href: 'https://www.canadahelps.org/fr/dn/148840',
    qr: '/impact-club/qr-french.png',
    qrAlt: 'Code QR du formulaire de don en français du Club Impact ACCE',
    scanLabel: 'ou scannez pour adhérer',
    scanHelp: 'Scannez ce code avec votre téléphone pour adhérer en français.',
    styles: 'bg-lavender-50 ring-lavender-200',
    badgeStyles: 'bg-lavender-100 text-lavender-700',
  },
]

const supportedPrograms = [
  'Access to essential cancer treatment and care',
  'Patient and family support',
  'Cancer-related resources and assistance',
  'Programs that address barriers to equitable cancer care',
  'Community education and awareness',
  'Long-term efforts to advance cancer care equity',
]

const impactLevels = [
  {
    amount: '$5',
    description:
      'Help sustain ACCE’s work to connect patients with cancer-care support and resources.',
  },
  {
    amount: '$10',
    description:
      'Strengthen the collective pool of resources available to patients and families facing financial barriers.',
  },
  {
    amount: '$25',
    description:
      'Help ACCE build more consistent capacity to respond to patient needs and expand community support.',
  },
  {
    amount: '$50+',
    description:
      'Become an even stronger monthly partner in advancing equitable cancer care and reaching more people in need.',
  },
]

const memberBenefits = [
  {
    title: 'Put patients first',
    description:
      'Support people living with cancer and the families walking beside them.',
  },
  {
    title: 'Advance cancer care equity',
    description:
      'Help challenge the idea that financial circumstances should determine access to care.',
  },
  {
    title: 'Become part of something bigger',
    description:
      'Join a community that believes collective action can create meaningful change.',
  },
  {
    title: 'Create sustainable support',
    description:
      'Give ACCE a more predictable foundation for continuing its work and responding to patient needs.',
  },
  {
    title: 'Turn compassion into action',
    description:
      'Make a recurring commitment to the belief that everyone deserves equitable cancer care.',
  },
]

const communityPhotos = [
  {
    name: 'CancerAwareness-54.jpg',
    height: 1333,
    alt: 'ACCE volunteers and supporters gathered together at a cancer awareness event',
  },
  {
    name: 'CancerAwareness-27.jpg',
    height: 1333,
    alt: 'Volunteers welcoming participants at the event registration table',
  },
  {
    name: 'CancerAwareness-35.jpg',
    height: 1333,
    alt: 'ACCE volunteers taking part in the cancer awareness and education event',
  },
  {
    name: 'DSC_0162.JPG',
    height: 3006,
    alt: 'Community members connecting in the hallway at the cancer awareness event',
  },
  {
    name: 'CancerAwareness-42.jpg',
    height: 1378,
    alt: 'Volunteers and attendees listening to a presentation about cancer awareness',
  },
  {
    name: 'CancerAwareness-45.jpg',
    height: 1355,
    alt: 'A speaker presenting at ACCE’s cancer awareness and education event',
  },
  {
    name: 'CancerAwareness-50.jpg',
    height: 1333,
    alt: 'Community members applauding during the cancer awareness event',
  },
  {
    name: 'CancerAwareness-69.jpg',
    height: 1370,
    alt: 'ACCE volunteers posing together beside a cancer awareness event banner',
  },
  {
    name: 'DSC_0136.JPG',
    height: 1330,
    alt: 'Attendees gathering and talking together in a sunlit hallway',
  },
  {
    name: 'CancerAwareness-91.jpg',
    height: 1333,
    alt: 'A group of ACCE volunteers wearing their charity shirts at an information table',
  },
  {
    name: 'DSC_0141.JPG',
    height: 1330,
    alt: 'Volunteers helping attendees at a community information and refreshment table',
  },
]

const faqs = [
  {
    question: 'What is the ACCE Impact Club?',
    answer:
      'The ACCE Impact Club is ACCE’s monthly giving community. Members make recurring contributions that collectively provide sustainable support for ACCE’s work advancing equity in cancer care.',
  },
  {
    question: 'How much does it cost to join?',
    answer:
      'You can join with a monthly contribution starting at $5. You can choose a higher monthly amount if you would like to make a greater contribution.',
  },
  {
    question: 'Where does my contribution go?',
    answer:
      'Impact Club contributions support ACCE’s mission and programs, including efforts to improve access to cancer care, provide patient and family support, address financial barriers, and advance cancer care equity.',
  },
  {
    question: 'Do I need to donate every month?',
    answer:
      'The Impact Club is designed around recurring monthly giving. Your continued membership helps provide the reliable support ACCE needs to sustain its work.',
  },
  {
    question: 'Can I increase or change my monthly contribution?',
    answer:
      'Yes. Monthly donors can adjust their giving according to their circumstances and desired level of support.',
  },
  {
    question: 'Who can join?',
    answer:
      'Anyone. Individuals, families, students, healthcare professionals, cancer survivors, caregivers, businesses, and organizations are welcome. You do not need to have personally experienced cancer; you simply need to believe that everyone deserves equitable access to care.',
  },
  {
    question: 'Will my donation make a difference if I can only give $5?',
    answer:
      'Yes. The Impact Club is built on the principle that collective action creates change. A small monthly contribution, multiplied by a community of committed supporters, can create meaningful and sustained impact.',
  },
]

function ImpactClubHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gold-50 via-lavender-100 to-teal-50">
      <div
        aria-hidden="true"
        className="absolute -top-24 -right-24 size-96 rounded-full bg-gold-200/40 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute top-40 -left-32 size-80 rounded-full bg-lavender-300/30 blur-3xl"
      />
      <Container className="relative pt-16 pb-10 sm:pt-24 lg:pt-28">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          <div>
            <p className="flex items-center gap-2 text-sm font-bold tracking-widest text-teal-700 uppercase">
              <HeartIcon aria-hidden="true" className="size-5" />
              ACCE Impact Club
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl">
              Small monthly gifts.
              <span className="block text-teal-700">Lasting impact.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg/8 text-charcoal-700">
              For just{' '}
              <strong className="font-bold text-charcoal-900">
                $5 a month
              </strong>
              , you can help build a future where no cancer patient is left
              behind because they cannot afford the care they need.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                href={joinOptions[0].href}
                color="cta"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the club — $5/month
                <ArrowRightIcon
                  aria-hidden="true"
                  className="ml-2 size-5 shrink-0"
                />
              </Button>
              <a
                href="#join"
                className="rounded-lg py-2 text-sm font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
              >
                English &amp; French options
              </a>
            </div>
            <p className="mt-4 text-sm text-charcoal-600">
              Monthly giving is processed securely through CanadaHelps.
            </p>
          </div>
          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute -inset-3 rotate-2 rounded-3xl bg-gradient-to-br from-teal-200 to-gold-200"
            />
            <Image
              src="/impact-club/impact-club-community.webp"
              alt="ACCE Impact Club campaign artwork showing a community gathered together, with the message: Small Gifts. Big Impact."
              width={1600}
              height={900}
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="relative h-auto w-full rounded-2xl shadow-strong"
            />
          </div>
        </div>
        <dl className="mt-14 grid grid-cols-3 gap-4 border-t border-charcoal-900/10 pt-8 text-center sm:mt-20 sm:gap-8">
          <div className="flex flex-col-reverse">
            <dt className="mt-2 text-sm font-semibold text-charcoal-700">
              Your monthly commitment
            </dt>
            <dd className="font-display text-4xl font-bold text-teal-700 sm:text-5xl">
              $5
            </dd>
          </div>
          <div className="flex flex-col-reverse border-x border-charcoal-900/10 px-2">
            <dt className="mt-2 text-sm font-semibold text-charcoal-700">
              Community, working together
            </dt>
            <dd className="font-display text-4xl font-bold text-lavender-700 sm:text-5xl">
              1
            </dd>
          </div>
          <div className="flex flex-col-reverse">
            <dt className="mt-2 text-sm font-semibold text-charcoal-700">
              Impact, because every patient matters
            </dt>
            <dd className="font-display text-4xl font-bold text-gold-700 sm:text-5xl">
              <span aria-hidden="true">∞</span>
              <span className="sr-only">Limitless</span>
            </dd>
          </div>
        </dl>
      </Container>
    </section>
  )
}

function AboutImpactClub() {
  return (
    <section aria-labelledby="about-club" className="bg-white py-16 sm:py-24">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
              No patient left behind
            </p>
            <h2
              id="about-club"
              className="mt-3 font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl"
            >
              What is the ACCE Impact Club?
            </h2>
            <p className="mt-6 text-lg/8 text-charcoal-700">
              A community-powered monthly giving program that turns small,
              consistent contributions into meaningful support for people
              affected by cancer.
            </p>
            <p className="mt-4 text-base/7 text-charcoal-600">
              A diagnosis can bring difficult questions about paying for
              treatment, medications, transportation, and other essential needs.
              We believe financial circumstances should never determine who gets
              a chance to fight cancer.
            </p>
            <p className="mt-4 text-base/7 text-charcoal-600">
              Your recurring gift helps ACCE build a more dependable source of
              support for patients and families. When many people give a little,
              together we can do a lot.
            </p>
            <h3 className="mt-8 font-display text-lg font-semibold text-charcoal-900">
              Your membership helps strengthen:
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {supportedPrograms.map((program) => (
                <li
                  key={program}
                  className="flex gap-3 text-sm/6 text-charcoal-700"
                >
                  <CheckIcon
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-teal-600"
                  />
                  {program}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <Image
              src="/impact-club/patient-support.webp"
              alt="A clinician speaking with a family about their care"
              width={870}
              height={578}
              sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
              className="h-auto w-full rounded-3xl shadow-soft"
            />
            <figure className="overflow-hidden rounded-3xl bg-gold-50">
              <Image
                src="/impact-club/community-conversation.webp"
                alt="People sharing a conversation beside a cancer awareness banner"
                width={949}
                height={626}
                sizes="(min-width: 1024px) 45vw, (min-width: 640px) 50vw, 100vw"
                className="h-auto w-full"
              />
              <figcaption className="px-6 py-4 text-sm/6 font-medium text-charcoal-700">
                Hope. Dignity. Relief. A reminder that someone cares.
              </figcaption>
            </figure>
          </div>
        </div>
      </Container>
    </section>
  )
}

function CollectiveImpact() {
  return (
    <section
      aria-labelledby="monthly-impact"
      className="relative overflow-hidden bg-charcoal-900 py-16 text-white sm:py-20"
    >
      <div
        aria-hidden="true"
        className="absolute -right-20 -bottom-40 size-96 rounded-full bg-teal-700/40 blur-3xl"
      />
      <Container className="relative grid items-center gap-10 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="text-sm font-semibold tracking-widest text-gold-300 uppercase">
            Why monthly giving matters
          </p>
          <h2
            id="monthly-impact"
            className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            One community.
            <br />A greater impact.
          </h2>
          <p className="mt-6 text-lg/8 text-charcoal-200">
            Reliable, sustained support helps ACCE plan ahead, respond to needs,
            and continue building programs that make a difference beyond a
            single moment.
          </p>
          <p className="mt-4 text-base/7 text-charcoal-300">
            Imagine hundreds or thousands of people making the same $5
            commitment. Together, those contributions can help create a stronger
            safety net for patients and families facing cancer.
          </p>
        </div>
        <div className="rounded-3xl border border-white/15 bg-white/5 p-6 sm:p-8">
          <h3 className="font-display text-xl font-semibold text-gold-200">
            Imagine what we can do together
          </h3>
          <p className="mt-2 text-sm/6 text-charcoal-300">
            If each person gives $5 a month:
          </p>
          <dl className="mt-4 divide-y divide-white/15">
            {[
              { members: '100', total: '$500' },
              { members: '500', total: '$2,500' },
              { members: '1,000', total: '$5,000' },
            ].map(({ members, total }) => (
              <div
                key={members}
                className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 py-4"
              >
                <dt className="text-base text-charcoal-200">
                  <span className="font-bold text-white">{members}</span> people
                </dt>
                <dd className="font-display text-2xl font-bold text-teal-200">
                  {total}
                  <span className="ml-1 font-sans text-xs font-medium text-charcoal-300">
                    / month
                  </span>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-4 text-sm/6 text-charcoal-300">
            And that support continues, month after month.
          </p>
        </div>
      </Container>
    </section>
  )
}

function MonthlyGiftLevels() {
  return (
    <section
      aria-labelledby="gift-levels"
      className="bg-gold-50 py-16 sm:py-20"
    >
      <Container>
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-widest text-gold-700 uppercase">
            Every contribution matters
          </p>
          <h2
            id="gift-levels"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl"
          >
            Your impact starts here.
          </h2>
          <p className="mt-4 text-lg/8 text-charcoal-700">
            Start with $5 a month, or give more if you can. Every member helps
            strengthen our shared commitment to equitable cancer care.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {impactLevels.map(({ amount, description }) => (
            <div
              key={amount}
              className="rounded-2xl border border-gold-200 bg-white/80 p-6 shadow-soft"
            >
              <h3 className="font-display text-3xl font-bold text-teal-700">
                {amount}
                <span className="ml-1 font-sans text-sm font-medium text-charcoal-600">
                  / month
                </span>
              </h3>
              <p className="mt-4 text-sm/7 text-charcoal-700">{description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function WhyJoin() {
  return (
    <section
      aria-labelledby="why-join"
      className="bg-lavender-50 py-16 sm:py-24"
    >
      <Container className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div>
          <Image
            src="/impact-club/impact-club-ghana.webp"
            alt="ACCE Impact Club artwork with a Ghana flag heart held in open hands and the message: Together, we bring hope, support and equity in cancer care"
            width={1200}
            height={800}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="h-auto w-full rounded-3xl shadow-medium"
          />
          <p className="mt-5 text-center font-display text-lg font-semibold text-lavender-800">
            Every member matters. Every patient matters.
          </p>
        </div>
        <div>
          <h2
            id="why-join"
            className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl"
          >
            More than a donation.
            <br />A commitment to care.
          </h2>
          <ul role="list" className="mt-8 space-y-6">
            {memberBenefits.map(({ title, description }) => (
              <li key={title} className="flex gap-4">
                <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-lavender-200 text-lavender-800">
                  <CheckIcon aria-hidden="true" className="size-4" />
                </span>
                <div>
                  <h3 className="font-semibold text-charcoal-900">{title}</h3>
                  <p className="mt-1 text-sm/7 text-charcoal-600">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}

function JoinImpactClub() {
  return (
    <section
      id="join"
      aria-labelledby="join-title"
      className="scroll-mt-24 bg-gradient-to-br from-teal-50 via-gold-50 to-lavender-100 py-16 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
            Give a little. Change a lot.
          </p>
          <h2
            id="join-title"
            className="mt-3 font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl"
          >
            Join the Impact Club.
          </h2>
          <p className="mt-5 text-lg/8 text-charcoal-700">
            One simple commitment, starting at $5 a month. Choose your preferred
            language to join through CanadaHelps.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
          {joinOptions.map((option) => (
            <div
              key={option.id}
              lang={option.lang}
              aria-labelledby={`join-${option.id}`}
              className={`flex flex-col rounded-3xl p-6 shadow-soft ring-2 transition-shadow duration-200 hover:shadow-medium sm:p-8 ${option.styles}`}
            >
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className={`flex size-12 items-center justify-center rounded-xl text-sm font-bold ${option.badgeStyles}`}
                >
                  {option.code}
                </span>
                <h3
                  id={`join-${option.id}`}
                  className="font-display text-2xl font-bold text-charcoal-900"
                >
                  {option.label}
                </h3>
              </div>
              <p className="mt-4 text-sm/7 text-charcoal-700 md:min-h-24">
                {option.description}
              </p>
              <Button
                href={option.href}
                color="cta"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 w-full"
              >
                {option.title}
                <ArrowRightIcon
                  aria-hidden="true"
                  className="ml-2 size-5 shrink-0"
                />
              </Button>
              <div className="mt-7 flex items-center gap-3">
                <div className="h-px flex-1 bg-charcoal-200" />
                <span className="text-xs font-semibold tracking-wide text-charcoal-600 uppercase">
                  {option.scanLabel}
                </span>
                <div className="h-px flex-1 bg-charcoal-200" />
              </div>
              <a
                href={option.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={option.title}
                className="mx-auto mt-5 block w-fit rounded-2xl bg-white p-3 shadow-soft ring-1 ring-charcoal-200 transition-shadow hover:shadow-medium focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600"
              >
                <Image
                  src={option.qr}
                  alt={option.qrAlt}
                  width={192}
                  height={192}
                  sizes="192px"
                  className="size-48"
                />
              </a>
              <p className="mx-auto mt-4 max-w-xs text-center text-xs/6 text-charcoal-600">
                {option.scanHelp}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}

function ImpactClubCommunity() {
  return (
    <section
      aria-labelledby="club-community"
      className="bg-white py-16 sm:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-widest text-teal-700 uppercase">
            There is a place for you here
          </p>
          <h2
            id="club-community"
            className="mt-3 font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl"
          >
            A community that shows up.
          </h2>
          <p className="mt-5 text-lg/8 text-charcoal-700">
            Students, healthcare professionals, survivors, caregivers, families,
            and neighbours. Different backgrounds, one shared belief: everyone
            deserves a fighting chance.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
          {communityPhotos.map((photo) => (
            <figure
              key={photo.name}
              className={`relative overflow-hidden rounded-2xl bg-lavender-50 ${photo.height > 2000 ? 'row-span-2' : 'aspect-[3/2]'}`}
            >
              <Image
                src={`/event_images/empowering-communities-2026/${photo.name}`}
                alt={photo.alt}
                fill
                sizes="(min-width: 1280px) 400px, (min-width: 1024px) 33vw, 50vw"
                className={
                  photo.height > 2000 ? 'object-contain' : 'object-cover'
                }
              />
            </figure>
          ))}
        </div>
        <p className="mt-5 text-center text-sm/6 text-charcoal-600">
          ACCE volunteers and supporters at our cancer awareness and education
          event.
        </p>
      </Container>
    </section>
  )
}

function ImpactClubFaqs() {
  return (
    <section
      aria-labelledby="club-faqs"
      className="bg-lavender-50 py-16 sm:py-20"
    >
      <Container>
        <div className="mx-auto max-w-3xl">
          <h2
            id="club-faqs"
            className="font-display text-3xl font-bold tracking-tight text-charcoal-900 sm:text-4xl"
          >
            Your questions, answered.
          </h2>
          <div className="mt-8 divide-y divide-lavender-200 border-y border-lavender-200">
            {faqs.map(({ question, answer }) => (
              <details key={question} className="group py-5">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-5 rounded-lg font-semibold text-charcoal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-600 [&::-webkit-details-marker]:hidden">
                  {question}
                  <PlusIcon
                    aria-hidden="true"
                    className="mt-0.5 size-5 shrink-0 text-lavender-700 transition-transform group-open:rotate-45"
                  />
                </summary>
                <p className="mt-4 pr-8 text-base/7 text-charcoal-600">
                  {answer}
                </p>
              </details>
            ))}
          </div>
          <p className="mt-6 text-sm/7 text-charcoal-600">
            Have another question?{' '}
            <a
              href="mailto:support@accecan.ca"
              className="font-semibold text-teal-700 underline underline-offset-4 hover:text-teal-900"
            >
              Get in touch with our team.
            </a>
          </p>
        </div>
      </Container>
    </section>
  )
}

export default function ImpactClubPage() {
  return (
    <>
      <Header />
      <main>
        <ImpactClubHero />
        <AboutImpactClub />
        <CollectiveImpact />
        <MonthlyGiftLevels />
        <WhyJoin />
        <JoinImpactClub />
        <ImpactClubCommunity />
        <ImpactClubFaqs />
        <section
          aria-labelledby="club-closing"
          className="bg-gradient-to-br from-teal-800 to-charcoal-900 py-16 text-center text-white sm:py-20"
        >
          <Container>
            <p className="text-sm font-semibold tracking-widest text-teal-200 uppercase">
              Be part of the change
            </p>
            <h2
              id="club-closing"
              className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Give $5 a month.
              <br />
              Give hope. Give equity.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg/8 text-teal-50">
              Together, we can make cancer care more equitable. One patient. One
              family. One community at a time.
            </p>
            <Button href="#join" color="cta" size="lg" className="mt-8">
              Join the ACCE Impact Club
              <ArrowRightIcon
                aria-hidden="true"
                className="ml-2 size-5 shrink-0"
              />
            </Button>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
