import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useCallback, useEffect, useRef, useState } from 'react'

import type { GalleryImage, ProjectMediaSlide } from '@/types'

/* ------------------------------------------------------------------ */
/*  Props — keep existing `images` for current callers; add optional   */
/*  `slides` for the later media-ideas integration.                    */
/* ------------------------------------------------------------------ */
interface ProjectGalleryProps {
  images: GalleryImage[]
  title: string
  /** Mixed real images and editorial-placeholder ideas. */
  slides?: ProjectMediaSlide[]
}

function toSlides(images: GalleryImage[]): ProjectMediaSlide[] {
  return images.map((img) => ({ type: 'image', src: img.src, caption: img.caption }))
}

/**
 * Carrusel de pantallazos con pie de foto, contador y visor ampliado.
 * Soporta imágenes reales y diapositivas de tipo "idea" (placeholders
 * editoriales claramente etiquetados).
 */
export function ProjectGallery({ images, title, slides }: ProjectGalleryProps) {
  const merged = slides ?? toSlides(images)
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [viewerOpen, setViewerOpen] = useState(false)
  const current = merged[index]
  const prefersReducedMotion = useReducedMotion()
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)

  /* ---- navigation helpers ---- */
  const go = useCallback(
    (next: number) => {
      if (merged.length < 2) return
      const target = (next + merged.length) % merged.length
      setDirection(next > index ? 1 : -1)
      setIndex(target)
    },
    [index, merged.length],
  )

  /* ---- open / close dialog ---- */
  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (viewerOpen && !dialog.open) dialog.showModal()
    if (!viewerOpen && dialog.open) dialog.close()
  }, [viewerOpen])

  /* ---- focus trap: move focus to close button when dialog opens ---- */
  useEffect(() => {
    if (viewerOpen) closeRef.current?.focus()
  }, [viewerOpen])

  /* ---- keyboard: Escape closes; arrow keys navigate ---- */
  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'Escape' && viewerOpen) {
        setViewerOpen(false)
        return
      }
      if (e.key === 'ArrowLeft') go(index - 1)
      if (e.key === 'ArrowRight') go(index + 1)
    },
    [viewerOpen, go, index],
  )

  if (merged.length === 0) return null

  /* ---- render helpers ---- */
  function renderSlideContent() {
    if (current.type === 'idea') {
      return (
        <span className="flex h-full w-full items-center justify-center bg-ink/5 p-8 text-center">
          <span className="block max-w-lg space-y-3">
            <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
              Idea de imagen
            </span>
            <span className="block text-base font-medium text-foreground">{current.title}</span>
            <span className="block text-sm text-muted">{current.caption}</span>
          </span>
        </span>
      )
    }
    return (
      <img
        src={current.src}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="size-full object-contain"
      />
    )
  }

  function renderCaption() {
    if (current.type === 'idea') {
      return (
        <span className="inline-flex items-center gap-2">
          <span className="rounded-full bg-accent/10 px-2 py-0.5 text-xs font-medium text-accent-soft">
            Propuesta
          </span>
          <span className="text-base leading-relaxed text-muted">{current.caption}</span>
        </span>
      )
    }
    return <span className="text-base leading-relaxed text-muted">{current.caption}</span>
  }

  function renderCounter() {
    return (
      <span className="min-w-14 text-center text-sm tabular-nums text-muted" aria-live="polite">
        {index + 1} / {merged.length}
      </span>
    )
  }

  function renderNavButton(
    dir: -1 | 1,
    label: string,
    icon: React.ReactNode,
    extraClass = '',
  ) {
    return (
      <button
        type="button"
        onClick={() => go(index + dir)}
        aria-label={label}
        className={`flex size-11 items-center justify-center border-b border-border bg-transparent transition-colors duration-200 hover:border-accent ${extraClass}`}
      >
        {icon}
      </button>
    )
  }

  /* ---- inline carousel ---- */
  return (
    <>
      <div
        role="group"
        aria-roledescription="carrusel"
        aria-label={`Medios del proyecto ${title}`}
      >
        {/* Fixed 16:9 stage — images never cropped */}
        <div className="relative aspect-video w-full overflow-hidden">
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.button
              key={current.type === 'idea' ? current.caption : current.src}
              type="button"
              custom={direction}
              variants={{
                enter: (dir: number) =>
                  prefersReducedMotion
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: dir * 40 },
                center: { opacity: 1, x: 0 },
                exit: (dir: number) =>
                  prefersReducedMotion
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: dir * -40 },
              }}
              initial={prefersReducedMotion ? false : 'enter'}
              animate="center"
              exit="exit"
              transition={{
                duration: prefersReducedMotion ? 0 : 0.25,
              }}
              onClick={() => setViewerOpen(true)}
              aria-label={
                current.type === 'idea'
                  ? `Abrir idea visual: ${current.title}`
                  : `Ampliar imagen: ${current.caption}`
              }
              className="group absolute inset-0 flex cursor-zoom-in items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-soft"
            >
              {renderSlideContent()}
              <span
                aria-hidden="true"
                className="absolute right-2 bottom-2 inline-flex min-h-11 items-center gap-2 border border-border bg-background/95 px-3 text-sm text-foreground transition-colors group-hover:border-accent"
              >
                <Maximize2 className="size-4" />
                Ampliar
              </span>
            </motion.button>
          </AnimatePresence>
        </div>

        {/* Caption + inline nav */}
        <div className="mt-3 flex items-start gap-3 px-1">
          <p className="flex min-w-0 flex-1" aria-live="polite">
            {renderCaption()}
          </p>
          {merged.length > 1 && (
            <div className="flex shrink-0 items-center gap-2">
              {renderNavButton(-1, 'Imagen anterior', (
                <ChevronLeft className="size-5" aria-hidden="true" />
              ))}
              {renderCounter()}
              {renderNavButton(1, 'Imagen siguiente', (
                <ChevronRight className="size-5" aria-hidden="true" />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* ---- Enlarged viewer (native <dialog>) ---- */}
      <dialog
        ref={dialogRef}
        onClose={() => setViewerOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setViewerOpen(false)
        }}
        onKeyDown={onKeyDown}
        aria-label={
          current.type === 'idea'
            ? `Idea visual ampliada: ${current.title}`
            : `Imagen ampliada: ${current.caption}`
        }
        className="fixed inset-0 m-auto h-fit max-h-[95dvh] w-fit max-w-[96vw] overflow-visible border-0 bg-transparent p-0 backdrop:bg-ink/80"
      >
        <div
          className="relative mx-auto flex max-h-[90dvh] max-w-[96vw] flex-col items-center gap-3 overflow-auto bg-background p-4 sm:p-6"
          onClick={(event) => event.stopPropagation()}
        >
          {/* Close button */}
          <button
            ref={closeRef}
            type="button"
            autoFocus
            onClick={() => setViewerOpen(false)}
            aria-label="Cerrar imagen ampliada"
            className="absolute top-2 right-2 z-10 flex size-11 items-center justify-center border border-border bg-background text-foreground focus-visible:outline-2 focus-visible:outline-accent-soft"
          >
            <X className="size-5" aria-hidden="true" />
          </button>

          {/* Slide content (full size) */}
          {current.type === 'idea' ? (
            <div className="flex aspect-video w-[min(82vw,64rem)] max-w-full items-center justify-center bg-ink/5 p-8 text-center">
              <div className="max-w-lg space-y-3">
                <span className="inline-block rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent-soft">
                  Idea de imagen
                </span>
                <p className="text-lg font-medium text-foreground">{current.title}</p>
                <p className="text-base text-muted">{current.caption}</p>
              </div>
            </div>
          ) : (
            <img
              src={current.src}
              alt={current.caption}
              className="max-h-[80dvh] max-w-[88vw] object-contain"
            />
          )}

          {/* Caption */}
          <p aria-live="polite" className="text-center text-sm text-muted">
            {current.caption}
          </p>

          {/* Navigation inside viewer */}
          {merged.length >= 2 && (
            <div className="mt-2 flex items-center gap-3">
              {renderNavButton(-1, 'Imagen anterior', (
                <ChevronLeft className="size-5" aria-hidden="true" />
              ))}
              {renderCounter()}
              {renderNavButton(1, 'Imagen siguiente', (
                <ChevronRight className="size-5" aria-hidden="true" />
              ))}
            </div>
          )}
        </div>
      </dialog>
    </>
  )
}
