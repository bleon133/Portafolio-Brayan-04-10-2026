import type { Capability } from '@/types'

export const capabilities: Capability[] = [
  {
    title: 'Web',
    blurb: 'APIs REST y aplicaciones web de punta a punta.',
    items: [
      'Java',
      'Spring Boot',
      'PHP',
      'JavaScript',
      'TypeScript',
      'React',
      'Angular',
      'ASP.NET Core',
      'jQuery',
      'Bootstrap',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Datos',
    blurb: 'Modelado y consulta en bases relacionales y NoSQL.',
    items: ['MongoDB', 'PostgreSQL', 'Oracle', 'SQL Server', 'Firebase'],
  },
  {
    title: 'Móvil',
    blurb: 'Apps multiplataforma para iOS y Android.',
    items: ['Kotlin', 'Kotlin Multiplatform', 'Jetpack Compose', 'Android Studio', 'Flutter'],
  },
  {
    title: 'Videojuegos y electrónica',
    blurb: 'Prototipos de game jam y proyectos con Arduino.',
    items: ['Unity', 'C#', 'Arduino'],
  },
]

export const tools = ['Git', 'GitHub', 'Docker', 'CI/CD', 'Python', 'MATLAB', 'Visual Studio', 'VS Code']

export const marqueeItems = [...capabilities.flatMap((capability) => capability.items), ...tools]
