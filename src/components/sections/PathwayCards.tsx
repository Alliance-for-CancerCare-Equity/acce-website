'use client'

import { useRef, useState } from 'react'
import Link from 'next/link'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import { Container } from '@/components/ui/Container'

interface Pathway {
  title: string
  subtitle: string
  description: string
  icon: React.ReactNode
  href: string
  color: 'red' | 'teal' | 'lavender'
  cta: string
}

const pathways: Pathway[] = [
  {
    title: 'Donate',
    subtitle: 'Give Hope',
    description: 'Your donation directly funds life-saving cancer treatment for patients who cannot afford it.',
    icon: (
      <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
      </svg>
    ),
    href: '/giving-options',
    color: 'red',
    cta: 'Donate Now',
  },
  {
    title: 'Volunteer',
    subtitle: 'Give Time',
    description: 'Join our team of dedicated volunteers making a difference in patients\' lives every day.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    href: '/volunteer',
    color: 'teal',
    cta: 'Get Involved',
  },
  {
    title: 'Partner',
    subtitle: 'Give Together',
    description: 'Partner with ACCE to amplify your impact and bring cancer care equity to more communities.',
    icon: (
      <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75" />
      </svg>
    ),
    href: '/partner-with-us',
    color: 'lavender',
    cta: 'Partner With Us',
  },
]

const colorStyles = {
  red: {
    gradient: 'from-red-500 to-gold-500',
    bg: 'bg-red-50',
    icon: 'text-red-500',
    border: 'border-red-200',
    button: 'bg-red-500 hover:bg-red-600 text-white',
    glow: 'group-hover:shadow-[0_20px_50px_-12px_rgba(192,57,43,0.4)]',
  },
  teal: {
    gradient: 'from-teal-500 to-teal-600',
    bg: 'bg-teal-50',
    icon: 'text-teal-500',
    border: 'border-teal-200',
    button: 'bg-teal-500 hover:bg-teal-600 text-white',
    glow: 'group-hover:shadow-[0_20px_50px_-12px_rgba(42,157,143,0.4)]',
  },
  lavender: {
    gradient: 'from-lavender-500 to-lavender-600',
    bg: 'bg-lavender-50',
    icon: 'text-lavender-500',
    border: 'border-lavender-200',
    button: 'bg-lavender-500 hover:bg-lavender-600 text-white',
    glow: 'group-hover:shadow-[0_20px_50px_-12px_rgba(155,139,184,0.4)]',
  },
}

function PathwayCard({ pathway, index }: { pathway: Pathway; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg'])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg'])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  const styles = colorStyles[pathway.color]

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: isHovered ? rotateX : 0,
        rotateY: isHovered ? rotateY : 0,
        transformStyle: 'preserve-3d',
      }}
      className={`group relative bg-white rounded-3xl p-8 sm:p-10 border-2 ${styles.border} ${styles.glow} transition-shadow duration-300`}
    >
      {/* Gradient top bar */}
      <div className={`absolute top-0 left-6 right-6 h-1.5 bg-gradient-to-r ${styles.gradient} rounded-b-full`} />

      {/* Icon */}
      <motion.div
        style={{ transform: isHovered ? 'translateZ(30px)' : 'translateZ(0px)' }}
        className={`inline-flex p-4 rounded-2xl ${styles.bg} ${styles.icon} mb-6`}
      >
        {pathway.icon}
      </motion.div>

      {/* Content */}
      <motion.div style={{ transform: isHovered ? 'translateZ(20px)' : 'translateZ(0px)' }}>
        <p className="text-sm font-medium text-charcoal-500 uppercase tracking-wider mb-1">
          {pathway.subtitle}
        </p>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal-900 mb-3">
          {pathway.title}
        </h3>
        <p className="text-charcoal-600 leading-relaxed mb-8">
          {pathway.description}
        </p>
      </motion.div>

      {/* CTA */}
      <motion.div style={{ transform: isHovered ? 'translateZ(40px)' : 'translateZ(0px)' }}>
        <Link
          href={pathway.href}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-200 ${styles.button}`}
        >
          {pathway.cta}
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </Link>
      </motion.div>

      {/* Decorative corner accent */}
      <div className={`absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl ${styles.gradient} opacity-5 rounded-tl-full`} />
    </motion.div>
  )
}

export function PathwayCards() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      {/* Diagonal split background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-lavender-50" />
        <div className="absolute inset-0 bg-white clip-path-diagonal" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold-100/30 rounded-full blur-3xl" />

      <Container className="relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
            Get Involved
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-charcoal-900">
            Three Ways to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-teal-500 to-lavender-500">Make a Difference</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal-600 max-w-2xl mx-auto">
            Choose how you want to support the fight for cancer care equity.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" style={{ perspective: '1000px' }}>
          {pathways.map((pathway, index) => (
            <PathwayCard key={pathway.title} pathway={pathway} index={index} />
          ))}
        </div>

        {/* Bottom message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center text-charcoal-500"
        >
          Not sure where to start?{' '}
          <Link href="/contact-us" className="text-teal-600 font-semibold hover:text-teal-700 transition-colors">
            Contact us
          </Link>{' '}
          and we&apos;ll help you find the best way to contribute.
        </motion.p>
      </Container>

      <style jsx>{`
        .clip-path-diagonal {
          clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
        }
      `}</style>
    </section>
  )
}
