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

        <div className="grid gap-x-8 gap-y-10 md:grid-cols-[auto_1fr] md:gap-y-12">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className={`${index > 0 ? 'md:col-span-2 md:border-t md:border-border' : ''} md:col-span-2`}
            >
              <div className="md:contents">
                <p className="text-sm font-medium tracking-widest text-accent-soft uppercase md:hidden">
                  {capability.title}
                </p>

                <div className="hidden md:block md:pr-8">
                  <h3 className="text-xl font-semibold">{capability.title}</h3>
                </div>
              </div>

              <div className="mt-3 md:mt-0 md:ml-auto">
                <p className="text-base text-muted">{capability.blurb}</p>
                <p className="mt-3 text-base">
                  {capability.items.join(' · ')}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-base text-muted">
          Herramientas y otros lenguajes: {tools.join(' · ')}
        </p>
      </Container>
    </Section>
  )
}
