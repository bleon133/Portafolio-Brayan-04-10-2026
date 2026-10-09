import '@fontsource-variable/newsreader/index.css'

import { formatPeriod } from '@/lib/collections'

export interface ExperiencePaperReliefItem {
  id: string
  company: string
  start: string
  end?: string
}

function getShortName(company: string): string {
  const acronym = company.match(/\(([^)]+)\)\s*$/)?.[1]
  if (acronym) return acronym.trim()

  return company
    .replace(/\s+(?:S\.A\.S\.|SAS|S\.A\.|Ltda\.|Ltd\.|Inc\.|LLC)\s*$/i, '')
    .trim()
}

interface ExperiencePaperReliefProps {
  items: readonly ExperiencePaperReliefItem[]
  activeId: string | null
}

export function ExperiencePaperRelief({ items, activeId }: ExperiencePaperReliefProps) {
  return (
    <aside aria-hidden="true" className="hidden w-64 self-start xl:block">
      <figure className="relative aspect-[2/3] overflow-hidden bg-background">
        <img
          alt=""
          className="absolute inset-0 size-full object-cover"
          decoding="async"
          loading="lazy"
          src="/assets/experience/paper-relief.webp"
        />

        {items.map((item, index) => {
          const isMostRecent = index === 0
          const isDimmed = activeId !== null && activeId !== item.id

          return (
            <div
              className={`absolute z-10 transition-opacity duration-150 motion-reduce:transition-none ${isDimmed ? 'opacity-45' : 'opacity-100'} ${isMostRecent ? 'right-[5%] top-[7%] text-right' : 'bottom-[7%] left-[5%] text-left'}`}
              key={item.id}
              style={{ maxWidth: '56%' }}
            >
              <p
                className="text-[17px] font-semibold leading-tight text-ink"
                style={{ fontFamily: 'Newsreader Variable, Georgia, serif' }}
              >
                {getShortName(item.company)}
              </p>
              <p className="mt-1 text-[11px] leading-snug text-muted">
                {formatPeriod(item.start, item.end)}
              </p>
            </div>
          )
        })}
      </figure>
    </aside>
  )
}
