import CountUp from '@/components/bits/CountUp'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { aboutIntro, aboutStats, aboutSteps } from '@/data/about'

export function About() {
  return (
    <Section id="sobre-mi" titleId="titulo-sobre-mi" tone="surface">
      <Container className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
        {/* LEFT — editorial statement + stats */}
        <div className="lg:col-span-7">
          <Reveal>
            <SectionHeading
              id="titulo-sobre-mi"
              eyebrow="Sobre mí"
              title="Mi recorrido en tres pasos"
            />
          </Reveal>

          <p className="mt-8 text-[28px] font-semibold leading-[1.14] tracking-[-0.015em] text-ink text-balance">
            {aboutIntro}
          </p>

          <ul className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {aboutStats.map((stat) => (
              <li key={stat.label} className="text-center">
                <p className="font-display text-[40px] font-semibold leading-none text-ink">
                  <CountUp to={stat.value} duration={2} />
                  {stat.suffix}
                </p>
                <p className="mt-2 text-xs text-muted">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — editorial rows */}
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <Reveal delay={0.1}>
            <ol>
              {aboutSteps.map((step) => (
                <li
                  key={step.title}
                  className="border-t border-border py-8 first:border-t-0 first:pt-0"
                >
                  <h3 className="font-display text-[19px] font-semibold tracking-[0.012em] text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-[17px] leading-[1.24] tracking-[-0.022em] text-muted">
                    {step.summary}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {step.points.map((point) => (
                      <li key={point} className="text-sm text-muted">
                        · {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </Container>
    </Section>
  )
}
