import { Button } from '@/components/ui/Button'

export interface CampaignCtaProps {
  title: string
  button1_text: string
  button1_href: string
  button2_text: string
  button2_href: string
}

export function CampaignCta({
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