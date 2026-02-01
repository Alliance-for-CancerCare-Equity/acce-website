import clsx from 'clsx'

// Wave divider for section transitions
interface WaveDividerProps {
  variant?: 'standard' | 'gentle' | 'sharp'
  color?: 'white' | 'lavender' | 'teal' | 'charcoal' | 'gold'
  flip?: boolean
  className?: string
}

const waveColors = {
  white: 'fill-white',
  lavender: 'fill-lavender-50',
  teal: 'fill-teal-50',
  charcoal: 'fill-charcoal-800',
  gold: 'fill-gold-50',
}

export function WaveDivider({
  variant = 'standard',
  color = 'white',
  flip = false,
  className,
}: WaveDividerProps) {
  const paths = {
    standard: (
      <>
        <path
          d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
          opacity="0.25"
        />
        <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" />
      </>
    ),
    gentle: (
      <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,58.7C672,64,768,96,864,101.3C960,107,1056,85,1152,69.3C1248,53,1344,43,1392,37.3L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z" />
    ),
    sharp: (
      <path d="M0,96L80,80C160,64,320,32,480,42.7C640,53,800,107,960,112C1120,117,1280,75,1360,53.3L1440,32L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z" />
    ),
  }

  return (
    <div className={clsx('absolute inset-x-0 overflow-hidden', flip ? 'top-0' : 'bottom-0', className)}>
      <svg
        className={clsx('relative block w-full h-16 md:h-24', waveColors[color], flip && 'rotate-180')}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
      >
        {paths[variant]}
      </svg>
    </div>
  )
}

// Decorative blob shape
interface BlobProps {
  color?: 'lavender' | 'teal' | 'gold' | 'accent'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  animate?: boolean
}

const blobColors = {
  lavender: 'bg-lavender-200/40',
  teal: 'bg-teal-200/40',
  gold: 'bg-gold-200/40',
  accent: 'bg-accent-200/40',
}

const blobSizes = {
  sm: 'w-32 h-32',
  md: 'w-48 h-48',
  lg: 'w-64 h-64',
  xl: 'w-96 h-96',
}

export function Blob({
  color = 'lavender',
  size = 'md',
  className,
  animate = true,
}: BlobProps) {
  return (
    <div
      className={clsx(
        'absolute rounded-full blur-3xl',
        blobColors[color],
        blobSizes[size],
        animate && 'animate-float',
        className,
      )}
      style={{
        borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
      }}
    />
  )
}

// Gradient orb for backgrounds
interface GradientOrbProps {
  variant?: 'lavender-teal' | 'teal-gold' | 'gold-lavender' | 'accent'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  className?: string
  blur?: 'light' | 'medium' | 'heavy'
}

const orbGradients = {
  'lavender-teal': 'from-lavender-300 to-teal-300',
  'teal-gold': 'from-teal-300 to-gold-300',
  'gold-lavender': 'from-gold-300 to-lavender-300',
  accent: 'from-accent-300 to-gold-300',
}

const orbSizes = {
  sm: 'w-40 h-40',
  md: 'w-64 h-64',
  lg: 'w-96 h-96',
  xl: 'w-[32rem] h-[32rem]',
}

const orbBlur = {
  light: 'blur-2xl',
  medium: 'blur-3xl',
  heavy: 'blur-[100px]',
}

export function GradientOrb({
  variant = 'lavender-teal',
  size = 'md',
  className,
  blur = 'heavy',
}: GradientOrbProps) {
  return (
    <div
      className={clsx(
        'absolute rounded-full bg-gradient-to-br opacity-30',
        orbGradients[variant],
        orbSizes[size],
        orbBlur[blur],
        className,
      )}
    />
  )
}

// Section divider with gradient line
interface GradientDividerProps {
  variant?: 'horizontal' | 'vertical'
  className?: string
}

export function GradientDivider({ variant = 'horizontal', className }: GradientDividerProps) {
  return (
    <div
      className={clsx(
        'bg-gradient-to-r from-transparent via-teal-400 to-transparent',
        variant === 'horizontal' ? 'h-px w-full' : 'w-px h-full',
        className,
      )}
    />
  )
}

// Decorative dots pattern
interface DotsPatternProps {
  className?: string
  color?: 'teal' | 'lavender' | 'gold'
}

const dotColors = {
  teal: 'fill-teal-200',
  lavender: 'fill-lavender-200',
  gold: 'fill-gold-200',
}

export function DotsPattern({ className, color = 'teal' }: DotsPatternProps) {
  return (
    <svg className={clsx('absolute', className)} width="404" height="384" fill="none" viewBox="0 0 404 384">
      <defs>
        <pattern
          id={`dots-pattern-${color}`}
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="2" className={dotColors[color]} />
        </pattern>
      </defs>
      <rect width="404" height="384" fill={`url(#dots-pattern-${color})`} />
    </svg>
  )
}

// Floating decorative shapes
export function FloatingShapes({ className }: { className?: string }) {
  return (
    <div className={clsx('absolute inset-0 overflow-hidden pointer-events-none', className)}>
      {/* Large lavender blob top right */}
      <Blob color="lavender" size="xl" className="top-0 right-0 translate-x-1/3 -translate-y-1/3" />

      {/* Medium teal blob bottom left */}
      <Blob color="teal" size="lg" className="bottom-0 left-0 -translate-x-1/3 translate-y-1/3" />

      {/* Small gold blob center right */}
      <Blob color="gold" size="md" className="top-1/2 right-0 translate-x-1/2 animation-delay-300" />
    </div>
  )
}

// Gradient mesh background
export function GradientMesh({ className }: { className?: string }) {
  return (
    <div className={clsx('absolute inset-0 overflow-hidden', className)}>
      <GradientOrb variant="lavender-teal" size="xl" className="-top-48 -left-48" />
      <GradientOrb variant="teal-gold" size="lg" className="top-1/4 right-0 translate-x-1/2" />
      <GradientOrb variant="gold-lavender" size="xl" className="-bottom-48 left-1/3" />
    </div>
  )
}

// Decorative corner accent
interface CornerAccentProps {
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
  color?: 'teal' | 'lavender' | 'gold'
  className?: string
}

export function CornerAccent({
  position = 'top-right',
  color = 'teal',
  className,
}: CornerAccentProps) {
  const positionClasses = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0 rotate-180',
    'bottom-right': 'bottom-0 right-0 -rotate-90',
  }

  const colorClasses = {
    teal: 'from-teal-400/20 to-transparent',
    lavender: 'from-lavender-400/20 to-transparent',
    gold: 'from-gold-400/20 to-transparent',
  }

  return (
    <div
      className={clsx(
        'absolute w-64 h-64 bg-gradient-to-br',
        positionClasses[position],
        colorClasses[color],
        className,
      )}
      style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
    />
  )
}
