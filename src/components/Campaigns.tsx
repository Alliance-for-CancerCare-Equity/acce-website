import Image from 'next/image'
import Link from 'next/link'
import { CampaignCta, type CampaignCtaProps } from '@/components/CampaignCta'

interface Campaign {
  name: string
  description: string
  href: string
  imageUrl: string
  external: boolean
}

interface CampaignsProps {
  campaigns: {
    title: string
    intro_p1: string
    intro_p2: string
    intro_p3: string
    intro_p4: string
    campaigns_title: string
    campaigns_intro: string
    campaign_items: Campaign[]
  }
  cta: CampaignCtaProps
}

export function Campaigns({ campaigns, cta }: CampaignsProps) {
  return (
    <>
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-slate-700">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            {campaigns.title}
          </h1>
          <p className="mt-6 text-lg/8 text-slate-600">{campaigns.intro_p1}</p>
          <p className="mt-6 text-lg/8 text-slate-600">{campaigns.intro_p2}</p>
          <p className="mt-6 text-lg/8 text-slate-600">{campaigns.intro_p3}</p>
          <p className="mt-6 text-lg/8 text-slate-600">{campaigns.intro_p4}</p>
          <div className="mt-16 max-w-2xl text-slate-600">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-slate-900">
              {campaigns.campaigns_title}
            </h2>
            <p className="mt-6">{campaigns.campaigns_intro}</p>
            <div className="mt-10 space-y-16">
              {campaigns.campaign_items.map((campaign) => (
                <figure key={campaign.name}>
                  <Link
                    href={campaign.href}
                    target={campaign.external ? '_blank' : undefined}
                    rel={campaign.external ? 'noopener noreferrer' : undefined}
                  >
                    <Image
                      width={1310}
                      height={873}
                      alt={campaign.name}
                      src={campaign.imageUrl}
                      className="aspect-video rounded-xl bg-slate-100 object-cover"
                    />
                  </Link>
                  <figcaption className="mt-4">
                    <Link
                      href={campaign.href}
                      target={campaign.external ? '_blank' : undefined}
                      rel={
                        campaign.external ? 'noopener noreferrer' : undefined
                      }
                      className="text-lg/7 font-semibold text-slate-900 hover:text-blue-600"
                    >
                      {campaign.name}
                    </Link>
                    <p className="mt-1 text-base/7 text-slate-600">
                      {campaign.description}
                    </p>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>
      <CampaignCta {...cta} />
    </>
  )
}
