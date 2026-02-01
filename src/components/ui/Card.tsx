import clsx from 'clsx'

type CardVariant = 'elevated' | 'flat' | 'glass' | 'gradient' | 'bordered'
type CardPadding = 'none' | 'sm' | 'md' | 'lg'

const variantStyles: Record<CardVariant, string> = {
  elevated:
    'bg-white rounded-2xl shadow-[var(--shadow-soft)] transition-all duration-300 hover:shadow-[var(--shadow-medium)] hover:-translate-y-1',
  flat: 'bg-white rounded-2xl',
  glass:
    'bg-white/70 backdrop-blur-md rounded-2xl border border-white/50 transition-all duration-300 hover:bg-white/80',
  gradient:
    'relative bg-white rounded-2xl before:absolute before:inset-[-2px] before:rounded-[calc(1rem+2px)] before:bg-gradient-to-br before:from-lavender-400 before:via-teal-400 before:to-gold-400 before:z-[-1] transition-all duration-300 hover:-translate-y-1',
  bordered:
    'bg-white rounded-2xl border-2 border-charcoal-200 transition-all duration-300 hover:border-teal-400',
}

const paddingStyles: Record<CardPadding, string> = {
  none: '',
  sm: 'p-4',
  md: 'p-6',
  lg: 'p-8',
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant
  padding?: CardPadding
  hoverEffect?: boolean
  children: React.ReactNode
}

export function Card({
  variant = 'elevated',
  padding = 'md',
  hoverEffect = true,
  className,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={clsx(
        variantStyles[variant],
        paddingStyles[padding],
        !hoverEffect && 'hover:transform-none hover:shadow-[var(--shadow-soft)]',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

// Card with colored accent top border
interface AccentCardProps extends CardProps {
  accentColor?: 'teal' | 'lavender' | 'gold' | 'accent'
}

const accentColors = {
  teal: 'border-t-4 border-t-teal-500',
  lavender: 'border-t-4 border-t-lavender-500',
  gold: 'border-t-4 border-t-gold-400',
  accent: 'border-t-4 border-t-accent-600',
}

export function AccentCard({
  accentColor = 'teal',
  variant = 'elevated',
  padding = 'md',
  className,
  children,
  ...props
}: AccentCardProps) {
  return (
    <Card
      variant={variant}
      padding={padding}
      className={clsx(accentColors[accentColor], className)}
      {...props}
    >
      {children}
    </Card>
  )
}

// Feature card with icon
interface FeatureCardProps extends CardProps {
  icon?: React.ReactNode
  iconBgColor?: 'teal' | 'lavender' | 'gold'
  title: string
  description: string
}

const iconBgColors = {
  teal: 'bg-teal-100 text-teal-600',
  lavender: 'bg-lavender-100 text-lavender-600',
  gold: 'bg-gold-100 text-gold-600',
}

export function FeatureCard({
  icon,
  iconBgColor = 'teal',
  title,
  description,
  variant = 'elevated',
  padding = 'lg',
  className,
  ...props
}: FeatureCardProps) {
  return (
    <Card variant={variant} padding={padding} className={clsx('text-center', className)} {...props}>
      {icon && (
        <div
          className={clsx(
            'mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl',
            iconBgColors[iconBgColor],
          )}
        >
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-xl font-semibold text-charcoal-800">{title}</h3>
      <p className="text-charcoal-600">{description}</p>
    </Card>
  )
}

// Stat card for displaying metrics
interface StatCardProps extends CardProps {
  value: string | number
  label: string
  highlight?: boolean
}

export function StatCard({
  value,
  label,
  highlight = false,
  variant = 'elevated',
  className,
  ...props
}: StatCardProps) {
  return (
    <Card
      variant={variant}
      padding="lg"
      className={clsx(
        'text-center',
        highlight && 'ring-2 ring-gold-400 ring-offset-2',
        className,
      )}
      {...props}
    >
      <div
        className={clsx(
          'mb-1 text-4xl font-bold',
          highlight ? 'text-gold-500' : 'text-teal-600',
        )}
      >
        {value}
      </div>
      <div className="text-charcoal-600">{label}</div>
    </Card>
  )
}

// Testimonial/Quote card
interface TestimonialCardProps extends CardProps {
  quote: string
  author: string
  role?: string
  imageSrc?: string
}

export function TestimonialCard({
  quote,
  author,
  role,
  imageSrc,
  variant = 'elevated',
  className,
  ...props
}: TestimonialCardProps) {
  return (
    <Card
      variant={variant}
      padding="lg"
      className={clsx('bg-lavender-50', className)}
      {...props}
    >
      <div className="mb-4">
        <svg
          className="h-8 w-8 text-lavender-400"
          fill="currentColor"
          viewBox="0 0 32 32"
        >
          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
        </svg>
      </div>
      <p className="mb-6 text-lg italic text-charcoal-700">{quote}</p>
      <div className="flex items-center gap-3">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={author}
            className="h-12 w-12 rounded-full object-cover ring-2 ring-lavender-200"
          />
        )}
        <div>
          <div className="font-semibold text-charcoal-800">{author}</div>
          {role && <div className="text-sm text-charcoal-500">{role}</div>}
        </div>
      </div>
    </Card>
  )
}
