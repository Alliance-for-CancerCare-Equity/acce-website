'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

type AnimationVariant =
  | 'fade-in'
  | 'fade-in-up'
  | 'fade-in-down'
  | 'scale-in'
  | 'slide-in-right'
  | 'slide-in-left'

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: AnimationVariant
  delay?: number
  duration?: number
  threshold?: number
  once?: boolean
}

const animationClasses: Record<AnimationVariant, { initial: string; animate: string }> = {
  'fade-in': {
    initial: 'opacity-0',
    animate: 'animate-fade-in',
  },
  'fade-in-up': {
    initial: 'opacity-0 translate-y-8',
    animate: 'animate-fade-in-up',
  },
  'fade-in-down': {
    initial: 'opacity-0 -translate-y-8',
    animate: 'animate-fade-in-down',
  },
  'scale-in': {
    initial: 'opacity-0 scale-90',
    animate: 'animate-scale-in',
  },
  'slide-in-right': {
    initial: 'opacity-0 translate-x-12',
    animate: 'animate-slide-in-right',
  },
  'slide-in-left': {
    initial: 'opacity-0 -translate-x-12',
    animate: 'animate-slide-in-left',
  },
}

export function AnimatedSection({
  children,
  className,
  animation = 'fade-in-up',
  delay = 0,
  duration = 700,
  threshold = 0.1,
  once = true,
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once && ref.current) {
            observer.unobserve(ref.current)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      { threshold },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [threshold, once])

  const { initial, animate } = animationClasses[animation]

  return (
    <div
      ref={ref}
      className={clsx(
        'transition-all',
        !isVisible && initial,
        isVisible && animate,
        className,
      )}
      style={{
        animationDelay: `${delay}ms`,
        animationDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  )
}

// Stagger animation wrapper for lists
interface StaggerContainerProps {
  children: React.ReactNode
  className?: string
  staggerDelay?: number
  animation?: AnimationVariant
}

export function StaggerContainer({
  children,
  className,
  staggerDelay = 100,
  animation = 'fade-in-up',
}: StaggerContainerProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={ref} className={className}>
      {Array.isArray(children)
        ? children.map((child, index) => (
            <AnimatedSection
              key={index}
              animation={animation}
              delay={isVisible ? index * staggerDelay : 0}
            >
              {child}
            </AnimatedSection>
          ))
        : children}
    </div>
  )
}

// Simple reveal animation without intersection observer
interface RevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <div
      className={clsx('animate-fade-in-up opacity-0', className)}
      style={{ animationDelay: `${delay}ms`, animationFillMode: 'forwards' }}
    >
      {children}
    </div>
  )
}

// Animated counter for stats
interface AnimatedCounterProps {
  value: number
  duration?: number
  prefix?: string
  suffix?: string
  className?: string
}

export function AnimatedCounter({
  value,
  duration = 2000,
  prefix = '',
  suffix = '',
  className,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)

          const startTime = Date.now()
          const animate = () => {
            const elapsed = Date.now() - startTime
            const progress = Math.min(elapsed / duration, 1)

            // Ease out quad
            const easeOut = 1 - (1 - progress) * (1 - progress)
            setCount(Math.floor(easeOut * value))

            if (progress < 1) {
              requestAnimationFrame(animate)
            }
          }

          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [value, duration, hasAnimated])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// Animated text reveal (letter by letter)
interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
  letterDelay?: number
}

export function AnimatedText({
  text,
  className,
  delay = 0,
  letterDelay = 30,
}: AnimatedTextProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (ref.current) {
            observer.unobserve(ref.current)
          }
        }
      },
      { threshold: 0.5 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <span ref={ref} className={clsx('inline-block', className)}>
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={clsx(
            'inline-block transition-all duration-300',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
          )}
          style={{
            transitionDelay: isVisible ? `${delay + index * letterDelay}ms` : '0ms',
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  )
}
