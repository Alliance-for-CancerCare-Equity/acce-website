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

export function Champions({ title, intro, tiers }: ChampionsProps) {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-slate-700">
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 text-lg/8 text-slate-600">{intro}</p>
        <div className="mt-10 text-slate-600">
          {tiers.map((tier) => (
            <div key={tier.title} className="mt-10">
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
                {tier.title}
              </h2>
              {tier.donors && tier.donors.length > 0 && (
                <ul className="mt-4 list-disc space-y-2 pl-6">
                  {tier.donors.map((donor) => (
                    <li key={donor.name}>
                      {donor.name}
                      {donor.location && `: ${donor.location}`}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
