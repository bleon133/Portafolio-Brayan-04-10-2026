import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { aboutIntro, aboutStats, aboutSteps } from '@/data/about'

export function About() {
  return (
    <Section id="sobre-mi" titleId="titulo-sobre-mi" tone="surface">
      <Container>
        <div>
          {/* Split grid: heading + intro + stats | timeline */}
          <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">

            {/* ── Left column ─────────────────────────────── */}
            <div>
              <SectionHeading
                eyebrow="Sobre mí"
                title="Mi recorrido en tres pasos"
                id="titulo-sobre-mi"
              />

              <p className="text-2xl font-medium leading-snug text-ink sm:text-3xl">
                {aboutIntro}
              </p>

              <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-6 text-sm font-medium text-muted">
                {aboutStats.map((stat) => (
                  <li key={stat.label} className="min-w-[4rem]">
                    <span className="text-4xl font-bold text-ink">
                      {stat.value}{stat.suffix}
                    </span>
                    <span className="ml-1">{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right column: timeline ──────────────────── */}
            <ol className="relative border-l border-border pl-10">
              {aboutSteps.map((step) => (
                <li key={step.title} className="relative pt-14 last:pb-0">
                  {/* Node */}
                  <span
                    className="absolute -left-[5px] top-0 size-6 rounded-full border border-border bg-background"
                    aria-hidden="true"
                  />

                  <h3 className="text-xl font-semibold text-ink">{step.title}</h3>
                  <p className="mt-1 text-lg text-muted">{step.summary}</p>

                  <ul className="mt-5 space-y-3 text-lg text-ink">
                    {step.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span
                          className="mt-1.5 size-1.5 shrink-0 rounded-full bg-accent"
                          aria-hidden="true"
                        />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </Section>
  )
}
