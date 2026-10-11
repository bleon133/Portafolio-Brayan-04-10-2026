import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { aboutIntro, aboutStats, aboutSteps } from '@/data/about'

export function About() {
  return (
    <Section
      id="sobre-mi"
      titleId="titulo-sobre-mi"
      tone="surface"
    >
      {/* Keep the sticky offset local; FloatingNav is fixed at 80px. */}
      <Container className="[--header-h:80px]">
        <div>
          {/* Split grid: heading + intro + stats | timeline */}
          <div className="grid items-start gap-[3.75rem] sm:gap-7 lg:grid-cols-[minmax(25rem,0.8fr)_minmax(0,1.2fr)] lg:gap-16">

            {/* ── Left column ─────────────────────────────── */}
            <div className="about__intro lg:self-start lg:[@media(min-height:760px)]:sticky lg:[@media(min-height:760px)]:top-[calc(var(--header-h)_+_2rem)]">
              <SectionHeading
                eyebrow="Sobre mí"
                title="Mi recorrido en tres pasos"
                id="titulo-sobre-mi"
              />

              <p className="text-2xl font-medium leading-snug text-ink sm:text-3xl">
                {aboutIntro}
              </p>

              <ul className="about__stats mt-10 grid grid-cols-[repeat(auto-fit,minmax(7rem,1fr))] gap-x-8 gap-y-5 border-t border-border pt-6 text-sm font-medium text-muted [@media(min-width:1024px)_and_(min-height:760px)_and_(max-height:799px)]:mt-6">
                {aboutStats.map((stat) => (
                  <li key={stat.label} className="flex min-w-0 flex-col">
                    <span className="text-4xl font-bold text-ink">
                      {stat.value}{stat.suffix}
                    </span>
                    <span>{stat.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Right column: timeline ──────────────────── */}
            <ol className="relative border-l border-border pl-10">
              {aboutSteps.map((step) => (
                <li key={step.title} className="relative pt-14 last:pb-0">
                  {/* Empty decorative marker aligned to the line and 28px title line box. */}
                  <span
                    className="absolute left-[calc(-3.25rem_-_0.5px)] top-[calc(3.5rem_+_14px_-_12px)] size-6 rounded-full border border-border bg-background"
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
