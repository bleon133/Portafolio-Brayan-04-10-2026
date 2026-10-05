import { useEffect } from 'react'

interface PageMetaOptions {
  /** Título completo de la pestaña. */
  title: string
  description: string
  /** Ruta de la página, por ejemplo '/proyectos'. Define el canonical y og:url. */
  path: string
  /** Ruta pública de la imagen para compartir. Por defecto, la imagen del sitio. */
  image?: string
  /** true en páginas que no deben indexarse, como la 404. */
  noindex?: boolean
}

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.setAttribute('content', content)
}

/** Actualiza título, descripción, canonical, Open Graph, Twitter y robots al cambiar de página. */
export function usePageMeta({ title, description, path, image = '/og-image.png', noindex = false }: PageMetaOptions) {
  useEffect(() => {
    const origin = window.location.origin
    const url = `${origin}${path === '/' ? '/' : path}`
    const imageUrl = image.startsWith('http') ? image : `${origin}${image}`

    document.title = title
    setMeta('meta[name="description"]', 'name', 'description', description)
    setMeta('meta[name="robots"]', 'name', 'robots', noindex ? 'noindex, nofollow' : 'index, follow')
    setMeta('meta[property="og:title"]', 'property', 'og:title', title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', description)
    setMeta('meta[property="og:url"]', 'property', 'og:url', url)
    setMeta('meta[property="og:image"]', 'property', 'og:image', imageUrl)
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', description)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', imageUrl)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.appendChild(canonical)
    }
    canonical.href = url
  }, [title, description, path, image, noindex])
}
