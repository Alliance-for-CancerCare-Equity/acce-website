'use client'

import { useId, useState } from 'react'
import clsx from 'clsx'

// Shared input styles
const baseInputStyles =
  'peer block w-full rounded-xl border-2 bg-white px-4 py-3 text-base text-charcoal-800 transition-all duration-200 placeholder:text-transparent focus:outline-none disabled:cursor-not-allowed disabled:bg-charcoal-50 disabled:text-charcoal-400'

const inputStateStyles = {
  default: 'border-charcoal-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100',
  error: 'border-accent-500 focus:border-accent-500 focus:ring-2 focus:ring-accent-100',
  success: 'border-teal-500 focus:border-teal-500 focus:ring-2 focus:ring-teal-100',
}

// Floating label styles
const floatingLabelStyles =
  'pointer-events-none absolute left-4 top-3 origin-left text-charcoal-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2.5 peer-focus:left-3 peer-focus:text-sm peer-focus:text-teal-600 peer-focus:bg-white peer-focus:px-1 peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-3 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:bg-white peer-[:not(:placeholder-shown)]:px-1'

interface TextFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  success?: boolean
  helperText?: string
}

export function TextField({
  label,
  type = 'text',
  className,
  error,
  success,
  helperText,
  ...props
}: TextFieldProps) {
  const id = useId()
  const state = error ? 'error' : success ? 'success' : 'default'

  return (
    <div className={className}>
      <div className="relative">
        <input
          id={id}
          type={type}
          placeholder={label || ' '}
          className={clsx(baseInputStyles, inputStateStyles[state])}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className={clsx(
              floatingLabelStyles,
              error && 'peer-focus:text-accent-600 peer-[:not(:placeholder-shown)]:text-accent-600',
            )}
          >
            {label}
          </label>
        )}
      </div>
      {(error || helperText) && (
        <p
          className={clsx(
            'mt-1.5 text-sm',
            error ? 'text-accent-600' : 'text-charcoal-500',
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  )
}

interface TextAreaFieldProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  success?: boolean
  helperText?: string
}

export function TextAreaField({
  label,
  className,
  error,
  success,
  helperText,
  rows = 4,
  ...props
}: TextAreaFieldProps) {
  const id = useId()
  const state = error ? 'error' : success ? 'success' : 'default'

  return (
    <div className={className}>
      <div className="relative">
        <textarea
          id={id}
          rows={rows}
          placeholder={label || ' '}
          className={clsx(baseInputStyles, inputStateStyles[state], 'resize-none')}
          {...props}
        />
        {label && (
          <label
            htmlFor={id}
            className={clsx(
              floatingLabelStyles,
              error && 'peer-focus:text-accent-600 peer-[:not(:placeholder-shown)]:text-accent-600',
            )}
          >
            {label}
          </label>
        )}
      </div>
      {(error || helperText) && (
        <p
          className={clsx(
            'mt-1.5 text-sm',
            error ? 'text-accent-600' : 'text-charcoal-500',
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  )
}

interface SelectFieldProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  success?: boolean
  helperText?: string
  options: Array<{ value: string; label: string }>
}

export function SelectField({
  label,
  className,
  error,
  success,
  helperText,
  options,
  ...props
}: SelectFieldProps) {
  const id = useId()
  const state = error ? 'error' : success ? 'success' : 'default'

  return (
    <div className={className}>
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-medium text-charcoal-700">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          id={id}
          className={clsx(
            baseInputStyles,
            inputStateStyles[state],
            'appearance-none cursor-pointer pr-10',
          )}
          {...props}
        >
          <option value="">Select an option...</option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
          <svg
            className="h-5 w-5 text-charcoal-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {(error || helperText) && (
        <p
          className={clsx(
            'mt-1.5 text-sm',
            error ? 'text-accent-600' : 'text-charcoal-500',
          )}
        >
          {error || helperText}
        </p>
      )}
    </div>
  )
}

interface CheckboxFieldProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  error?: string
}

export function CheckboxField({ label, className, error, ...props }: CheckboxFieldProps) {
  const id = useId()

  return (
    <div className={className}>
      <div className="flex items-start gap-3">
        <input
          id={id}
          type="checkbox"
          className="mt-1 h-5 w-5 rounded border-2 border-charcoal-300 text-teal-500 transition-colors focus:ring-2 focus:ring-teal-100 focus:ring-offset-0"
          {...props}
        />
        <label htmlFor={id} className="text-base text-charcoal-700 cursor-pointer">
          {label}
        </label>
      </div>
      {error && <p className="mt-1.5 text-sm text-accent-600">{error}</p>}
    </div>
  )
}

interface RadioGroupProps {
  label: string
  name: string
  options: Array<{ value: string; label: string; description?: string }>
  value?: string
  onChange?: (value: string) => void
  error?: string
  className?: string
}

export function RadioGroup({
  label,
  name,
  options,
  value,
  onChange,
  error,
  className,
}: RadioGroupProps) {
  return (
    <div className={className}>
      <label className="mb-3 block text-sm font-medium text-charcoal-700">{label}</label>
      <div className="space-y-3">
        {options.map((option) => (
          <label
            key={option.value}
            className={clsx(
              'flex cursor-pointer items-start gap-3 rounded-xl border-2 p-4 transition-all',
              value === option.value
                ? 'border-teal-500 bg-teal-50'
                : 'border-charcoal-200 hover:border-charcoal-300',
            )}
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="mt-0.5 h-5 w-5 border-2 border-charcoal-300 text-teal-500 focus:ring-2 focus:ring-teal-100 focus:ring-offset-0"
            />
            <div>
              <div className="font-medium text-charcoal-800">{option.label}</div>
              {option.description && (
                <div className="mt-0.5 text-sm text-charcoal-500">{option.description}</div>
              )}
            </div>
          </label>
        ))}
      </div>
      {error && <p className="mt-1.5 text-sm text-accent-600">{error}</p>}
    </div>
  )
}

// Form wrapper with consistent styling
interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode
}

export function Form({ children, className, ...props }: FormProps) {
  return (
    <form className={clsx('space-y-6', className)} {...props}>
      {children}
    </form>
  )
}
