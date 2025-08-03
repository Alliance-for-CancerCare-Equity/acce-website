import { Button } from '@/components/Button'

export function CampaignCta() {
  return (
    <div className="bg-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between lg:px-8">
        <h2 className="max-w-2xl text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          Read More About Our Campaigns
        </h2>
        <div className="mt-10 flex items-center gap-x-6 lg:mt-0 lg:shrink-0">
          <Button
            href="https://www.allianceforcancercareequity.ca/_files/ugd/8b0cc2_0e89f3559590412c92d8233d0812a60c.pdf"
            target="_blank"
            rel="noopener noreferrer"
            color="blue"
          >
            Transforming Lives
          </Button>
          <Button
            href="https://www.allianceforcancercareequity.ca/_files/ugd/8b0cc2_bb8b1704b9094e019d1314efb6dcb119.pdf"
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            color="slate"
          >
            Unfunded Cancer Drugs
          </Button>
        </div>
      </div>
    </div>
  )
}
