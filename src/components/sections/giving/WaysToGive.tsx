import {
  DonationFaqs,
  type DonationFaqsProps,
} from '@/components/sections/giving/DonationFaqs'
import {
  MonthlyGiving,
  type MonthlyGivingProps,
} from '@/components/sections/giving/MonthlyGiving'
import {
  OneTimeDonations,
  type OneTimeDonationsProps,
} from '@/components/sections/giving/OneTimeDonations'

interface WaysToGiveProps {
  one_time_donations: OneTimeDonationsProps
  monthly_giving: MonthlyGivingProps
  faqs: DonationFaqsProps
}

export function WaysToGive({
  one_time_donations,
  monthly_giving,
  faqs,
}: WaysToGiveProps) {
  return (
    <>
      <OneTimeDonations {...one_time_donations} />
      <MonthlyGiving {...monthly_giving} />
      <DonationFaqs {...faqs} />
    </>
  )
}