'use client'

import { useState } from 'react'
import Link from 'next/link';
import data from '../../lib/data';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

export default function Header({ page }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img
              alt="Site Logo"
              src={data.navigation.logo}
              className="h-8 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          {data.navigation.items.map((item) => (
            item.children ? (
              <Popover key={item.text} className="relative">
                <PopoverButton className="flex items-center gap-x-1 text-nav font-regular text-gray-900 whitespace-nowrap">
                  {item.text}
                  <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                </PopoverButton>

                <PopoverPanel
                  transition
                  className="absolute -left-8 top-full z-10 mt-3 w-56 rounded-xl bg-white p-2 shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
                >
                  {item.children.map((child) => (
                    <Link
                      key={child.text}
                      href={child.link}
                      className="block rounded-lg px-3 py-2 text-sm/6 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {child.text}
                    </Link>
                  ))}
                </PopoverPanel>
              </Popover>
            ) : (
              <Link key={item.text} href={item.link} className="text-nav font-regular text-gray-900 whitespace-nowrap">
                {item.text}
              </Link>
            )
          ))}
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href={data.navigation.button.link} className="btn btn-primary btn-sm">
            {data.navigation.button.text}
          </Link>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt="Site Logo"
                src={data.navigation.logo}
                className="h-8 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {data.navigation.items.map((item) => (
                  !item.children ? (
                    <Link
                      key={item.text}
                      href={item.link}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.text}
                    </Link>
                  ) : (
                    <Disclosure as="div" key={item.text} className="-mx-3">
                      <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                        {item.text}
                        <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                      </DisclosureButton>
                      <DisclosurePanel className="mt-2 space-y-2">
                        {item.children.map((child) => (
                          <DisclosureButton
                            key={child.text}
                            as="a"
                            href={child.link}
                            className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                          >
                            {child.text}
                          </DisclosureButton>
                        ))}
                      </DisclosurePanel>
                    </Disclosure>
                  )
                ))}
              </div>
              <div className="py-6">
                <Link href={data.navigation.button.link} className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  {data.navigation.button.text}
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
