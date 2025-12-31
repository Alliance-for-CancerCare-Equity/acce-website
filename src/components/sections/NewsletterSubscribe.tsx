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
    <section id="subscribe" className="bg-slate-50 pt-16 pb-28 sm:pt-24 sm:pb-48">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg/8 text-slate-600">{subtitle}</p>
          {status !== 'idle' && (
            <div
              className={`mx-auto mt-6 w-full max-w-xl rounded-md px-4 py-3 text-left ring-1 ${
                status === 'success'
                  ? 'bg-emerald-50 ring-emerald-200'
                  : 'bg-amber-50 ring-amber-200'
              }`}
            >
              <p
                className={`text-sm/6 font-medium ${
                  status === 'success' ? 'text-emerald-800' : 'text-amber-800'
                }`}
              >
                {message}
              </p>
            </div>
          )}
          {!mc.ok && (
            <p className="mx-auto mt-4 max-w-xl text-sm/6 text-slate-500">
              Note: Mailchimp is not configured. Set NEXT_PUBLIC_MAILCHIMP_U, NEXT_PUBLIC_MAILCHIMP_ID, and NEXT_PUBLIC_MAILCHIMP_DC at build time to enable subscriptions.
            </p>
          )}
        </div>
        <div className="mx-auto mt-10 max-w-xl">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div>
              <label htmlFor="first-name" className="block text-sm/6 font-semibold text-slate-900">
                First name (optional)
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
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm/6 font-semibold text-slate-900">
                Last name (optional)
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
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm/6 font-semibold text-slate-900">
                Email address
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
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
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
                  className="mt-1 size-4 rounded border-slate-300 text-blue-600 disabled:cursor-not-allowed"
                />
                <label htmlFor="consent" className="text-sm/6 text-slate-600">
                  I agree to receive email updates from ACCE. I can unsubscribe at any time.
                </label>
              </div>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" color="blue" className="w-full" disabled={disabled || !mc.ok}>
                {status === 'submitting' ? 'Subscribing…' : 'Subscribe'}
              </Button>
            </div>
          </form>
          <p className="mt-4 text-center text-sm/6 text-slate-500">
            We respect your privacy. We never share your email.
          </p>
        </div>
      </Container>
    </section>
  )
}
