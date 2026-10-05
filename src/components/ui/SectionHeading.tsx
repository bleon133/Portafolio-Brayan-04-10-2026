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
    <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
      <div>
        <p className="text-sm font-medium tracking-widest text-accent-soft uppercase">{eyebrow}</p>
        <h2 id={id} className="mt-2 text-4xl font-semibold sm:text-5xl lg:text-6xl">
          {title}
        </h2>
      </div>
      {action && (
        <Link
          to={action.to}
          className="group inline-flex min-h-11 items-center gap-2 text-lg font-medium text-accent-soft transition-colors duration-200 hover:text-foreground"
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
