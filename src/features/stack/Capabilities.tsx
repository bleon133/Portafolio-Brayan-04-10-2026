import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { capabilities, tools } from '@/data/stack'

export function Capabilities() {
  return (
    <Section id="stack" titleId="titulo-stack" tone="surface">
      <Container>
        <SectionHeading
          eyebrow="Stack técnico"
          title="Lo que sé hacer"
          id="titulo-stack"
        />

        <ul className="divide-y divide-border">
          {capabilities.map((capability) => (
            <li
              key={capability.title}
              className="grid gap-3 md:grid-cols-[minmax(9rem,0.65fr)_1.35fr]"
            >
              <h3 className="text-xl font-semibold md:py-3 md:pr-8">{capability.title}</h3>
              <div className="md:pt-3">
                <p className="text-base text-muted">{capability.blurb}</p>
                <p className="mt-3 text-base">{capability.items.join(' · ')}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-base text-muted">
          Herramientas y otros lenguajes: {tools.join(' · ')}
        </p>
      </Container>
    </Section>
  )
}
