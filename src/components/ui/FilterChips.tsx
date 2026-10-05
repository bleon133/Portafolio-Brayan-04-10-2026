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
      <div className="flex flex-wrap gap-2">
        {all.map((option) => {
          const active = option === value
          return (
            <button
              key={option ?? 'todos'}
              type="button"
              aria-pressed={active}
              onClick={() => onChange(option)}
              className={cn(
                'min-h-11 rounded-full border px-4 text-sm font-medium transition-colors duration-200',
                active
                  ? 'border-ink bg-ink text-white'
                  : 'border-border bg-background text-foreground hover:border-foreground/40',
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
