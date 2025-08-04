import { Button } from '@/components/Button'

interface FundingApplicationProps {
  title: string
  subtitle: string
  cta_title: string
  cta_subtitle: string
  button1_text: string
  button1_href: string
  button2_text: string
  button2_href: string
}

export function FundingApplication({
  title,
  subtitle,
  cta_title,
  cta_subtitle,
  button1_text,
  button1_href,
  button2_text,
  button2_href,
}: FundingApplicationProps) {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-slate-700">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-xl/8 text-balance">{subtitle}</p>
        </div>
      </div>
      <div className="bg-white">
        <div className="px-6 pb-24 sm:px-6 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-slate-900 sm:text-4xl">
              {cta_title}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-slate-600">
              {cta_subtitle}
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href={button1_href} color="blue">
                {button1_text}
              </Button>
              <Button
                href={button2_href}
                color="slate"
                variant="outline"
              >
                {button2_text}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}