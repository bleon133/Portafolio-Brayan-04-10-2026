import { Link } from 'react-router-dom'

import { companyProjects, experiences } from '@/data/experience'
import { getProject } from '@/data/projects'
import { formatPeriod, sortByDateDesc } from '@/lib/collections'

export function ExperienceTimeline() {
  const items = sortByDateDesc(experiences, (item) => item.start).map((item) => ({
    id: item.id,
    meta: formatPeriod(item.start, item.end),
    data: item,
  }))

  return (
    <ol className="border-l border-border pl-4 sm:pl-8">
      {items.map((entry) => {
        const item = entry.data
        const projects = companyProjects[item.id]
          ? companyProjects[item.id].map((slug) => getProject(slug)).filter((p): p is NonNullable<typeof p> => !!p)
          : []

        return (
          <li
            key={item.id}
            className="relative border-t border-border last:border-b-0 sm:grid sm:grid-cols-[140px_1fr] sm:gap-4 sm:pl-0"
          >
            {/* Marker dot on the rail */}
            <span
              aria-hidden="true"
              className="absolute left-[-21px] top-3 size-2.5 rounded-full border border-accent bg-background sm:left-[-37px]"
            />

            {/* Meta / date column (desktop) */}
            <time
              className="pt-3 text-sm font-medium text-accent-soft sm:sticky sm:top-0 sm:py-6 sm:text-right"
              dateTime={item.start}
            >
              {entry.meta}
            </time>

            {/* Content column */}
            <div className="pb-8 pt-4 sm:py-6">
              {/* Role + company/location */}
              <header>
                <h2 className="text-xl font-semibold sm:text-2xl">{item.role}</h2>
                <p className="mt-1 text-sm text-muted sm:text-base">
                  {item.company} · {item.location}
                </p>
              </header>

              {/* Summary */}
              <p className="mt-4 max-w-2xl text-base sm:text-lg">{item.summary}</p>

              {/* Responsibilities */}
              {item.responsibilities.length > 0 && (
                <>
                  <h3 className="mt-7 text-xs font-semibold tracking-widest text-muted uppercase">
                    Qué hice
                  </h3>
                  <ul className="mt-3 space-y-2">
                    {item.responsibilities.map((line) => (
                      <li key={line} className="flex gap-2 text-base">
                        <span aria-hidden="true" className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent" />
                        {line}
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Environment */}
              {item.environment.length > 0 && (
                <>
                  <h3 className="mt-7 text-xs font-semibold tracking-widest text-muted uppercase">
                    Entorno
                  </h3>
                  <dl className="mt-3 grid gap-4 sm:grid-cols-2">
                    {item.environment.map((group) => (
                      <div key={group.label}>
                        <dt className="text-sm text-muted">{group.label}</dt>
                        <dd className="mt-1 flex flex-wrap gap-1.5">
                          {group.items.map((tech) => (
                            <span key={tech} className="text-sm text-foreground">
                              {tech}
                            </span>
                          ))}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </>
              )}

              {/* Related projects */}
              {projects.length > 0 && (
                <>
                  <h3 className="mt-7 text-xs font-semibold tracking-widest text-muted uppercase">
                    Proyectos en esta empresa
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {projects.map((project) => (
                      <li key={project.slug}>
                        <Link
                          to={`/proyectos/${project.slug}`}
                          className="inline-flex h-11 items-center border-b border-foreground/25 px-1 text-sm font-medium transition-colors hover:border-accent"
                        >
                          {project.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              )}

              {/* Reference / quote */}
              {item.reference && (
                <figure className="mt-7 border-l-2 border-accent/40 pl-4">
                  <blockquote className="text-base italic">
                    «{item.reference.quote}»
                  </blockquote>
                  <figcaption className="mt-1.5 text-sm text-foreground/70">
                    — {item.reference.source}
                  </figcaption>
                </figure>
              )}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
