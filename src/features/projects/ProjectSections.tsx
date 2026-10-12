import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState } from 'react'

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
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  const gridClass =
    columns === 1
      ? 'grid-cols-1'
      : columns === 2
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

  const current = openIndex === null ? null : block.items[openIndex]

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (openIndex !== null && !dialog.open) dialog.showModal()
    if (openIndex === null && dialog.open) dialog.close()
  }, [openIndex])

  useEffect(() => {
    if (openIndex !== null) closeRef.current?.focus()
  }, [openIndex])

  const onKeyDown = useCallback((e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setOpenIndex(null)
      return
    }
    if (block.items.length < 2) return
    if (e.key === 'ArrowLeft') setOpenIndex((i) => (i === null ? i : (i - 1 + block.items.length) % block.items.length))
    if (e.key === 'ArrowRight') setOpenIndex((i) => (i === null ? i : (i + 1) % block.items.length))
  }, [block.items.length])

  return (
    <>
      <ul className={`grid items-start gap-4 ${gridClass}`}>
        {block.items.map((item, index) => {
          const flow = item.fit === 'flow'
          return (
            <li key={item.src} className={`flex flex-col ${spanClass[item.span ?? 1]}`}>
              <button
                type="button"
                onClick={() => setOpenIndex(index)}
                aria-label={`Ampliar: ${item.label ?? item.alt}`}
                className={`group relative flex cursor-zoom-in items-center justify-center overflow-hidden border border-border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-soft ${flow ? 'bg-transparent' : 'bg-[#18161e]'}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className={flow ? 'h-auto w-full object-contain' : 'h-auto max-h-56 w-full object-contain'}
                />
                <span
                  aria-hidden="true"
                  className="absolute right-2 bottom-2 inline-flex min-h-11 items-center gap-2 border border-border bg-background/95 px-3 text-sm text-foreground transition-colors group-hover:border-accent"
                >
                  <Maximize2 className="size-4" />
                  Ampliar
                </span>
              </button>
              {(item.label || item.caption) && (
                <div className="mt-2">
                  {item.label && <p className="text-sm font-medium text-ink">{item.label}</p>}
                  {item.caption && <p className="text-sm leading-relaxed text-muted">{item.caption}</p>}
                </div>
              )}
            </li>
          )
        })}
      </ul>

      {/* Visor ampliado */}
      <dialog
        ref={dialogRef}
        onClose={() => setOpenIndex(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpenIndex(null)
        }}
        onKeyDown={onKeyDown}
        aria-label={current ? `Imagen ampliada: ${current.label ?? current.alt}` : 'Imagen ampliada'}
        className="fixed inset-0 m-auto h-fit max-h-[95dvh] w-fit max-w-[96vw] overflow-visible border-0 bg-transparent p-0 backdrop:bg-ink/80"
      >
        {current && (
          <div
            className="relative mx-auto flex max-h-[90dvh] max-w-[96vw] flex-col items-center gap-3 overflow-auto bg-background p-4 sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              ref={closeRef}
              type="button"
              autoFocus
              onClick={() => setOpenIndex(null)}
              aria-label="Cerrar imagen ampliada"
              className="absolute top-2 right-2 z-10 flex size-11 items-center justify-center border border-border bg-background text-foreground focus-visible:outline-2 focus-visible:outline-accent-soft"
            >
              <X className="size-5" aria-hidden="true" />
            </button>

            <img
              src={current.src}
              alt={current.alt}
              className="max-h-[78dvh] max-w-[88vw] object-contain"
            />

            {(current.label || current.caption) && (
              <p aria-live="polite" className="max-w-2xl text-center text-sm text-muted">
                {current.label ? `${current.label}. ${current.caption ?? ''}`.trim() : current.caption}
              </p>
            )}

            {block.items.length >= 2 && (
              <div className="mt-2 flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setOpenIndex((i) => (i === null ? i : (i - 1 + block.items.length) % block.items.length))}
                  aria-label="Imagen anterior"
                  className="flex size-11 items-center justify-center border-b border-border bg-transparent transition-colors hover:border-accent"
                >
                  <ChevronLeft className="size-5" aria-hidden="true" />
                </button>
                <span className="min-w-14 text-center text-sm tabular-nums text-muted">
                  {(openIndex ?? 0) + 1} / {block.items.length}
                </span>
                <button
                  type="button"
                  onClick={() => setOpenIndex((i) => (i === null ? i : (i + 1) % block.items.length))}
                  aria-label="Imagen siguiente"
                  className="flex size-11 items-center justify-center border-b border-border bg-transparent transition-colors hover:border-accent"
                >
                  <ChevronRight className="size-5" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        )}
      </dialog>
    </>
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
