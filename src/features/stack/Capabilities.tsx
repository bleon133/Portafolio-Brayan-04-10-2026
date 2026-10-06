import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { capabilities, tools } from '@/data/stack'

export function Capabilities() {
  return (
    <Section id="stack" titleId="titulo-stack" tone="surface">
      <Container>
        <Reveal>
          <SectionHeading
            id="titulo-stack"
            eyebrow="Stack técnico"
            title="Lo que sé hacer"
            action={{ label: 'Ver proyectos', to: '/proyectos' }}
          />
        </Reveal>

        <ul className="mt-2 grid gap-5 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <li key={capability.title}>
              <Reveal delay={index * 0.08}>
                <div className="flex h-full flex-col rounded-card bg-background p-7 lg:p-8">
                  <h3 className="font-display text-[24px] font-semibold leading-none text-ink">
                    {capability.title}
                  </h3>
                  <p className="mt-2 text-[17px] leading-[1.24] tracking-[-0.022em] text-muted">
                    {capability.blurb}
                  </p>
                  <ul className="mt-6 flex flex-wrap gap-2">
                    {capability.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-pill border border-steel px-3.5 py-1.5 text-xs text-ink"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-8 border-t border-border pt-6 text-sm text-muted">
          Herramientas y otros lenguajes: {tools.join(' · ')}
        </div>
      </Container>
    </Section>
  )
}
