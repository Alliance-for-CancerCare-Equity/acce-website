import { type Metadata } from 'next'
import { CheckIcon } from '@heroicons/react/20/solid'

import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Giving Options',
}

const givingOptionsContent = {
  one_time_donations: {
    header: 'One-Time Donations',
    title: 'Choose Your Way to Give',
    subtitle:
      'You can support us with $25, $50, $100 or any amount you want to give. Your generous gift will make cancer care equitably accessible to all cancer patients.',
    tiers: [
      {
        name: 'PayPal',
        id: 'tier-paypal',
        href: 'https://www.paypal.com/donate/?hosted_button_id=VTDX9SVRTD7RE',
        description: 'Secure online giving with Debit or Credit Card via PayPal.',
        features: ['Give any amount', 'Set up a monthly donation'],
      },
      {
        name: 'CanadaHelps',
        id: 'tier-canadahelps',
        href: 'https://www.canadahelps.org/en/dn/80223',
        description:
          'Secure online giving with Debit or Credit Card via CanadaHelps.',
        features: ['Give any amount', 'Set up a monthly donation'],
      },
      {
        name: 'Other Methods',
        id: 'tier-other',
        href: 'mailto:donate@allianceforcancercareequity.ca',
        description:
          'Prefer Interac e-Transfer, Cheques, or MoMo? See the FAQ for details.',
        features: [],
      },
    ],
  },
  monthly_giving: {
    title: 'Make it Monthly',
    subtitle:
      'Join us as a Partner in Hope, Cure, and Equity today with a monthly donation of $25 or more. Your commitment can be adjusted or canceled anytime.',
    partner_title: 'Partner in Equity',
    partner_description:
      'Your monthly gift as a Partner in Equity will profoundly impact cancer patients without the financial resources to cover their treatment costs. Join us today to redefine cancer care.',
    included_header: 'What’s included',
    included_features: [
      'Pay for cancer treatment for patients in need.',
      'Provide a crucial lifeline to save lives.',
      'Make a real, lasting impact on patients and their families.',
      'Invest in equity for cancer care.',
      'Efficiently donate without having to remember each year.',
    ],
    cta_title: 'Become a monthly donor',
    cta_button1_text: 'Make it Monthly via PayPal',
    cta_button1_href: 'https://www.canadahelps.org/en/dn/80223',
    cta_button2_text: 'Make it Monthly via CanadaHelps',
    cta_button2_href:
      'https://www.paypal.com/donate/?hosted_button_id=VTDX9SVRTD7RE',
  },
  faqs: {
    title: 'Frequently asked questions',
    subtitle_part1:
      'Have a different question and can’t find the answer you’re looking for? Reach out to our support team by',
    subtitle_link_text: 'sending us an email',
    subtitle_link_href: 'mailto:support@allianceforcancercareequity.ca',
    subtitle_part2: 'and we’ll get back to you as soon as we can.',
    questions: [
      {
        question: 'Why should I become a monthly donor?',
        answer:
          'Your monthly donations provide a crucial lifeline, enabling us to save lives, offer essential care and treatment, inspire hope and compassion, and ensure equitable access to cancer care for patients and their families.',
      },
      {
        question: 'Is my donation tax-deductible?',
        answer:
          'Yes, Alliance for CancerCare Equity is a registered charity. Canada tax receipts will be issued for all gifts of $20 or more. Please ensure to provide your email and home or business address to receive your tax receipts.',
      },
      {
        question: 'Can I cancel my monthly donation?',
        answer:
          'Yes, your commitment can be adjusted or canceled anytime. Monthly giving is one of the most efficient ways to donate, and you can manage your subscription through the portal you signed up with.',
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept one-time and monthly donations via PayPal and CanadaHelps. We also accept donations via Interac e-Transfer (for Canadian bank account holders), Cheques, and MoMo (for our supporters in Ghana).',
      },
      {
        question: 'How does my donation help?',
        answer:
          'Your generosity ensures that cancer patients in need receive life-saving treatment at no cost. With your support, we can make a profound difference in their lives by paying for treatment, providing medication, and supporting families.',
      },
      {
        question: 'How can I be sure my donation is being used effectively?',
        answer:
          'We are committed to transparency. We invite you to review our Annual Reports and Financial Statements to see exactly how your generosity is being used to fund treatments and support patients through their journey.',
      },
    ],
  },
}

interface Tier {
  name: string
  id: string
  href: string
  description: string
  features: string[]
}

interface OneTimeDonationsProps {
  header: string
  title: string
  subtitle: string
  tiers: Tier[]
}

