"use client"

import { useState } from 'react'

import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'

export function NewsletterSubscribe({
  title,
  subtitle,
}: {
  title: string
  subtitle: string
}) {
  const [attempted, setAttempted] = useState(false)

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setAttempted(true)
  }

  return (
    <section id="subscribe" className="bg-slate-50 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
            {title}
          </h2>
          <p className="mt-6 text-lg/8 text-slate-600">{subtitle}</p>
          {attempted && (
            <div className="mx-auto mt-6 w-full max-w-xl rounded-md bg-amber-50 px-4 py-3 text-left ring-1 ring-amber-200">
              <p className="text-sm/6 font-medium text-amber-800">
                We’re experiencing technical issues with newsletter subscriptions. Please try again later.
              </p>
            </div>
          )}
        </div>
        <div className="mx-auto mt-10 max-w-xl">
          <form onSubmit={onSubmit} className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
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
                  disabled
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
                  disabled
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
                  disabled
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 disabled:cursor-not-allowed disabled:bg-slate-100 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <div className="flex items-start gap-3">
                <input id="consent" name="consent" type="checkbox" disabled className="mt-1 size-4 rounded border-slate-300 text-blue-600 disabled:cursor-not-allowed" />
                <label htmlFor="consent" className="text-sm/6 text-slate-600">
                  I agree to receive email updates from ACCE. I can unsubscribe at any time.
                </label>
              </div>
            </div>
            <div className="sm:col-span-2">
              <Button type="submit" color="blue" className="w-full">
                Subscribe
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

