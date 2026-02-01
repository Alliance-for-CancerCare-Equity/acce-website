import Image, { type StaticImageData } from 'next/image'
import { Button } from '@/components/ui/Button'

interface ProjectPageProps {
  header: string
  title: string
  col1_p1: string
  col1_p2?: string
  col2_p1?: string
  col2_p2?: string
  buttonText?: string
  buttonHref?: string
  imageUrl: StaticImageData | string
  imageAlt: string
}

export function ProjectPage({
  header,
  title,
  col1_p1,
  col1_p2,
  col2_p1,
  col2_p2,
  buttonText,
  buttonHref,
  imageUrl,
  imageAlt,
}: ProjectPageProps) {
  return (
    <div className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700 mb-4">
            {header}
          </div>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-charcoal-800 sm:text-5xl">
            {title}
          </h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base/7 text-charcoal-600 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>{col1_p1}</p>
              {col1_p2 && <p className="mt-8">{col1_p2}</p>}
            </div>
            {(col2_p1 || col2_p2) && (
              <div>
                {col2_p1 && <p>{col2_p1}</p>}
                {col2_p2 && <p className="mt-8">{col2_p2}</p>}
              </div>
            )}
          </div>
          {buttonText && buttonHref && (
            <div className="mt-10 flex">
              <Button href={buttonHref} variant="cta">
                {buttonText}
              </Button>
            </div>
          )}
        </div>
      </div>
      <div className="relative overflow-hidden pt-8 lg:pt-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            width={2432}
            height={1442}
            alt={imageAlt}
            src={imageUrl}
            className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-charcoal-900/10"
          />
          <div aria-hidden="true" className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-linear-to-t from-white pt-[7%]" />
          </div>
        </div>
      </div>
    </div>
  )
}
