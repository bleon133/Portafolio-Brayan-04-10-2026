import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/data/experience'
import { formatPeriod, sortByDateDesc } from '@/lib/collections'

/** Resumen compacto para la Home: cronología editorial sin tarjetas. */
export function ExperiencePreview() {
  const items = sortByDateDesc(experiences, (item) => item.start)

  return (
    <Section id="experiencia" titleId="titulo-experiencia">
      <Container>
        <SectionHeading
          id="titulo-experiencia"
          eyebrow="Experiencia"
          title="Dónde he trabajado"
          action={{ label: 'Ver detalle', to: '/experiencia' }}
        />
        <ol className="relative mt-8">
          {items.map((item) => (
            <li
              key={item.id}
              className="relative flex flex-col gap-2 border-l-2 border-border pl-6 last:border-l-0 sm:flex-row sm:gap-8 sm:items-start"
            >
              {/* Date / meta — top-left on desktop, stacked above on mobile */}
              <time
                className="shrink-0 text-sm font-medium text-accent-soft sm:pt-1"
                dateTime={item.start}
              >
                {formatPeriod(item.start, item.end)}
              </time>

              {/* Role, company, location, summary */}
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold sm:text-2xl">{item.role}</h3>
                <p className="text-base text-muted">
                  {item.company} · {item.location}
                </p>
                <p className="text-base">{item.summary}</p>
                {item.reference && (
                  <blockquote className="mt-2 border-l-2 border-border pl-4 text-sm italic text-muted">
                    «{item.reference.quote}»
                    <footer className="mt-1 text-xs not-italic">— {item.reference.source}</footer>
                  </blockquote>
                )}
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  )
}
