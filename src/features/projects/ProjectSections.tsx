import type { ProjectSection } from '@/types'

interface ProjectSectionsProps {
  sections: ProjectSection[]
}

export function ProjectSections({ sections }: ProjectSectionsProps) {
  return (
    <div className="space-y-12">
      {sections.map((section) => (
        <section key={section.id}>
          <h2 className="text-xl font-semibold tracking-tight text-ink sm:text-2xl">
            {section.title}
          </h2>
          <div className="mt-4 space-y-4 text-lg leading-relaxed text-foreground/90">
            {section.blocks.map((block, index) =>
              block.type === 'paragraph' ? (
                <p key={`${section.id}-${index}`}>{block.text}</p>
              ) : (
                <ul key={`${section.id}-${index}`} className="space-y-3 text-foreground">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ),
            )}
          </div>
        </section>
      ))}
    </div>
  )
}
