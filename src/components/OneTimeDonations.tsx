import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'

const tiers = [
  {
    name: 'PayPal',
    id: 'tier-paypal',
    href: '#',
    description: 'Secure online giving with Debit or Credit Card via PayPal.',
    features: ['Give in US$ or CAD$', 'Set up a monthly donation'],
  },
  {
    name: 'CanadaHelps',
    id: 'tier-canadahelps',
    href: '#',
    description:
      'Secure online giving with Debit or Credit Card via CanadaHelps.',
    features: ['Give any amount', 'Set up a monthly donation'],
  },
  {
    name: 'Other Methods',
    id: 'tier-other',
    href: '#',
    description: 'Give by Interac e-Transfer, Cheque, or MoMo.',
    features: [
      'Interac e-Transfer: donate@allianceforcancercareequity.ca',
      'Cheque: Payable to "Alliance for CancerCare Equity"',
      'MoMo: 233 53 048 2155',
    ],
  },
]

export function OneTimeDonations() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base/7 font-semibold text-blue-600">
            One-Time Donations
          </h2>
          <p className="mt-2 text-5xl font-semibold tracking-tight text-balance text-slate-900 sm:text-6xl">
            Choose Your Way to Give
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-slate-600 sm:text-xl/8">
          You can support us with $25, $50, $100 or any amount you want to give.
          Your generous gift will make cancer care equitably accessible to all
          cancer patients.
        </p>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="rounded-3xl p-8 ring-1 ring-slate-200 xl:p-10"
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={`tier-${tier.id}`}
                  className="text-lg/8 font-semibold text-slate-900"
                >
                  {tier.name}
                </h3>
              </div>
              <p className="mt-4 text-sm/6 text-slate-600">
                {tier.description}
              </p>
              <Button
                href={tier.href}
                color="blue"
                variant="outline"
                aria-describedby={tier.id}
                className="mt-6 block w-full"
              >
                {tier.name === 'Other Methods'
                  ? 'Learn More'
                  : `Donate via ${tier.name}`}
              </Button>
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
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}