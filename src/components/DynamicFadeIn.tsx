'use client'

import dynamic from 'next/dynamic'

// Lazy load FadeIn components to reduce initial bundle
export const FadeIn = dynamic(
  () => import('./FadeIn').then(mod => ({ default: mod.FadeIn })),
  {
    ssr: true,
    loading: () => <div style={{ opacity: 0.3 }} />,
  }
)

export const FadeInStagger = dynamic(
  () => import('./FadeIn').then(mod => ({ default: mod.FadeInStagger })),
  {
    ssr: true,
    loading: () => <div />,
  }
)
