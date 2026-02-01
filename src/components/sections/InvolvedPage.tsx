import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

interface InvolvedPageProps {
  title: string
  subtitle: string
  p1: string
  p2: string
  p3: string
  h2: string
  p4?: string
  p5?: string
  list_items?: string[]
}

export function InvolvedPage({
  title,
  subtitle,
  p1,
  p2,
  p3,
  h2,
  p4,
  p5,
  list_items,
}: InvolvedPageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-teal-300/30 rounded-full blur-3xl" />

        <Container className="relative py-20 sm:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700 ring-1 ring-inset ring-teal-200 mb-6">
              Get Involved
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
            <p className="mt-6 text-xl/8 font-medium text-charcoal-700">
              {subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="bg-white py-16 sm:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="space-y-8 text-lg/8 text-charcoal-600">
              <p>{p1}</p>
              <p>{p2}</p>
              <p>{p3}</p>
            </div>

            <div className="mt-16 p-8 bg-lavender-50 rounded-2xl border-l-4 border-teal-500">
              <h2 className="font-display text-2xl font-bold tracking-tight text-charcoal-900 sm:text-3xl">
                {h2}
              </h2>
              {p4 && <p className="mt-6 text-lg/8 text-charcoal-600">{p4}</p>}
              {p5 && <p className="mt-4 text-lg/8 text-charcoal-600">{p5}</p>}
              {list_items && (
                <ul className="mt-8 space-y-4">
                  {list_items.map((item, idx) => (
                    <li key={idx} className="flex gap-4">
                      <div className="flex-none">
                        <div className="flex size-6 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                          <svg className="size-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-base/7 text-charcoal-600">{item}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-teal-600 via-teal-700 to-charcoal-800 py-20 sm:py-24">
        <div className="absolute inset-0 bg-dot-pattern-light opacity-10" />
        <div className="absolute top-10 right-10 w-64 h-64 bg-gold-400/20 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-lavender-400/20 rounded-full blur-3xl" />

        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to make a difference?
            </h2>
            <p className="mt-4 text-lg/8 text-teal-100">
              Join our community of supporters working toward cancer care equity.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/giving-options" color="cta" size="lg">
                Donate now
              </Button>
              <Button href="/contact-us" variant="outline" color="white" size="lg">
                Contact us
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
