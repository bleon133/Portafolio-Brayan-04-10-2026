import { useState } from 'react'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { experiences } from '@/data/experience'
import { formatPeriod, sortByDateDesc } from '@/lib/collections'
import { ExperiencePaperRelief } from './ExperiencePaperRelief'

/** Resumen compacto para la Home: cronología editorial sin tarjetas. */
export function ExperiencePreview() {
  const items = sortByDateDesc(experiences, (item) => item.start)
  const [activeExperienceId, setActiveExperienceId] = useState<string | null>(null)

  return (
    <Section id="experiencia" titleId="titulo-experiencia">
      <Container>
        <SectionHeading
          id="titulo-experiencia"
          eyebrow="Experiencia"
          title="Dónde he trabajado"
          action={{ label: 'Ver detalle', to: '/experiencia' }}
        />
        <div className="xl:grid xl:grid-cols-[minmax(0,1fr)_16rem] xl:gap-16">
          <ol className="relative mt-8 divide-y divide-border py-6">
            {items.map((item) => {
              const period = formatPeriod(item.start, item.end)
              const [range, duration] = period.split(' · ')

              return (
                <li
                  key={item.id}
                  className="relative flex flex-col gap-2 py-6 first:pt-0 last:pb-0 sm:grid sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-8 sm:items-start md:items-baseline"
                  onPointerEnter={(event) => {
                    if (event.pointerType !== 'touch') setActiveExperienceId(item.id)
                  }}
                  onPointerLeave={(event) => {
                    if (event.pointerType !== 'touch') {
                      setActiveExperienceId((activeId) => (activeId === item.id ? null : activeId))
                    }
                  }}
                >
                  {/* Date / meta — above on mobile, fixed column on desktop */}
                  <time
                    className="text-sm font-medium text-accent-soft sm:text-left sm:pt-1"
                    dateTime={item.start}
                  >
                    {duration ? (
                      <>
                        <span className="whitespace-nowrap">{range} ·</span>
                        {' '}
                        <span className="whitespace-nowrap">{duration}</span>
                      </>
                    ) : (
                      period
                    )}
                  </time>

                  {/* Role, company, location, summary — above on mobile, second column on desktop */}
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold sm:text-2xl">{item.role}</h3>
                    <p className="text-base text-muted">
                      {item.company} · {item.location}
                    </p>
                    <p className="text-base md:max-w-prose">{item.summary}</p>
                    {item.reference && (
                      <blockquote className="mt-2 text-sm italic text-muted md:max-w-prose">
                        «{item.reference.quote}»
                        <footer className="mt-1 text-xs not-italic">— {item.reference.source}</footer>
                      </blockquote>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
          <ExperiencePaperRelief items={items} activeId={activeExperienceId} />
        </div>
      </Container>
    </Section>
  )
}
