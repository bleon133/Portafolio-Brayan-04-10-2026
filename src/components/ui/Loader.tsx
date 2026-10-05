import { animate, motion } from 'motion/react'
import { useEffect, useState } from 'react'

import { siteConfig } from '@/data/site'
import { finishIntro, useIntroDone } from '@/lib/intro'

/** Pantalla de carga inicial: contador y cortina que sube. Solo la primera visita de la sesión. */
export function Loader() {
  const introDone = useIntroDone()
  const [alreadyDone] = useState(introDone)
  const [progress, setProgress] = useState(0)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (alreadyDone) return
    const root = document.documentElement
    root.style.overflow = 'hidden'

    const controls = animate(0, 100, {
      duration: 1.2,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (value) => setProgress(Math.round(value)),
      onComplete: () => setLeaving(true),
    })

    return () => {
      controls.stop()
      root.style.overflow = ''
    }
  }, [alreadyDone])

  if (alreadyDone) return null

  return (
    <motion.div
      role="status"
      aria-label="Cargando portafolio"
      className="fixed inset-0 z-100 flex flex-col justify-between bg-ink p-6 text-white sm:p-10"
      initial={{ y: 0 }}
      animate={{ y: leaving ? '-100%' : 0 }}
      transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      onAnimationComplete={() => {
        if (leaving) {
          document.documentElement.style.overflow = ''
          finishIntro()
        }
      }}
    >
      <p className="font-heading text-lg font-semibold">{siteConfig.shortName}</p>
      <div>
        <p className="font-heading text-8xl font-bold tabular-nums sm:text-9xl" aria-hidden="true">
          {progress}
        </p>
        <div className="mt-6 h-px w-full bg-white/20">
          <div className="h-full origin-left bg-white" style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <p className="mt-4 text-sm text-slate-400">Portafolio · Ingeniería de Sistemas</p>
      </div>
    </motion.div>
  )
}
