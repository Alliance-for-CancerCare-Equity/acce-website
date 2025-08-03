import { Container } from '@/components/Container'

const faqs = [
  {
    id: 1,
    question: 'Why should I become a monthly donor?',
    answer:
      'Your monthly donations provide a crucial lifeline, enabling us to save lives, offer essential care and treatment, inspire hope and compassion, and ensure equitable access to cancer care for patients and their families.',
  },
  {
    id: 2,
    question: 'Is my donation tax-deductible?',
    answer:
      'Yes, Alliance for CancerCare Equity is a registered charity. Canada tax receipts will be issued for all gifts of $20 or more. Please ensure to provide your email and home or business address to receive your tax receipts.',
  },
  {
    id: 3,
    question: 'Can I cancel my monthly donation?',
    answer:
      'Yes, your commitment can be adjusted or canceled anytime. Monthly giving is one of the most efficient ways to donate, and you can manage your subscription through the portal you signed up with.',
  },
  {
    id: 4,
    question: 'What payment methods do you accept?',
    answer:
      'We accept one-time and monthly donations via PayPal and CanadaHelps. We also accept one-time donations via Interac e-Transfer, Cheque, and MoMo for our supporters in Ghana.',
  },
  {
    id: 5,
    question: 'How does my donation help?',
    answer:
      'Your generosity ensures that cancer patients in need receive life-saving treatment at no cost. With your support, we can make a profound difference in their lives by paying for treatment, providing medication, and supporting families.',
  },
  {
    id: 6,
    question: 'How can I be sure my donation is being used effectively?',
    answer:
      'We are committed to transparency. We invite you to review our Annual Reports and Financial Statements to see exactly how your generosity is being used to fund treatments and support patients through their journey.',
  },
]

export function DonationFaqs() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            Frequently asked questions
          </h2>
          <p className="mt-6 text-base/7 text-slate-600">
            Have a different question and can’t find the answer you’re looking
            for? Reach out to our support team by{' '}
            <a
              href="mailto:support@allianceforcancercareequity.ca"
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              sending us an email
            </a>{' '}
            and we’ll get back to you as soon as we can.
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10">
            {faqs.map((faq) => (
              <div key={faq.id}>
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
