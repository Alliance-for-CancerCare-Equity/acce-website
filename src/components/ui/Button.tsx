import Link from 'next/link'
import clsx from 'clsx'

type ButtonVariant = 'primary' | 'secondary' | 'cta' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

const baseStyles =
  'group inline-flex items-center justify-center font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700 focus-visible:ring-teal-500 shadow-md hover:shadow-lg',
  secondary:
    'bg-transparent text-charcoal-800 border-2 border-charcoal-800 hover:bg-charcoal-800 hover:text-white active:bg-charcoal-900 focus-visible:ring-charcoal-500',
  cta: 'bg-accent-600 text-white hover:bg-accent-700 active:bg-accent-800 focus-visible:ring-accent-500 shadow-lg hover:shadow-xl hover:scale-[1.02]',
  ghost:
    'bg-transparent text-charcoal-700 hover:bg-charcoal-100 active:bg-charcoal-200 focus-visible:ring-charcoal-500',
  outline:
    'bg-transparent text-teal-600 border-2 border-teal-500 hover:bg-teal-500 hover:text-white active:bg-teal-600 focus-visible:ring-teal-500',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'text-sm px-4 py-2 rounded-lg gap-1.5',
  md: 'text-base px-6 py-3 rounded-xl gap-2',
  lg: 'text-lg px-8 py-4 rounded-xl gap-2.5',
}

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  className?: string
  children?: React.ReactNode
} & (
  | (Omit<React.ComponentPropsWithoutRef<typeof Link>, 'className'> & {
      href: string
    })
  | (Omit<React.ComponentPropsWithoutRef<'button'>, 'className'> & {
      href?: undefined
    })
)

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const combinedClassName = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className,
  )

  if (typeof props.href !== 'undefined') {
    return (
      <Link className={combinedClassName} {...(props as React.ComponentPropsWithoutRef<typeof Link>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClassName} {...(props as React.ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}

// Icon button variant for compact icon-only buttons
export function IconButton({
  variant = 'ghost',
  size = 'md',
  className,
  children,
  ...props
}: ButtonProps) {
  const iconSizes: Record<ButtonSize, string> = {
    sm: 'p-2 rounded-lg',
    md: 'p-3 rounded-xl',
    lg: 'p-4 rounded-xl',
  }

  const combinedClassName = clsx(
    baseStyles,
    variantStyles[variant],
    iconSizes[size],
    className,
  )

  if (typeof props.href !== 'undefined') {
    return (
      <Link className={combinedClassName} {...(props as React.ComponentPropsWithoutRef<typeof Link>)}>
        {children}
      </Link>
    )
  }

  return (
    <button className={combinedClassName} {...(props as React.ComponentPropsWithoutRef<'button'>)}>
      {children}
    </button>
  )
}
