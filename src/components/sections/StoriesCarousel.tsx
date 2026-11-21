'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { Container } from '@/components/ui/Container'
import { Button } from '@/components/ui/Button'
import type { StoryHighlight } from '@/lib/stories'

/** Longer quotes get smaller type, so every slide takes up a similar amount of room. */
function quoteSize(quote: string) {
  if (quote.length > 170) return 'text-lg sm:text-xl lg:text-2xl'
  if (quote.length > 110) return 'text-xl sm:text-2xl lg:text-3xl'
  return 'text-2xl sm:text-3xl lg:text-4xl'
}

/** How long a slide stays up: at least six seconds, longer for a longer quote. */
function readingTime(quote: string) {
  return Math.max(6000, quote.length * 65)
}

function StoryQuote({ story }: { story: StoryHighlight }) {
  // When someone else speaks for the patient, credit the speaker and name the patient beneath.
  const detail = story.quoteBy
    ? [story.name, story.condition].filter(Boolean).join(', ')
    : story.condition

  return (
    <>
      <blockquote className="relative">
        <svg
          className="absolute -top-4 -left-2 w-16 h-16 text-lavender-500/20"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <p
          className={clsx(
            'relative font-display font-medium text-white leading-relaxed',
            quoteSize(story.quote),
          )}
        >
          {story.quote}
        </p>
      </blockquote>

      {/* Attribution */}
      <div className="mt-8 flex items-center gap-4">
        <div className="w-12 h-0.5 bg-gold-400 rounded-full" />
        <div>
          <p className="font-display text-xl font-bold text-gold-400">
            {story.quoteBy ?? story.name}
          </p>
          {detail && <p className="text-sm text-charcoal-400">{detail}</p>}
        </div>
      </div>
    </>
  )
}

/**
 * Rotating patient quotes for the home page. The stories come from
 * `getStoryHighlights()` in src/lib/stories.ts, so this always shows the same
 * people, order and quotes as the Patient Stories page.
 */
export function StoriesCarousel({ stories }: { stories: StoryHighlight[] }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % stories.length)
  }, [stories.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length)
  }, [stories.length])

  const currentStory = stories[currentIndex]

  // Auto-advance carousel
  useEffect(() => {
    if (!isAutoPlaying || !currentStory) return
    const timer = setTimeout(nextSlide, readingTime(currentStory.quote))
    return () => clearTimeout(timer)
  }, [isAutoPlaying, currentStory, nextSlide])

  if (!currentStory) return null

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
                  key={currentStory.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5 }}
                  className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-strong bg-charcoal-800"
                >
                  {/* Blurred background fill */}
                  <Image
                    src={currentStory.imageUrl}
                    alt=""
                    aria-hidden="true"
                    fill
                    className="object-cover scale-110 blur-md opacity-40"
                    placeholder="blur"
                    priority
                  />
                  {/* Foreground image */}
                  <Image
                    src={currentStory.imageUrl}
                    alt={currentStory.name}
                    fill
                    className="relative z-10 object-contain object-center"
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
                    aria-label={`Watch ${currentStory.name}'s story on YouTube`}
                    className="absolute inset-0 flex items-center justify-center group"
                  >
                    <div className="flex size-20 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/30 group-hover:bg-teal-500 group-hover:border-teal-500 transition-all duration-300">
                      <svg className="size-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
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
              {/*
                Every quote sits in the same grid cell, all but one of them
                invisible. That keeps this block as tall as the longest quote,
                so the page below does not jump each time the slide changes.
              */}
              <div className="grid items-center">
                {stories.map((story) => (
                  <div
                    key={story.slug}
                    aria-hidden="true"
                    className="invisible col-start-1 row-start-1"
                  >
                    <StoryQuote story={story} />
                  </div>
                ))}
                <div className="col-start-1 row-start-1">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStory.slug}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.5 }}
                    >
                      <StoryQuote story={currentStory} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* CTA */}
              <div className="mt-10">
                <Button href="/patients-stories" variant="outline" color="white">
                  Read all stories <span aria-hidden="true" className="ml-1">→</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="mt-12 flex items-center justify-center gap-4">
            {/* Prev button */}
            <button
              onClick={prevSlide}
              className="flex size-12 flex-none items-center justify-center rounded-full bg-charcoal-800 text-white hover:bg-teal-600 transition-colors"
              aria-label="Previous story"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex items-center gap-1.5 sm:gap-2">
              {stories.map((story, index) => (
                <button
                  key={story.slug}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2 sm:h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gold-400 w-6 sm:w-8'
                      : 'w-2 sm:w-2.5 bg-charcoal-600 hover:bg-charcoal-500'
                  }`}
                  aria-label={`Go to story ${index + 1}: ${story.name}`}
                  aria-current={index === currentIndex ? 'true' : undefined}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={nextSlide}
              className="flex size-12 flex-none items-center justify-center rounded-full bg-charcoal-800 text-white hover:bg-teal-600 transition-colors"
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
