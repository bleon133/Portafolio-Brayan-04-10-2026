import { useReducedMotion } from 'motion/react'
import { motion } from 'motion/react'
import type { Easing } from 'motion/react'

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

  const ease = [0.22, 1, 0.36, 1] as unknown as Easing[]

  return (
    <header
      className="relative bg-sky pt-[80px] pb-12"
      {...(prefersReducedMotion
        ? {}
        : {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { staggerChildren: 0.08 },
          })}
    >
      <Container>
        <motion.div
          className="relative z-10 -mt-4"
          variants={prefersReducedMotion ? undefined : {}}
          {...(prefersReducedMotion
            ? {}
            : {
                initial: { opacity: 0, y: 16 },
                animate: { opacity: 1, y: 0 },
              })}
        >
          <motion.p
            className="text-sm font-medium tracking-widest uppercase text-muted"
            {...(prefersReducedMotion
              ? {}
              : { transition: { duration: 0.4, ease } })}
          >
            {eyebrow}
          </motion.p>

          <motion.h1
            className="mt-2 text-3xl font-bold leading-tight text-ink sm:text-4xl md:text-5xl lg:text-6xl"
            {...(prefersReducedMotion
              ? {}
              : { transition: { duration: 0.4, ease } })}
          >
            {title}
          </motion.h1>

          {badge && (
            <motion.p
              className="mt-3 flex items-center gap-2 text-sm text-muted"
              {...(prefersReducedMotion
                ? {}
                : { transition: { duration: 0.4, ease } })}
            >
              <span
                className="inline-block h-px w-6 bg-accent-soft"
                aria-hidden="true"
              />
              {badge}
            </motion.p>
          )}

          {description && (
            <motion.p
              className="mt-4 max-w-2xl text-lg text-foreground/80 sm:text-xl"
              {...(prefersReducedMotion
                ? {}
                : { transition: { duration: 0.4, ease } })}
            >
              {description}
            </motion.p>
          )}
        </motion.div>

        {/* Fine bottom rule */}
        <div className="mt-8 h-px bg-border" />
      </Container>
    </header>
  )
}
