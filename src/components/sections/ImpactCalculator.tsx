'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import { AnimatedNumber } from '@/components/ui/AnimatedNumber'

// Impact data - what each donation amount can provide
const impactTiers = [
  { amount: 25, impact: '1 week of medication', icon: '💊' },
  { amount: 50, impact: '2 weeks of medication', icon: '💊' },
  { amount: 100, impact: '1 chemotherapy session support', icon: '💉' },
  { amount: 250, impact: '1 month of treatment support', icon: '🏥' },
  { amount: 500, impact: 'Transportation for 3 months', icon: '🚗' },
  { amount: 1000, impact: 'Full surgery support', icon: '🩺' },
  { amount: 2500, impact: '3 months of complete care', icon: '❤️' },
  { amount: 5000, impact: '6 months of treatment funding', icon: '🌟' },
]

function getImpactForAmount(amount: number) {
  // Find the closest tier
  for (let i = impactTiers.length - 1; i >= 0; i--) {
    if (amount >= impactTiers[i].amount) {
      return impactTiers[i]
    }
  }
  return { amount: 0, impact: 'Help a patient in need', icon: '💝' }
}

export function ImpactCalculator() {
  const [donationAmount, setDonationAmount] = useState(100)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const currentImpact = getImpactForAmount(donationAmount)

  // Stats with impact equations
  const impactStats = [
    {
      value: 100,
      prefix: '$',
      suffix: 'k+',
      label: 'Raised',
      equation: '= 65+ patients treated',
    },
    {
      value: 65,
      suffix: '+',
      label: 'Patients',
      equation: '= 65+ families helped',
    },
    {
      value: 3,
      label: 'Hospitals',
      equation: '= 1000s of patients reached',
    },
  ]

  return (
    <section ref={ref} className="relative py-24 sm:py-32 overflow-hidden bg-lavender-50">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20" />
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-200/40 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-teal-200/30 rounded-full blur-3xl" />

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
            Your Impact
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-charcoal-900">
            See What Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-500 to-gold-600">Generosity</span> Creates
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Impact Stats */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-6">
              {impactStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative bg-white rounded-2xl p-6 shadow-soft border-l-4 border-teal-500 hover:shadow-medium transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-display text-4xl font-bold text-charcoal-900">
                        {stat.prefix}
                        <AnimatedNumber value={stat.value} />
                        {stat.suffix}
                      </div>
                      <div className="text-sm font-medium text-charcoal-500 uppercase tracking-wide mt-1">
                        {stat.label}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl text-gold-600 font-medium">
                        {stat.equation}
                      </div>
                    </div>
                  </div>
                  {/* Decorative gold bar */}
                  <div className="absolute bottom-0 right-6 left-6 h-1 bg-gradient-to-r from-gold-300 to-gold-500 rounded-full opacity-50" />
                </motion.div>
              ))}
            </div>

            {/* Additional context */}
            <p className="mt-8 text-charcoal-600 text-center lg:text-left">
              Every dollar goes directly to patient care. <span className="font-semibold text-teal-600">100% of donations</span> fund treatment, support, and recovery.
            </p>
          </motion.div>

          {/* Right side - Interactive Calculator */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 shadow-strong border-2 border-lavender-200">
              <h3 className="font-display text-2xl font-bold text-charcoal-900 text-center mb-8">
                Calculate Your Impact
              </h3>

              {/* Amount display */}
              <div className="text-center mb-8">
                <div className="inline-flex items-baseline gap-1">
                  <span className="text-2xl text-charcoal-500">$</span>
                  <motion.span
                    key={donationAmount}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="font-display text-6xl font-bold text-charcoal-900"
                  >
                    {donationAmount}
                  </motion.span>
                </div>
              </div>

              {/* Slider */}
              <div className="relative mb-8">
                <input
                  type="range"
                  min="25"
                  max="5000"
                  step="25"
                  value={donationAmount}
                  onChange={(e) => setDonationAmount(parseInt(e.target.value))}
                  className="w-full h-3 bg-charcoal-100 rounded-full appearance-none cursor-pointer
                    [&::-webkit-slider-thumb]:appearance-none
                    [&::-webkit-slider-thumb]:w-6
                    [&::-webkit-slider-thumb]:h-6
                    [&::-webkit-slider-thumb]:bg-teal-500
                    [&::-webkit-slider-thumb]:rounded-full
                    [&::-webkit-slider-thumb]:shadow-medium
                    [&::-webkit-slider-thumb]:cursor-pointer
                    [&::-webkit-slider-thumb]:border-4
                    [&::-webkit-slider-thumb]:border-white
                    [&::-webkit-slider-thumb]:transition-transform
                    [&::-webkit-slider-thumb]:hover:scale-110
                    [&::-moz-range-thumb]:w-6
                    [&::-moz-range-thumb]:h-6
                    [&::-moz-range-thumb]:bg-teal-500
                    [&::-moz-range-thumb]:rounded-full
                    [&::-moz-range-thumb]:border-4
                    [&::-moz-range-thumb]:border-white
                    [&::-moz-range-thumb]:cursor-pointer
                  "
                  style={{
                    background: `linear-gradient(to right, #2A9D8F 0%, #2A9D8F ${((donationAmount - 25) / (5000 - 25)) * 100}%, #e5e7eb ${((donationAmount - 25) / (5000 - 25)) * 100}%, #e5e7eb 100%)`
                  }}
                />
                <div className="flex justify-between mt-2 text-sm text-charcoal-400">
                  <span>$25</span>
                  <span>$5,000</span>
                </div>
              </div>

              {/* Quick amount buttons */}
              <div className="flex flex-wrap gap-2 justify-center mb-8">
                {[50, 100, 250, 500, 1000].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setDonationAmount(amount)}
                    className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                      donationAmount === amount
                        ? 'bg-teal-500 text-white'
                        : 'bg-charcoal-100 text-charcoal-700 hover:bg-charcoal-200'
                    }`}
                  >
                    ${amount}
                  </button>
                ))}
              </div>

              {/* Impact display */}
              <motion.div
                key={currentImpact.amount}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-gradient-to-r from-lavender-50 to-gold-50 rounded-2xl p-6 text-center mb-8"
              >
                <div className="text-4xl mb-2">{currentImpact.icon}</div>
                <p className="text-lg font-medium text-charcoal-900">
                  Your <span className="text-teal-600 font-bold">${donationAmount}</span> could provide:
                </p>
                <p className="text-2xl font-display font-bold text-charcoal-900 mt-2">
                  {currentImpact.impact}
                </p>
              </motion.div>

              {/* CTA */}
              <Button href="/giving-options" color="cta" size="xl" className="w-full justify-center">
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                  Donate ${donationAmount} Now
                </span>
              </Button>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 -top-4 -right-4 w-full h-full bg-gradient-to-br from-teal-100 to-lavender-100 rounded-3xl" />
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
