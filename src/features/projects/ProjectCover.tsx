import type { Project } from '@/types'

interface ProjectCoverProps {
  project: Project
  className?: string
}

/** Portada uniforme del proyecto: imagen real o textura editorial abstracta. */
export function ProjectCover({ project, className = '' }: ProjectCoverProps) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Captura de ${project.title}`}
        loading="lazy"
        width={640}
        height={360}
        className={`aspect-[2/1] w-full object-cover object-center ${className}`}
      />
    )
  }

  return (
    <div
      className={`relative aspect-[2/1] w-full ${className}`}
      role="img"
      aria-label={`Portada de ${project.title}`}
    >
      <img
        src="/assets/editorial/journey-map-texture.webp"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-30"
      />
      <span className="absolute inset-0 flex items-center justify-center px-6 pt-4 text-xs font-medium uppercase tracking-widest text-muted/80">
        {project.category}
      </span>
    </div>
  )
}
