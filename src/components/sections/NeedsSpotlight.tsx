'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Container } from '@/components/ui/Container'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { motion } from 'framer-motion'

const needs = {
  featured: {
    title: 'Treatment Funding Needed',
    description:
      'Every month, new patients come to us unable to afford life-saving cancer treatment. Your donation directly covers chemotherapy, surgery, and medication costs.',
    raised: 100000,
    goal: 150000,
    image: '/images/home.jpg',
    cta: 'Fund Treatment',
    href: '/giving-options',
  },
  secondary: [
    {
      title: 'Community Support',
      description: 'Help families with transportation, housing, and emotional support during treatment.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
      ),
      color: 'lavender' as const,
      href: '/support-patients-and-their-families',
    },
    {
      title: 'Research & Education',
      description: 'Advance cancer research and educate communities for better prevention.',
      icon: (
        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
        </svg>
      ),
      color: 'gold' as const,
      href: '/promote-and-advance-cancer-research',
    },
  ],
}

const colorStyles = {
  lavender: {
    bg: 'bg-lavender-50',
    icon: 'bg-lavender-100 text-lavender-600',
    border: 'border-lavender-200',
    hover: 'hover:border-lavender-400 hover:shadow-glow-lavender',
  },
  gold: {
    bg: 'bg-gold-50',
    icon: 'bg-gold-100 text-gold-600',
    border: 'border-gold-200',
    hover: 'hover:border-gold-400 hover:shadow-glow-gold',
  },
}

export function NeedsSpotlight() {
  return (
    <section className="relative py-24 sm:py-32 bg-lavender-50 overflow-hidden">
      {/* Wave divider at top */}
      <div className="absolute top-0 left-0 right-0 -translate-y-full">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-20 sm:h-28">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="currentColor"
            className="text-lavender-50"
          />
        </svg>
      </div>

      {/* Decorative orbs */}
      <div className="absolute top-20 right-10 w-64 h-64 bg-gold-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 bg-teal-200/20 rounded-full blur-3xl" />

      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-700 ring-1 ring-inset ring-red-200 mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            Urgent Needs
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-charcoal-900">
            Your Help Is Needed <span className="text-red-500">Today</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal-600 max-w-2xl mx-auto">
            Real patients are waiting for treatment they cannot afford. Every donation brings hope.
          </p>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-5 gap-6 lg:gap-8">
          {/* Featured card (3 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3 relative bg-white rounded-3xl shadow-medium overflow-hidden group"
          >
            {/* Image section */}
            <div className="relative h-64 sm:h-80">
              <Image
                src={needs.featured.image}
                alt="Cancer treatment"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/40 to-transparent" />

              {/* Badge */}
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white">
                  Featured Need
                </span>
              </div>
            </div>

            {/* Content section */}
            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-charcoal-900">
                {needs.featured.title}
              </h3>
              <p className="mt-3 text-charcoal-600 leading-relaxed">
                {needs.featured.description}
              </p>

              {/* Progress bar */}
              <div className="mt-6">
                <ProgressBar
                  value={needs.featured.raised}
                  max={needs.featured.goal}
                  showValues
                  showPercentage
                  size="lg"
                  color="teal"
                />
              </div>

              {/* CTA */}
              <div className="mt-6 flex items-center gap-4">
                <Button href={needs.featured.href} color="cta" size="lg">
                  <span className="flex items-center gap-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>
                    Give Hope Today
                  </span>
                </Button>
                <Link
                  href="/fund-cancer-treatment-and-related-costs"
                  className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Secondary cards (2 columns) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {needs.secondary.map((need, index) => {
              const styles = colorStyles[need.color]
              return (
                <motion.div
                  key={need.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  className={`flex-1 ${styles.bg} rounded-2xl p-6 border-2 ${styles.border} ${styles.hover} transition-all duration-300 group`}
                >
                  <div className={`inline-flex p-3 rounded-xl ${styles.icon} mb-4`}>
                    {need.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal-900 group-hover:text-charcoal-800">
                    {need.title}
                  </h3>
                  <p className="mt-2 text-sm text-charcoal-600 leading-relaxed">
                    {need.description}
                  </p>
                  <Link
                    href={need.href}
                    className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-charcoal-700 hover:text-charcoal-900 transition-colors"
                  >
                    Support this cause
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </section>
  )
}
