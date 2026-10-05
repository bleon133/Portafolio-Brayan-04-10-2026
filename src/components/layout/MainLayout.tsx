import { AnimatePresence, motion } from 'motion/react'
import { useLocation, useOutlet } from 'react-router-dom'

import { FloatingNav } from '@/components/layout/FloatingNav'
import { Footer } from '@/components/layout/Footer'
import { ScrollManager } from '@/components/layout/ScrollManager'
import { ScrollProgress } from '@/components/layout/ScrollProgress'
import { Loader } from '@/components/ui/Loader'

export function MainLayout() {
  const { pathname, hash } = useLocation()
  // useOutlet conserva la página anterior mientras se reproduce la animación de salida.
  const outlet = useOutlet()

  return (
    <div className="flex min-h-dvh flex-col">
      <Loader />
      <a
        href="#contenido"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-3 focus:py-2 focus:text-white"
      >
        Saltar al contenido
      </a>
      <ScrollProgress />
      <ScrollManager />
      <FloatingNav />
      <AnimatePresence mode="wait" onExitComplete={() => !hash && window.scrollTo(0, 0)}>
        <motion.main
          key={pathname}
          id="contenido"
          className="flex-1"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        >
          {outlet}
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
