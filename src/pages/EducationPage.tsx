import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { Reveal } from '@/components/ui/Reveal'
import { CertificationsExplorer } from '@/features/education/CertificationsExplorer'
import { EducationList } from '@/features/education/EducationList'
import { pageMeta } from '@/data/seo'
import { usePageMeta } from '@/hooks/usePageMeta'

export function EducationPage() {
  usePageMeta({ ...pageMeta['/educacion'], path: '/educacion' })

  return (
    <div className="flex min-h-dvh flex-col">
      <PageHeader
        eyebrow="Educación"
        title="Formación y certificados"
        description="Estudios universitarios y credenciales verificables."
      />
      <Container className="flex-1 space-y-16 py-16">
        <section aria-labelledby="titulo-formacion">
          <Reveal>
            <h2 id="titulo-formacion" className="mb-6 text-2xl font-semibold sm:text-3xl">
              Formación
            </h2>
          </Reveal>
          <EducationList />
        </section>
        <section aria-labelledby="titulo-certificados">
          <Reveal>
            <h2 id="titulo-certificados" className="mb-6 text-2xl font-semibold sm:text-3xl">
              Certificados
            </h2>
          </Reveal>
          <CertificationsExplorer />
        </section>
      </Container>
    </div>
  )
}
