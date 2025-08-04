import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

interface CallToActionProps {
  title: string
  subtitle: string
  content: string
  button: {
    text: string
    href: string
  }
}

export function CallToAction({
  title,
  subtitle,
  content,
  button,
}: CallToActionProps) {
  return (
    <section className="bg-white py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <hgroup>
            <h2 className="text-base/7 font-semibold text-blue-600">{title}</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl">
              {subtitle}
            </p>
          </hgroup>
          <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-slate-600">
            {content}
          </p>
          <div className="mt-8 flex justify-center">
            <Button href={button.href} color="blue">
              {button.text}
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
