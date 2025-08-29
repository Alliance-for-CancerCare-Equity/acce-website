import { type Metadata } from 'next'
import Image from 'next/image'
import { CheckCircleIcon } from '@heroicons/react/20/solid'

import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Who We Are',
}

const whoWeAreContent = {
  intro: {
    vision_title: 'Our Vision',
    vision_statement:
      'A world where every cancer patient receives equitable, high-quality care, regardless of financial status.',
    mission_statement:
      'To promote equity in cancer care from prevention through survivorship, providing comprehensive support to patients and families facing the challenges of this life-threatening illness.',
    who_we_are_title: 'Who We Are',
    who_we_are_p1:
      'The Alliance for CancerCare Equity (ACCE) is a registered charity in Canada dedicated to advancing equity in cancer care. We passionately believe that no individual should lose their life to cancer simply because they lack the financial means to afford treatment. Furthermore, we are committed to ensuring that a patient’s financial circumstances never dictate their chances of surviving a cancer diagnosis.',
    who_we_are_p2:
      "At Alliance for CancerCare Equity, we've embarked on an ambitious mission to cover the costs of cancer treatment and related expenses for patients who lack the financial means to pay for their care. By doing so, we aim to alleviate the financial burden on families and empower patients to focus on their recovery journey without financial worry.",
    who_we_are_p3:
      "Join us in our quest to redefine cancer care. Together, we can ensure that every individual, regardless of their financial situation, receives the treatment they need to fight cancer and reclaim their future. Together, let's make life-changing compassionate care accessible to all who need it most.",
    values_title: 'Our Values',
    values_list: 'Equity, Compassion, Empathy, Empowerment, Transparency, Community',
  },
  what_we_do: {
    title: 'How We Help',
    subtitle: 'Our Commitment to Patients',
    image_alt: 'A healthcare professional providing compassionate care to a patient.',
    image_src: '/images/about_us.jpg',
    intro_p:
      'We are dedicated to breaking down the financial barriers that prevent individuals from receiving the cancer care they deserve. Our efforts are focused on the following areas',
    commitments: [
      'Covering the full spectrum of cancer treatments for patients in Ghana.',
      'Providing financial support for uninsured and underinsured patients in Canada.',
      'Assisting with the costs of essential, unfunded medications.',
      'Providing medical equipment for diagnosis and treatment in non-profit centers.',
      'Offering access to supportive networks and counseling services.',
      'Conducting vital research into cancer and other diseases in Canada and Ghana.',
    ],
    values_strong: 'Our Values:',
    values_list: 'Equity, Compassion, Empathy, Empowerment, Transparency, Community.',
  },
}

interface AboutIntroProps {
  vision_title: string
  vision_statement: string
  mission_statement: string
  who_we_are_title: string
  who_we_are_p1: string
  who_we_are_p2: string
  who_we_are_p3: string
  values_title: string
  values_list: string
}

function AboutIntro({
  vision_title,
  vision_statement,
  mission_statement,
  who_we_are_title,
  who_we_are_p1,
  who_we_are_p2,
  who_we_are_p3,
  values_title,
  values_list,
}: AboutIntroProps) {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-slate-700">
        <p className="text-base/7 font-semibold text-blue-600">
          {vision_title}
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
          {vision_statement}
        </h1>
        <p className="mt-6 text-xl/8 text-balance">{mission_statement}</p>
        <div className="mt-10 max-w-2xl text-slate-600">
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-slate-900">
            {who_we_are_title}
          </h2>
          <p className="mt-6">{who_we_are_p1}</p>
          <p className="mt-8">{who_we_are_p2}</p>
          <p className="mt-8">{who_we_are_p3}</p>
          <h2 className="mt-16 text-3xl font-semibold tracking-tight text-pretty text-slate-900">
            {values_title}
          </h2>
          <p className="mt-6 font-semibold">{values_list}</p>
        </div>
      </div>
    </div>
  )
}

interface WhatWeDoProps {
  title: string
  subtitle: string
  image_alt: string
  image_src: string
  intro_p: string
  commitments: string[]
  values_strong: string
  values_list: string
}

function WhatWeDo({
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
              src={image_src}
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

export default function WhoWeArePage() {
  return (
    <>
      <Header />
      <main>
        <AboutIntro {...whoWeAreContent.intro} />
        <WhatWeDo {...whoWeAreContent.what_we_do} />
      </main>
      <Footer />
    </>
  )
}
