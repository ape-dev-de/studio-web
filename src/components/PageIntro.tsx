import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function PageIntro({
  eyebrow,
  title,
  children,
  className,
  centered = false,
}: {
  eyebrow: string
  title: string
  children: React.ReactNode
  centered?: boolean
    className?: string
}) {
  return (
    <Container
      className={clsx('mt-24', centered && 'text-center', className)}
    >
        <h1>
          <span className="block font-display text-base font-semibold text-neutral-950">
            {eyebrow}
          </span>
          <span className="sr-only"> - </span>
          <span
            className={clsx(
              'mt-6 block max-w-5xl font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-6xl',
              centered && 'mx-auto',
            )}
          >
            {title}
          </span>
        </h1>
        <div
          className={clsx(
            'mt-6 max-w-3xl text-xl text-neutral-600',
            centered && 'mx-auto',
          )}
        >
          {children}
        </div>
    </Container>
  )
}
