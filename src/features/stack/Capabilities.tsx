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
          <SectionHeading id="titulo-stack" eyebrow="Stack técnico" title="Lo que sé hacer" />
        </Reveal>
        <ul className="grid gap-5 md:grid-cols-2">
          {capabilities.map((capability, index) => (
            <li key={capability.title}>
              <Reveal delay={index * 0.08} className="h-full">
                <div className="h-full rounded-3xl bg-sky p-8 lg:p-10">
                  <h3 className="text-3xl font-semibold">{capability.title}</h3>
                  <p className="mt-2 text-lg text-foreground/75">{capability.blurb}</p>
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {capability.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-background/85 px-4 py-1.5 text-base font-medium"
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
        <Reveal delay={0.2}>
          <p className="mt-8 text-base text-muted">Herramientas y otros lenguajes: {tools.join(' · ')}</p>
        </Reveal>
      </Container>
    </Section>
  )
}
