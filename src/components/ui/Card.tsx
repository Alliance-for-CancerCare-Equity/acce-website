import clsx from 'clsx'

type CardVariant = 'default' | 'gradient' | 'tinted' | 'feature'
type CardTint = 'lavender' | 'teal' | 'gold' | 'charcoal'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  tint?: CardTint
  hover?: boolean
  accentStripe?: 'left' | 'top' | null
  accentColor?: 'teal' | 'lavender' | 'gold' | 'red'
}

const tintStyles: Record<CardTint, string> = {
  lavender: 'bg-lavender-50 border-lavender-100',
  teal: 'bg-teal-50 border-teal-100',
  gold: 'bg-gold-50 border-gold-100',
  charcoal: 'bg-charcoal-50 border-charcoal-100',
}

const accentColors = {
  teal: 'bg-teal-500',
  lavender: 'bg-lavender-500',
  gold: 'bg-gold-500',
  red: 'bg-red-500',
}

export function Card({
  variant = 'default',
  tint = 'lavender',
  hover = true,
  accentStripe = null,
  accentColor = 'teal',
  className,
  children,
  ...props
}: CardProps) {
  const baseStyles = 'relative rounded-2xl transition-all duration-200'

  const variantStyles = {
    default: 'bg-white shadow-soft border border-charcoal-100',
    gradient: 'bg-white shadow-soft card-gradient-border',
    tinted: `shadow-soft border ${tintStyles[tint]}`,
    feature: 'bg-white shadow-medium border-2 border-charcoal-100',
  }

  const hoverStyles = hover
    ? 'hover:shadow-medium hover:-translate-y-1'
    : ''

  return (
    <div
      className={clsx(
        baseStyles,
        variantStyles[variant],
        hoverStyles,
        className
      )}
      {...props}
    >
      {/* Accent Stripe */}
      {accentStripe === 'left' && (
        <div
          className={clsx(
            'absolute left-0 top-4 bottom-4 w-1 rounded-full',
            accentColors[accentColor]
          )}
        />
      )}
      {accentStripe === 'top' && (
        <div
          className={clsx(
            'absolute left-4 right-4 top-0 h-1 rounded-full',
            accentColors[accentColor]
          )}
        />
      )}
      {children}
    </div>
  )
}

// Card sub-components for structured content
export function CardHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('p-6 pb-0', className)} {...props}>
      {children}
    </div>
  )
}

export function CardBody({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={clsx('p-6', className)} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={clsx('p-6 pt-0 mt-auto', className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function CardTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={clsx(
        'font-display text-xl font-semibold text-charcoal-900',
        className
      )}
      {...props}
    >
      {children}
    </h3>
  )
}

export function CardDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={clsx('text-charcoal-600 mt-2', className)}
      {...props}
    >
      {children}
    </p>
  )
}
