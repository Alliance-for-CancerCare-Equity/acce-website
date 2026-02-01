import Image, { type StaticImageData } from 'next/image'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

interface ProjectPageProps {
  header: string
  title: string
  col1_p1: string
  col1_p2?: string
  col2_p1?: string
  col2_p2?: string
  buttonText?: string
  buttonHref?: string
  imageUrl: StaticImageData | string
  imageAlt: string
}

export function ProjectPage({
  header,
  title,
  col1_p1,
  col1_p2,
  col2_p1,
  col2_p2,
  buttonText,
  buttonHref,
  imageUrl,
  imageAlt,
}: ProjectPageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold-300/30 rounded-full blur-3xl" />

        <Container className="relative py-20 sm:py-28">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-teal-100 px-4 py-1.5 text-sm font-medium text-teal-700 ring-1 ring-inset ring-teal-200 mb-6">
              {header}
            </div>
            <h1 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl lg:text-6xl">
              {title}
            </h1>
          </div>
        </Container>
      </section>

      {/* Content Section */}
      <section className="bg-lavender-50 py-16 sm:py-24">
        <Container>
          <div className="grid max-w-xl grid-cols-1 gap-8 text-lg/8 text-charcoal-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>{col1_p1}</p>
              {col1_p2 && <p className="mt-8">{col1_p2}</p>}
            </div>
            {(col2_p1 || col2_p2) && (
              <div>
                {col2_p1 && <p>{col2_p1}</p>}
                {col2_p2 && <p className="mt-8">{col2_p2}</p>}
              </div>
            )}
          </div>
          {buttonText && buttonHref && (
            <div className="mt-10 flex">
              <Button href={buttonHref} color="cta" size="lg">
                {buttonText}
              </Button>
            </div>
          )}
        </Container>
      </section>

      {/* Image Section */}
      <section className="relative overflow-hidden bg-white py-12 lg:py-20">
        <Container>
          <div className="relative">
            <Image
              width={2432}
              height={1442}
              alt={imageAlt}
              src={imageUrl}
              className="rounded-3xl shadow-strong ring-2 ring-lavender-200"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-3xl" />
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
              Support this project
            </h2>
            <p className="mt-4 text-lg/8 text-teal-100">
              Your contribution directly supports cancer patients in need.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/giving-options" color="cta" size="lg">
                Donate now
              </Button>
              <Button href="/contact-us" variant="outline" color="white" size="lg">
                Learn more
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
