import { AboutIntro, type AboutIntroProps } from '@/components/sections/about/AboutIntro'
import { WhatWeDo, type WhatWeDoProps } from '@/components/sections/about/WhatWeDo'

interface AboutProps {
  intro: AboutIntroProps
  what_we_do: WhatWeDoProps
}

export function About({ intro, what_we_do }: AboutProps) {
  return (
    <>
      <AboutIntro {...intro} />
      <WhatWeDo {...what_we_do} />
    </>
  )
}
