import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useCallback, useRef, useState } from 'react'

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

  // Open lightbox and focus the close button
  const openViewer = useCallback(() => {
    setViewerOpen(true)
    // After render, focus the close button
    requestAnimationFrame(() => dialogRef.current?.querySelector<HTMLButtonElement>('button')?.focus())
  }, [])

  // Close lightbox and return focus to the trigger button
  const closeViewer = useCallback((e?: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
    e?.stopPropagation()
    setViewerOpen(false)
  }, [])



  const handleDialogCancel = useCallback(
    (e: React.SyntheticEvent<HTMLDialogElement>) => {
      // Click outside the dialog content (backdrop)
      e.preventDefault()
      setViewerOpen(false)
    },
    [],
  )

  return (
    <>
      <div role="group" aria-roledescription="carrusel" aria-label={`Pantallazos de ${title}`}>
        {/* Large uncased image — centered for portrait, full-width for landscape */}
        <div
          className={`relative flex items-center justify-center overflow-hidden ${
            isPhone ? 'h-[32rem]' : ''
          }`}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <div
              key={current.src}
              className="relative flex items-center justify-center"
            >
              <motion.img
                src={current.src}
                alt={current.caption}
                loading="lazy"
                custom={direction}
                {...(prefersReducedMotion
                  ? {}
                  : {
                      variants: {
                        enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
                        center: { opacity: 1, x: 0 },
                        exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
                      },
                      initial: 'enter',
                      animate: 'center',
                      exit: 'exit',
                      transition: { duration: 0.25 },
                    })}
                className={`object-contain ${isPhone ? 'h-full w-auto' : 'w-full'}`}
                onClick={openViewer}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault()
                    openViewer()
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Ampliar imagen — ${current.caption}`}
              />
              {/* 44px "Ampliar imagen" button — bottom-right */}
              <button
                type="button"
                onClick={openViewer}
                aria-label={`Ampliar imagen — ${current.caption}`}
                className="absolute bottom-2 right-2 flex size-11 items-center justify-center rounded bg-background/90 text-xs font-medium text-foreground shadow transition-colors hover:bg-muted"
              >
                <Maximize2 className="size-4" aria-hidden="true" />
              </button>
            </div>
          </AnimatePresence>
        </div>

        {/* Hairline caption and counter controls */}
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

      {/* Accessible full-size lightbox viewer */}
      {viewerOpen && (
        <dialog
          ref={dialogRef}
          open={viewerOpen}
          onClick={handleDialogCancel}
          aria-label={`Imagen ampliada: ${current.caption}`}
          className="flex min-h-dvh min-w-screen items-center justify-center bg-black/80 p-4 backdrop-blur-none"
          style={{ background: 'rgba(0,0,0,0.8)' }}
        >
          <div
            className="relative flex max-h-[90dvh] max-w-[90vw] flex-col items-center justify-center gap-2"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button — top-right, 44px hit target */}
            <button
              type="button"
              onClick={closeViewer}
              aria-label="Cerrar ampliaci\u00f3n"
              className="absolute -top-3 -right-3 flex size-11 items-center justify-center rounded-full bg-background text-sm font-medium text-foreground shadow transition-colors hover:bg-muted"
            >
              ✕
            </button>

            {/* Enlarged image */}
            <img
              src={current.src}
              alt={current.caption}
              className="max-h-[85dvh] max-w-[90vw] object-contain"
            />

            {/* Caption below image */}
            <p className="text-center text-sm text-muted">{current.caption}</p>
          </div>
        </dialog>
      )}
    </>
  )
}
