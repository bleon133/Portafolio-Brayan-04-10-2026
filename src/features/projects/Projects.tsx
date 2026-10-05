import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { projects } from '@/data/projects'
import { ProjectCard } from '@/features/projects/ProjectCard'

/** Resumen para la Home: solo los proyectos marcados como destacados. */
export function Projects() {
  const featured = projects.filter((project) => project.featured)

  return (
    <Section id="proyectos" titleId="titulo-proyectos">
      <Container>
        <Reveal>
          <SectionHeading
            id="titulo-proyectos"
            eyebrow="Proyectos"
            title="Cosas que he construido"
            action={{ label: 'Ver todos', to: '/proyectos' }}
          />
        </Reveal>
        <ul className="grid gap-8 md:grid-cols-2">
          {featured.map((project, index) => (
            <li key={project.slug}>
              <Reveal delay={(index % 2) * 0.1} className="h-full">
                <ProjectCard project={project} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
