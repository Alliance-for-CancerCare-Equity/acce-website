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
import { HeartIcon } from '@heroicons/react/24/solid'

import { Button } from '@/components/ui/Button'
import { FlyoutMenu, type FlyoutMenuItem } from '@/components/layout/FlyoutMenu'
import { Logo } from '@/components/ui/Logo'

const aboutUsItems: FlyoutMenuItem[] = [
  { name: 'Who We Are', href: '/who-we-are', description: 'Our mission and values' },
  { name: 'Meet the Board', href: '/meet-the-board', description: 'Leadership team' },
  { name: 'ACCE Champions', href: '/acce-champions', description: 'Community heroes' },
  { name: 'Annual Reports', href: '/annual-reports', description: 'Financial transparency' },
]

const ourProjectsItems: FlyoutMenuItem[] = [
  { name: 'Projects Overview', href: '/projects-overview', description: 'All our initiatives' },
  { name: 'Fund Cancer Treatment', href: '/fund-cancer-treatment-and-related-costs', description: 'Direct patient support' },
  { name: 'Support Health Centers', href: '/support-community-healthcare-centers', description: 'Community healthcare' },
  { name: 'Patient & Family Support', href: '/support-patients-and-their-families', description: 'Holistic care programs' },
  { name: 'Cancer Research', href: '/promote-and-advance-cancer-research', description: 'Advancing science' },
]

const waysToGiveItems: FlyoutMenuItem[] = [
  { name: 'Giving Options', href: '/giving-options', description: 'Ways to contribute' },
  { name: 'Ongoing Campaigns', href: '/ongoing-campaigns', description: 'Active fundraising' },
]

const getInvolvedItems: FlyoutMenuItem[] = [
  { name: 'Opportunities', href: '/opportunities', description: 'Get started' },
  { name: 'Become a Fundraiser', href: '/fundraise', description: 'Lead a campaign' },
  { name: 'Become a Volunteer', href: '/volunteer', description: 'Give your time' },
  { name: 'Become a Partner', href: '/partner-with-us', description: 'Corporate partnerships' },
]

const storiesAndNewsItems: FlyoutMenuItem[] = [
  { name: 'Blog', href: '/blogs', description: 'Latest updates' },
  { name: 'Patient Stories', href: '/patients-stories', description: 'Real impact' },
  { name: 'Newsletters', href: '/newsletters', description: 'Stay informed' },
  { name: 'Events', href: '/events', description: 'Upcoming activities' },
]

const contactUsItems: FlyoutMenuItem[] = [
  { name: 'Contact Us', href: '/contact-us', description: 'Get in touch' },
  { name: 'Funding Application', href: '/funding-application', description: 'Request support' },
  { name: 'Treatment Support', href: '/support-treatment', description: 'Patient assistance' },
  { name: 'Equipment Support', href: '/equipment', description: 'Medical equipment' },
]

