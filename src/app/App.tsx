import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { MotionConfig } from 'motion/react'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/app/router'

// Los scripts de medición los sirve Vercel. En local no existen, así que se omiten
// para no generar errores en consola ni visitas falsas en las estadísticas.
const isLocal = ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)

export function App() {
  // reducedMotion="user" respeta prefers-reduced-motion en todas las animaciones.
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
      {!isLocal && (
        <>
          <Analytics />
          <SpeedInsights />
        </>
      )}
    </MotionConfig>
  )
}
