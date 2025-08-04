'use client'

import { Container } from '@/components/ui/Container'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'

interface Stat {
  name: string
  value: number
  prefix?: string
  suffix?: string
  animate?: boolean
}

interface StatsProps {
  title: string
  subtitle: string
  items: Stat[]
}

export function Stats({ title, subtitle, items }: StatsProps) {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-4 text-lg/8 text-slate-600">{subtitle}</p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-slate-900/10 text-center sm:grid-cols-2 lg:grid-cols-3">
            {items.map((stat, index) => (
              <div key={index} className="flex flex-col bg-white p-8">
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