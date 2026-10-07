import { About } from '@/features/about/About'
import { Contact } from '@/features/contact/Contact'
import { EducationPreview } from '@/features/education/EducationPreview'
import { ExperiencePreview } from '@/features/experience/ExperiencePreview'
import { Hero } from '@/features/home/Hero'
import { JourneyMap } from '@/features/home/JourneyMap'
import { Projects } from '@/features/projects/Projects'
import { Capabilities } from '@/features/stack/Capabilities'
import { pageMeta } from '@/data/seo'
import { usePageMeta } from '@/hooks/usePageMeta'

export function HomePage() {
  usePageMeta({ ...pageMeta['/'], path: '/' })

  return (
    <>
      <Hero />
      <JourneyMap />
      <About />
      <ExperiencePreview />
      <Capabilities />
      <Projects />
      <EducationPreview />
      <Contact />
    </>
  )
}
