import { Button } from '@/components/Button'

export function FundingApplication() {
  return (
    <div className="bg-white">
      <div className="px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-slate-700">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            Treatment and Equipment Support
          </h1>
          <p className="mt-6 text-xl/8 text-balance">
            Our mission is to provide comprehensive support for individuals
            battling cancer who lack the financial resources for treatment,
            travel, and associated expenses. Additionally, we strive to bolster
            community healthcare centers by supplying essential equipment,
            financial aid, and supportive services tailored to the needs of
            cancer patients. Together, we aim to ensure equitable access to
            quality care and support throughout their journey to recovery.
          </p>
        </div>
      </div>
      <div className="bg-white">
        <div className="px-6 pb-24 sm:px-6 sm:pb-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold tracking-tight text-balance text-slate-900 sm:text-4xl">
              Apply for Funding
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-slate-600">
              Use the appropriate link below to initiate an application for
              funding for Treatment or Equipment.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button href="/support-treatment" color="blue">
                Treatment Support
              </Button>
              <Button href="/equipment" color="slate" variant="outline">
                Equipment Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
