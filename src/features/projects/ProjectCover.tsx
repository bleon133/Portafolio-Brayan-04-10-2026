import type { Project } from '@/types'

interface ProjectCoverProps {
  project: Project
  className?: string
}

/** Portada uniforme del proyecto: imagen recortada 2:1 o superficie editorial silenciosa. */
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
      className={`aspect-[2/1] w-full bg-sky ${className}`}
      role="img"
      aria-label={`Portada de ${project.title}`}
    >
      <span className="flex h-full items-center justify-center px-6 pt-4 text-xs font-medium uppercase tracking-widest text-muted">
        {project.category}
      </span>
    </div>
  )
}
