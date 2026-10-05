import type { ReactNode } from 'react'

import { Reveal } from '@/components/ui/Reveal'

interface TimelineItem {
  id: string
  /** Texto corto a la izquierda, por ejemplo el periodo. */
  meta: string
  content: ReactNode
}

/** Línea de tiempo vertical. Cada elemento aparece al entrar en pantalla. */
export function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <ol className="relative space-y-10 border-l border-border pl-6 sm:pl-10">
      {items.map((item, index) => (
        <li key={item.id} className="relative">
          <span
            aria-hidden="true"
            className="absolute top-1.5 -left-[1.95rem] size-3 rounded-full border-2 border-accent bg-background sm:-left-[2.95rem]"
          />
          <Reveal delay={index * 0.08}>
            <p className="text-sm font-medium text-accent-soft">{item.meta}</p>
            <div className="mt-2">{item.content}</div>
          </Reveal>
        </li>
      ))}
    </ol>
  )
}
