/**
 * Título y descripción de las páginas fijas. Lo usan tanto el hook `usePageMeta`
 * (navegación dentro de la app) como `scripts/generate-seo.mjs` (HTML estático
 * por ruta). No importar nada de la app aquí: el script lo carga directo con Node.
 */
export interface PageMeta {
  title: string
  description: string
}

export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: 'Brayan León | Desarrollador Backend y Fullstack',
    description:
      'Portafolio de Brayan Steven León Martinez, estudiante de Ingeniería de Sistemas en la UNAB. Desarrollo Backend y Fullstack con Java, Spring Boot, React y .NET. Busco prácticas profesionales en 2027-1.',
  },
  '/experiencia': {
    title: 'Experiencia | Brayan León',
    description:
      'Experiencia de Brayan León: Técnico en Sistemas de Front y Back End en Devs Technology (2023 a 2025) y auxiliar de investigación y creación en la UNAB.',
  },
  '/proyectos': {
    title: 'Proyectos | Brayan León',
    description:
      'Proyectos web, móviles, de realidad virtual, redes y videojuegos de Brayan León, con su stack, capturas y código.',
  },
  '/educacion': {
    title: 'Educación y certificados | Brayan León',
    description:
      'Formación de Brayan León: Ingeniería de Sistemas en la UNAB, movilidad académica en México y certificados de AWS, Cisco, Oracle, MongoDB y EF SET.',
  },
}
