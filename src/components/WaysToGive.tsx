import { DonationFaqs } from '@/components/DonationFaqs'
import { MonthlyGiving } from '@/components/MonthlyGiving'
import { OneTimeDonations } from '@/components/OneTimeDonations'

export function WaysToGive() {
  return (
    <>
      <OneTimeDonations />
      <MonthlyGiving />
      <DonationFaqs />
    </>
  )
}
