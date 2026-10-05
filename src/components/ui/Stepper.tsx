import { Check } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useState, type ReactNode } from 'react'

import { cn } from '@/lib/cn'

interface StepperProps {
  steps: { title: string; content: ReactNode }[]
  finalLabel?: string
}

/** Stepper estilo React Bits: indicadores conectados y contenido animado por paso. */
export function Stepper({ steps, finalLabel = 'Volver al inicio' }: StepperProps) {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)
  const isLast = current === steps.length - 1

  function goTo(next: number) {
    setDirection(next > current ? 1 : -1)
    setCurrent(next)
  }

  return (
    <div className="rounded-2xl border border-border bg-background p-5 sm:p-8">
      <ol className="flex items-center" aria-label="Pasos">
        {steps.map((step, index) => {
          const done = index < current
          const active = index === current
          return (
            <li key={step.title} className={cn('flex items-center', index < steps.length - 1 && 'flex-1')}>
              <button
                type="button"
                onClick={() => goTo(index)}
                aria-current={active ? 'step' : undefined}
                aria-label={`Paso ${index + 1}: ${step.title}`}
                className={cn(
                  'flex size-11 shrink-0 items-center justify-center rounded-full border text-sm font-semibold transition-colors duration-200',
                  active && 'border-accent bg-accent text-white',
                  done && 'border-accent bg-accent/20 text-accent-soft',
                  !active && !done && 'border-border text-muted hover:border-muted',
                )}
              >
                {done ? <Check className="size-4" aria-hidden="true" /> : index + 1}
              </button>
              {index < steps.length - 1 && (
                <div className="mx-3 h-px flex-1 overflow-hidden bg-border">
                  <motion.div
                    className="h-full origin-left bg-accent-soft"
                    initial={false}
                    animate={{ scaleX: done ? 1 : 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              )}
            </li>
          )
        })}
      </ol>

      <div className="relative mt-8 min-h-64 overflow-hidden" aria-live="polite">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          <motion.div
            key={current}
            custom={direction}
            variants={{
              enter: (dir: number) => ({ opacity: 0, x: dir * 32 }),
              center: { opacity: 1, x: 0 },
              exit: (dir: number) => ({ opacity: 0, x: dir * -32 }),
            }}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.25 }}
          >
            {steps[current].content}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="min-h-11 rounded-lg px-4 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground disabled:pointer-events-none disabled:opacity-0"
        >
          Anterior
        </button>
        <button
          type="button"
          onClick={() => (isLast ? goTo(0) : goTo(current + 1))}
          className="min-h-11 rounded-lg bg-accent px-5 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
        >
          {isLast ? finalLabel : 'Siguiente'}
        </button>
      </div>
    </div>
  )
}
