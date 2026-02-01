import { forwardRef, type InputHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface RadioOption {
  value: string
  label: string
  description?: string
}

export interface RadioGroupProps {
  name: string
  label?: string
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
  error?: string
  required?: boolean
  className?: string
}

export function RadioGroup({
  name,
  label,
  options,
  value,
  onChange,
  error,
  required,
  className,
}: RadioGroupProps) {
  return (
    <fieldset className={className}>
      {label && (
        <legend className="block text-sm font-semibold text-charcoal-900 mb-3">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </legend>
      )}
      <div className="space-y-3">
        {options.map((option) => (
          <RadioItem
            key={option.value}
            name={name}
            value={option.value}
            label={option.label}
            description={option.description}
            checked={value === option.value}
            onChange={() => onChange?.(option.value)}
            error={!!error}
          />
        ))}
      </div>
      {error && (
        <p className="mt-2 text-sm text-red-600 flex items-center gap-1">
          <svg className="size-4" viewBox="0 0 20 20" fill="currentColor">
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z"
              clipRule="evenodd"
            />
          </svg>
          {error}
        </p>
      )}
    </fieldset>
  )
}

interface RadioItemProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  description?: string
  error?: boolean
}

const RadioItem = forwardRef<HTMLInputElement, RadioItemProps>(
  ({ className, label, description, error, id, name, value, ...props }, ref) => {
    const radioId = id || `${name}-${value}`

    return (
      <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            ref={ref}
            id={radioId}
            name={name}
            value={value}
            type="radio"
            className={clsx(
              'size-5 border-2 bg-white',
              'text-teal-600',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:ring-offset-0',
              error ? 'border-red-300' : 'border-charcoal-300',
              'disabled:bg-charcoal-50 disabled:cursor-not-allowed',
              className
            )}
            {...props}
          />
        </div>
        <div className="ml-3">
          <label
            htmlFor={radioId}
            className="text-sm font-medium text-charcoal-900"
          >
            {label}
          </label>
          {description && (
            <p className="text-sm text-charcoal-500">{description}</p>
          )}
        </div>
      </div>
    )
  }
)

RadioItem.displayName = 'RadioItem'
