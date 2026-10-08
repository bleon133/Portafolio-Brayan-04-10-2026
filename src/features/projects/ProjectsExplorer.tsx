import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { FilterChips } from '@/components/ui/FilterChips'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/features/projects/ProjectCard'
import { uniqueValues } from '@/lib/collections'

const VISIBLE_TECHNOLOGIES = 8

const categories = uniqueValues(projects.map((project) => project.category))

// Las tecnologías más repetidas van primero; el resto queda detrás de «Ver más».
const technologiesByFrequency = (() => {
  const counts = new Map<string, number>()
  projects.forEach((project) =>
    project.stack.forEach((tech) => counts.set(tech, (counts.get(tech) ?? 0) + 1)),
  )
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0], 'es'))
    .map(([tech]) => tech)
})()

/** Lista completa con filtros. El estado vive en la URL para poder compartir el enlace. */
export function ProjectsExplorer() {
  const [params, setParams] = useSearchParams()
  const [showAllTech, setShowAllTech] = useState(false)
  const category = params.get('categoria')
  const technology = params.get('tecnologia')

  // Si la tecnología activa estaría oculta, se abre la lista completa.
  const expanded = showAllTech || (technology !== null && technologiesByFrequency.indexOf(technology) >= VISIBLE_TECHNOLOGIES)
  const technologies = expanded ? technologiesByFrequency : technologiesByFrequency.slice(0, VISIBLE_TECHNOLOGIES)

  function setFilter(key: string, value: string | null) {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const visible = projects.filter(
    (project) =>
      (!category || project.category === category) && (!technology || project.stack.includes(technology)),
  )

  return (
    <Container className="flex-1 py-16">
      {/* Archive controls */}
      <div className="flex flex-wrap items-baseline gap-x-8 gap-y-2 sm:items-center">
        <FilterChips
          legend="Categoría"
          options={categories}
          value={category}
          onChange={(value) => setFilter('categoria', value)}
        />
        <FilterChips
          legend="Tecnología"
          options={technologies}
          value={technology}
          onChange={(value) => setFilter('tecnologia', value)}
        />
      </div>

      {technologiesByFrequency.length > VISIBLE_TECHNOLOGIES && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setShowAllTech((value) => !value)}
          className="min-h-11 text-sm font-medium text-accent-soft hover:text-foreground"
        >
          {expanded ? 'Ver menos tecnologías' : 'Ver más tecnologías'}
        </button>
      )}

      <p className="mt-6 text-sm text-muted" role="status">
        {visible.length} {visible.length === 1 ? 'proyecto' : 'proyectos'}
      </p>

      {visible.length > 0 ? (
        <ul className="mt-4 grid grid-cols-1 gap-y-10 md:grid-cols-12 md:gap-x-8 md:gap-y-10">
          {visible.map((project, index) => {
            const colSpan =
              index === 0
                ? 'md:col-span-7'
                : index === 1
                  ? 'md:col-span-5 md:col-start-8'
                  : index === 2
                    ? 'md:col-span-5'
                    : 'md:col-span-7 md:col-start-8'
            return (
              <li key={project.slug} className={colSpan}>
                <ProjectCard project={project} />
              </li>
            )
          })}
        </ul>
      ) : (
        <div className="mt-8 rounded-2xl border border-border bg-surface p-8">
          <p className="text-lg">Ningún proyecto coincide con esos filtros.</p>
          <button
            type="button"
            onClick={() => setParams({}, { replace: true })}
            className="mt-4 min-h-11 rounded-lg bg-ink px-5 font-medium text-white"
          >
            Quitar filtros
          </button>
        </div>
      )}
    </Container>
  )
}
