import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect, useRef, useState } from 'react'

import type { GalleryImage } from '@/types'

/** Carrusel de pantallazos con pie de foto, contador y botones accesibles. */
export function ProjectGallery({ images, title }: { images: GalleryImage[]; title: string }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const [viewerOpen, setViewerOpen] = useState(false)
  const current = images[index]
  const isPhone = current.src.includes('app-vigilantes')
  const prefersReducedMotion = useReducedMotion()
  const dialogRef = useRef<HTMLDialogElement>(null)

  function go(next: number) {
    const target = (next + images.length) % images.length
    setDirection(next > index ? 1 : -1)
    setIndex(target)
  }

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (viewerOpen && !dialog.open) dialog.showModal()
    if (!viewerOpen && dialog.open) dialog.close()
  }, [viewerOpen])

  return (
    <>
      <div role="group" aria-roledescription="carrusel" aria-label={`Pantallazos de ${title}`}>
        {/* Portrait screenshots are centered inside the same bounded frame. */}
        <div
          className={`relative flex items-center justify-center overflow-hidden ${
            isPhone ? 'h-[32rem] max-h-[75dvh]' : ''
          }`}
        >
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.button
              key={current.src}
              type="button"
              custom={direction}
              variants={{
                enter: (dir: number) => (prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: dir * 40 }),
                center: { opacity: 1, x: 0 },
                exit: (dir: number) => (prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: dir * -40 }),
              }}
              initial={prefersReducedMotion ? false : 'enter'}
              animate="center"
              exit="exit"
              transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
              onClick={() => setViewerOpen(true)}
              aria-label={`Ampliar imagen: ${current.caption}`}
              className={`group relative flex cursor-zoom-in items-center justify-center focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-soft ${
                isPhone ? 'h-full w-full' : 'w-full'
              }`}
            >
              <img
                src={current.src}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className={`block object-contain ${isPhone ? 'h-full max-h-full w-auto max-w-full' : 'h-auto w-full'}`}
              />
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

        <div className="mt-3 flex items-start gap-3 px-1">
          <p className="flex min-w-0 flex-1 text-base leading-relaxed text-muted" aria-live="polite">
            {current.caption}
          </p>
          <div className="flex shrink-0 items-center gap-2">
            <button
              type="button"
              onClick={() => go(index - 1)}
              aria-label="Imagen anterior"
              className="flex size-11 items-center justify-center border-b border-border bg-transparent transition-colors duration-200 hover:border-accent"
            >
              <ChevronLeft className="size-5" aria-hidden="true" />
            </button>
            <span className="min-w-14 text-center text-sm tabular-nums text-muted">
              {index + 1} / {images.length}
            </span>
            <button
              type="button"
              onClick={() => go(index + 1)}
              aria-label="Imagen siguiente"
              className="flex size-11 items-center justify-center border-b border-border bg-transparent transition-colors duration-200 hover:border-accent"
            >
              <ChevronRight className="size-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setViewerOpen(false)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setViewerOpen(false)
        }}
        aria-label={`Imagen ampliada: ${current.caption}`}
        className="fixed inset-0 m-auto h-fit max-h-[95dvh] w-fit max-w-[96vw] overflow-visible border-0 bg-transparent p-0 backdrop:bg-ink/80"
      >
        <div
          className="relative mx-auto flex max-h-[90dvh] max-w-[96vw] flex-col items-center gap-3 overflow-auto bg-background p-4 sm:p-6"
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            autoFocus
            onClick={() => setViewerOpen(false)}
            aria-label="Cerrar imagen ampliada"
            className="absolute top-2 right-2 z-10 flex size-11 items-center justify-center border border-border bg-background text-foreground focus-visible:outline-2 focus-visible:outline-accent-soft"
          >
            <X className="size-5" aria-hidden="true" />
          </button>
          <img
            src={current.src}
            alt={current.caption}
            className="max-h-[80dvh] max-w-[88vw] object-contain"
          />
          <p className="text-center text-sm text-muted">{current.caption}</p>
        </div>
      </dialog>
    </>
  )
}