function MobileNavDisclosure({
  label,
  items,
  accentColor = 'teal',
}: {
  label: string
  items: FlyoutMenuItem[]
  accentColor?: 'teal' | 'lavender' | 'gold'
}) {
  const accentClasses = {
    teal: 'border-l-teal-500 bg-teal-50/50',
    lavender: 'border-l-lavender-500 bg-lavender-50/50',
    gold: 'border-l-gold-500 bg-gold-50/50',
  }

  return (
    <Disclosure as="div" className="border-b border-lavender-100">
      <DisclosureButton className="group flex w-full items-center justify-between py-4 text-base font-bold text-charcoal-900 hover:text-teal-600 transition-colors">
        {label}
        <ChevronDownIcon
          aria-hidden="true"
          className="size-5 flex-none text-lavender-500 transition-transform duration-200 group-data-open:rotate-180 group-data-open:text-teal-500"
        />
      </DisclosureButton>
      <DisclosurePanel className="pb-4">
        <div className={`space-y-1 border-l-4 ${accentClasses[accentColor]} rounded-r-lg pl-4 py-2`}>
          {items.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              className="block py-2 text-sm font-medium text-charcoal-700 hover:text-teal-600 transition-colors"
            >
              {item.name}
              {item.description && (
                <span className="block text-xs text-charcoal-400 mt-0.5">{item.description}</span>
              )}
            </DisclosureButton>
          ))}
        </div>
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
          ? 'absolute inset-x-0 top-0 z-50 bg-gradient-to-r from-lavender-200/95 via-lavender-100/95 to-gold-100/95 backdrop-blur-xl'
          : 'sticky top-0 z-50 bg-gradient-to-r from-lavender-300 via-lavender-200 to-gold-200 shadow-medium'
      }
    >
      {/* Decorative top accent bar - warm and hopeful */}
      <div className="h-1.5 bg-gradient-to-r from-teal-500 via-lavender-500 to-gold-500" />

      <nav className="flex items-center justify-between px-6 sm:px-8 lg:px-12 py-4">
        <div className="flex items-center gap-x-8">
          <Link
            href="/"
            aria-label="Home"
            className="group relative -m-1.5 p-1.5 transition-transform hover:scale-105"
          >
            {/* Logo glow effect on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-gold-400/40 to-teal-400/40 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            <Logo />
          </Link>

          <div className="hidden lg:flex lg:items-center lg:gap-x-1">
            <FlyoutMenu label="About Us" items={aboutUsItems} accent="lavender" />
            <FlyoutMenu label="Our Projects" items={ourProjectsItems} accent="teal" />
            <FlyoutMenu label="Ways to Give" items={waysToGiveItems} accent="gold" />
            <FlyoutMenu label="Get Involved" items={getInvolvedItems} accent="teal" />
            <FlyoutMenu label="Stories & News" items={storiesAndNewsItems} accent="lavender" />
            <FlyoutMenu label="Contact" items={contactUsItems} accent="teal" />
          </div>
        </div>

        <div className="flex items-center gap-x-4">
          {/* Desktop Donate Button */}
          <div className="hidden lg:block">
            <Link
              href="/giving-options"
              className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-red-500 to-red-600 px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-red-500/30 transition-all duration-300 hover:from-red-600 hover:to-red-700 hover:shadow-xl hover:shadow-red-500/40 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 focus-visible:ring-offset-lavender-200"
            >
              <HeartIcon className="w-4 h-4 transition-transform group-hover:scale-110" />
              Donate Now
              {/* Subtle pulse ring */}
              <span className="absolute inset-0 rounded-full border-2 border-red-400 animate-ping opacity-20" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="inline-flex items-center justify-center rounded-xl p-2.5 bg-lavender-500 text-white hover:bg-lavender-600 transition-colors shadow-md"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-charcoal-900/40 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto sm:max-w-md shadow-strong">
          {/* Mobile menu gradient background */}
          <div className="min-h-full bg-gradient-to-b from-lavender-50 via-white to-gold-50">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-teal-500 via-lavender-500 to-gold-500" />

            {/* Mobile Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-lavender-200 bg-white/80 backdrop-blur-lg">
              <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Alliance for Cancer Care Equity</span>
                <Logo width={140} height={51} />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl p-2.5 bg-charcoal-100 text-charcoal-600 hover:bg-charcoal-200 hover:text-charcoal-900 transition-colors"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="px-6 py-4">
              <MobileNavDisclosure label="About Us" items={aboutUsItems} accentColor="lavender" />
              <MobileNavDisclosure label="Our Projects" items={ourProjectsItems} accentColor="teal" />
              <MobileNavDisclosure label="Ways to Give" items={waysToGiveItems} accentColor="gold" />
              <MobileNavDisclosure label="Get Involved" items={getInvolvedItems} accentColor="teal" />
              <MobileNavDisclosure label="Stories & News" items={storiesAndNewsItems} accentColor="lavender" />
              <MobileNavDisclosure label="Contact" items={contactUsItems} accentColor="teal" />
            </div>

            {/* Mobile CTA Section */}
            <div className="px-6 py-6 mt-4 bg-gradient-to-r from-red-50 to-gold-50 border-t border-red-100">
              <p className="text-sm font-medium text-charcoal-600 mb-3 text-center">
                Every donation makes a difference
              </p>
              <Button href="/giving-options" color="cta" className="w-full" size="lg">
                <span className="flex items-center justify-center gap-2">
                  <HeartIcon className="w-5 h-5" />
                  Donate Now
                </span>
              </Button>
            </div>

            {/* Decorative bottom wave */}
            <div className="h-24 bg-gradient-to-t from-teal-100 to-transparent" />
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
