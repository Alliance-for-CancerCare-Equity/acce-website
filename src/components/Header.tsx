'use client'

import Link from 'next/link'
import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import clsx from 'clsx'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { Logo } from '@/components/Logo'
import { NavLink } from '@/components/NavLink'
import { FlyoutMenu, type FlyoutMenuItem } from '@/components/FlyoutMenu'

const aboutUsItems: FlyoutMenuItem[] = [
  { name: 'About Us', href: '/about-us' },
  { name: 'Meet the Board', href: '/meet-the-board' },
  { name: 'ACCE Champions', href: '/acce-champions' },
  { name: '50/50 Campaign', href: '/50-50-campaign' },
]

const ourProjectsItems: FlyoutMenuItem[] = [
  { name: 'Our Projects', href: '/our-projects' },
  {
    name: 'Fund Cancer Treatment and Related Costs',
    href: '/fund-cancer-treatment-and-related-costs',
  },
  {
    name: 'Support Community Healthcare Centers',
    href: '/support-community-healthcare-centers',
  },
  {
    name: 'Assistance to Education and Training',
    href: '/assistance-to-education-and-training',
  },
  { name: 'Build a Cancer Center', href: '/build-a-cancer-center' },
]

const waysToGiveItems: FlyoutMenuItem[] = [
  { name: 'Ways to Give', href: '/ways-to-give' },
  { name: 'Fundraise', href: '/fundraise' },
  { name: 'Champions Campaign', href: '/champions-campaign' },
  { name: 'Patients Stories', href: '/patients-stories' },
]

const getInvolvedItems: FlyoutMenuItem[] = [
  { name: 'Get Involved', href: '/get-involved' },
  { name: 'Volunteer', href: '/volunteer' },
  { name: 'Partner with Us', href: '/partner-with-us' },
]

const fundingApplicationItems: FlyoutMenuItem[] = [
  { name: 'Support Treatment', href: '/support-treatment' },
  { name: 'Equipment', href: '/equipment' },
]

function MobileNavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <PopoverButton as={Link} href={href} className="block w-full p-2">
      {children}
    </PopoverButton>
  )
}

function MobileNavIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden="true"
      className="h-3.5 w-3.5 overflow-visible stroke-slate-700"
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
    >
      <path
        d="M0 1H14M0 7H14M0 13H14"
        className={clsx(
          'origin-center transition',
          open && 'scale-90 opacity-0',
        )}
      />
      <path
        d="M2 2L12 12M12 2L2 12"
        className={clsx(
          'origin-center transition',
          !open && 'scale-90 opacity-0',
        )}
      />
    </svg>
  )
}

function MobileNavigation() {
  return (
    <Popover>
      <PopoverButton
        className="relative z-10 flex h-8 w-8 items-center justify-center focus:not-data-focus:outline-hidden"
        aria-label="Toggle Navigation"
      >
        {({ open }) => <MobileNavIcon open={open} />}
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 bg-slate-300/50 duration-150 data-closed:opacity-0 data-enter:ease-out data-leave:ease-in"
      />
      <PopoverPanel
        transition
        className="absolute inset-x-0 top-full mt-4 flex origin-top flex-col rounded-2xl bg-white p-4 text-lg tracking-tight text-slate-900 shadow-xl ring-1 ring-slate-900/5 data-closed:scale-95 data-closed:opacity-0 data-enter:duration-150 data-enter:ease-out data-leave:duration-100 data-leave:ease-in"
      >
        <MobileNavLink href="/">Home</MobileNavLink>
        <MobileNavLink href="/about-us">About Us</MobileNavLink>
        <MobileNavLink href="/our-projects">Our Projects</MobileNavLink>
        <MobileNavLink href="/ways-to-give">Ways to Give</MobileNavLink>
        <MobileNavLink href="/get-involved">Get Involved</MobileNavLink>
        <MobileNavLink href="/funding-application">
          Funding Application
        </MobileNavLink>
        <MobileNavLink href="/contact-us">Contact Us</MobileNavLink>
      </PopoverPanel>
    </Popover>
  )
}

export function Header() {
  return (
    <header className="py-10">
      <Container>
        <nav className="relative z-50 flex justify-between">
          <div className="flex items-center md:gap-x-12">
            <Link href="#" aria-label="Home">
              <Logo className="h-10 w-auto" />
            </Link>
            <div className="hidden md:flex md:gap-x-6">
              <NavLink href="/">Home</NavLink>
              <FlyoutMenu label="About Us" items={aboutUsItems} />
              <FlyoutMenu label="Our Projects" items={ourProjectsItems} />
              <FlyoutMenu label="Ways to Give" items={waysToGiveItems} />
              <FlyoutMenu label="Get Involved" items={getInvolvedItems} />
              <FlyoutMenu
                label="Funding Application"
                items={fundingApplicationItems}
              />
              <NavLink href="/contact-us">Contact Us</NavLink>
            </div>
          </div>
          <div className="flex items-center gap-x-5 md:gap-x-8">
            <Button href="/ways-to-give" color="blue">
              <span>
                Donate
              </span>
            </Button>
            <div className="-mr-1 md:hidden">
              <MobileNavigation />
            </div>
          </div>
        </nav>
      </Container>
    </header>
  )
}
