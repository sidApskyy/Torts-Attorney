// Semantic Design Tokens
// Light-First Color System for consistency across the application

export const colors = {
  // Backgrounds - Light-First
  background: {
    primary: '#FFFFFF',       // White - primary background
    secondary: '#D9DEE4',     // Soft white - secondary background
    warm: '#F7F5EF',          // Warm light - tertiary background
    stone: '#D9DEE4',         // Light stone - editorial backgrounds
    accent: '#0F4C43',        // Primary red - brand accent background
    accentSoft: '#E3ECE9',    // Soft red - subtle accent background
    dark: '#1C2128',          // Charcoal - strategic dark contrast
    darkSecondary: '#3E4A57', // Deep charcoal - secondary dark
  },
  
  // Foregrounds - Text on Light
  foreground: {
    primary: '#1C2128',       // Primary text - dark charcoal
    secondary: '#3E4A57',     // Secondary text - medium gray
    muted: '#6B7580',         // Muted text - lighter gray
  },
  
  // Foregrounds - Text on Dark
  foregroundOnDark: {
    primary: '#FFFFFF',       // White - primary text on dark
    secondary: 'rgba(255, 255, 255, 0.7)', // White with opacity
    muted: 'rgba(255, 255, 255, 0.5)',      // White with lower opacity
  },
  
  // Borders
  border: {
    light: '#C7C0B5',         // Light border on white backgrounds
    medium: '#C7C0B5',        // Medium border
    accent: '#0F4C43',        // Red accent border
    onDark: 'rgba(255, 255, 255, 0.15)', // Border on dark backgrounds
  },
  
  // Brand Colors - Red Accents
  brand: {
    primary: '#0F4C43',       // Primary red
    deep: '#0A3B34',          // Deep red
    accent: '#B9954E',        // Bright red accent
    soft: '#E3ECE9',          // Soft red background
  },
  
  // Semantic Colors
  semantic: {
    success: '#22c55e',       // Green for success states
    error: '#ef4444',         // Red for error states
    warning: '#eab308',       // Yellow for warning states
  },
}

// Spacing tokens
export const spacing = {
  section: {
    default: 'py-20',
    large: 'py-20 md:py-28',
  },
  container: {
    default: 'px-4 sm:px-6 lg:px-8',
  },
}

// Typography tokens
export const typography = {
  heading: {
    h1: 'font-serif text-4xl md:text-5xl lg:text-6xl font-semibold',
    h2: 'font-serif text-3xl md:text-4xl lg:text-5xl font-semibold',
    h3: 'font-serif text-2xl md:text-3xl font-semibold',
    h4: 'font-serif text-xl md:text-2xl font-semibold',
  },
  body: {
    base: 'text-base',
    large: 'text-lg',
    small: 'text-sm',
  },
}
