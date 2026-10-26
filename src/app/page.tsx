import { type Metadata } from 'next'

import { metadata as givingOptionsMetadata } from '@/app/giving-options/page'

export { default } from '@/app/giving-options/page'

export const metadata: Metadata = {
  ...givingOptionsMetadata,
  title: 'Giving Options | Alliance for CancerCare Equity',
  alternates: { canonical: '/' },
}
