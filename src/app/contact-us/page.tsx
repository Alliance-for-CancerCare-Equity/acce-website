import { type Metadata } from 'next'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

import { Button } from '@/components/ui/Button'
import { Footer } from '@/components/layout/Footer'
import { Header } from '@/components/layout/Header'

export const metadata: Metadata = {
  title: 'Contact Us',
}

const contactUsContent = {
  title: 'Get in touch',
  subtitle:
    "We'd love to hear from you. Whether you have a question, a suggestion, or you'd like to get involved, please don't hesitate to reach out.",
  phone: '+1-226-698-2573',
  emails: [
    'support@allianceforcancercareequity.ca',
    'volunteer@allianceforcancercareequity.ca',
    'info@allianceforcancercareequity.ca',
  ],
  submit_button_text: 'Send message',
}

interface ContactProps {
  title: string
  subtitle: string
  phone: string
  emails: string[]
  submit_button_text: string
}

function Contact({
  title,
  subtitle,
  phone,
  emails,
  submit_button_text,
}: ContactProps) {
  return (
    <div className="relative isolate">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        {/* Contact Info Side */}
        <div className="relative px-6 pt-20 pb-20 sm:pt-24 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            {/* Background decoration */}
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-gradient-hero lg:w-1/2">
              <div className="absolute inset-0 bg-dot-pattern opacity-30" />
              <div className="absolute top-20 left-10 w-64 h-64 bg-lavender-300/30 rounded-full blur-3xl" />
              <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-300/30 rounded-full blur-3xl" />
            </div>

            <h2 className="font-display text-4xl font-bold tracking-tight text-charcoal-900 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-6 text-lg/8 text-charcoal-600">{subtitle}</p>

            <dl className="mt-10 space-y-6 text-base/7">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <div className="flex size-10 items-center justify-center rounded-xl bg-teal-100 text-teal-600">
                    <PhoneIcon aria-hidden="true" className="h-5 w-5" />
                  </div>
                </dt>
                <dd className="flex items-center">
                  <a href={`tel:${phone}`} className="text-charcoal-700 hover:text-teal-600 transition-colors font-medium">
                    {phone}
                  </a>
                </dd>
              </div>
              {emails.map((email) => (
                <div key={email} className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <div className="flex size-10 items-center justify-center rounded-xl bg-lavender-100 text-lavender-600">
                      <EnvelopeIcon aria-hidden="true" className="h-5 w-5" />
                    </div>
                  </dt>
                  <dd className="flex items-center">
                    <a
                      href={`mailto:${email}`}
                      className="text-charcoal-700 hover:text-teal-600 transition-colors font-medium"
                    >
                      {email}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        {/* Form Side */}
        <div className="bg-white px-6 pt-12 pb-24 sm:pb-28 lg:px-8 lg:py-32">
          <form
            action="https://formsubmit.co/info@allianceforcancercareequity.ca"
            method="POST"
            className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg"
          >
            {/* formsubmit.co helpers */}
            <input type="hidden" name="_subject" value="New Contact Message — ACCE" />
            <input
              type="hidden"
              name="_next"
              value="https://allianceforcancercareequity.ca/contact-us?submitted=1"
            />
            <input type="hidden" name="_captcha" value="false" />
            <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" />

            <div className="bg-lavender-50/50 rounded-2xl p-8 shadow-soft border border-lavender-100">
              <h3 className="font-display text-2xl font-bold text-charcoal-900 mb-6">
                Send us a message
              </h3>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="first-name"
                    className="block text-sm/6 font-semibold text-charcoal-900"
                  >
                    First name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="first-name"
                      name="first-name"
                      type="text"
                      autoComplete="given-name"
                      className="block w-full rounded-xl border-2 border-charcoal-200 bg-white px-4 py-3 text-base text-charcoal-900 placeholder:text-charcoal-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="last-name"
                    className="block text-sm/6 font-semibold text-charcoal-900"
                  >
                    Last name
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="last-name"
                      name="last-name"
                      type="text"
                      autoComplete="family-name"
                      className="block w-full rounded-xl border-2 border-charcoal-200 bg-white px-4 py-3 text-base text-charcoal-900 placeholder:text-charcoal-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-semibold text-charcoal-900"
                  >
                    Email <span className="text-red-500">*</span>
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-xl border-2 border-charcoal-200 bg-white px-4 py-3 text-base text-charcoal-900 placeholder:text-charcoal-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="phone-number"
                    className="block text-sm/6 font-semibold text-charcoal-900"
                  >
                    Phone number
                  </label>
                  <div className="mt-2.5">
                    <input
                      id="phone-number"
                      name="phone-number"
                      type="tel"
                      autoComplete="tel"
                      className="block w-full rounded-xl border-2 border-charcoal-200 bg-white px-4 py-3 text-base text-charcoal-900 placeholder:text-charcoal-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="block text-sm/6 font-semibold text-charcoal-900"
                  >
                    Message
                  </label>
                  <div className="mt-2.5">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="block w-full rounded-xl border-2 border-charcoal-200 bg-white px-4 py-3 text-base text-charcoal-900 placeholder:text-charcoal-400 focus:border-teal-500 focus:outline-none focus:ring-2 focus:ring-teal-500/20 transition-colors resize-none"
                      defaultValue={''}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <Button type="submit" color="teal" className="w-full" size="lg">
                  {submit_button_text}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default function ContactUsPage() {
  return (
    <>
      <Header />
      <main>
        <Contact {...contactUsContent} />
      </main>
      <Footer />
    </>
  )
}
