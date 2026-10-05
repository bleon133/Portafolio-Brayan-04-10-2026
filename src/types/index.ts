export interface NavItem {
  label: string
  href: string
  section?: string
}

export interface ProjectLink {
  label: string
  href: string
}

export interface GalleryImage {
  src: string
  caption: string
}

export type ProjectCategory = 'Web' | 'Móvil' | 'Web y móvil' | 'Escritorio' | 'Redes' | 'Realidad virtual' | 'Videojuego'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  /** Aparece en la Home. Los demás solo en /proyectos. */
  featured: boolean
  description: string
  stack: string[]
  /** Ruta pública (carpeta /public). Sin imagen, las tarjetas y la página muestran una portada tipográfica. */
  image?: string
  links: ProjectLink[]
  /** Campos opcionales: la subpágina solo los muestra si existen. */
  /** Estado del proyecto cuando todavía no está terminado, por ejemplo «En desarrollo». */
  status?: string
  /** Filas extra de la ficha lateral, por ejemplo Autores o Director. */
  facts?: { label: string; value: string }[]
  origin?: string
  year?: string
  role?: string
  problem?: string
  decisions?: string[]
  result?: string
  overview?: string
  features?: string[]
  gallery?: GalleryImage[]
}

export interface Capability {
  title: string
  blurb: string
  items: string[]
}

export interface AboutStep {
  title: string
  summary: string
  points: string[]
}

export type CertificationArea =
  | 'Cloud'
  | 'Datos'
  | 'Desarrollo'
  | 'Videojuegos'
  | 'Redes y seguridad'
  | 'Idiomas'

export interface Certification {
  id: string
  name: string
  issuer: string
  /** Fecha de expedición en formato 'AAAA-MM'. */
  issued: string
  area: CertificationArea
  url: string
  featured: boolean
}

export interface EnvironmentGroup {
  label: string
  items: string[]
}

export interface Experience {
  id: string
  company: string
  role: string
  /** Formato 'AAAA-MM'. Sin `end` significa que sigue vigente. */
  start: string
  end?: string
  location: string
  summary: string
  responsibilities: string[]
  environment: EnvironmentGroup[]
  reference?: { quote: string; source: string }
}

export interface Education {
  id: string
  institution: string
  program: string
  period: string
  status: string
  summary: string
  certUrl?: string
  /** Slug de un proyecto del portafolio relacionado con esta formación. */
  projectSlug?: string
}
