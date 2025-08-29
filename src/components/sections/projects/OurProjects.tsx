import Image from 'next/image'
import { prefixPath } from '@/utils/path'

interface Image {
  alt: string
  src: string
}

interface OurProjectsProps {
  header: string
  title: string
  subtitle: string
  section_1_p_1: string
  section_1_p_2: string
  commitments: string[]
  footnote_1: string
  footnote_2: string
  images: Image[]
}

export function OurProjects({
  header,
  title,
  subtitle,
  section_1_p_1,
  section_1_p_2,
  commitments,
  footnote_1,
  footnote_2,
  images,
}: OurProjectsProps) {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <div className="max-w-4xl">
          <p className="text-base/7 font-semibold text-blue-600">{header}</p>
          <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-6 text-xl/8 text-balance text-slate-700">
            {subtitle}
          </p>
        </div>
        <section className="mt-20 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-16">
          <div className="lg:pr-8">
            <p className="text-base/7 text-slate-600">{section_1_p_1}</p>
            <p className="mt-8 text-base/7 text-slate-600">{section_1_p_2}</p>
            <ul className="mt-8 list-disc space-y-4 pl-6 text-base/7 text-slate-600">
              {commitments.map((commitment) => (
                <li key={commitment}>{commitment}</li>
              ))}
            </ul>
            <p className="mt-8 text-sm/6 text-slate-500">{footnote_1}</p>
            <p className="mt-2 text-sm/6 text-slate-500">{footnote_2}</p>
          </div>
          <div className="pt-16 lg:row-span-2">
            <div className="-mx-8 grid grid-cols-2 gap-4 sm:-mx-16 sm:grid-cols-4 lg:mx-0 lg:grid-cols-2 lg:gap-4 xl:gap-8">
              {images.map((image, index) => (
                <div
                  key={image.alt}
                  className={`relative aspect-square overflow-hidden rounded-xl shadow-xl outline-1 -outline-offset-1 outline-black/10 ${
                    index % 2 !== 0 ? 'lg:-mt-40' : ''
                  }`}
                >
                  <Image
                    fill
                    alt={image.alt}
                    src={prefixPath(image.src)}
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}