import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { education } from '@/data/education'

export function EducationList() {
  return (
    <ul className="divide-y divide-border">
      {education.map((item) => (
        <li
          key={item.id}
          className="grid gap-4 py-5 first:pt-0 last:pb-0 md:grid-cols-[1fr_2fr] md:gap-6"
        >
          {/* Period / status column */}
          <div className="flex flex-col gap-1 text-sm md:text-right">
            <span className="text-muted">{item.period}</span>
            <span className="text-foreground/60">{item.status}</span>
          </div>

          {/* Program / institution / summary column */}
          <div className="flex flex-col gap-2">
            <div>
              <h3 className="text-base font-medium">{item.program}</h3>
              <p className="text-sm text-muted">{item.institution}</p>
            </div>
            <p className="text-sm text-foreground/80">{item.summary}</p>
            <div className="flex flex-wrap gap-x-4 gap-y-2 pt-1">
              {item.projectSlug && (
                <Link
                  to={`/proyectos/${item.projectSlug}`}
                  className="inline-flex min-h-[44px] min-w-0 max-w-full items-center gap-1 overflow-hidden text-nowrap rounded-sm border border-transparent bg-transparent px-0 py-1 text-sm font-medium text-accent-soft hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2"
                >
                  Ver proyecto de grado
                  <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                </Link>
              )}
              {item.certUrl && (
                <a
                  href={item.certUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-[44px] min-w-0 max-w-full items-center gap-1 overflow-hidden text-nowrap rounded-sm border border-transparent bg-transparent px-0 py-1 text-sm font-medium text-accent-soft hover:text-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-soft focus-visible:ring-offset-2"
                >
                  Ver certificado
                  <ArrowUpRight className="size-4 shrink-0" aria-hidden="true" />
                </a>
              )}
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
