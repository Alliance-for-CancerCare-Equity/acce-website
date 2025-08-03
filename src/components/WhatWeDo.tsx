import { CheckCircleIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'

export function WhatWeDo() {
  return (
    <div className="relative bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 overflow-hidden rounded-3xl lg:h-auto lg:w-full lg:grow xl:ml-0">
            <Image
              fill
              alt="A healthcare professional providing compassionate care to a patient."
              src="https://images.unsplash.com/photo-1550831106-2747f0d6a81c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&w=2560&q=80"
              className="absolute inset-0 size-full bg-slate-50 object-cover"
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pt-16 pb-24 sm:pt-20 sm:pb-32 lg:mr-0 lg:ml-8 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <p className="text-base/7 font-semibold text-blue-600">
              How We Help
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-slate-900 sm:text-5xl">
              Our Commitment to Patients
            </h1>
            <div className="mt-10 max-w-xl text-base/7 text-slate-600 lg:max-w-none">
              <p>
                We are dedicated to breaking down the financial barriers that
                prevent individuals from receiving the cancer care they
                deserve. Our efforts are focused on the following areas:
              </p>
              <ul role="list" className="mt-8 space-y-8 text-slate-600">
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-blue-600"
                  />
                  <span>
                    Covering the full spectrum of cancer treatments for patients
                    in Ghana.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-blue-600"
                  />
                  <span>
                    Providing financial support for uninsured and underinsured
                    patients in Canada.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-blue-600"
                  />
                  <span>
                    Assisting with the costs of essential, unfunded medications.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-blue-600"
                  />
                  <span>
                    Providing medical equipment for diagnosis and treatment in
                    non-profit centers.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-blue-600"
                  />
                  <span>
                    Offering access to supportive networks and counseling
                    services.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-blue-600"
                  />
                  <span>
                    Conducting vital research into cancer and other diseases in
                    Canada and Ghana.
                  </span>
                </li>

                <li className="flex gap-x-3">
                  <CheckCircleIcon
                    aria-hidden="true"
                    className="mt-1 size-5 flex-none text-blue-600"
                  />
                  <span>
                    <strong className="font-semibold text-slate-900">
                      Our Values:
                    </strong>{' '}
                    Equity, Compassion, Empathy, Empowerment, Transparency,
                    Community.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
