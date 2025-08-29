'use client'

import { useId } from 'react'

function Label({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block text-sm font-medium text-gray-900"
    >
      {children}
    </label>
  )
}

export function TextField({
  label,
  type = 'text',
  className,
  ...props
}: {
  label?: string
  type?: string
  className?: string
  [key: string]: any
}) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <input
        id={id}
        type={type}
        {...props}
        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
      />
    </div>
  )
}

export function SelectField({
  label,
  className,
  ...props
}: {
  label?: string
  className?: string
  [key: string]: any
}) {
  let id = useId()

  return (
    <div className={className}>
      {label && <Label id={id}>{label}</Label>}
      <select
        id={id}
        {...props}
        className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-slate-900 outline-1 -outline-offset-1 outline-slate-300 backdrop-blur-sm placeholder:text-slate-400 focus:outline-2 focus:-outline-offset-2 focus:outline-blue-600"
      />
    </div>
  )
}
