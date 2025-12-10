# Mobile Performance Optimization Guide

## Current Issue
- **Desktop**: ~0.2s FCP
- **Mobile**: ~0.8s FCP (4x slower)

## Root Causes

### 1. JavaScript Bundle Size (~700KB)
- Framer Motion: 160KB
- React Framework: 140KB
- Polyfills: 92KB
- Other chunks: ~300KB

### 2. Mobile CPU Constraints
Mobile devices have 4-6x slower CPUs than desktop, making JavaScript parsing/execution much slower.

### 3. Network Speed
Mobile often uses slower 4G/3G connections vs desktop broadband.

## Solutions Implemented

### Lazy Loading Components
Created dynamic imports for heavy components:
- `src/components/DynamicFadeIn.tsx` - Lazy loads FadeIn animations
- `src/components/LazyComponents.tsx` - Lazy loads image animations

### Usage
Instead of:
```tsx
import { FadeIn } from '@/components/FadeIn'
```

Use:
```tsx
import { FadeIn } from '@/components/DynamicFadeIn'
```

This defers loading Framer Motion until needed.

### Next.js Optimizations
- `reactRemoveProperties`: Removes React dev properties in production
- `productionBrowserSourceMaps: false`: Reduces build output
- `swcMinify: true`: Better minification

## Further Optimizations (Manual)

### 1. Reduce Framer Motion Usage
Framer Motion is 160KB. Consider:
- Use CSS animations for simple effects
- Only use Framer Motion for complex animations
- Remove unnecessary motion components

### 2. Code Splitting
Split routes that aren't immediately needed:
```tsx
const HeavyComponent = dynamic(() => import('./Heavy'), { ssr: false })
```

### 3. Image Optimization
- Use WebP format
- Implement responsive images
- Lazy load below-the-fold images

### 4. Defer Third-Party Scripts
- Load Calendly widget only when needed
- Use dynamic imports for analytics

## Testing Mobile Performance

```bash
# Build for production
make build

# Test with Lighthouse (Mobile)
lighthouse http://localhost --preset=mobile --only-categories=performance

# Test with slow network
lighthouse http://localhost --throttling.rttMs=150 --throttling.throughputKbps=1638
```

## Expected Improvements

After implementing lazy loading:
- **Initial bundle**: ~500KB (down from 700KB)
- **Mobile FCP**: ~0.4-0.5s (down from 0.8s)
- **Performance score**: 85+ (up from 70-80)

## Monitoring

Track Core Web Vitals:
- **FCP** (First Contentful Paint): < 1.8s
- **LCP** (Largest Contentful Paint): < 2.5s
- **TBT** (Total Blocking Time): < 200ms
- **CLS** (Cumulative Layout Shift): < 0.1
