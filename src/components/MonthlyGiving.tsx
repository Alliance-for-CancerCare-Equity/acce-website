import { CheckIcon } from '@heroicons/react/20/solid'
import { Button } from '@/components/Button'

export interface MonthlyGivingProps {
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

export function MonthlyGiving({
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
                  <Button href={cta_button1_href} color="blue" className="w-full">
                    {cta_button1_text}
                  </Button>
                  <Button
                    href={cta_button2_href}
                    color="blue"
                    variant="outline"
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