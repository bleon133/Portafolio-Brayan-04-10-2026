import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/features/projects/ProjectCard'

/** Resumen para la Home: solo los proyectos marcados como destacados. */
export function Projects() {
  const featured = projects.filter((project) => project.featured)

  return (
    <Section id="proyectos" titleId="titulo-proyectos">
      <Container>
        <SectionHeading
          id="titulo-proyectos"
          eyebrow="Proyectos"
          title="Proyectos que he realizado"
          action={{ label: 'Ver todos', to: '/proyectos' }}
        />
        <ul className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2">
          {featured.map((project) => (
            <li key={project.slug} className="h-full">
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
