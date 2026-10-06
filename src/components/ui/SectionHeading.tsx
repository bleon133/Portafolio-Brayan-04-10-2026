import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

interface SectionHeadingProps {
  eyebrow: string
  title: string
  id: string
  /** Enlace opcional a la página completa de la sección. */
  action?: { label: string; to: string }
}

export function SectionHeading({ eyebrow, title, id, action }: SectionHeadingProps) {
  return (
    <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
      <div>
        <p className="text-xs font-semibold tracking-[0.12em] text-muted uppercase">{eyebrow}</p>
        <h2 id={id} className="mt-3 font-display text-4xl font-semibold leading-none text-ink text-balance lg:text-5xl">
          {title}
        </h2>
      </div>
      {action && (
        <Link
          to={action.to}
          className="group inline-flex min-h-11 items-center gap-2 text-[17px] font-medium tracking-[-0.01em] text-accent-soft transition-colors duration-200 hover:text-ink"
        >
          {action.label}
          <ArrowRight
            className="size-5 transition-transform duration-200 group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      )}
    </div>
  )
}
