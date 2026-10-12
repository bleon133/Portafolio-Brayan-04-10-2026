interface ProjectHighlightsProps {
  highlights?: string[]
}

/** Fila editorial de datos clave del proyecto: rol, tamaño del equipo, duración, etc. */
export function ProjectHighlights({ highlights }: ProjectHighlightsProps) {
  if (!highlights?.length) return null

  return (
    <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted">
      {highlights.map((highlight, index) => (
        <li key={highlight} className="flex items-center gap-4">
          {index > 0 && <span aria-hidden="true" className="h-px w-6 bg-border" />}
          {highlight}
        </li>
      ))}
    </ul>
  )
}
