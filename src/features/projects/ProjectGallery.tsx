import { ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'

import type { GalleryImage } from '@/types'

/** Carrusel de pantallazos con pie de foto, contador y botones accesibles. */
export function ProjectGallery({ images, title }: { images: GalleryImage[]; title: string }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)
  const current = images[index]
  const isPhone = current.src.includes('app-vigilantes')

  function go(next: number) {
    const target = (next + images.length) % images.length
    setDirection(next > index ? 1 : -1)
    setIndex(target)
  }

  return (
    <div role="group" aria-roledescription="carrusel" aria-label={`Pantallazos de ${title}`}>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-3 sm:p-5">
        <div className={`flex items-center justify-center ${isPhone ? 'h-[32rem]' : ''}`}>
          <AnimatePresence mode="wait" custom={direction} initial={false}>
            <motion.img
              key={current.src}
              src={current.src}
              alt={current.caption}
              loading="lazy"
              custom={direction}
              variants={{
                enter: (dir: number) => ({ opacity: 0, x: dir * 40 }),
                center: { opacity: 1, x: 0 },
                exit: (dir: number) => ({ opacity: 0, x: dir * -40 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.25 }}
              className={`rounded-xl object-contain ${isPhone ? 'h-full w-auto' : 'w-full'}`}
            />
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4">
        <p className="max-w-2xl text-lg text-muted" aria-live="polite">
          {current.caption}
        </p>
        <div className="flex shrink-0 items-center gap-2">
          <button
            type="button"
            onClick={() => go(index - 1)}
            aria-label="Imagen anterior"
            className="flex size-11 items-center justify-center rounded-full border border-border transition-colors duration-200 hover:bg-elevated"
          >
            <ChevronLeft className="size-5" aria-hidden="true" />
          </button>
          <span className="min-w-14 text-center text-sm tabular-nums text-muted">
            {index + 1} de {images.length}
          </span>
          <button
            type="button"
            onClick={() => go(index + 1)}
            aria-label="Imagen siguiente"
            className="flex size-11 items-center justify-center rounded-full border border-border transition-colors duration-200 hover:bg-elevated"
          >
            <ChevronRight className="size-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  )
}
