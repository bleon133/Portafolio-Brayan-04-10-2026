import { ArrowUpRight, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Reveal } from '@/components/ui/Reveal'
import { education } from '@/data/education'

export function EducationList() {
  return (
    <ul className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {education.map((item, index) => (
        <li key={item.id}>
          <Reveal delay={index * 0.08} className="h-full">
            <div className="flex h-full flex-col rounded-2xl border border-border bg-background p-7 sm:p-8">
              <GraduationCap className="size-7 text-accent" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-semibold">{item.program}</h3>
              <p className="mt-1 text-muted">{item.institution}</p>
              <p className="mt-3 text-sm text-muted">
                {item.period} · {item.status}
              </p>
              <p className="mt-4 flex-1 text-lg text-foreground/80">{item.summary}</p>
              {item.projectSlug && (
                <Link
                  to={`/proyectos/${item.projectSlug}`}
                  className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent-soft hover:text-foreground"
                >
                  Ver proyecto de grado
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </Link>
              )}
              {item.certUrl && (
                <a
                  href={item.certUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent-soft hover:text-foreground"
                >
                  Ver certificado
                  <ArrowUpRight className="size-4" aria-hidden="true" />
                </a>
              )}
            </div>
          </Reveal>
        </li>
      ))}
    </ul>
  )
}
