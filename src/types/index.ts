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

export interface ProjectMediaItem {
  src: string
  alt: string
  caption?: string
  /** Etiqueta corta bajo el medio, por ejemplo «Freya, tabernera». */
  label?: string
  /** Ancho relativo dentro de la rejilla: 2 ocupa dos columnas (útil para tiras anchas). */
  span?: 1 | 2 | 3 | 4
}

export type ProjectContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  /** Tabla simple: `columns` se dibuja como cabecera y `rows` como filas. */
  | { type: 'table'; columns: string[]; rows: string[][] }
  /** Rejilla de imágenes o GIFs con etiqueta y pie opcionales. */
  | { type: 'media'; items: ProjectMediaItem[]; columns?: 2 | 3 | 4 }
  /** Grupo de imágenes que reutiliza el carrusel con visor ampliado. */
  | { type: 'gallery'; images: GalleryImage[] }

export interface ProjectSection {
  id: string
  title: string
  blocks: ProjectContentBlock[]
}

export interface ProjectMediaIdea {
  title: string
  caption: string
}

export type ProjectMediaSlide =
  | { type: 'image'; src: string; caption: string }
  | { type: 'idea'; title: string; caption: string }

export type ProjectCategory = 'Web' | 'Móvil' | 'Web y móvil' | 'Escritorio' | 'Redes' | 'Realidad virtual' | 'Videojuego'

export interface Project {
  slug: string
  title: string
  category: ProjectCategory
  /** Aparece en Inicio y en el pie de página. Los demás solo en /proyectos. */
  featured: boolean
  description: string
  stack: string[]
  /** Ruta pública (carpeta /public). Sin imagen, las tarjetas y la página muestran una portada tipográfica. */
  image?: string
  /** Muestra la portada ajustándola dentro del marco 2:1 sin recortar (logos o banners). Por defecto se recorta. */
  coverFit?: 'cover' | 'contain'
  /** Etiquetas cortas de logros o datos clave, por ejemplo «Líder de programación». */
  highlights?: string[]
  links: ProjectLink[]
  /** Campos opcionales: la subpágina solo los muestra si existen. */
  /** Estado del proyecto cuando todavía no está terminado, por ejemplo «En desarrollo». */
  status?: string
  /** Filas extra de la ficha lateral, por ejemplo Autores o Director. */
  facts?: { label: string; value: string }[]
  origin?: string
  year?: string
  /**
   * Fecha de publicación o ejecución del proyecto (AAAA-MM-DD). Ordena la lista
   * de más reciente a más antigua y se muestra en la ficha lateral.
   * Sin esta fecha, el proyecto va al final del orden.
   */
  publishedAt?: string
  role?: string
  gallery?: GalleryImage[]
  /** Blocks render in data order so project detail content can grow without template branches. */
  sections?: ProjectSection[]
  /** Ideas conceptuales de imágenes o capturas para cada proyecto. */
  mediaIdeas?: ProjectMediaIdea[]
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
