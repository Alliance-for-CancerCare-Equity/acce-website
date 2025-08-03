import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <hgroup>
            <h2 className="text-base/7 font-semibold text-blue-600">
              Make a Difference
            </h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl">
              Support Our Mission to Achieve Cancer Care Equity
            </p>
          </hgroup>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-slate-600">
            Your contribution can help us provide vital financial support,
            improve healthcare access, and fund life-saving treatments for
            patients in need.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="/ways-to-give" color="blue">
              Donate Now
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}