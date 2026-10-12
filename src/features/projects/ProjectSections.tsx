import { ProjectGallery } from '@/features/projects/ProjectGallery'
import type { ProjectContentBlock, ProjectSection } from '@/types'

interface ProjectSectionsProps {
  sections: ProjectSection[]
}

/** Bloque de texto: párrafo o viñetas. */
function TextBlock({ block }: { block: Extract<ProjectContentBlock, { type: 'paragraph' | 'list' }> }) {
  if (block.type === 'paragraph') return <p>{block.text}</p>

  return (
    <ul className="space-y-3 text-foreground">
      {block.items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

/**
 * Tabla editorial: cabecera + filas en pantallas grandes y, en móvil,
 * una ficha apilada por fila para no generar scroll horizontal.
 */
function TableBlock({ block }: { block: Extract<ProjectContentBlock, { type: 'table' }> }) {
  return (
    <>
      {/* Desktop — tabla real */}
      <div className="hidden overflow-hidden border border-border sm:block">
        <table className="w-full table-fixed border-collapse text-left text-base">
          <thead>
            <tr className="bg-surface">
              {block.columns.map((column, columnIndex) => (
                <th
                  key={column}
                  scope="col"
                  className={`border-b border-border px-4 py-3 font-mono text-xs font-medium uppercase tracking-widest text-muted ${columnIndex === 0 ? 'w-[22%]' : ''}`}
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {block.rows.map((row, rowIndex) => (
              <tr key={rowIndex} className="align-top odd:bg-background even:bg-surface/60">
                {row.map((cell, cellIndex) => (
                  <td
                    key={cellIndex}
                    className={`border-b border-border px-4 py-3 break-words ${cellIndex === 0 ? 'font-medium text-ink' : 'text-foreground/90'}`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile — una ficha por fila */}
      <dl className="space-y-4 sm:hidden">
        {block.rows.map((row, rowIndex) => (
          <div key={rowIndex} className="border border-border bg-surface/60 p-4">
            {row.map((cell, cellIndex) => (
              <div key={cellIndex} className={cellIndex > 0 ? 'mt-2' : undefined}>
                <dt className="font-mono text-xs uppercase tracking-widest text-muted">
                  {block.columns[cellIndex] ?? ''}
                </dt>
                <dd className={`break-words ${cellIndex === 0 ? 'font-medium text-ink' : 'text-foreground/90'}`}>
                  {cell}
                </dd>
              </div>
            ))}
          </div>
        ))}
      </dl>
    </>
  )
}

/** Rejilla de sprites o imágenes. Los GIFs ya traen su propio fondo oscuro. */
function MediaBlock({ block }: { block: Extract<ProjectContentBlock, { type: 'media' }> }) {
  const columns = block.columns ?? 3
  const gridClass =
    columns === 2
      ? 'sm:grid-cols-2'
      : columns === 4
        ? 'grid-cols-2 sm:grid-cols-4'
        : 'grid-cols-2 sm:grid-cols-3'

  // Clases literales: Tailwind no genera clases construidas dinámicamente.
  const spanClass: Record<number, string> = {
    1: '',
    2: 'col-span-2',
    3: 'col-span-2 sm:col-span-3',
    4: 'col-span-2 sm:col-span-4',
  }

  return (
    <ul className={`grid items-start gap-4 ${gridClass}`}>
      {block.items.map((item) => (
        <li key={item.src} className={`flex flex-col ${spanClass[item.span ?? 1]}`}>
          <div className="flex items-center justify-center overflow-hidden border border-border bg-[#18161e]">
            <img
              src={item.src}
              alt={item.alt}
              loading="lazy"
              decoding="async"
              className="h-auto max-h-56 w-full object-contain"
            />
          </div>
          {(item.label || item.caption) && (
            <div className="mt-2">
              {item.label && <p className="text-sm font-medium text-ink">{item.label}</p>}
              {item.caption && <p className="text-sm leading-relaxed text-muted">{item.caption}</p>}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}

/** Grupo de imágenes dentro de la narrativa: reutiliza el carrusel con visor. */
function GalleryBlock({ block }: { block: Extract<ProjectContentBlock, { type: 'gallery' }> }) {
  return <ProjectGallery images={block.images} title="Galería del proyecto" />
}

function Block({ block }: { block: ProjectContentBlock }) {
  switch (block.type) {
    case 'paragraph':
    case 'list':
      return <TextBlock block={block} />
    case 'table':
      return <TableBlock block={block} />
    case 'media':
      return <MediaBlock block={block} />
    case 'gallery':
      return <GalleryBlock block={block} />
    default:
      return null
  }
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
            {section.blocks.map((block, index) => (
              <Block key={`${section.id}-${index}`} block={block} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}
