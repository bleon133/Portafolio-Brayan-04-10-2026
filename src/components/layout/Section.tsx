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

/** Sección de la Home: ocupa al menos el alto de la ventana y centra su contenido. */
export function Section({ id, titleId, tone = 'background', className, children }: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={titleId}
      className={cn(
        'flex min-h-dvh flex-col justify-center py-24',
        tone === 'surface' && 'bg-surface',
        className,
      )}
    >
      {children}
    </section>
  )
}
