import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
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
        <SectionHeading
          id="titulo-educacion"
          eyebrow="Educación"
          title="Formación y certificados"
          action={{ label: 'Ver todo', to: '/educacion' }}
        />

        <div className="grid gap-x-16 gap-y-10 lg:grid-cols-[1fr_1fr]">
          {/* Formal education */}
          <div>
            <h3 className="mb-6 text-sm font-medium tracking-widest text-muted uppercase">
              Formación
            </h3>
            <EducationList />
          </div>

          {/* Featured credentials */}
          <div>
            <h3 className="mb-6 text-sm font-medium tracking-widest text-muted uppercase">
              Credenciales destacadas
            </h3>
            <ul className="divide-y divide-border">
              {featured.map((cert) => (
                <li key={cert.id} className="py-5 first:pt-0 last:pb-0">
                  <CertificationCard cert={cert} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}
