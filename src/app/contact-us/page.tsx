import { type Metadata } from 'next'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

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
    <div className="relative isolate bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
        <div className="relative px-6 pt-16 pb-20 sm:pt-20 lg:static lg:px-8 lg:py-32">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden bg-slate-100 ring-1 ring-slate-900/10 lg:w-1/2">
              <svg
                aria-hidden="true"
                className="absolute inset-0 size-full mask-[radial-gradient(100%_100%_at_top_right,white,transparent)] stroke-slate-200"
              >
                <defs>
                  <pattern
                    x="100%"
                    y={-1}
                    id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
                    width={200}
                    height={200}
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M130 200V.5M.5 .5H200" fill="none" />
                  </pattern>
                </defs>
                <rect
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                  className="fill-white"
                />
                <svg
                  x="100%"
                  y={-1}
                  className="overflow-visible fill-slate-50"
                >
                  <path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
                </svg>
                <rect
                  fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
                  width="100%"
                  height="100%"
                  strokeWidth={0}
                />
              </svg>
            </div>
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
              {title}
            </h2>
            <p className="mt-6 text-lg/8 text-slate-600">{subtitle}</p>
            <dl className="mt-10 space-y-4 text-base/7 text-slate-600">
              <div className="flex gap-x-4">
                <dt className="flex-none">
                  <span className="sr-only">Telephone</span>
                  <PhoneIcon
                    aria-hidden="true"
                    className="h-7 w-6 text-slate-400"
                  />
                </dt>
                <dd>
                  <a href={`tel:${phone}`} className="hover:text-slate-900">
                    {phone}
                  </a>
                </dd>
              </div>
              {emails.map((email) => (
                <div key={email} className="flex gap-x-4">
                  <dt className="flex-none">
                    <span className="sr-only">Email</span>
                    <EnvelopeIcon
                      aria-hidden="true"
                      className="h-7 w-6 text-slate-400"
                    />
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${email}`}
                      className="hover:text-slate-900"
                    >
                      {email}
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <form
          action="https://formsubmit.co/info@allianceforcancercareequity.ca"
          method="POST"
          className="px-6 pt-12 pb-24 sm:pb-28 lg:px-8 lg:py-32"
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
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  First name
                </label>
                <div className="mt-2.5">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    autoComplete="given-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Last name
                </label>
                <div className="mt-2.5">
                  <input
                    id="last-name"
                    name="last-name"
                    type="text"
                    autoComplete="family-name"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone-number"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="tel"
                    autoComplete="tel"
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm/6 font-semibold text-slate-900"
                >
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
                    defaultValue={''}
                  />
                </div>
              </div>
            </div>
            <div className="mt-8 flex justify-end">
              <button
                type="submit"
                className="rounded-md bg-blue-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                {submit_button_text}
              </button>
            </div>
          </div>
        </form>
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
