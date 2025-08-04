interface Report {
  text: string
  href: string
}

interface ReportSection {
  title: string
  intro: string
  outro?: string
  reports: Report[]
}

interface AnnualReportsProps {
  title: string
  financial_statements: ReportSection
  annual_reports: ReportSection
}

export function AnnualReports({
  title,
  financial_statements,
  annual_reports,
}: AnnualReportsProps) {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base/7 text-slate-700">
        <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
          {title}
        </h1>
        <div className="mt-10 text-slate-600">
          <div className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              {financial_statements.title}
            </h2>
            <p className="mt-4">{financial_statements.intro}</p>
            {financial_statements.outro && (
              <p className="mt-4">{financial_statements.outro}</p>
            )}
            <ul className="mt-4 list-disc space-y-2 pl-6">
              {financial_statements.reports.map((report) => (
                <li key={report.text}>
                  <a
                    href={report.href}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {report.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-10">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">
              {annual_reports.title}
            </h2>
            <p className="mt-4">{annual_reports.intro}</p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              {annual_reports.reports.map((report) => (
                <li key={report.text}>
                  <a
                    href={report.href}
                    className="text-blue-600 hover:text-blue-800"
                  >
                    {report.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}