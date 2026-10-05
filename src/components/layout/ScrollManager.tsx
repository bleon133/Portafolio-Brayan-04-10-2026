import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/** Lleva a la sección indicada por el hash (#contacto) después de montar la página. */
export function ScrollManager() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const id = decodeURIComponent(hash.slice(1))
    const timer = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView()
    }, 350)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])

  return null
}
