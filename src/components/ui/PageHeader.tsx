import { motion } from 'motion/react'

import { Container } from '@/components/layout/Container'

interface PageHeaderProps {
  eyebrow: string
  title: string
  description?: string
  /** Texto corto opcional, por ejemplo el estado del proyecto. */
  badge?: string
}

/** Cabecera de color para las subpáginas. */
export function PageHeader({ eyebrow, title, description, badge }: PageHeaderProps) {
  return (
    <header className="bg-sky pt-36 pb-16">
      <Container>
        <motion.p
          className="text-sm font-medium tracking-widest uppercase"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          className="mt-3 text-5xl font-bold sm:text-7xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {badge && (
          <motion.p
            className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-1.5 text-sm font-medium text-white"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
          >
            <span aria-hidden="true" className="size-2 rounded-full bg-fog" />
            {badge}
          </motion.p>
        )}
        {description && (
          <motion.p
            className="mt-6 max-w-2xl text-lg text-foreground/80 sm:text-xl"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {description}
          </motion.p>
        )}
      </Container>
    </header>
  )
}
