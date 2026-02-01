"use client"

import { useCallback, useMemo, useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

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

  // Read Mailchimp audience config from public env (safe to expose)
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
        // Use Mailchimp JSONP endpoint to avoid CORS
        const url = `https://${mc.dc}.list-manage.com/subscribe/post-json?${params.toString()}`
        const res = (await jsonp<McResult>(url)) as McResult
        if (res.result === 'success') {
          setStatus('success')
          // Mailchimp returns a human message; prefer it if present
          const text = (res.msg || '').replace(/<[^>]*>/g, '')
          setMessage(text || 'Thanks for subscribing!')
          setFirst('')
          setLast('')
          setEmail('')
          setConsent(false)
        } else {
          // Mailchimp sometimes returns HTML in msg; strip tags for safety
          const text = (res.msg || '').replace(/<[^>]*>/g, '')
          // Treat duplicate subscription as a friendly success
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
    <section id="subscribe" className="relative overflow-hidden bg-gradient-warm py-20 sm:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-lavender-300/30 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold text-gold-600 uppercase tracking-wider">
            Stay Connected
          </span>
          <h2 className="mt-2 font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
            Stories of Hope, Delivered
          </h2>
          <p className="mt-6 text-lg/8 text-charcoal-600">
            Join our community of supporters and receive inspiring patient stories, impact reports, and ways to help.
          </p>
          {status !== 'idle' && (
            <div
              className={`mx-auto mt-6 w-full max-w-xl rounded-xl px-4 py-3 text-left ring-1 ${
                status === 'success'
                  ? 'bg-teal-50 ring-teal-200'
                  : 'bg-gold-50 ring-gold-200'
              }`}
            >
              <p
                className={`text-sm/6 font-medium ${
                  status === 'success' ? 'text-teal-800' : 'text-gold-800'
                }`}
              >
                {message}
              </p>
            </div>
          )}
          {!mc.ok && (
            <p className="mx-auto mt-4 max-w-xl text-sm/6 text-charcoal-500">
              Note: Mailchimp is not configured. Set NEXT_PUBLIC_MAILCHIMP_U, NEXT_PUBLIC_MAILCHIMP_ID, and NEXT_PUBLIC_MAILCHIMP_DC at build time to enable subscriptions.
            </p>
          )}
        </div>
        <div className="mx-auto mt-10 max-w-xl">
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-medium p-8">
            <div className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              <div>
                <label htmlFor="first-name" className="block text-sm/6 font-semibold text-charcoal-900">
                  First name <span className="font-normal text-charcoal-400">(optional)</span>
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                    disabled={disabled}
                    className="block w-full rounded-xl border-2 border-charcoal-200 bg-white px-4 py-3 text-base text-charcoal-900 placeholder:text-charcoal-400 disabled:cursor-not-allowed disabled:bg-charcoal-50 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="last-name" className="block text-sm/6 font-semibold text-charcoal-900">
                  Last name <span className="font-normal text-charcoal-400">(optional)</span>
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    value={last}
                    onChange={(e) => setLast(e.target.value)}
                    disabled={disabled}
                    className="block w-full rounded-xl border-2 border-charcoal-200 bg-white px-4 py-3 text-base text-charcoal-900 placeholder:text-charcoal-400 disabled:cursor-not-allowed disabled:bg-charcoal-50 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm/6 font-semibold text-charcoal-900">
                  Email address <span className="text-red-500">*</span>
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={disabled}
                    className="block w-full rounded-xl border-2 border-charcoal-200 bg-white px-4 py-3 text-base text-charcoal-900 placeholder:text-charcoal-400 disabled:cursor-not-allowed disabled:bg-charcoal-50 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors"
                  />
                </div>
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
                    className="mt-1 size-5 rounded border-2 border-charcoal-300 text-teal-500 focus:ring-teal-500 disabled:cursor-not-allowed"
                  />
                  <label htmlFor="consent" className="text-sm/6 text-charcoal-600">
                    I agree to receive email updates from ACCE. I can unsubscribe at any time.
                  </label>
                </div>
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" color="teal" className="w-full" size="lg" disabled={disabled || !mc.ok}>
                  {status === 'submitting' ? 'Subscribing…' : 'Subscribe to Newsletter'}
                </Button>
              </div>
            </div>
          </form>
          <p className="mt-6 text-center text-sm/6 text-charcoal-500">
            We respect your privacy. We never share your email.
          </p>
        </div>
      </Container>
    </section>
  )
}
