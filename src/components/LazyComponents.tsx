'use client'

import dynamic from 'next/dynamic'

// Lazy load heavy animation components
export const GrayscaleTransitionImage = dynamic(
  () => import('./GrayscaleTransitionImage').then(mod => ({ default: mod.GrayscaleTransitionImage })),
  {
    ssr: false,
    loading: () => <div className="animate-pulse bg-gray-200" />,
  }
)

export const StylizedImage = dynamic(
  () => import('./StylizedImage').then(mod => ({ default: mod.StylizedImage })),
  {
    ssr: false,
    loading: () => <div className="animate-pulse bg-gray-200" />,
  }
)

export const GridPattern = dynamic(
  () => import('./GridPattern').then(mod => ({ default: mod.GridPattern })),
  {
    ssr: false,
  }
)
