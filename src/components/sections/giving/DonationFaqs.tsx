interface Faq {
  question: string
  answer: string
}

export interface DonationFaqsProps {
  title: string
  subtitle_part1: string
  subtitle_link_text: string
  subtitle_link_href: string
  subtitle_part2: string
  questions: Faq[]
}

export function DonationFaqs({
  title,
  subtitle_part1,
  subtitle_link_text,
  subtitle_link_href,
  subtitle_part2,
  questions,
}: DonationFaqsProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-base/7 text-slate-600">
            {subtitle_part1}{' '}
            <a
              href={subtitle_link_href}
              className="font-semibold text-blue-600 hover:text-blue-500"
            >
              {subtitle_link_text}
            </a>{' '}
            {subtitle_part2}
          </p>
        </div>
        <div className="mt-20">
          <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-x-6 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-10">
            {questions.map((faq) => (
              <div key={faq.question}>
                <dt className="text-base/7 font-semibold text-slate-900">
                  {faq.question}
                </dt>
                <dd className="mt-2 text-base/7 text-slate-600">
                  {faq.answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}