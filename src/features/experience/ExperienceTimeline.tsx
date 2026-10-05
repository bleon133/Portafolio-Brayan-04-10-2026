import { Link } from 'react-router-dom'

import { Timeline } from '@/components/ui/Timeline'
import { companyProjects, experiences } from '@/data/experience'
import { getProject } from '@/data/projects'
import { formatPeriod, sortByDateDesc } from '@/lib/collections'

export function ExperienceTimeline() {
  const items = sortByDateDesc(experiences, (item) => item.start).map((item) => ({
    id: item.id,
    meta: formatPeriod(item.start, item.end),
    content: (
      <article className="rounded-3xl border border-border bg-background p-6 sm:p-8">
        <h2 className="text-2xl font-semibold sm:text-3xl">{item.role}</h2>
        <p className="mt-1 text-muted">
          {item.company} · {item.location}
        </p>
        <p className="mt-5 max-w-3xl text-lg">{item.summary}</p>

        <h3 className="mt-8 text-sm font-medium tracking-widest text-muted uppercase">Qué hice</h3>
        <ul className="mt-3 space-y-3">
          {item.responsibilities.map((line) => (
            <li key={line} className="flex gap-3">
              <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
              {line}
            </li>
          ))}
        </ul>

        {item.environment.length > 0 && (
          <>
            <h3 className="mt-8 text-sm font-medium tracking-widest text-muted uppercase">Entorno</h3>
            <dl className="mt-3 grid gap-4 sm:grid-cols-2">
              {item.environment.map((group) => (
                <div key={group.label}>
                  <dt className="text-sm text-muted">{group.label}</dt>
                  <dd className="mt-1 flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span key={tech} className="rounded-full bg-surface px-3 py-1 text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </>
        )}

        {companyProjects[item.id] && (
          <>
            <h3 className="mt-8 text-sm font-medium tracking-widest text-muted uppercase">
              Proyectos en esta empresa
            </h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {companyProjects[item.id].map((slug) => {
                const project = getProject(slug)
                return project ? (
                  <li key={slug}>
                    <Link
                      to={`/proyectos/${slug}`}
                      className="inline-flex min-h-11 items-center rounded-full border border-border px-4 text-sm font-medium transition-colors duration-200 hover:bg-surface"
                    >
                      {project.title}
                    </Link>
                  </li>
                ) : null
              })}
            </ul>
          </>
        )}

        {item.reference && (
          <figure className="mt-8 rounded-2xl bg-sky p-5">
            <blockquote className="text-lg font-medium">«{item.reference.quote}»</blockquote>
            <figcaption className="mt-2 text-sm text-foreground/75">{item.reference.source}</figcaption>
          </figure>
        )}
      </article>
    ),
  }))

  return <Timeline items={items} />
}
