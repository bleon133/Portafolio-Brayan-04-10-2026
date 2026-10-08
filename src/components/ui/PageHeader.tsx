import { useReducedMotion } from 'motion/react'
import { motion } from 'motion/react'

import { Container } from '@/components/layout/Container'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
  /** Texto corto opcional, por ejemplo el estado del proyecto. */
  badge?: string
}

/** Warm editorial masthead — paper background, terracotta marker. */
export function PageHeader({ eyebrow, title, description, badge }: PageHeaderProps) {
  const prefersReducedMotion = useReducedMotion()

  return (
    <motion.header
      className="relative bg-sky pt-28 pb-12"
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={prefersReducedMotion ? false : { opacity: 1 }}
      transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3 }}
    >
      <Container>
        <p className="text-sm font-medium tracking-widest uppercase text-muted">
          {eyebrow}
        </p>

        <h1 className="mt-2 text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl">
          {title}
        </h1>

        {badge && (
          <p className="mt-3 flex items-center gap-2 text-sm text-muted">
            <span
              className="inline-block h-px w-6 bg-accent-soft"
              aria-hidden="true"
            />
            {badge}
          </p>
        )}

        {description && (
          <p className="mt-4 max-w-2xl text-lg text-foreground/80 sm:text-xl">
            {description}
          </p>
        )}

        {/* Fine bottom rule */}
        <div className="mt-8 h-px bg-border" />
      </Container>
    </motion.header>
  )
}
