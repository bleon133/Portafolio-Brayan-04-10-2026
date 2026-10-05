import { useParams } from 'react-router-dom'

import { getNextProject, getProject } from '@/data/projects'
import { ProjectDetail } from '@/features/projects/ProjectDetail'
import { NotFoundPage } from '@/pages/NotFoundPage'

export function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)

  if (!project) return <NotFoundPage />

  return <ProjectDetail project={project} next={getNextProject(project.slug)} />
}
