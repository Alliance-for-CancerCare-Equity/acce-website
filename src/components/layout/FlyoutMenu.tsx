'use client'

import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export interface FlyoutMenuItem {
  name: string
  href: string
  description?: string
}

const accentStyles = {
  teal: {
    indicator: 'bg-teal-500',
    hover: 'hover:bg-teal-50',
    text: 'group-hover:text-teal-600',
    border: 'border-teal-200',
    icon: 'text-teal-600',
  },
  lavender: {
    indicator: 'bg-lavender-500',
    hover: 'hover:bg-lavender-50',
    text: 'group-hover:text-lavender-700',
    border: 'border-lavender-200',
    icon: 'text-lavender-600',
  },
  gold: {
    indicator: 'bg-gold-500',
    hover: 'hover:bg-gold-50',
    text: 'group-hover:text-gold-700',
    border: 'border-gold-200',
    icon: 'text-gold-600',
  },
}

export function FlyoutMenu({
  label,
  items,
  accent = 'teal',
}: {
  label: string
  items: FlyoutMenuItem[]
  accent?: 'teal' | 'lavender' | 'gold'
}) {
  const styles = accentStyles[accent]

  return (
    <Popover className="relative">
      <PopoverButton
        className="group inline-flex items-center gap-x-1.5 whitespace-nowrap rounded-lg px-3 py-2 text-sm font-bold text-charcoal-800 hover:bg-white/50 hover:text-charcoal-900 transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-lavender-200"
      >
        <span>{label}</span>
        <ChevronDownIcon
          aria-hidden="true"
          className={`size-4 ${styles.icon} transition-transform duration-200 ui-open:rotate-180`}
        />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-4 flex w-screen max-w-xs -translate-x-1/2 px-4 transition data-[closed]:translate-y-2 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className={`w-full shrink overflow-hidden rounded-2xl bg-white shadow-strong ring-1 ${styles.border}`}>
          {/* Accent top bar */}
          <div className={`h-1.5 ${styles.indicator}`} />

          <div className="p-2">
            {items.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`group relative flex flex-col rounded-xl px-4 py-3 ${styles.hover} transition-all duration-150`}
              >
                {/* Accent indicator on hover */}
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-0 ${styles.indicator} rounded-full transition-all duration-200 group-hover:h-8`}
                />

                <span className={`text-sm font-semibold text-charcoal-800 ${styles.text} transition-colors`}>
                  {item.name}
                </span>
                {item.description && (
                  <span className="text-xs text-charcoal-500 mt-0.5">
                    {item.description}
                  </span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  )
}
