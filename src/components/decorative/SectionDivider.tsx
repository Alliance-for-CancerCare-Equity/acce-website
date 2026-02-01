import clsx from 'clsx'

interface SectionDividerProps {
  className?: string
  variant?: 'wave' | 'angle' | 'curve' | 'zigzag'
  color?: 'teal' | 'lavender' | 'gold' | 'charcoal' | 'white'
  flip?: boolean
}

const colorMap = {
  teal: 'fill-teal-50',
  lavender: 'fill-lavender-50',
  gold: 'fill-gold-50',
  charcoal: 'fill-charcoal-900',
  white: 'fill-white',
}

export function SectionDivider({
  className,
  variant = 'wave',
  color = 'white',
  flip = false,
}: SectionDividerProps) {
  const svgClass = clsx(
    'w-full h-auto block',
    flip && 'rotate-180',
    className
  )

  switch (variant) {
    case 'wave':
      return (
        <svg viewBox="0 0 1440 80" fill="none" className={svgClass} preserveAspectRatio="none">
          <path d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z" className={colorMap[color]} />
        </svg>
      )
    case 'angle':
      return (
        <svg viewBox="0 0 1440 80" fill="none" className={svgClass} preserveAspectRatio="none">
          <path d="M0 80L1440 0V80H0Z" className={colorMap[color]} />
        </svg>
      )
    case 'curve':
      return (
        <svg viewBox="0 0 1440 80" fill="none" className={svgClass} preserveAspectRatio="none">
          <path d="M0 80C360 20 1080 20 1440 80V80H0V80Z" className={colorMap[color]} />
        </svg>
      )
    case 'zigzag':
      return (
        <svg viewBox="0 0 1440 60" fill="none" className={svgClass} preserveAspectRatio="none">
          <path d="M0 30L120 0L240 30L360 0L480 30L600 0L720 30L840 0L960 30L1080 0L1200 30L1320 0L1440 30V60H0V30Z" className={colorMap[color]} />
        </svg>
      )
    default:
      return null
  }
}
