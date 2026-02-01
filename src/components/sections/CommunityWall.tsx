'use client'

import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

// Import patient images for the wall
import rukminiImage from '../../../public/stories/rukmini.jpg'
import adisaImage from '../../../public/stories/adisa.jpg'
import cynthiaImage from '../../../public/stories/cynthia.jpeg'
import salomeyImage from '../../../public/stories/salomey.jpg'
import emmanuelImage from '../../../public/stories/emmanuel.jpg'
import faustinaImage from '../../../public/stories/faustina.jpg'
import ritaImage from '../../../public/stories/rita.jpg'

interface CommunityMember {
  name: string
  role: string
  image: StaticImageData
  size: 'small' | 'medium' | 'large'
}

// Community members with varied sizes for masonry effect
const communityMembers: CommunityMember[] = [
  { name: 'Adisa Iddrisu', role: 'Cancer Survivor', image: adisaImage, size: 'large' },
  { name: 'Rukmini Adjetey', role: 'Cancer Survivor', image: rukminiImage, size: 'medium' },
  { name: 'Dr Cynthia Botchway', role: 'Advocate', image: cynthiaImage, size: 'small' },
  { name: 'Salomey Appiah', role: 'Cancer Survivor', image: salomeyImage, size: 'medium' },
  { name: 'Emmanuel Grusi', role: 'Cancer Survivor', image: emmanuelImage, size: 'small' },
  { name: 'Faustina Anakwa', role: 'Cancer Survivor', image: faustinaImage, size: 'large' },
  { name: 'Rita Benson', role: 'Cancer Survivor', image: ritaImage, size: 'medium' },
]

const sizeClasses = {
  small: 'col-span-1 row-span-1',
  medium: 'col-span-1 row-span-2 sm:col-span-1',
  large: 'col-span-2 row-span-2 sm:col-span-2',
}

const partners = [
  { name: 'Korle Bu Teaching Hospital', logo: null },
  { name: 'Cape Coast Teaching Hospital', logo: null },
  { name: 'Komfo Anokye Teaching Hospital', logo: null },
]

export function CommunityWall() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-teal-50">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-lavender-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-gold-200/30 rounded-full blur-3xl" />

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
            Our Community
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-charcoal-900">
            Join the <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-lavender-500">Movement</span>
          </h2>
          <p className="mt-4 text-lg text-charcoal-600 max-w-2xl mx-auto">
            Behind every statistic is a person with a family, dreams, and a future worth fighting for.
          </p>
        </motion.div>

        {/* Masonry grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[120px] sm:auto-rows-[140px]">
          {communityMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className={`relative rounded-2xl overflow-hidden group cursor-pointer ${sizeClasses[member.size]}`}
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-charcoal-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content on hover */}
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-display font-bold text-white text-sm sm:text-base truncate">
                  {member.name}
                </p>
                <p className="text-gold-400 text-xs sm:text-sm">
                  {member.role}
                </p>
              </div>

              {/* Gold frame on hover */}
              <div className="absolute inset-0 border-4 border-transparent group-hover:border-gold-400 rounded-2xl transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}

          {/* "Join the Movement" card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.35 }}
            className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden bg-gradient-to-br from-charcoal-800 to-charcoal-900 p-6 sm:p-8 flex flex-col justify-center items-center text-center"
          >
            <div className="absolute inset-0 bg-dot-pattern-light opacity-10" />
            <div className="relative z-10">
              <div className="text-5xl sm:text-6xl mb-4">🤝</div>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                Join the Movement
              </h3>
              <p className="text-charcoal-300 text-sm mb-6 max-w-xs">
                Become part of a community fighting for cancer care equity.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button href="/volunteer" color="teal" size="sm">
                  Volunteer
                </Button>
                <Button href="/giving-options" color="cta" size="sm">
                  Donate
                </Button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Partners section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-sm font-medium text-charcoal-500 uppercase tracking-wider mb-6">
            Partner Hospitals
          </p>
          <div className="flex flex-wrap justify-center gap-8 sm:gap-12">
            {partners.map((partner, index) => (
              <div
                key={partner.name}
                className="flex items-center gap-3 text-charcoal-600 hover:text-teal-600 transition-colors"
              >
                <div className="w-3 h-3 rounded-full bg-teal-400" />
                <span className="text-sm sm:text-base font-medium">{partner.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/patients-stories"
            className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition-colors"
          >
            See all patient stories
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </Link>
        </motion.div>
      </Container>
    </section>
  )
}
