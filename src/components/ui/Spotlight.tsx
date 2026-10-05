import { motion } from 'motion/react'

/** Estilo Aceternity UI: foco de luz suave que respira detrás del hero. */
export function Spotlight() {
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none absolute -top-32 left-1/2 h-[36rem] w-[70rem] max-w-none -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,rgba(37,99,235,0.14),transparent)] blur-2xl"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: [0.55, 1, 0.55], scale: [0.95, 1.05, 0.95] }}
      transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
    />
  )
}
