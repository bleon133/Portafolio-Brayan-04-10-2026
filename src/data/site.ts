import type { NavItem } from '@/types'

export const siteConfig = {
  name: 'Brayan Steven León Martinez',
  shortName: 'Brayan León',
  role: 'Estudiante de Ingeniería de Sistemas',
  tagline:
    'Estudiante de Ingeniería de Sistemas | Desarrollador Backend y Fullstack | Java, Spring Boot, React, .NET y TypeScript | Buscando prácticas profesionales 2027-1',
  description:
    'Portafolio de Brayan Steven León Martinez, estudiante de Ingeniería de Sistemas en la UNAB. Desarrollo Backend y Fullstack con Java, Spring Boot, React y .NET.',
  github: 'https://github.com/bleon133',
  githubUser: 'bleon133',
  linkedin: 'https://www.linkedin.com/in/brayan-steven-le%C3%B3n-martinez-a7528416b',
  email: 'brayanstevenleonmartinez@gmail.com',
  /** El PDF vive en /public. Si está vacío, no se muestran los botones de descarga. */
  cvUrl: '/cv-brayan-leon.pdf',
  cvFileName: 'Brayan-Leon-CV.pdf',
}

/** `section` es el id de la sección equivalente en la Home, para resaltar la barra al hacer scroll. */
export const navItems: NavItem[] = [
  { label: 'Sobre mí', href: '/#sobre-mi', section: 'sobre-mi' },
  { label: 'Experiencia', href: '/experiencia', section: 'experiencia' },
  { label: 'Proyectos', href: '/proyectos', section: 'proyectos' },
  { label: 'Educación', href: '/educacion', section: 'educacion' },
  { label: 'Contacto', href: '/#contacto', section: 'contacto' },
]
