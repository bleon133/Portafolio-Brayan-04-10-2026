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
          title="Cosas que he construido"
          action={{ label: 'Ver todos', to: '/proyectos' }}
        />
        <ul className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-[7fr_5fr] md:grid-rows-2 md:gap-y-10">
          {featured.map((project, index) => {
            const isLeft = index % 2 === 0
            return (
              <li key={project.slug} className={isLeft ? '' : 'md:col-start-2 md:col-span-1'}>
                <ProjectCard project={project} />
              </li>
            )
          })}
        </ul>
      </Container>
    </Section>
  )
}
