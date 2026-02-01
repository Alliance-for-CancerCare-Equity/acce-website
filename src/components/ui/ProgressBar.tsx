'use client'

import { useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface ProgressBarProps {
  value: number
  max: number
  label?: string
  showPercentage?: boolean
  showValues?: boolean
  size?: 'sm' | 'md' | 'lg'
  color?: 'teal' | 'lavender' | 'gold' | 'red'
  className?: string
}

const sizeStyles = {
  sm: 'h-2',
  md: 'h-3',
  lg: 'h-4',
}

const colorStyles = {
  teal: 'from-teal-400 to-teal-600',
  lavender: 'from-lavender-400 to-lavender-600',
  gold: 'from-gold-400 to-gold-600',
  red: 'from-red-400 to-red-600',
}

export function ProgressBar({
  value,
  max,
  label,
  showPercentage = false,
  showValues = false,
  size = 'md',
  color = 'teal',
  className = '',
}: ProgressBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const percentage = Math.min((value / max) * 100, 100)

  return (
    <div ref={ref} className={className}>
      {(label || showPercentage || showValues) && (
        <div className="flex justify-between items-center mb-2">
          {label && <span className="text-sm font-medium text-charcoal-700">{label}</span>}
          <div className="flex items-center gap-3">
            {showValues && (
              <span className="text-sm text-charcoal-500">
                ${value.toLocaleString()} of ${max.toLocaleString()}
              </span>
            )}
            {showPercentage && (
              <span className="text-sm font-semibold text-charcoal-900">
                {Math.round(percentage)}%
              </span>
            )}
          </div>
        </div>
      )}
      <div className={`relative ${sizeStyles[size]} bg-charcoal-100 rounded-full overflow-hidden`}>
        <motion.div
          className={`absolute inset-y-0 left-0 bg-gradient-to-r ${colorStyles[color]} rounded-full`}
          initial={{ width: 0 }}
          animate={isInView ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* Shimmer effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          animate={isInView ? { x: '200%' } : { x: '-100%' }}
          transition={{ duration: 2, delay: 0.5, ease: 'easeInOut' }}
        />
      </div>
    </div>
  )
}
