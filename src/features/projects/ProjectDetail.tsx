import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { motion, useScroll, useTransform } from 'motion/react'
import { useRef, type ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { ProjectGallery } from '@/features/projects/ProjectGallery'
import { usePageMeta } from '@/hooks/usePageMeta'
import type { Project } from '@/types'

interface ProjectDetailProps {
  project: Project
  next: Project
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <Reveal>
      <h2 className="text-2xl font-semibold">{title}</h2>
      <div className="mt-3 text-lg text-muted">{children}</div>
    </Reveal>
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

  const imageRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ['start end', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['-6%', '6%'])

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

      {/* Galería si existe; si no, la imagen principal con parallax. Sin imagen no se muestra nada. */}
      {(hasGallery || project.image) && (
        <Container className="-mt-8">
          {hasGallery ? (
            <ProjectGallery images={project.gallery!} title={project.title} />
          ) : (
            <div ref={imageRef} className="overflow-hidden rounded-card border border-border bg-background">
              <motion.img
                src={project.image}
                alt={`Captura de ${project.title}`}
                width={1280}
                height={720}
                className="aspect-video w-full scale-110 object-cover object-top"
                style={{ y: imageY }}
              />
            </div>
          )}
        </Container>
      )}

      <Container
        className={`flex-1 py-16 ${hasBody ? 'grid gap-12 lg:grid-cols-[1fr_22rem]' : 'max-w-5xl'}`}
      >
        {hasBody && (
          <div className="space-y-12">
            {project.overview && <Block title="Resumen">{project.overview}</Block>}
            {project.problem && <Block title="Problema">{project.problem}</Block>}
            {project.decisions && project.decisions.length > 0 && (
              <Block title="Decisiones técnicas">
                <BulletList items={project.decisions} />
              </Block>
            )}
            {project.features && project.features.length > 0 && (
              <Block title="Qué incluye">
                <BulletList items={project.features} />
              </Block>
            )}
            {project.result && <Block title="Resultado">{project.result}</Block>}
          </div>
        )}

        <Reveal>
          <aside
            className={`space-y-8 rounded-3xl border border-border bg-surface p-6 sm:p-8 ${hasBody ? 'lg:sticky lg:top-28 lg:self-start' : ''}`}
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
              <h2 className="text-sm text-muted">Stack</h2>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full bg-background px-3 py-1 text-sm font-medium">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            {project.links.length > 0 && (
              <ul className="space-y-2">
                {project.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex min-h-11 items-center justify-between rounded-xl bg-ink px-4 font-medium text-white transition-colors duration-200 hover:bg-accent"
                    >
                      {link.label}
                      <ArrowUpRight className="size-4" aria-hidden="true" />
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </aside>
        </Reveal>
      </Container>

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
