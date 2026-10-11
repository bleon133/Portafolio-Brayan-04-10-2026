import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { ProjectCover } from '@/features/projects/ProjectCover'
import type { Project } from '@/types'

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={`/proyectos/${project.slug}`}
      className="group flex h-full flex-col focus-visible:outline-offset-4"
    >
      <div className="relative overflow-hidden ring-1 ring-inset ring-ink/10">
        <ProjectCover
          project={project}
          className="transition-transform duration-300 ease-out group-hover:scale-[1.02] motion-reduce:scale-100 motion-reduce:transform-none motion-reduce:transition-none"
        />
        {project.status && (
          <span className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-full bg-surface px-2.5 py-1 text-xs text-ink">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-accent" />
            {project.status}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col border-b border-border pb-5 pt-2.5">
        <div className="flex items-baseline gap-2 text-xs text-muted">
          <span>{project.category}</span>
          {project.origin && <>·</>}
          {project.origin && <span>{project.origin}</span>}
        </div>
        <div className="mt-1 flex items-baseline justify-between gap-3">
          <h3 className="line-clamp-2 text-xl font-semibold leading-tight transition-colors duration-150 group-hover:text-accent group-focus-visible:text-accent motion-reduce:transition-none sm:text-2xl">
            {project.title}
          </h3>
          <span
            className="inline-flex size-5 shrink-0 -translate-x-1 items-center justify-center opacity-0 transition-[opacity,transform] duration-150 ease-out group-hover:translate-x-0 group-hover:opacity-100 group-focus-visible:translate-x-0 group-focus-visible:opacity-100 motion-reduce:translate-x-0 motion-reduce:transform-none motion-reduce:transition-none"
            aria-hidden="true"
          >
            <ArrowUpRight className="size-5" />
          </span>
        </div>
        <ul className="mt-auto flex min-h-8 flex-wrap items-end gap-x-3 gap-y-0.5 pt-3 text-xs text-muted">
          {project.stack.slice(0, 4).map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
