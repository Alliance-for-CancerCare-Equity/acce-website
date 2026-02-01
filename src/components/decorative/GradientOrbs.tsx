import clsx from 'clsx'

interface GradientOrbProps {
  className?: string
  variant?: 'warm' | 'cool' | 'accent'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  animated?: boolean
}

const variantStyles = {
  warm: 'bg-gradient-to-br from-lavender-300 via-gold-300 to-lavender-400',
  cool: 'bg-gradient-to-br from-teal-300 via-lavender-300 to-teal-400',
  accent: 'bg-gradient-to-br from-gold-300 via-teal-300 to-lavender-400',
}

const sizeMap = {
  sm: 'w-24 h-24',
  md: 'w-40 h-40',
  lg: 'w-64 h-64',
  xl: 'w-96 h-96',
}

export function GradientOrb({
  className,
  variant = 'warm',
  size = 'md',
  animated = false,
}: GradientOrbProps) {
  return (
    <div
      className={clsx(
        'absolute rounded-full opacity-40 blur-3xl',
        variantStyles[variant],
        sizeMap[size],
        animated && 'animate-float',
        className
      )}
    />
  )
}

export function OrbCluster({
  className,
}: {
  className?: string
}) {
  return (
    <div className={clsx('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <GradientOrb variant="warm" size="xl" className="-top-20 -left-20" animated />
      <GradientOrb variant="cool" size="lg" className="top-1/3 -right-10" />
      <GradientOrb variant="accent" size="md" className="bottom-10 left-1/4" animated />
    </div>
  )
}

export function FloatingOrbs({
  className,
}: {
  className?: string
}) {
  return (
    <div className={clsx('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <div className="absolute top-20 left-10 w-72 h-72 bg-lavender-300/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-10 right-10 w-64 h-64 bg-gold-300/30 rounded-full blur-3xl" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-teal-300/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '4s' }} />
    </div>
  )
}
