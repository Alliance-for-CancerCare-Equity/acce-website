'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline'

import { Button } from '@/components/ui/Button'
import { FlyoutMenu, type FlyoutMenuItem } from '@/components/layout/FlyoutMenu'
import { Logo } from '@/components/ui/Logo'

const aboutUsItems: FlyoutMenuItem[] = [
  { name: 'Who We Are', href: '/who-we-are' },
  { name: 'Meet the Board', href: '/meet-the-board' },
  { name: 'ACCE Champions', href: '/acce-champions' },
  { name: 'Financial Statements and Annual Report', href: '/annual-reports' },
]

const ourProjectsItems: FlyoutMenuItem[] = [
  { name: 'Projects Overview', href: '/projects-overview' },
  {
    name: 'Fund Cancer Treatment',
    href: '/fund-cancer-treatment-and-related-costs',
  },
  {
    name: 'Support Health Centers',
    href: '/support-community-healthcare-centers',
  },
  {
    name: 'Patient & Family Support',
    href: '/support-patients-and-their-families',
  },
  {
    name: 'Cancer Research',
    href: '/promote-and-advance-cancer-research',
  },
]

const waysToGiveItems: FlyoutMenuItem[] = [
  { name: 'Giving Options', href: '/giving-options' },
  { name: 'Ongoing Campaigns', href: '/ongoing-campaigns' },
]

const getInvolvedItems: FlyoutMenuItem[] = [
  { name: 'Opportunities', href: '/opportunities' },
  { name: 'Become a Fundraiser', href: '/fundraise' },
  { name: 'Become a Volunteer', href: '/volunteer' },
  { name: 'Become a Partner', href: '/partner-with-us' },
]

const storiesAndNewsItems: FlyoutMenuItem[] = [
  { name: 'Blog', href: '/blogs' },
  { name: 'Patients Stories', href: '/patients-stories' },
  { name: 'Newsletters', href: '/newsletters' },
  { name: 'Events', href: '/events' },
]

const contactUsItems: FlyoutMenuItem[] = [
  { name: 'Contact Us', href: '/contact-us' },
  { name: 'Funding Application', href: '/funding-application' },
  { name: 'Treatment Support', href: '/support-treatment' },
  { name: 'Equipment Support', href: '/equipment' },
]

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string
  children: React.ReactNode
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="-mx-3 block rounded-xl px-3 py-2.5 text-base font-semibold text-charcoal-800 transition-colors hover:bg-teal-50 hover:text-teal-700"
    >
      {children}
    </Link>
  )
}

function MobileNavDisclosure({
  label,
  items,
  onItemClick,
}: {
  label: string
  items: FlyoutMenuItem[]
  onItemClick?: () => void
}) {
  return (
    <Disclosure as="div" className="-mx-3">
      <DisclosureButton className="group flex w-full items-center justify-between rounded-xl py-2.5 pl-3 pr-3.5 text-base font-semibold text-charcoal-800 transition-colors hover:bg-teal-50 hover:text-teal-700">
        {label}
        <ChevronDownIcon
          aria-hidden="true"
          className="size-5 flex-none text-charcoal-400 transition-transform group-data-open:rotate-180 group-data-open:text-teal-600"
        />
      </DisclosureButton>
      <DisclosurePanel className="mt-2 space-y-1 border-l-2 border-teal-200 pl-4 ml-2">
        {items.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            onClick={onItemClick}
            className="block rounded-lg py-2 pr-3 pl-3 text-sm font-medium text-charcoal-600 transition-colors hover:bg-lavender-50 hover:text-lavender-700"
          >
            {item.name}
          </DisclosureButton>
        ))}
      </DisclosurePanel>
    </Disclosure>
  )
}

export function Header({ overlay = false }: { overlay?: boolean }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header
      className={
        overlay
          ? 'absolute inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md py-4'
          : 'sticky top-0 z-50 bg-white py-4 shadow-[var(--shadow-soft)]'
      }
    >
      {/* Teal accent line at top */}
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400" />

      <nav className="flex items-center justify-between px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-x-10">
          <Link href="/" aria-label="Home" className="-m-1.5 p-1.5 transition-transform hover:scale-105">
            <Logo />
          </Link>
          <div className="hidden lg:flex lg:gap-x-1">
            <FlyoutMenu label="About Us" items={aboutUsItems} />
            <FlyoutMenu label="Our Projects" items={ourProjectsItems} />
            <FlyoutMenu label="Ways to Give" items={waysToGiveItems} />
            <FlyoutMenu label="Get Involved" items={getInvolvedItems} />
            <FlyoutMenu label="Stories & News" items={storiesAndNewsItems} />
            <FlyoutMenu label="Get In Touch" items={contactUsItems} />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div className="hidden lg:block">
            <Button href="/giving-options" variant="cta" size="md">
              <svg className="h-5 w-5 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Donate
            </Button>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-xl p-2.5 text-charcoal-700 transition-colors hover:bg-charcoal-100"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-7" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-charcoal-900/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-charcoal-900/10">
          {/* Teal accent line */}
          <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-teal-400 via-teal-500 to-teal-400" />

          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Alliance for Cancer Care Equity</span>
              <Logo width={140} height={51} />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-xl p-2.5 text-charcoal-700 transition-colors hover:bg-charcoal-100"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-7" />
            </button>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-6 divide-y divide-charcoal-200">
              <div className="space-y-1 py-6">
                <MobileNavDisclosure label="About Us" items={aboutUsItems} onItemClick={() => setMobileMenuOpen(false)} />
                <MobileNavDisclosure label="Our Projects" items={ourProjectsItems} onItemClick={() => setMobileMenuOpen(false)} />
                <MobileNavDisclosure label="Ways to Give" items={waysToGiveItems} onItemClick={() => setMobileMenuOpen(false)} />
                <MobileNavDisclosure label="Get Involved" items={getInvolvedItems} onItemClick={() => setMobileMenuOpen(false)} />
                <MobileNavDisclosure label="Stories & News" items={storiesAndNewsItems} onItemClick={() => setMobileMenuOpen(false)} />
                <MobileNavDisclosure label="Contact Us" items={contactUsItems} onItemClick={() => setMobileMenuOpen(false)} />
              </div>
              <div className="py-6">
                <Button href="/giving-options" variant="cta" size="lg" className="w-full justify-center">
                  <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Donate Now
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
