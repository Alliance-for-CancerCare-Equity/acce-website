'use client'

import { Container } from '@/components/Container'
import { AnimatedNumber } from '@/components/AnimatedNumber'

const stats = [
  {
    id: 1,
    name: 'Amount Raised',
    value: 90,
    prefix: '$',
    suffix: 'k+',
    animate: true,
  },
  {
    id: 2,
    name: 'Patients Supported',
    value: 60,
    suffix: '+',
    animate: true,
  },
  { id: 3, name: 'Established', value: 2022, animate: true, suffix: '' },
]

export function Stats() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl">
              Our Impact in Numbers
            </h2>
            <p className="mt-4 text-lg/8 text-slate-600">
              We are proud of the progress we&apos;ve made in the fight for
              cancer care equity.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-slate-900/10 text-center sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white p-8">
                <dt className="text-sm/6 font-semibold text-slate-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900">
                  {stat.prefix}
                  {stat.animate ? (
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  ) : (
                    <>
                      {stat.value}
                      {stat.suffix}
                    </>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
