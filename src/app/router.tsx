import { createBrowserRouter } from 'react-router-dom'

import { MainLayout } from '@/components/layout/MainLayout'
import { HomePage } from '@/pages/HomePage'
import { NotFoundPage } from '@/pages/NotFoundPage'

// Las subpáginas se cargan bajo demanda para que la Home pese menos.
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    // Evita el aviso de React Router al cargar una subpágina con carga diferida.
    HydrateFallback: () => null,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'experiencia',
        lazy: async () => ({ Component: (await import('@/pages/ExperiencePage')).ExperiencePage }),
      },
      {
        path: 'proyectos',
        lazy: async () => ({ Component: (await import('@/pages/ProjectsPage')).ProjectsPage }),
      },
      {
        path: 'proyectos/:slug',
        lazy: async () => ({ Component: (await import('@/pages/ProjectPage')).ProjectPage }),
      },
      {
        path: 'educacion',
        lazy: async () => ({ Component: (await import('@/pages/EducationPage')).EducationPage }),
      },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])
