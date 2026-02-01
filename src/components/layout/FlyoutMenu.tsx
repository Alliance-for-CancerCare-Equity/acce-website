'use client'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export interface FlyoutMenuItem {
  name: string
  href: string
  description?: string
}

export function FlyoutMenu({
  label,
  items,
}: {
  label: string
  items: FlyoutMenuItem[]
}) {
  return (
    <Popover className="relative">
      <PopoverButton className="group inline-flex items-center gap-x-1 whitespace-nowrap rounded-xl px-3 py-2 text-sm font-semibold text-charcoal-700 transition-all hover:bg-teal-50 hover:text-teal-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2">
        <span>{label}</span>
        <ChevronDownIcon
          aria-hidden="true"
          className="size-4 text-charcoal-400 transition-transform group-hover:text-teal-600 group-data-open:rotate-180 group-data-open:text-teal-600"
        />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-3 flex w-screen max-w-min -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="w-64 shrink rounded-2xl bg-white p-2 text-sm shadow-[var(--shadow-medium)] ring-1 ring-charcoal-900/5">
          {/* Teal accent at top of dropdown */}
          <div className="absolute inset-x-2 top-2 h-0.5 rounded-full bg-gradient-to-r from-teal-400 to-teal-500" />
          <div className="pt-2">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group/item flex items-center gap-3 rounded-xl p-3 transition-colors hover:bg-lavender-50"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-teal-100 text-teal-600 transition-colors group-hover/item:bg-teal-500 group-hover/item:text-white">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <span className="font-medium text-charcoal-700 group-hover/item:text-teal-700">
                  {item.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
