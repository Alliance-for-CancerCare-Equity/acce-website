import { type Metadata } from 'next'

import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'ACCE Champions',
}

const acceChampionsContent = {
  title: 'Meet Our Champions',
  intro: `We celebrate and honor our ACCE Champions: These are individuals who have generously donated or raised $500 or more in support of our mission. These dedicated volunteers and donors are the driving force behind our relentless pursuit of cancer care equity. Their contributions, whether financial or through their tireless efforts, serve as the bedrock of our commitment to ensure every patient receives the treatment they deserve, regardless of their financial circumstances. We proudly acknowledge each and every one of them for their profound impact on our cause. To our Champions, your support is not just a donation; it's a beacon of hope for countless individuals and families facing the challenges of cancer. Your belief in our mission fuels our determination to make a tangible difference in the lives of those we serve. THANK YOU`,
  tiers: [
    {
      title: '$500 - $5,000',
      donors: [
        { name: 'Danielle Manful', location: 'Brampton, Canada' },
        { name: 'Asma Ahmad', location: 'Mississauga, Canada' },
        { name: 'Daniel Manful', location: 'Brampton, Canada' },
        { name: 'Yvonne Osei', location: 'Toronto, Canada' },
        { name: 'Kwame Asare', location: 'Brampton, Canada' },
        { name: 'Stephanie Swanson', location: 'Waterloo, Canada' },
        { name: 'Christabel Oghinan', location: 'Hamilton, Canada' },
        { name: 'Edward Owusu', location: 'Minnesota, USA' },
        { name: 'Erwin Owusu-Gyamfi', location: 'London, UK' },
        { name: 'Johnson Darko', location: 'Kitchener, Canada' },
        { name: 'Patricia Bonsu', location: 'Las Vegas, USA' },
        { name: 'Bogdan Paun', location: 'Waterloo, Canada' },
        { name: 'Josephine Kemeh', location: 'Brampton, Canada' },
        { name: 'Katherine Gill', location: 'Brampton, Canada' },
        { name: 'Joseph Boateng', location: 'USA' },
        { name: 'Jim and Fay Barnett', location: 'Kitchener, Canada' },
      ],
    },
    {
      title: '$5,001 - $10,000',
      donors: [
        { name: 'Martha Kemeh', location: 'Brampton, Canada' },
        { name: 'Sophia Kemeh', location: 'Brampton, Canada' },
        { name: 'Paypal Giving Fund' },
        { name: 'Anonymous' },
      ],
    },
    {
      title: '$10,001 - $15,000',
      donors: [],
    },
    {
      title: '> $15,000',
      donors: [{ name: 'Ernest Osei', location: 'Kitchener, Canada' }],
    },
  ],
}

interface Donor {
  name: string
  location?: string
}

interface Tier {
  title: string
  donors: Donor[]
}

interface ChampionsProps {
  title: string
  intro: string
  tiers: Tier[]
}

function Champions({ title, intro, tiers }: ChampionsProps) {
  return (
    <Container className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
          {title}
        </h2>
        <p className="mt-6 text-lg/8 text-slate-600">{intro}</p>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {tiers.map((tier) => (
          <section key={tier.title}>
            <h3 className="text-2xl font-semibold leading-8 tracking-tight text-slate-900">
              {tier.title}
            </h3>
            <ul
              role="list"
              className="mt-8 space-y-6 text-base/7 text-slate-600"
            >
              {tier.donors.map((donor) => (
                <li key={donor.name} className="flex gap-x-3">
                  <span>
                    <strong className="font-semibold text-slate-900">
                      {donor.name}
                    </strong>
                    {donor.location && `, ${donor.location}`}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Container>
  )
}

export default function AcceChampionsPage() {
  return (
    <>
      <Header />
      <main>
        <Champions {...acceChampionsContent} />
      </main>
      <Footer />
    </>
  )
}
