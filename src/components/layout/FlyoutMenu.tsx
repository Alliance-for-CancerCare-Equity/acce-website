'use client'


import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export interface FlyoutMenuItem {
  name: string
  href: string
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
      <PopoverButton className="inline-flex items-center gap-x-1 whitespace-nowrap rounded-lg px-2 py-1.5 text-base/6 font-semibold text-slate-700 hover:bg-slate-100 hover:text-slate-900">
        <span>{label}</span>
        <ChevronDownIcon aria-hidden="true" className="size-5" />
      </PopoverButton>

      <PopoverPanel
        transition
        className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4 ui-closed:translate-y-1 ui-closed:opacity-0 ui-open:duration-200 ui-open:ease-out ui-leave:duration-150 ui-leave:ease-in"
      >
        <div className="w-56 shrink rounded-xl bg-white p-4 text-sm/6 font-semibold text-slate-900 shadow-lg ring-1 ring-slate-900/5">
          {items.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="block p-2 hover:text-blue-600"
            >
              {item.name}
            </Link>
          ))}
        </div>
      </PopoverPanel>
    </Popover>
  )
}
