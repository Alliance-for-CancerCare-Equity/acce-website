import Image from 'next/image'
import Link from 'next/link'
import { CampaignCta } from '@/components/CampaignCta'

const campaigns = [
  {
    name: 'Save Baby Ariel’s Life',
    description: 'She’s Only 14 Months and Fighting Liver Cancer',
    href: 'https://www.allianceforcancercareequity.ca/_files/ugd/8b0cc2_0e89f3559590412c92d8233d0812a60c.pdf',
    imageUrl:
      'https://static.wixstatic.com/media/8b0cc2_2a096dfb0fa1402989907e2e812c82a3~mv2.jpg/v1/fill/w_388,h_550,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8b0cc2_2a096dfb0fa1402989907e2e812c82a3~mv2.jpg',
    external: true,
  },
  {
    name: 'Hope for Gilda Tuffour',
    description: 'A 10-Year-Old Girl Fighting Brain Cancer',
    href: '/campaigns/hope-for-gilda',
    imageUrl:
      'https://static.wixstatic.com/media/8b0cc2_59d27f848958460ca8588348c68fbfe4~mv2.jpg/v1/fill/w_400,h_534,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/8b0cc2_59d27f848958460ca8588348c68fbfe4~mv2.jpg',
    external: false,
  },
]

export function Campaigns() {
  return (
    <>
      <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-base/7 text-slate-700">
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            Ongoing ACCE Campaigns
          </h1>
          <p className="mt-.6 text-lg/8 text-slate-600">
            At the Alliance for CancerCare Equity (ACCE), we are committed to
            ensuring that no one is denied cancer treatment because of financial
            hardship. Every month, we support patients in Ghana and
            Canada—covering treatment costs, medications, and transportation. But
            the need is great, and the costs keep rising.
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            That’s why, from time to time, we launch special fundraising
            campaigns. These campaigns help us respond to urgent cases, expand our
            support to more patients, and sustain ongoing treatments.
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            Each campaign is a call to action—a chance for our community to step
            in and give hope where it&apos;s needed most. Every dollar you give
            directly impacts a life.
          </p>
          <p className="mt-6 text-lg/8 text-slate-600">
            Together, we can close the gap in cancer care and bring healing within
            reach.
          </p>
          <div className="mt-16 max-w-2xl text-slate-600">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-slate-900">
              Our Campaigns
            </h2>
            <p className="mt-6">
              Below are our ongoing campaigns. We invite you to share them with
              your friends, family, and social media circles—together, we can
              reach more hearts and help more lives: Click on the images below for
              more information.
            </p>
            <div className="mt-10 space-y-16">
              {campaigns.map((campaign) => (
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
      <CampaignCta />
    </>
  )
}