function OneTimeDonations({
  header,
  title,
  subtitle,
  tiers,
}: OneTimeDonationsProps) {
  function TierIcon({ name }: { name: string }) {
    if (name === 'PayPal') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 text-blue-700">
          <rect x="3" y="6" width="18" height="12" rx="2" className="fill-current/20" />
          <rect x="3" y="9" width="18" height="3" className="fill-current" />
        </svg>
      )
    }
    if (name === 'CanadaHelps') {
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 text-emerald-700">
          <path
            className="fill-current"
            fillRule="evenodd"
            d="M11.645 20.374l-.013-.01C6.104 15.642 2.25 12.063 2.25 8.25A4.5 4.5 0 0 1 6.75 3.75c1.632 0 3.195.795 4.125 2.036A5.247 5.247 0 0 1 15 3.75a4.5 4.5 0 0 1 4.5 4.5c0 3.813-3.855 7.392-9.382 12.115l-.013.01a.75.75 0 0 1-.96 0z"
            clipRule="evenodd"
          />
        </svg>
      )
    }
    // Other Methods
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-6 text-slate-700">
        <rect x="3" y="5" width="18" height="14" rx="2" className="fill-current/20" />
        <path d="M4 7l8 6 8-6" className="stroke-current" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  }
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-blue-600">{header}</h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-slate-900 sm:text-6xl">
            {title}
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-slate-600 sm:text-xl/8">
          {subtitle}
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={
                `rounded-3xl p-8 ring-1 xl:p-10 ` +
                (tier.name === 'PayPal'
                  ? 'bg-blue-50 ring-blue-200'
                  : tier.name === 'CanadaHelps'
                    ? 'bg-emerald-50 ring-emerald-200'
                    : 'bg-slate-50 ring-slate-200')
              }
            >
              <div className="flex items-center justify-between gap-x-4">
                <div className="flex items-center gap-x-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-md bg-white/70 ring-1 ring-black/5">
                    <TierIcon name={tier.name} />
                  </span>
                  <h3
                    id={`tier-${tier.id}`}
                    className="text-lg/8 font-semibold text-slate-900"
                  >
                    {tier.name}
                  </h3>
                </div>
              </div>
              <p className="mt-4 text-sm/6 text-slate-600">
                {tier.description}
              </p>
              <Button
                href={tier.href}
                color="blue"
                aria-describedby={tier.id}
                className="mt-6 block w-full"
              >
                {tier.name === 'Other Methods'
                  ? 'Learn More'
                  : `Donate via ${tier.name}`}
              </Button>
              {tier.features.length > 0 && (
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm/6 text-slate-600 xl:mt-10"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        aria-hidden="true"
                        className="h-6 w-5 flex-none text-blue-600"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

interface MonthlyGivingProps {
  title: string
  subtitle: string
  partner_title: string
  partner_description: string
  included_header: string
  included_features: string[]
  cta_title: string
  cta_button1_text: string
  cta_button1_href: string
  cta_button2_text: string
  cta_button2_href: string
}

function MonthlyGiving({
  title,
  subtitle,
  partner_title,
  partner_description,
  included_header,
  included_features,
  cta_title,
  cta_button1_text,
  cta_button1_href,
  cta_button2_text,
  cta_button2_href,
}: MonthlyGivingProps) {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-6xl sm:text-balance">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-slate-500 sm:text-xl/8">
            {subtitle}
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-slate-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
              {partner_title}
            </h3>
            <p className="mt-6 text-base/7 text-slate-600">
              {partner_description}
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-blue-600">
                {included_header}
              </h4>
              <div className="h-px flex-auto bg-slate-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-slate-600 sm:grid-cols-2 sm:gap-6"
            >
              {included_features.map((feature) => (
                <li key={feature} className="flex gap-x-3">
                  <CheckIcon
                    aria-hidden="true"
                    className="h-6 w-5 flex-none text-blue-600"
                  />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:shrink-0 lg:self-stretch">
            <div className="h-full rounded-2xl bg-slate-50 py-10 text-center inset-ring inset-ring-slate-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8">
                <p className="text-base font-semibold text-slate-600">
                  {cta_title}
                </p>
                <div className="mt-10 flex flex-col items-center gap-y-4">
                  <Button
                    href={cta_button1_href}
                    color="blue"
                    className="w-full"
                  >
                    {cta_button1_text}
                  </Button>
                  <Button
                    href={cta_button2_href}
                    color="blue"
                    className="w-full"
                  >
                    {cta_button2_text}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

interface Faq {
  question: string
  answer: string
}

interface DonationFaqsProps {
  title: string
  subtitle_part1: string
  subtitle_link_text: string
  subtitle_link_href: string
  subtitle_part2: string
  questions: Faq[]
}

function DonationFaqs({
  title,
  subtitle_part1,
  subtitle_link_text,
  subtitle_link_href,
  subtitle_part2,
  questions,
}: DonationFaqsProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-base/7 text-slate-600">
            {subtitle_part1}{' '}
            <a
              href={subtitle_link_href}
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              {subtitle_link_text}
            </a>{' '}
            {subtitle_part2}
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10">
            {questions.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base/7 font-semibold text-slate-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base/7 text-slate-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default function GivingOptionsPage() {
  return (
    <>
      <Header />
      <main>
        <OneTimeDonations {...givingOptionsContent.one_time_donations} />
        <MonthlyGiving {...givingOptionsContent.monthly_giving} />
        <DonationFaqs {...givingOptionsContent.faqs} />
      </main>
      <Footer />
    </>
  )
}
