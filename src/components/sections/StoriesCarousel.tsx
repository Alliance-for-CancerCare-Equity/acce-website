'use client'

import { useState, useEffect, useCallback } from 'react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'

// Import patient images
import rukminiImage from '../../../public/stories/rukmini.jpg'
import adisaImage from '../../../public/stories/adisa.jpg'
import cynthiaImage from '../../../public/stories/cynthia.jpeg'
import salomeyImage from '../../../public/stories/salomey.jpg'
import emmanuelImage from '../../../public/stories/emmanuel.jpg'
import faustinaImage from '../../../public/stories/faustina.jpg'
import ritaImage from '../../../public/stories/rita.jpg'

interface PatientStory {
  name: string
  condition: string
  quote: string
  image: StaticImageData
  youtubeUrl: string
}

const stories: PatientStory[] = [
  {
    name: 'Adisa Iddrisu',
    condition: 'Breast Cancer Survivor',
    quote: 'ACCE paid for my surgery and chemotherapy when I had nothing. They gave me hope when I had none.',
    image: adisaImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=ZtpmeGBW1JI',
  },
  {
    name: 'Rukmini Adjetey',
    condition: 'Cancer Survivor',
    quote: 'Without ACCE, I would not be alive today. They are truly angels on earth.',
    image: rukminiImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=DBfATugq8r4',
  },
  {
    name: 'Dr Cynthia Botchway',
    condition: 'Cancer Survivor',
    quote: 'The support I received from ACCE was incredible. They were there every step of the way.',
    image: cynthiaImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=SCVRsCAezk8',
  },
  {
    name: 'Salomey Appiah',
    condition: 'Cancer Survivor',
    quote: 'ACCE gave me a second chance at life. I am forever grateful for their compassion.',
    image: salomeyImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=TfBabZ19vqw',
  },
  {
    name: 'Emmanuel Grusi',
    condition: 'Cancer Survivor',
    quote: 'When I could not afford treatment, ACCE stepped in. They saved my life.',
    image: emmanuelImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=uMiacIM7w1Y',
  },
  {
    name: 'Faustina Anakwa',
    condition: 'Cancer Survivor',
    quote: 'ACCE not only funded my treatment but also supported my family emotionally.',
    image: faustinaImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=0x-i-cFkdh0',
  },
  {
    name: 'Rita Benson',
    condition: 'Cancer Survivor',
    quote: 'Thanks to ACCE, I can now watch my grandchildren grow. That means everything.',
    image: ritaImage,
    youtubeUrl: 'https://www.youtube.com/watch?v=pE6oODZvlV8',
  },
]

export function StoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }, [])

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 6000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  const currentStory = stories[currentIndex]

  return (
    <section className="relative py-24 sm:py-32 bg-charcoal-900 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-dot-pattern-light opacity-5" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-lavender-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gold-500/10 rounded-full blur-3xl" />

      <Container>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-gold-400 uppercase tracking-wider">
            Stories of Hope
          </span>
          <h2 className="mt-2 font-display text-4xl sm:text-5xl font-bold text-white">
            Lives Changed by <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-400 to-teal-400">Your Generosity</span>
          </h2>
        </motion.div>

        {/* Carousel container */}
        <div
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image side */}
            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-strong"
                >
                  <Image
                    src={currentStory.image}
                    alt={currentStory.name}
                    fill
                    className="object-cover"
                    placeholder="blur"
                    priority
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900/80 via-transparent to-transparent" />

                  {/* Play video button */}
                  <Link
                    href={currentStory.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="flex size-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-300">
                      <svg className="size-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </Link>

                  {/* Gold accent bar */}
                  <div className="absolute top-6 left-6 w-16 h-1.5 bg-gold-400 rounded-full" />
                </motion.div>
              </AnimatePresence>

              {/* Image overlaps container on desktop */}
              <div className="hidden lg:block absolute -left-8 top-1/2 -translate-y-1/2 w-4 h-32 bg-gradient-to-b from-teal-500 to-lavender-500 rounded-full" />
            </div>

            {/* Content side */}
            <div className="lg:pl-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  {/* Quote */}
                  <blockquote className="relative">
                    <svg
                      className="absolute -top-4 -left-2 w-16 h-16 text-lavender-500/20"
                      fill="currentColor"
                      viewBox="0 0 32 32"
                    >
                      <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                    </svg>
                    <p className="relative text-2xl sm:text-3xl lg:text-4xl font-display font-medium text-white leading-relaxed">
                      {currentStory.quote}
                    </p>
                  </blockquote>

                  {/* Attribution */}
                  <div className="mt-8 flex items-center gap-4">
                    <div className="w-12 h-0.5 bg-gold-400 rounded-full" />
                    <div>
                      <p className="font-display text-xl font-bold text-gold-400">
                        {currentStory.name}
                      </p>
                      <p className="text-sm text-charcoal-400">
                        {currentStory.condition}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="mt-10">
                    <Button href="/patients-stories" variant="outline" color="white">
                      Read all stories <span aria-hidden="true" className="ml-1">→</span>
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-4">
            {/* Prev button */}
            <button
              onClick={prevSlide}
              className="flex size-12 items-center justify-center rounded-full bg-charcoal-800 text-white hover:bg-teal-600 transition-colors"
              aria-label="Previous story"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {stories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gold-400 w-8'
                      : 'bg-charcoal-600 hover:bg-charcoal-500'
                  }`}
                  aria-label={`Go to story ${index + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={nextSlide}
              className="flex size-12 items-center justify-center rounded-full bg-charcoal-800 text-white hover:bg-teal-600 transition-colors"
              aria-label="Next story"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </Container>
    </section>
  )
}
