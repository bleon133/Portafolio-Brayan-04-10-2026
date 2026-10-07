import { cn } from '@/lib/cn'

interface FilterChipsProps {
  legend: string
  options: string[]
  /** Valor activo o null para «Todos». */
  value: string | null
  onChange: (value: string | null) => void
}

export function FilterChips({ legend, options, value, onChange }: FilterChipsProps) {
  const all = [null, ...options]

  return (
    <fieldset className="min-w-0">
      <legend className="mb-2 text-sm text-muted">{legend}</legend>
      <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
        {all.map((option) => {
          const active = option === value
          return (
            <button
              key={option ?? 'todos'}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option)}
              className={cn(
                'group inline-flex items-baseline border-none bg-transparent px-0 pb-1 pt-0.5 text-sm font-medium transition-colors duration-150 hover:text-foreground focus-visible:outline-offset-2',
                'min-h-11',
                active
                  ? 'border-b-2 border-accent text-accent' // selected = terracotta bottom rule + ink text
                  : 'border-b border-transparent text-muted hover:border-foreground/20',
              )}
            >
              {option ?? 'Todos'}
            </button>
          )
        })}
      </div>
    </fieldset>
  )
}
