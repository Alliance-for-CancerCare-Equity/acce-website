import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import { prefixPath } from '@/utils/path'

export interface WhatWeDoProps {
  title: string
  subtitle: string
  image_alt: string
  image_src: string
  intro_p: string
  commitments: string[]
  values_strong: string
  values_list: string
}

export function WhatWeDo({
  title,
  subtitle,
  image_alt,
  image_src,
  intro_p,
  commitments,
  values_strong,
  values_list,
}: WhatWeDoProps) {
  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 lg:pl-8 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 overflow-hidden rounded-3xl lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              fill
              alt={image_alt}
              src={prefixPath(image_src)}
              className="absolute inset-0 size-full bg-slate-50 object-cover"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base/7 font-semibold text-blue-600">{title}</p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
              {subtitle}
            </h1>
            <div className="mt-10 max-w-xl text-base/7 text-slate-600 lg:max-w-none">
              <p>{intro_p}</p>
              <ul role="list" className="mt-8 space-y-8 text-slate-600">
                {commitments.map((commitment, index) => (
                  <li key={index} className="flex gap-x-3">
                    <CheckCircleIcon
                      aria-hidden="true"
                      className="mt-1 size-5 flex-none text-blue-600"
                    />
                    <span>{commitment}</span>
                  </li>
                ))}

                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-blue-600"
                  />
                  <span>
                    <strong className="font-semibold text-slate-900">
                      {values_strong}
                    </strong>{' '}
                    {values_list}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
