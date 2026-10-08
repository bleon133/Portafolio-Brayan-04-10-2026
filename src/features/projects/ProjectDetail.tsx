import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { type ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProjectGallery } from '@/features/projects/ProjectGallery'
import { usePageMeta } from '@/hooks/usePageMeta'
import type { Project } from '@/types'

interface ProjectDetailProps {
  project: Project
  next: Project
}

function Section({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section>
      {title && (
        <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
          {title}
          <span className="ml-2 inline-block h-px w-8 bg-border align-middle" />
        </h2>
      )}
      <div className="mt-3 text-lg leading-relaxed text-foreground/90">{children}</div>
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3 text-foreground">
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
          {item}
        </li>
      ))}
    </ul>
  )
}

export function ProjectDetail({ project, next }: ProjectDetailProps) {
  usePageMeta({
    title: `${project.title} | Brayan León`,
    description: project.description,
    path: `/proyectos/${project.slug}`,
    image: project.image,
  })

  const hasGallery = Boolean(project.gallery?.length)

  const hasBody = Boolean(
    project.overview ||
      project.problem ||
      project.result ||
      project.features?.length ||
      project.decisions?.length,
  )

  const facts = [
    { label: 'Categoría', value: project.category },
    project.origin ? { label: 'Contexto', value: project.origin } : null,
    project.year ? { label: 'Año', value: project.year } : null,
    project.role ? { label: 'Mi rol', value: project.role } : null,
    ...(project.facts ?? []),
  ].filter((fact): fact is { label: string; value: string } => fact !== null)

  return (
    <article className="flex min-h-dvh flex-col">
      <PageHeader
        eyebrow={project.category}
        title={project.title}
        description={project.description}
        badge={project.status}
      />

      {/* Gallery — large, uncased, with hairline controls */}
      {(hasGallery || project.image) && (
        <Container className="-mt-8">
          {hasGallery ? (
            <ProjectGallery images={project.gallery!} title={project.title} />
          ) : (
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={`Captura de ${project.title}`}
                width={1280}
                height={720}
                className="aspect-video w-full object-cover object-top"
              />
            </div>
          )}
        </Container>
      )}

      {/* Editorial body: narrative column + fact/stack sidebar */}
      <Container
        className={`flex-1 py-16 ${hasBody ? 'grid gap-12 lg:grid-cols-[1fr_22rem]' : 'max-w-5xl'}`}
      >
        {/* Narrative column */}
        {hasBody && (
          <div className="space-y-12">
            {project.overview && <Section title="Resumen">{project.overview}</Section>}
            {project.problem && <Section title="Problema">{project.problem}</Section>}
            {project.decisions && project.decisions.length > 0 && (
              <Section title="Decisiones técnicas">
                <BulletList items={project.decisions} />
              </Section>
            )}
            {project.features && project.features.length > 0 && (
              <Section title="Qué incluye">
                <BulletList items={project.features} />
              </Section>
            )}
            {project.result && <Section title="Resultado">{project.result}</Section>}
          </div>
        )}

        {/* Sidebar: facts, stack, links — plain, no rounded cards */}
        <aside
          className={`space-y-8 ${hasBody ? 'lg:sticky lg:top-28 lg:self-start' : ''}`}
        >
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
            <p className="mt-2 text-sm leading-relaxed text-foreground">
              {project.stack.join(' · ')}
            </p>
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
      </Container>

      {/* Next project link */}
      <Link
        to={`/proyectos/${next.slug}`}
        className="group block bg-sky py-20 transition-colors duration-300 hover:bg-fog"
      >
        <Container>
          <p className="text-sm font-medium tracking-widest uppercase">Siguiente proyecto</p>
          <p className="mt-3 flex items-center gap-4 font-heading text-4xl font-bold sm:text-6xl">
            {next.title}
            <ArrowRight
              className="size-10 shrink-0 transition-transform duration-300 group-hover:translate-x-3 sm:size-14"
              aria-hidden="true"
            />
          </p>
        </Container>
      </Link>
    </article>
  )
}
