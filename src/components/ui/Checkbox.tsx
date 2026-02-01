import { forwardRef, type InputHTMLAttributes } from 'react'
import clsx from 'clsx'

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  description?: string
  error?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, description, error, id, ...props }, ref) => {
    const checkboxId = id || props.name

    return (
      <div className="relative flex items-start">
        <div className="flex h-6 items-center">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            className={clsx(
              'size-5 rounded-md border-2 bg-white',
              'text-teal-600',
              'transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:ring-offset-0',
              error
                ? 'border-red-300'
                : 'border-charcoal-300',
              'disabled:bg-charcoal-50 disabled:cursor-not-allowed',
              className
            )}
            {...props}
          />
        </div>
        <div className="ml-3">
          <label
            htmlFor={checkboxId}
            className={clsx(
              'text-sm font-medium',
              error ? 'text-red-600' : 'text-charcoal-900'
            )}
          >
            {label}
          </label>
          {description && (
            <p className="text-sm text-charcoal-500">{description}</p>
          )}
          {error && (
            <p className="mt-1 text-sm text-red-600">{error}</p>
          )}
        </div>
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'
