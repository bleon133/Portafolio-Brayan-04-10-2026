import { PageHeader } from '@/components/ui/PageHeader'
import { ProjectsExplorer } from '@/features/projects/ProjectsExplorer'
import { pageMeta } from '@/data/seo'
import { usePageMeta } from '@/hooks/usePageMeta'

export function ProjectsPage() {
  usePageMeta({ ...pageMeta['/proyectos'], path: '/proyectos' })

  return (
    <div className="flex min-h-dvh flex-col">
      <PageHeader
        eyebrow="Proyectos"
        title="Todo lo que he construido"
        description="Web, móvil y videojuegos. Filtra por categoría o tecnología."
      />
      <ProjectsExplorer />
    </div>
  )
}
