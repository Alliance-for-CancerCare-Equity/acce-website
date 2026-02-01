import clsx from 'clsx'

interface BackgroundTextureProps {
  className?: string
  variant?: 'dots' | 'grid' | 'noise' | 'gradient'
  opacity?: number
}

export function BackgroundTexture({
  className,
  variant = 'dots',
  opacity = 20,
}: BackgroundTextureProps) {
  const baseClass = clsx(
    'absolute inset-0 pointer-events-none',
    className
  )

  switch (variant) {
    case 'dots':
      return (
        <div
          className={baseClass}
          style={{ opacity: opacity / 100 }}
        >
          <div className="absolute inset-0 bg-dot-pattern" />
        </div>
      )
    case 'grid':
      return (
        <div
          className={baseClass}
          style={{
            opacity: opacity / 100,
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      )
    case 'noise':
      return (
        <div
          className={baseClass}
          style={{
            opacity: opacity / 100,
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
      )
    case 'gradient':
      return (
        <div
          className={clsx(baseClass, 'bg-gradient-to-br from-lavender-100/50 via-transparent to-gold-100/50')}
          style={{ opacity: opacity / 100 }}
        />
      )
    default:
      return null
  }
}

export function DotPattern({ className, opacity = 30 }: { className?: string; opacity?: number }) {
  return (
    <div
      className={clsx('absolute inset-0 bg-dot-pattern pointer-events-none', className)}
      style={{ opacity: opacity / 100 }}
    />
  )
}
