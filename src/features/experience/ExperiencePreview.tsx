import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { experiences } from '@/data/experience'
import { formatPeriod, sortByDateDesc } from '@/lib/collections'

/** Resumen compacto para la Home: cronología editorial sin tarjetas. */
export function ExperiencePreview() {
  const items = sortByDateDesc(experiences, (item) => item.start)

  return (
    <Section id="experiencia" titleId="titulo-experiencia">
      <Container>
        <header className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-sm font-medium tracking-widest text-accent-soft uppercase">
              Experiencia
            </p>
            <h2
              id="titulo-experiencia"
              className="mt-2 text-4xl font-semibold sm:text-5xl lg:text-6xl"
            >
              Experiencia profesional
            </h2>
          </div>
          <Link
            to="/experiencia"
            className="group inline-flex min-h-11 items-center gap-2 text-lg font-medium text-accent-soft transition-colors duration-200 hover:text-foreground"
          >
            Ver detalle
            <span aria-hidden="true" className="transition-transform duration-200 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </header>

        <ol className="border-y border-border divide-y divide-border">
          {items.map((item) => {
            const period = formatPeriod(item.start, item.end)

            return (
              <li
                key={item.id}
                className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[220px_minmax(0,1fr)] sm:gap-8 sm:py-6 first:pt-0 last:pb-0"
              >
                <time
                  className="text-sm font-medium text-accent-soft sm:text-left sm:pt-1"
                  dateTime={item.start}
                >
                  {period}
                </time>

                <article className="flex flex-col gap-2">
                  <h3 className="text-xl font-semibold font-heading sm:text-2xl">
                    {item.role}
                    <span className="text-base font-normal text-muted">
                      {' '}
                      · {item.company}
                    </span>
                  </h3>
                  <p className="text-base text-muted">{item.location}</p>
                  <p className="text-base">{item.summary}</p>
                  {item.reference && (
                    <blockquote className="mt-2 text-sm italic text-muted">
                      «{item.reference.quote}»
                      <footer className="mt-1 text-xs not-italic">
                        — {item.reference.source}
                      </footer>
                    </blockquote>
                  )}
                </article>
              </li>
            )
          })}
        </ol>
      </Container>
    </Section>
  )
}
