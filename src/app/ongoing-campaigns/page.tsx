import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Ongoing Campaigns',
}

const ongoingCampaignsContent = {
  campaigns: {
    title: 'Ongoing ACCE Campaigns',
    intro_p1:
      'At the Alliance for CancerCare Equity (ACCE), we are committed to ensuring that no one is denied cancer treatment because of financial hardship. Every month, we support patients in Ghana and Canada—covering treatment costs, medications, and transportation. But the need is great, and the costs keep rising.',
    intro_p2:
      'That’s why, from time to time, we launch special fundraising campaigns. These campaigns help us respond to urgent cases, expand our support to more patients, and sustain ongoing treatments.',
    intro_p3:
      'Each campaign is a call to action—a chance for our community to step in and give hope where it’s needed most. Every dollar you give directly impacts a life.',
    intro_p4:
      'Together, we can close the gap in cancer care and bring healing within reach.',
    campaigns_title: 'Our Campaigns',
    campaigns_intro:
      'Below are our ongoing campaigns. We invite you to share them with your friends, family, and social media circles—together, we can reach more hearts and help more lives. Click on the images below for more information.',
    campaign_items: [
      {
        name: 'Unfunded Cancer Drugs in Canada',
        description:
          'Make a Difference. Help Us To Pay For Unfunded Cancer Drugs in Canada.',
        subtitle: 'Save Baby Ariel',
        href: '/ongoing_campaigns/make_a_difference.pdf',
        imageUrl: '/ongoing_campaigns/baby_ariel.jpg',
        external: true,
      },
      {
        name: 'Fighting Cancer in Ghana',
        description:
          'Transforming Lives. Fighting Cancer with Compassion and Empathy in Ghana.',
        subtitle: "Support Josh's Fight",
        href: '/ongoing_campaigns/transforming_lives.pdf',
        imageUrl: '/ongoing_campaigns/josh.jpg',
        external: true,
      },
    ],
  },
  cta: {
    title: 'Read More About Our Campaigns',
    button1_text: 'Transforming Lives',
    button1_href: '/ongoing_campaigns/transforming_lives.pdf',
    button2_text: 'Unfunded Cancer Drugs',
    button2_href: '/ongoing_campaigns/make_a_difference.pdf',
  },
}

interface CampaignCtaProps {
  title: string
  button1_text: string
  button1_href: string
  button2_text: string
  button2_href: string
}

function CampaignCta({
  title,
  button1_text,
  button1_href,
  button2_text,
  button2_href,
}: CampaignCtaProps) {
  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {title}
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <Button
            href={button1_href}
            target="_blank"
            rel="noopener noreferrer"
            color="blue"
          >
            {button1_text}
          </Button>
          <Button
            href={button2_href}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            color="slate"
          >
            {button2_text}
          </Button>
        </div>
      </div>
    </div>
  )
}

interface Campaign {
  name: string
  subtitle: string
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

function Campaigns({ campaigns, cta }: CampaignsProps) {
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
                    <p className="mt-1 text-base/7 font-semibold text-slate-700">
                      {campaign.subtitle}
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

export default function OngoingCampaignsPage() {
  return (
    <>
      <Header />
      <main>
        <Campaigns {...ongoingCampaignsContent} />
      </main>
      <Footer />
    </>
  )
}