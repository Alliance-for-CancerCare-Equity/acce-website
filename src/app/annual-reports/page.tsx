import { type Metadata } from 'next'
import { ArrowDownCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

import { Container } from '@/components/ui/Container'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Financial Statements and Annual Report',
}

const annualReportsContent = {
  title: 'Financial Statements and Annual Report',
  financial_statements: {
    title: 'Financial Statements',
    intro: `Your Impact in Action Every dollar you give helps deliver hope and healing to cancer patients who cannot afford care. Our annual financial statements show exactly how your generosity is being used—to fund treatments, provide medications, and support patients through their journey. Thank you for making equity in cancer care possible.`,
    outro:
      'We invite you to review our report and consider renewing your support. Together, we are saving lives.',
    reports: [
      {
        text: '2022 Annual Financial Statement',
        href: '/annual_reports/2022_financial_statement.pdf',
      },
      {
        text: '2023 Annual Financial Statement',
        href: '/annual_reports/2023_financial_statement.pdf',
      },
      {
        text: '2024 Annual Financial Statement',
        href: '/annual_reports/2024_financial_statement.pdf',
      },
    ],
  },
  annual_reports: {
    title: 'Annual Reports',
    intro: `We’re proud to share our annual report—a reflection of the impact your generosity has made possible. Inside, you’ll see how your support is transforming lives by providing critical cancer care to patients in need, both in Ghana and Canada. Together, we are advancing equity in cancer care. Thank you for walking this journey with us.`,
    reports: [
      {
        text: '2022 Annual Report',
        href: '/annual_reports/2022_annual_report.pdf',
      },
      {
        text: '2023 Annual Report',
        href: '/annual_reports/2023_annual_report.pdf',
      },
      {
        text: '2024 Annual Report',
        href: '/annual_reports/2024_annual_report.pdf',
      },
    ],
  },
}

interface Report {
  text: string
  href: string
}

interface ReportSectionProps {
  title: string
  intro: string
  outro?: string
  reports: Report[]
}

interface AnnualReportsProps {
  title: string
  financial_statements: ReportSectionProps
  annual_reports: ReportSectionProps
}

function ReportList({ title, intro, outro, reports }: ReportSectionProps) {
  return (
    <section>
      <h3 className="text-2xl font-semibold leading-8 tracking-tight text-charcoal-900">
        {title}
      </h3>
      <p className="mt-6 text-base/7 text-charcoal-600">{intro}</p>
      <ul role="list" className="mt-8 space-y-6 text-base/7 text-charcoal-600">
        {reports.map((report) => (
          <li key={report.text} className="flex gap-x-3">
            <ArrowDownCircleIcon
              className="h-6 w-5 flex-none text-teal-600"
              aria-hidden="true"
            />
            <span>
              <Link
                href={report.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-charcoal-900 hover:text-teal-600"
              >
                {report.text}
              </Link>
            </span>
          </li>
        ))}
      </ul>
      {outro && <p className="mt-8 text-base/7 text-charcoal-600">{outro}</p>}
    </section>
  )
}

function AnnualReports({
  title,
  financial_statements,
  annual_reports,
}: AnnualReportsProps) {
  return (
    <Container className="py-16 sm:py-20">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-charcoal-900 sm:text-5xl">
          {title}
        </h2>
      </div>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <ReportList {...financial_statements} />
        <ReportList {...annual_reports} />
      </div>
    </Container>
  )
}

export default function AnnualReportsPage() {
  return (
    <>
      <Header />
      <main>
        <AnnualReports {...annualReportsContent} />
      </main>
      <Footer />
    </>
  )
}
