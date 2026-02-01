import { type Metadata } from 'next'
import Link from 'next/link'

import { Button } from '@/components/ui/Button'
import { TextField } from '@/components/forms/Fields'
import { Logo } from '@/components/ui/Logo'
import { SlimLayout } from '@/components/layout/SlimLayout'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default function Login() {
  return (
    <SlimLayout>
      <div className="flex">
        <Link href="/" aria-label="Home">
          <Logo className="h-10 w-auto" />
        </Link>
      </div>
      <h2 className="mt-20 text-lg font-semibold text-charcoal-800">
        Sign in to your account
      </h2>
      <p className="mt-2 text-sm text-charcoal-600">
        Don&apos;t have an account?{' '}
        <Link
          href="/register"
          className="font-medium text-teal-600 hover:underline"
        >
          Sign up
        </Link>{' '}
        for a free trial.
      </p>
      <form action="#" className="mt-10 grid grid-cols-1 gap-y-8">
        <TextField
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          required
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
        />
        <div>
          <Button type="submit" variant="primary" className="w-full">
            <span>
              Sign in <span aria-hidden="true">&rarr;</span>
            </span>
          </Button>
        </div>
      </form>
    </SlimLayout>
  )
}
