import { Container } from '@/components/Container'

const stats = [
  { id: 1, name: 'Patients Helped', value: '150+' },
  { id: 2, name: 'Funds Raised', value: '$50,000+' },
  { id: 3, name: 'Community Partners', value: '10+' },
  { id: 4, name: 'Volunteers Engaged', value: '50+' },
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
              We are proud of the progress we&apos;ve made in the fight for cancer
              care equity.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-slate-900/10 text-center sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.id} className="flex flex-col bg-white p-8">
                <dt className="text-sm/6 font-semibold text-slate-600">
                  {stat.name}
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-slate-900">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  )
}
