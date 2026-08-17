'use client'

import { motion } from 'framer-motion'

interface ImagePlaceholderProps {
  label: string
  description: string
  className?: string
  rounded?: string
  aspectRatio?: string
  dark?: boolean
}

export function ImagePlaceholder({
  label,
  description,
  className = '',
  rounded = 'rounded-2xl',
  aspectRatio,
  dark = false,
}: ImagePlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`image-placeholder ${rounded} ${dark ? 'image-placeholder--dark' : 'image-placeholder--light'} ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
    >
      <div className="image-placeholder__grid" />
      <div className="image-placeholder__content">
        <div className="image-placeholder__icon">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="8" width="36" height="32" rx="4" stroke="currentColor" strokeWidth="2" />
            <circle cx="18" cy="20" r="3" stroke="currentColor" strokeWidth="2" />
            <path d="M6 32L16 22L24 30L32 18L42 28V36C42 37.1046 41.1046 38 40 38H8C6.89543 38 6 37.1046 6 36V32Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="image-placeholder__label">{label}</p>
        <p className="image-placeholder__desc">{description}</p>
      </div>
    </motion.div>
  )
}

export default ImagePlaceholder
