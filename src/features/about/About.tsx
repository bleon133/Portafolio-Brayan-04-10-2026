import CountUp from '@/components/bits/CountUp'
import ScrollReveal from '@/components/bits/ScrollReveal'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Stepper } from '@/components/ui/Stepper'
import { aboutIntro, aboutStats, aboutSteps } from '@/data/about'

const steps = aboutSteps.map((step) => ({
  title: step.title,
  content: (
    <div>
      <h3 className="text-3xl font-semibold">{step.title}</h3>
      <p className="mt-2 text-lg text-muted">{step.summary}</p>
      <ul className="mt-6 space-y-4 text-lg">
        {step.points.map((point) => (
          <li key={point} className="flex gap-3">
            <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </div>
  ),
}))

export function About() {
  return (
    <Section id="sobre-mi" titleId="titulo-sobre-mi" tone="surface">
      <Container className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <Reveal>
            <SectionHeading id="titulo-sobre-mi" eyebrow="Sobre mí" title="Mi recorrido en tres pasos" />
          </Reveal>
          <ScrollReveal
            baseOpacity={0.7}
            baseRotation={0}
            blurStrength={8}
            containerClassName="mb-12"
            textClassName="text-2xl font-medium leading-snug sm:text-3xl"
            rotationEnd="bottom 80%"
            wordAnimationEnd="bottom 70%"
          >
            {aboutIntro}
          </ScrollReveal>

          <ul className="grid grid-cols-3 gap-4">
            {aboutStats.map((stat) => (
              <li key={stat.label} className="rounded-2xl bg-background p-4 text-center sm:p-6">
                <p className="font-heading text-4xl font-bold sm:text-5xl">
                  <CountUp to={stat.value} duration={2} />
                  {stat.suffix}
                </p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.1} className="lg:sticky lg:top-28">
          <Stepper steps={steps} finalLabel="Volver al inicio" />
        </Reveal>
      </Container>
    </Section>
  )
}
