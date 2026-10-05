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
      <h1 className="text-3xl font-bold">Página no encontrada</h1>
      <Link to="/" className="mt-6 inline-block text-accent-soft underline-offset-4 hover:underline">
        Volver al inicio
      </Link>
    </Container>
  )
}
