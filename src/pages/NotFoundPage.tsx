import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { usePageMeta } from '@/hooks/usePageMeta'

export function NotFoundPage() {
  usePageMeta({
    title: 'Página no encontrada | Brayan León',
    description: 'La página que buscas no existe.',
    path: '/404',
    noindex: true,
  })

  return (
    <Container className="py-24">
      <div className="grid min-h-[60dvh] grid-cols-1 items-center md:grid-cols-2">
        {/* Left: oversized 404 */}
        <div className="flex items-center justify-center px-6 pb-12 pt-4 md:px-12 md:pb-0 md:pt-0">
          <span className="font-heading text-[12rem] leading-none tracking-tight text-ink md:text-[14rem]">
            404
          </span>
        </div>

        {/* Right: editorial copy + links */}
        <div className="flex flex-col justify-center px-6 pb-12 pt-4 md:px-12 md:pb-0 md:pt-0">
          <img
            src="/assets/editorial/journey-map-texture.webp"
            alt=""
            className="mb-8 hidden w-full opacity-30 md:block"
          />

          <h1 className="mb-4 text-2xl font-bold tracking-tight text-ink md:text-3xl">
            Ruta no encontrada
          </h1>

          <p className="mb-8 max-w-md text-muted">
            Esta página no existe. Vuelve al inicio o explora los proyectos.
          </p>

          <nav className="flex flex-wrap gap-4">
            <Link
              to="/"
              className="inline-block min-h-[44px] min-w-[44px] items-center px-4 py-3 text-accent-soft underline-offset-4 hover:underline"
            >
              Volver al inicio
            </Link>
            <Link
              to="/proyectos"
              className="inline-block min-h-[44px] min-w-[44px] items-center px-4 py-3 text-accent-soft underline-offset-4 hover:underline"
            >
              Ver proyectos
            </Link>
          </nav>
        </div>
      </div>
    </Container>
  )
}
