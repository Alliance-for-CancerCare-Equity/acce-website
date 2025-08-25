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
import { Container } from '@/components/ui/Container'
import { FlyoutMenu, type FlyoutMenuItem } from '@/components/layout/FlyoutMenu'
import { NavLink } from '@/components/ui/NavLink'

const aboutUsItems: FlyoutMenuItem[] = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Meet the Board', href: '/meet-the-board' },
  { name: 'ACCE Champions', href: '/acce-champions' },
  { name: 'Annual Reports', href: '/annual-reports' },
]

const ourProjectsItems: FlyoutMenuItem[] = [
  { name: 'Our Projects', href: '/our-projects' },
  {
    name: 'Fund Cancer Treatment',
    href: '/fund-cancer-treatment-and-related-costs',
  },
  {
    name: 'Support Community Healthcare Centers',
    href: '/support-community-healthcare-centers',
  },
  {
    name: 'Support Patients and their Families',
    href: '/support-patients-and-their-families',
  },
  {
    name: 'Promote and Advance Cancer Research',
    href: '/promote-and-advance-cancer-research',
  },
]

const waysToGiveItems: FlyoutMenuItem[] = [
  { name: 'Ways to Give', href: '/ways-to-give' },
  { name: 'Ongoing Campaigns', href: '/ongoing-campaigns' },
]

const getInvolvedItems: FlyoutMenuItem[] = [
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Become a Fundraiser', href: '/fundraise' },
  { name: 'Become a Volunteer', href: '/volunteer' },
  { name: 'Become a Partner', href: '/partner-with-us' },
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
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-slate-900 hover:bg-slate-50"
    >
      {children}
    </Link>
  )
}

function MobileNavDisclosure({
  label,
  items,
}: {
  label: string
  items: FlyoutMenuItem[]
}) {
  return (
    <Disclosure as="div" className="-mx-3">
      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base/7 font-semibold text-slate-900 hover:bg-slate-50">
        {label}
        <ChevronDownIcon
          aria-hidden="true"
          className="size-5 flex-none group-data-open:rotate-180"
        />
      </DisclosureButton>
      <DisclosurePanel className="mt-2 space-y-2 pl-6">
        {items.map((item) => (
          <DisclosureButton
            key={item.name}
            as="a"
            href={item.href}
            className="block rounded-lg py-2 pr-3 pl-4 text-sm/7 font-semibold text-slate-700 hover:bg-slate-50"
          >
            {item.name}
          </DisclosureButton>
        ))}
      </DisclosurePanel>
    </Disclosure>
  )
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white py-5 shadow-md">
      <nav className="flex items-center justify-between px-6 sm:px-8 lg:px-12">
        <div className="flex items-center gap-x-8">
          <Link href="/" aria-label="Home" className="-m-1.5 p-1.5 text-2xl font-bold text-blue-600">
            ACCE
          </Link>
          <div className="hidden lg:flex lg:gap-x-6">
            <FlyoutMenu label="About Us" items={aboutUsItems} />
            <FlyoutMenu label="Our Projects" items={ourProjectsItems} />
            <FlyoutMenu label="Ways to Give" items={waysToGiveItems} />
            <FlyoutMenu label="Get Involved" items={getInvolvedItems} />
            <NavLink href="/patients-stories">Patients Stories</NavLink>
            <FlyoutMenu label="Contact Us" items={contactUsItems} />
          </div>
        </div>
        <div className="flex items-center gap-x-5">
          <div className="hidden lg:block">
            <Button href="/ways-to-give" color="blue">
              <span>Donate</span>
            </Button>
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-10 sm:max-w-sm sm:ring-1 sm:ring-slate-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">
                Alliance for Cancer Care Equity
              </span>
              <div className="text-2xl font-bold text-blue-600">ACCE</div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-slate-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-500/10">
              <div className="space-y-2 py-6">
                <MobileNavDisclosure label="About Us" items={aboutUsItems} />
                <MobileNavDisclosure
                  label="Our Projects"
                  items={ourProjectsItems}
                />
                <MobileNavDisclosure
                  label="Ways to Give"
                  items={waysToGiveItems}
                />
                <MobileNavDisclosure
                  label="Get Involved"
                  items={getInvolvedItems}
                />
                <MobileNavLink href="/patients-stories">
                  Patients Stories
                </MobileNavLink>
                <MobileNavDisclosure
                  label="Contact Us"
                  items={contactUsItems}
                />
              </div>
              <div className="py-6">
                <Button href="/ways-to-give" color="blue" className="w-full">
                  Donate
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
