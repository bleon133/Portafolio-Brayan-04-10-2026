import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { certifications } from '@/data/certifications'
import { CertificationCard } from '@/features/education/CertificationCard'
import { EducationList } from '@/features/education/EducationList'
import { sortByDateDesc } from '@/lib/collections'

/** Resumen para la Home: formación y certificados destacados. */
export function EducationPreview() {
  const featured = sortByDateDesc(
    certifications.filter((cert) => cert.featured),
    (cert) => cert.issued,
  )

  return (
    <Section id="educacion" titleId="titulo-educacion" tone="surface">
      <Container>
        <Reveal>
          <SectionHeading
            id="titulo-educacion"
            eyebrow="Educación"
            title="Formación y certificados"
            action={{ label: 'Ver todo', to: '/educacion' }}
          />
        </Reveal>
        <EducationList />
        <ul className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((cert, index) => (
            <li key={cert.id}>
              <Reveal delay={index * 0.08} className="h-full">
                <CertificationCard cert={cert} />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  )
}
