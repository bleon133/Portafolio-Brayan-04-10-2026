import type { ReactNode } from 'react'

import { cn } from '@/lib/cn'

interface SectionProps {
  id: string
  /** id del encabezado de la sección, para `aria-labelledby`. */
  titleId: string
  tone?: 'background' | 'surface'
  className?: string
  children: ReactNode
}

/** Sección editorial: alto automático con espaciado vertical equilibrado. */
export function Section({ id, titleId, tone = 'background', className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        'flex flex-col py-20 sm:py-24',
        tone === 'surface' && 'bg-surface',
        className,
      )}
    >
      {children}
    </section>
  )
}
