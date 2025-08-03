import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'

const includedFeatures = [
  'Pay for cancer treatment for patients in need.',
  'Provide a crucial lifeline to save lives.',
  'Make a real, lasting impact on patients and their families.',
  'Invest in equity for cancer care.',
  'Efficiently donate without having to remember each year.',
]

export function MonthlyGiving() {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl sm:text-center">
          <h2 className="text-5xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-6xl sm:text-balance">
            Make it Monthly
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg font-medium text-pretty text-slate-500 sm:text-xl/8">
            Join us as a Partner in Hope, Cure, and Equity today with a monthly
            donation of $25 or more. Your commitment can be adjusted or
            canceled anytime.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-slate-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-3xl font-semibold tracking-tight text-slate-900">
              Partner in Equity
            </h3>
            <p className="mt-6 text-base/7 text-slate-600">
              Your monthly gift as a Partner in Equity will profoundly impact
              cancer patients without the financial resources to cover their
              treatment costs. Join us today to redefine cancer care.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm/6 font-semibold text-blue-600">
                What’s included
              </h4>
              <div className="h-px flex-auto bg-slate-100" />
            </div>
            <ul
              role="list"
              className="mt-8 grid grid-cols-1 gap-4 text-sm/6 text-slate-600 sm:grid-cols-2 sm:gap-6"
            >
              {includedFeatures.map((feature) => (
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
                  Become a monthly donor
                </p>
                <div className="mt-10 flex flex-col items-center gap-y-4">
                  <Button
                    href="https://www.canadahelps.org/en/dn/80223"
                    color="blue"
                    className="w-full"
                  >
                    Make it Monthly via PayPal
                  </Button>
                  <Button
                    href="https://www.paypal.com/donate/?hosted_button_id=VTDX9SVRTD7RE"
                    color="blue"
                    variant="outline"
                    className="w-full"
                  >
                    Make it Monthly via CanadaHelps
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
