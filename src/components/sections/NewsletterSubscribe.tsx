"use client"

import { useCallback, useMemo, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { GradientOrb } from '@/components/decorative'

type McResult = { result: 'success' | 'error'; msg: string }

function jsonp<T = unknown>(url: string, timeoutMs = 12000): Promise<T> {
  return new Promise((resolve, reject) => {
    const cbName = `__mc_cb_${Math.random().toString(36).slice(2)}`
    const hasQuery = url.includes('?')
    const src = `${url}${hasQuery ? '&' : '?'}c=${cbName}`
    const script = document.createElement('script')
    let done = false
    const anyWindow = window as any
    anyWindow[cbName] = (data: T) => {
      if (done) return
      done = true
      cleanup()
      resolve(data)
    }
    const timer = window.setTimeout(() => {
      if (done) return
      done = true
      cleanup()
      reject(new Error('Request timed out'))
    }, timeoutMs)
    function cleanup() {
      window.clearTimeout(timer)
      try {
        delete anyWindow[cbName]
      } catch {
        // no-op
      }
      script.remove()
    }
    script.src = src
    script.async = true
    script.onerror = () => {
      if (done) return
      done = true
      cleanup()
      reject(new Error('Network error'))
    }
    document.body.appendChild(script)
  })
}

export function NewsletterSubscribe({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  const [first, setFirst] = useState('')
  const [last, setLast] = useState('')
  const [email, setEmail] = useState('')
  const [consent, setConsent] = useState(false)
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState<string>('')

  const mc = useMemo(() => {
    const u = process.env.NEXT_PUBLIC_MAILCHIMP_U || ''
    const id = process.env.NEXT_PUBLIC_MAILCHIMP_ID || ''
    const dc = process.env.NEXT_PUBLIC_MAILCHIMP_DC || ''
    const ok = Boolean(u && id && dc)
    return { u, id, dc, ok }
  }, [])

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (!mc.ok) {
        setStatus('error')
        setMessage('Subscriptions not configured. Please try again later.')
        return
      }
      if (!email) {
        setStatus('error')
        setMessage('Please enter a valid email address.')
        return
      }
      if (!consent) {
        setStatus('error')
        setMessage('Please consent to receive email updates.')
        return
      }
      setStatus('submitting')
      setMessage('')
      try {
        const params = new URLSearchParams({
          u: mc.u,
          id: mc.id,
          EMAIL: email,
        })
        if (first) params.append('FNAME', first)
        if (last) params.append('LNAME', last)
        const url = `https://${mc.dc}.list-manage.com/subscribe/post-json?${params.toString()}`
        const res = (await jsonp<McResult>(url)) as McResult
        if (res.result === 'success') {
          setStatus('success')
          const text = (res.msg || '').replace(/<[^>]*>/g, '')
          setMessage(text || 'Thanks for subscribing!')
          setFirst('')
          setLast('')
          setEmail('')
          setConsent(false)
        } else {
          const text = (res.msg || '').replace(/<[^>]*>/g, '')
          if (/already\s+subscribed/i.test(text)) {
            setStatus('success')
            setMessage("You're already subscribed. You're all set!")
            setFirst('')
            setLast('')
            setEmail('')
            setConsent(false)
          } else if (/too\s+many\s+recent\s+signup\s+attempts/i.test(text)) {
            setStatus('error')
            setMessage('Too many recent signup attempts. Please try again later.')
          } else {
            setStatus('error')
            setMessage(text || 'Subscription failed. Please try again.')
          }
        }
      } catch (err: any) {
        setStatus('error')
        setMessage(err?.message || 'Subscription failed. Please try again.')
      }
    },
    [mc, email, first, last, consent],
  )

  const disabled = status === 'submitting'

  return (
    <section id="subscribe" className="relative bg-gold-50 py-24 sm:py-32 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GradientOrb variant="gold-lavender" size="xl" className="-top-48 -right-48 opacity-30" />
        <GradientOrb variant="teal-gold" size="lg" className="bottom-0 -left-32 opacity-20" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-gold-200 px-4 py-1.5 text-sm font-medium text-gold-800 mb-6">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Newsletter
          </div>

          <h2 className="text-4xl font-bold tracking-tight text-charcoal-800 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg text-charcoal-600">{subtitle}</p>

          {status !== 'idle' && (
            <div
              className={`mx-auto mt-6 w-full max-w-xl rounded-xl px-4 py-3 text-left ring-1 ${
                status === 'success'
                  ? 'bg-teal-50 ring-teal-200'
                  : 'bg-accent-50 ring-accent-200'
              }`}
            >
              <p
                className={`text-sm font-medium ${
                  status === 'success' ? 'text-teal-700' : 'text-accent-700'
                }`}
              >
                {message}
              </p>
            </div>
          )}
          {!mc.ok && (
            <p className="mx-auto mt-4 max-w-xl text-sm text-charcoal-500">
              Note: Mailchimp is not configured. Set NEXT_PUBLIC_MAILCHIMP_U, NEXT_PUBLIC_MAILCHIMP_ID, and NEXT_PUBLIC_MAILCHIMP_DC at build time to enable subscriptions.
            </p>
          )}
        </div>

        <div className="mx-auto mt-10 max-w-xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div>
              <label htmlFor="first-name" className="block text-sm font-semibold text-charcoal-700 mb-2">
                First name (optional)
              </label>
              <input
                id="first-name"
                name="first-name"
                type="text"
                autoComplete="given-name"
                value={first}
                onChange={(e) => setFirst(e.target.value)}
                disabled={disabled}
                className="block w-full rounded-xl border-2 border-gold-200 bg-white px-4 py-3 text-base text-charcoal-800 transition-all focus:border-teal-500 focus:ring-2 focus:ring-teal-100 focus:outline-none disabled:cursor-not-allowed disabled:bg-charcoal-50"
              />
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-semibold text-charcoal-700 mb-2">
                Last name (optional)
              </label>
              <input
                id="last-name"
                name="last-name"
                type="text"
                autoComplete="family-name"
                value={last}
                onChange={(e) => setLast(e.target.value)}
                disabled={disabled}
                className="block w-full rounded-xl border-2 border-gold-200 bg-white px-4 py-3 text-base text-charcoal-800 transition-all focus:border-teal-500 focus:ring-2 focus:ring-teal-100 focus:outline-none disabled:cursor-not-allowed disabled:bg-charcoal-50"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-semibold text-charcoal-700 mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={disabled}
                className="block w-full rounded-xl border-2 border-gold-200 bg-white px-4 py-3 text-base text-charcoal-800 transition-all focus:border-teal-500 focus:ring-2 focus:ring-teal-100 focus:outline-none disabled:cursor-not-allowed disabled:bg-charcoal-50"
              />
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  disabled={disabled}
                  className="mt-1 h-5 w-5 rounded border-2 border-gold-300 text-teal-500 transition-colors focus:ring-2 focus:ring-teal-100 focus:ring-offset-0 disabled:cursor-not-allowed"
                />
                <label htmlFor="consent" className="text-sm text-charcoal-600">
                  I agree to receive email updates from ACCE. I can unsubscribe at any time.
                </label>
              </div>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" variant="primary" className="w-full" disabled={disabled || !mc.ok}>
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm text-charcoal-500">
            We respect your privacy. We never share your email.
          </p>
        </div>
      </Container>
    </section>
  )
}
