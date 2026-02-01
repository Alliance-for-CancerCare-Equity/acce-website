import clsx from 'clsx'

interface WaveProps {
  className?: string
  color?: 'teal' | 'lavender' | 'gold' | 'charcoal' | 'white'
  flip?: boolean
}

const colorMap = {
  teal: 'fill-teal-500',
  lavender: 'fill-lavender-500',
  gold: 'fill-gold-500',
  charcoal: 'fill-charcoal-900',
  white: 'fill-white',
}

export function Wave({ className, color = 'teal', flip = false }: WaveProps) {
  return (
    <svg
      viewBox="0 0 1440 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'w-full h-auto',
        flip && 'rotate-180',
        className
      )}
      preserveAspectRatio="none"
    >
      <path
        d="M0 60C240 120 480 0 720 60C960 120 1200 0 1440 60V120H0V60Z"
        className={colorMap[color]}
      />
    </svg>
  )
}

export function WaveDouble({ className, color = 'teal', flip = false }: WaveProps) {
  return (
    <svg
      viewBox="0 0 1440 150"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'w-full h-auto',
        flip && 'rotate-180',
        className
      )}
      preserveAspectRatio="none"
    >
      <path
        d="M0 40C180 80 360 0 540 40C720 80 900 0 1080 40C1260 80 1440 0 1440 40V150H0V40Z"
        className={colorMap[color]}
        opacity="0.3"
      />
      <path
        d="M0 80C240 120 480 40 720 80C960 120 1200 40 1440 80V150H0V80Z"
        className={colorMap[color]}
      />
    </svg>
  )
}

export function WaveSoft({ className, color = 'lavender', flip = false }: WaveProps) {
  return (
    <svg
      viewBox="0 0 1440 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={clsx(
        'w-full h-auto',
        flip && 'rotate-180',
        className
      )}
      preserveAspectRatio="none"
    >
      <path
        d="M0 50Q360 100 720 50T1440 50V100H0V50Z"
        className={colorMap[color]}
      />
    </svg>
  )
}
