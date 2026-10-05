import { MotionConfig } from 'motion/react'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/app/router'

export function App() {
  // reducedMotion="user" respeta prefers-reduced-motion en todas las animaciones.
  return (
    <MotionConfig reducedMotion="user">
      <RouterProvider router={router} />
    </MotionConfig>
  )
}
