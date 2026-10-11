import { ArrowUpRight } from 'lucide-react'

import type { Project } from '@/types'

interface ProjectFactsProps {
  project: Project
  sticky?: boolean
}

export function ProjectFacts({ project, sticky = false }: ProjectFactsProps) {
  const facts = [
    { label: 'Categoría', value: project.category },
    project.origin ? { label: 'Contexto', value: project.origin } : null,
    project.year ? { label: 'Año', value: project.year } : null,
    project.role ? { label: 'Mi rol', value: project.role } : null,
    ...(project.facts ?? []),
  ].filter((fact): fact is { label: string; value: string } => fact !== null)

  return (
    <aside className={`space-y-8 ${sticky ? 'lg:sticky lg:top-28 lg:self-start' : ''}`}>
      <dl className="space-y-4">
        {facts.map((fact) => (
          <div key={fact.label}>
            <dt className="text-sm text-muted">{fact.label}</dt>
            <dd className="font-medium">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <div>
        <h2 className="text-sm font-medium tracking-widest uppercase text-muted">Stack</h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground">{project.stack.join(' · ')}</p>
      </div>

      {project.links.length > 0 && (
        <ul className="space-y-2">
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="flex min-h-11 items-center justify-between rounded-sm bg-ink px-4 font-medium text-white transition-colors duration-200 hover:bg-accent"
              >
                {link.label}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
      )}
    </aside>
  )
}
