'use client'

import { useEffect, useState, useRef } from 'react'

export function AnimatedNumber({
  value,
  suffix = '',
}: {
  value: number
  suffix?: string
}) {
  const [count, setCount] = useState(0)
  const [animationComplete, setAnimationComplete] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null
          const duration = 2000 // Animation duration in milliseconds

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const linearProgress = Math.min(
              (timestamp - startTimestamp) / duration,
              1,
            )
            // Apply an ease-out function
            const easedProgress = linearProgress * (2 - linearProgress)
            setCount(Math.floor(easedProgress * value))

            if (linearProgress >= 1) {
              setAnimationComplete(true)
            }
            if (linearProgress < 1) {
              window.requestAnimationFrame(step)
            }
          }
          window.requestAnimationFrame(step)
          observer.disconnect() // Animate only once
        }
      },
      { threshold: 0.1 }, // Trigger when 10% of the element is visible
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [value])

  return (
    <span ref={ref}>
      {count}
      {animationComplete && suffix}
    </span>
  )
}