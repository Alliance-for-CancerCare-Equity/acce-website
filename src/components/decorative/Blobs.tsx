import clsx from 'clsx'

interface BlobProps {
  className?: string
  color?: 'teal' | 'lavender' | 'gold'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  blur?: boolean
}

const colorMap = {
  teal: 'bg-teal-300',
  lavender: 'bg-lavender-300',
  gold: 'bg-gold-300',
}

const sizeMap = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
  xl: 'w-96 h-96',
}

export function Blob({
  className,
  color = 'lavender',
  size = 'md',
  blur = true,
}: BlobProps) {
  return (
    <div
      className={clsx(
        'absolute rounded-full opacity-30',
        colorMap[color],
        sizeMap[size],
        blur && 'blur-3xl',
        className
      )}
    />
  )
}

export function BlobPair({
  className,
  primaryColor = 'lavender',
  secondaryColor = 'gold',
}: {
  className?: string
  primaryColor?: 'teal' | 'lavender' | 'gold'
  secondaryColor?: 'teal' | 'lavender' | 'gold'
}) {
  return (
    <div className={clsx('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <Blob color={primaryColor} size="lg" className="top-10 left-10" />
      <Blob color={secondaryColor} size="md" className="bottom-10 right-10" />
    </div>
  )
}

export function BlobTriangle({
  className,
}: {
  className?: string
}) {
  return (
    <div className={clsx('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      <Blob color="lavender" size="lg" className="top-0 left-1/4" />
      <Blob color="teal" size="md" className="bottom-10 left-10" />
      <Blob color="gold" size="lg" className="bottom-20 right-0" />
    </div>
  )
}
