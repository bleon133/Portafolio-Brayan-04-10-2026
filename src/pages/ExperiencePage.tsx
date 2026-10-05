import { Container } from '@/components/layout/Container'
import { PageHeader } from '@/components/ui/PageHeader'
import { ExperienceTimeline } from '@/features/experience/ExperienceTimeline'
import { pageMeta } from '@/data/seo'
import { usePageMeta } from '@/hooks/usePageMeta'

export function ExperiencePage() {
  usePageMeta({ ...pageMeta['/experiencia'], path: '/experiencia' })

  return (
    <div className="flex min-h-dvh flex-col">
      <PageHeader
        eyebrow="Experiencia"
        title="Dónde he trabajado"
        description="Mis cargos, con las funciones y las herramientas de cada etapa."
      />
      <Container className="flex-1 py-16">
        <ExperienceTimeline />
      </Container>
    </div>
  )
}
