import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/data/experience'
import { formatPeriod, sortByDateDesc } from '@/lib/collections'

/** Resumen para la Home: cada experiencia con sus primeras funciones. */
export function ExperiencePreview() {
  const items = sortByDateDesc(experiences, (item) => item.start)

  return (
    <Section id="experiencia" titleId="titulo-experiencia">
      <Container>
        <Reveal>
          <SectionHeading
            id="titulo-experiencia"
            eyebrow="Experiencia"
            title="Dónde he trabajado"
            action={{ label: 'Ver detalle', to: '/experiencia' }}
          />
        </Reveal>
        <ul className="space-y-6">
          {items.map((item, index) => (
            <li key={item.id}>
              <Reveal delay={index * 0.1}>
                <article className="grid gap-8 rounded-3xl border border-border p-8 sm:p-10 lg:grid-cols-[1fr_1.4fr]">
                  <div>
                    <p className="text-base font-medium text-accent-soft">{formatPeriod(item.start, item.end)}</p>
                    <h3 className="mt-3 text-2xl font-semibold sm:text-3xl">{item.role}</h3>
                    <p className="mt-2 text-lg text-muted">
                      {item.company} · {item.location}
                    </p>
                  </div>
                  <div>
                    <p className="text-lg">{item.summary}</p>
                    {item.reference && (
                      <p className="mt-5 rounded-2xl bg-sky p-4 text-base font-medium">«{item.reference.quote}»</p>
                    )}
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
