import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProjectCover } from '@/features/projects/ProjectCover'
import type { Project } from '@/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/proyectos/${project.slug}`}
      className="group block h-full flex flex-col justify-between focus-visible:outline-offset-4"
    >
      <div className="relative overflow-hidden">
        <ProjectCover
          project={project}
          className="transition-transform duration-500 ease-out motion-safe:group-hover:scale-105 motion-safe:group-focus-visible:scale-105"
        />
        {project.status && (
          <span className="absolute top-4 left-4 z-10 bg-ink/90 px-2 py-0.5 text-xs font-medium text-white">
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col border-b border-ink/10 pb-3 pt-2.5">
        <div className="flex items-baseline gap-2 text-xs text-muted">
          <span>{project.category}</span>
          {project.origin && <>·</>}
          {project.origin && <span>{project.origin}</span>}
        </div>
        <h3 className="mt-1 line-clamp-2 text-xl font-semibold leading-tight sm:text-2xl">
          {project.title}
        </h3>
        <ul className="mt-1.5 flex flex-wrap gap-x-3 gap-y-0.5 text-xs text-muted">
          {project.stack.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>

      <span
        className="mt-2.5 inline-flex size-5 items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
        aria-hidden="true"
      >
        <ArrowUpRight className="size-5" />
      </span>
    </Link>
  )
}
