import Link from 'next/link'
import clsx from 'clsx'

const baseStyles = {
  solid:
    'group inline-flex items-center justify-center rounded-full py-2.5 px-5 text-sm font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2',
  outline:
    'group inline-flex ring-2 items-center justify-center rounded-full py-2.5 px-5 text-sm font-semibold transition-all duration-200',
  ghost:
    'group inline-flex items-center justify-center rounded-full py-2.5 px-5 text-sm font-semibold transition-all duration-200',
}

const variantStyles = {
  solid: {
    // Primary - Teal (main actions)
    teal: 'bg-teal-500 text-white hover:bg-teal-600 hover:shadow-glow-teal active:bg-teal-700 focus-visible:outline-teal-500',
    // CTA - Red (donate buttons ONLY)
    cta: 'bg-red-500 text-white hover:bg-red-600 hover:shadow-glow-gold active:bg-red-700 focus-visible:outline-red-500 animate-pulse-subtle hover:animate-none',
    // Charcoal (dark actions)
    charcoal: 'bg-charcoal-900 text-white hover:bg-charcoal-800 active:bg-charcoal-950 focus-visible:outline-charcoal-900',
    // White (on dark backgrounds)
    white: 'bg-white text-charcoal-900 hover:bg-charcoal-50 active:bg-charcoal-100 focus-visible:outline-white',
    // Lavender (soft actions)
    lavender: 'bg-lavender-500 text-white hover:bg-lavender-600 hover:shadow-glow-lavender active:bg-lavender-700 focus-visible:outline-lavender-500',
    // Gold (warm highlights)
    gold: 'bg-gold-500 text-white hover:bg-gold-600 hover:shadow-glow-gold active:bg-gold-700 focus-visible:outline-gold-500',
    // Legacy support
    slate: 'bg-charcoal-900 text-white hover:bg-charcoal-800 active:bg-charcoal-950 focus-visible:outline-charcoal-900',
    blue: 'bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700 focus-visible:outline-teal-500',
  },
  outline: {
    // Secondary - Charcoal outline
    charcoal: 'ring-charcoal-300 text-charcoal-700 hover:text-charcoal-900 hover:ring-charcoal-400 hover:bg-charcoal-50 active:bg-charcoal-100 focus-visible:outline-teal-500',
    // Teal outline
    teal: 'ring-teal-300 text-teal-600 hover:ring-teal-400 hover:bg-teal-50 active:bg-teal-100 focus-visible:outline-teal-500',
    // White outline (on dark backgrounds)
    white: 'ring-white/30 text-white hover:ring-white/50 hover:bg-white/10 active:bg-white/20 focus-visible:outline-white',
    // Legacy support
    slate: 'ring-charcoal-300 text-charcoal-700 hover:text-charcoal-900 hover:ring-charcoal-400 active:bg-charcoal-100 focus-visible:outline-teal-500',
    blue: 'ring-teal-300 text-teal-600 hover:ring-teal-400 active:bg-teal-100 focus-visible:outline-teal-500',
  },
  ghost: {
    charcoal: 'text-charcoal-600 hover:text-charcoal-900 hover:bg-charcoal-100 active:bg-charcoal-200',
    teal: 'text-teal-600 hover:text-teal-700 hover:bg-teal-50 active:bg-teal-100',
    white: 'text-white hover:bg-white/10 active:bg-white/20',
  },
}

const sizeStyles = {
  sm: 'py-1.5 px-3 text-xs',
  md: 'py-2.5 px-5 text-sm',
  lg: 'py-3 px-6 text-base',
  xl: 'py-4 px-8 text-lg',
}

type ButtonProps = (
  | {
      variant?: 'solid'
      color?: keyof typeof variantStyles.solid
    }
  | {
      variant: 'outline'
      color?: keyof typeof variantStyles.outline
    }
  | {
      variant: 'ghost'
      color?: keyof typeof variantStyles.ghost
    }
) & {
  size?: keyof typeof sizeStyles
} & (
    | Omit<React.ComponentPropsWithoutRef<typeof Link>, 'color'>
    | (Omit<React.ComponentPropsWithoutRef<'button'>, 'color'> & {
        href?: undefined
      })
  )

export function Button({ className, size = 'md', ...props }: ButtonProps) {
  props.variant ??= 'solid'
  props.color ??= 'teal'

  const variantStyle =
    props.variant === 'ghost'
      ? variantStyles.ghost[props.color as keyof typeof variantStyles.ghost]
      : props.variant === 'outline'
        ? variantStyles.outline[props.color as keyof typeof variantStyles.outline]
        : variantStyles.solid[props.color as keyof typeof variantStyles.solid]

  className = clsx(
    baseStyles[props.variant],
    variantStyle,
    size !== 'md' && sizeStyles[size],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
