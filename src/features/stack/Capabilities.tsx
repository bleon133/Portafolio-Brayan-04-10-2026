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

        <ul>
          {capabilities.map((capability) => (
            <li
              key={capability.title}
              className="grid gap-3 border-b border-border py-5 lg:grid-cols-[minmax(9rem,0.65fr)_1.35fr] lg:items-baseline"
            >
              <h3 className="text-xl font-semibold md:pr-8">{capability.title}</h3>
              <div>
                <p className="text-base text-muted">{capability.blurb}</p>
                <p className="mt-2 flex flex-wrap text-base">
                  {capability.items.map((item, index) => (
                    <span key={item} className="whitespace-nowrap">
                      {item}
                      {index < capability.items.length - 1 && (
                        <span aria-hidden="true" className="mx-1 after:content-['·']">
                          <span className="sr-only"> · </span>
                        </span>
                      )}
                    </span>
                  ))}
                </p>
              </div>
            </li>
          ))}
        </ul>

        <p className="pt-5 text-base text-muted">
          Herramientas y otros lenguajes: {tools.join(' · ')}
        </p>
      </Container>
    </Section>
  )
}
