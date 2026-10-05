import { useSyncExternalStore } from 'react'

const STORAGE_KEY = 'portafolio:intro-visto'

function shouldSkipIntro() {
  try {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return true
    if (window.location.pathname !== '/' || window.location.hash) return true
    return sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return true
  }
}

let done = shouldSkipIntro()
const listeners = new Set<() => void>()

export function finishIntro() {
  done = true
  try {
    sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    // Sin sessionStorage el loader simplemente se repite en la próxima visita.
  }
  listeners.forEach((listener) => listener())
}

function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** true cuando el loader terminó (o se omitió). Las animaciones del hero esperan a este valor. */
export function useIntroDone() {
  return useSyncExternalStore(subscribe, () => done, () => true)
}
