'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'

const journeySteps = [
  {
    id: 1,
    title: 'Discovery',
    subtitle: 'Finding Hope',
    description: 'When patients are diagnosed with cancer, we help them navigate the healthcare system and understand their options.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    color: 'lavender',
    href: '/who-we-are',
  },
  {
    id: 2,
    title: 'Treatment Funding',
    subtitle: 'Removing Barriers',
    description: 'We cover the costs of chemotherapy, surgery, radiation, and medications for patients who cannot afford them.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'teal',
    href: '/fund-cancer-treatment-and-related-costs',
  },
  {
    id: 3,
    title: 'Support',
    subtitle: 'Walking Together',
    description: 'We provide comprehensive support including transportation, housing assistance, and emotional counseling for patients and families.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    color: 'gold',
    href: '/support-patients-and-their-families',
  },
  {
    id: 4,
    title: 'Recovery',
    subtitle: 'Celebrating Life',
    description: 'We celebrate every victory and continue to support survivors as they rebuild their lives after treatment.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    color: 'red',
    href: '/patients-stories',
  },
]

const colorStyles = {
  lavender: {
    bg: 'bg-lavender-100',
    icon: 'bg-lavender-500 text-white',
    border: 'border-lavender-300',
    text: 'text-lavender-600',
    glow: 'shadow-glow-lavender',
  },
  teal: {
    bg: 'bg-teal-100',
    icon: 'bg-teal-500 text-white',
    border: 'border-teal-300',
    text: 'text-teal-600',
    glow: 'shadow-glow-teal',
  },
  gold: {
    bg: 'bg-gold-100',
    icon: 'bg-gold-500 text-white',
    border: 'border-gold-300',
    text: 'text-gold-600',
    glow: 'shadow-glow-gold',
  },
  red: {
    bg: 'bg-red-100',
    icon: 'bg-red-500 text-white',
    border: 'border-red-300',
    text: 'text-red-600',
    glow: 'hover:shadow-[0_0_24px_-4px_rgba(192,57,43,0.35)]',
  },
}

export function JourneyTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-b from-white to-lavender-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-teal-100/30 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gold-100/30 rounded-full blur-3xl translate-y-1/2" />

      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-sm font-semibold text-teal-600 uppercase tracking-wider">
            How We Help
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-charcoal-900">
            The Patient Journey
          </h2>
          <p className="mt-4 text-lg text-charcoal-600 max-w-2xl mx-auto">
            From diagnosis to recovery, we walk alongside patients every step of the way.
          </p>
        </motion.div>

        {/* Timeline */}
        <div ref={ref} className="relative">
          {/* Connecting line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-charcoal-100">
            <motion.div
              className="h-full bg-gradient-to-r from-lavender-400 via-teal-400 via-gold-400 to-red-400"
              initial={{ width: 0 }}
              animate={isInView ? { width: '100%' } : { width: 0 }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          {/* Steps grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {journeySteps.map((step, index) => {
              const styles = colorStyles[step.color as keyof typeof colorStyles]
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: isEven ? 30 : -30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  className={`relative ${isEven ? 'lg:pt-32' : 'lg:pb-32'}`}
                >
                  {/* Step card */}
                  <Link
                    href={step.href}
                    className={`group block relative bg-white rounded-2xl p-6 border-2 ${styles.border} hover:${styles.glow} transition-all duration-300 hover:-translate-y-1`}
                  >
                    {/* Step number */}
                    <div className="absolute -top-4 -left-2 w-8 h-8 rounded-full bg-charcoal-900 text-white text-sm font-bold flex items-center justify-center">
                      {step.id}
                    </div>

                    {/* Icon */}
                    <div className={`inline-flex p-3 rounded-xl ${styles.icon} mb-4 shadow-medium`}>
                      {step.icon}
                    </div>

                    {/* Content */}
                    <h3 className="font-display text-xl font-bold text-charcoal-900 group-hover:text-charcoal-700">
                      {step.title}
                    </h3>
                    <p className={`text-sm font-medium ${styles.text} mb-2`}>
                      {step.subtitle}
                    </p>
                    <p className="text-sm text-charcoal-600 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow indicator */}
                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-charcoal-500 group-hover:text-teal-600 transition-colors">
                      Learn more
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </Link>

                  {/* Connector dot - Desktop */}
                  <div className={`hidden lg:block absolute left-1/2 -translate-x-1/2 ${isEven ? 'top-24' : 'bottom-24'}`}>
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.15 }}
                      className={`w-4 h-4 rounded-full ${styles.icon} ring-4 ring-white`}
                    />
                    {/* Vertical connector */}
                    <div className={`absolute left-1/2 -translate-x-1/2 w-0.5 h-8 ${styles.bg} ${isEven ? '-top-8' : '-bottom-8'}`} />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <p className="text-charcoal-600 mb-4">
            Want to help patients on their journey?
          </p>
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
          >
            See how you can get involved
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
