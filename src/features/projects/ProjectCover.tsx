import type { Project } from '@/types'

interface ProjectCoverProps {
  project: Project
  className?: string
}

/** Imagen del proyecto o, si no hay captura, una portada tipográfica con su color. */
export function ProjectCover({ project, className = '' }: ProjectCoverProps) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={`Captura de ${project.title}`}
        loading="lazy"
        width={640}
        height={360}
        className={`aspect-[2/1] w-full object-cover object-top ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex aspect-[2/1] w-full flex-col justify-between bg-background p-6 sm:p-8 ${className}`}
      role="img"
      aria-label={`Portada de ${project.title}`}
    >
      <span className="w-fit text-xs font-medium text-muted">{project.category}</span>
      <span className="font-heading text-3xl leading-tight font-bold sm:text-4xl">{project.title}</span>
    </div>
  )
}
