import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { ProjectFacts } from '@/features/projects/ProjectFacts'
import { ProjectGallery } from '@/features/projects/ProjectGallery'
import { ProjectHighlights } from '@/features/projects/ProjectHighlights'
import { ProjectSections } from '@/features/projects/ProjectSections'
import { usePageMeta } from '@/hooks/usePageMeta'
import type { Project, ProjectMediaSlide } from '@/types'

interface ProjectDetailProps {
  project: Project
  next: Project
}

export function ProjectDetail({ project, next }: ProjectDetailProps) {
  usePageMeta({
    title: `${project.title} | Brayan León`,
    description: project.description,
    path: `/proyectos/${project.slug}`,
    image: project.image,
  })

  const mediaSlides: ProjectMediaSlide[] = project.gallery?.length
    ? project.gallery.map((image) => ({ type: 'image', src: image.src, caption: image.caption }))
    : [
        ...(project.image
          ? [{ type: 'image' as const, src: project.image, caption: `Portada de ${project.title}` }]
          : []),
        ...(project.mediaIdeas ?? []).map((idea) => ({ type: 'idea' as const, ...idea })),
      ]

  const hasSections = Boolean(project.sections?.length)

  return (
    <article className="flex min-h-dvh flex-col">
      <PageHeader
        eyebrow={project.category}
        title={project.title}
        description={project.description}
        badge={project.status}
      />

      {/* Shared media stage: real screenshots or explicit replaceable ideas. */}
      {mediaSlides.length > 0 && (
        <Container className="-mt-8">
          <ProjectGallery
            images={project.gallery ?? []}
            slides={mediaSlides}
            title={project.title}
          />
        </Container>
      )}

      {/* Modular narrative + reusable project facts */}
      <Container
        className={`flex-1 py-16 ${hasSections ? 'grid gap-12 lg:grid-cols-[minmax(0,1fr)_22rem]' : 'max-w-5xl'}`}
      >
        <div className="min-w-0 space-y-12">
          {project.highlights?.length ? <ProjectHighlights highlights={project.highlights} /> : null}
          {hasSections && <ProjectSections sections={project.sections ?? []} />}
        </div>
        <ProjectFacts project={project} sticky={hasSections} />
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
