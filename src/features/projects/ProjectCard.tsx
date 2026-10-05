import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProjectCover } from '@/features/projects/ProjectCover'
import type { Project } from '@/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/proyectos/${project.slug}`}
      className="group block rounded-3xl focus-visible:outline-offset-4"
    >
      <div className="relative overflow-hidden rounded-3xl bg-sky p-5 transition-colors duration-300 group-hover:bg-fog sm:p-6">
        {project.status && (
          <span className="absolute top-8 left-8 z-10 rounded-full bg-ink px-3 py-1 text-xs font-medium text-white">
            En desarrollo
          </span>
        )}
        <div className="overflow-hidden rounded-2xl shadow-lg shadow-ink/10">
          <ProjectCover
            project={project}
            className="transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
      </div>
      <div className="mt-4 flex items-start justify-between gap-4 px-1">
        <div>
          <p className="text-sm text-muted">
            {project.category}
            {project.origin ? ` · ${project.origin}` : ''}
          </p>
          <h3 className="mt-1 text-2xl font-semibold">{project.title}</h3>
          <ul className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-sm text-muted">
            {project.stack.slice(0, 5).map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>
        <span className="mt-1 flex size-11 shrink-0 items-center justify-center rounded-full border border-foreground/15 transition-colors duration-200 group-hover:bg-ink group-hover:text-white">
          <ArrowUpRight
            className="size-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
