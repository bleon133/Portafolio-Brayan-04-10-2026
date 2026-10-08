import '@fontsource/bebas-neue/latin-400.css'

import { ArrowRight, Download } from 'lucide-react'
import type { CSSProperties } from 'react'

import { Container } from '@/components/layout/Container'
import { siteConfig } from '@/data/site'

/**
 * Masthead class — giant "PORTAFOLIO" that stays single-line at 1440 px.
 * Bebas Neue 400, clamp(5rem,17vw,17rem), uppercase, tight line-height
 * and tracking. The inner text is scaled vertically while this heading
 * reserves the transformed height in layout.
 */
const portfolioTitleClass =
  'whitespace-nowrap font-["Bebas_Neue"] text-[clamp(5rem,17vw,17rem)] font-normal uppercase leading-[0.85] tracking-[-0.01em] text-ink'

const heroMetrics = {
  '--header-h': '80px',
  '--title-stretch': '1.5',
  '--title-natural-h': 'calc(clamp(5rem, 17vw, 17rem) * 0.85)',
  '--title-h': 'calc(var(--title-natural-h) * var(--title-stretch))',
  '--photo-w': 'clamp(360px, 55vw, 560px)',
  '--photo-h': 'calc(var(--photo-w) * 1536 / 1600)',
  '--hero-natural-h':
    'max(640px, calc(24px + var(--title-h) + var(--photo-h) - var(--overlap)))',
  '--hero-extra':
    'max(0px, calc(100svh - var(--header-h) - var(--hero-natural-h)))',
  '--tablet-photo-w': 'clamp(360px, 51vw, 480px)',
  '--tablet-photo-h': 'calc(var(--tablet-photo-w) * 1536 / 1600)',
  '--overlap': 'clamp(40px, calc(var(--title-natural-h) * 0.25), 56px)',
  '--mobile-photo-h': 'calc(min(90vw, 380px) * 1536 / 1600)',
} as CSSProperties

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Inicio"
      style={heroMetrics}
      className="relative isolate mt-[var(--header-h)] overflow-hidden bg-background [@media(min-width:1024px)_and_(min-height:800px)_and_(orientation:landscape)]:pt-[min(var(--hero-extra),20vh)]"
    >
      <Container className="relative grid grid-rows-[auto_minmax(max-content,1fr)] pt-6 min-h-[max(700px,calc(100svh_-_var(--header-h)))] sm:min-h-[calc(24px_+_var(--title-h)_+_var(--tablet-photo-h)_-_var(--overlap))] lg:min-h-[max(640px,calc(24px_+_var(--title-h)_+_var(--photo-h)_-_var(--overlap)))] [@media(max-height:500px)_and_(max-width:900px)]:min-h-[max(700px,calc(100svh_-_var(--header-h)))]">
        {/* Masthead — Bebas Neue 400, z-10 above circle (z-0) */}
        <h1
          className={`${portfolioTitleClass} h-[var(--title-h)] relative z-10 origin-left scale-x-[1.05] sm:scale-x-[1.25] lg:scale-x-[1.3]`}
        >
          <span className="block origin-top [transform:scaleY(var(--title-stretch))]">
            Portafolio
          </span>
        </h1>

        {/* Content row — grid intrinsic sizing lets the hero grow if copy needs space. */}
        <div className="relative z-30 grid min-h-0 grid-cols-1 items-center pb-[calc(var(--mobile-photo-h)_+_24px)] sm:grid-cols-[42%_58%] sm:pb-0 md:grid-cols-[50%_50%] lg:grid-cols-[40%_60%] [@media(max-height:500px)_and_(max-width:900px)]:grid-cols-1 [@media(max-height:500px)_and_(max-width:900px)]:pb-[calc(var(--mobile-photo-h)_+_24px)]">
          <div className="relative z-30 min-w-0 py-6 font-heading">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Hola, soy
            </p>
            <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {siteConfig.shortName}
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-accent">
              Desarrollador Backend y Fullstack
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg lg:max-w-[21rem] xl:max-w-lg">
              Construyo aplicaciones web y APIs robustas, con atención al
              rendimiento y a la experiencia de usuario.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/proyectos"
                className="group inline-flex min-h-11 items-center gap-2 rounded-sm bg-accent px-5 font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
              >
                Ver proyectos
                <ArrowRight className="size-4" aria-hidden="true" />
              </a>
              {siteConfig.cvUrl && (
                <a
                  href={siteConfig.cvUrl}
                  download={siteConfig.cvFileName}
                  className="inline-flex min-h-11 items-center gap-2 rounded-sm border border-foreground/20 px-5 font-medium transition-colors duration-200 hover:bg-elevated"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Descargar CV
                </a>
              )}
            </div>
          </div>
          <div className="hidden sm:block" aria-hidden="true" />
        </div>

        {/* Photo is always bottom-anchored and stays at its natural ratio. */}
        <figure className="absolute z-20 bottom-0 left-1/2 aspect-[1600/1536] w-[90vw] max-w-[380px] -translate-x-1/2 sm:left-auto sm:right-0 sm:w-[var(--tablet-photo-w)] sm:max-w-none sm:translate-x-0 md:-right-1 lg:w-[var(--photo-w)] lg:right-8 xl:right-16 [@media(max-height:500px)_and_(max-width:900px)]:left-1/2 [@media(max-height:500px)_and_(max-width:900px)]:right-auto [@media(max-height:500px)_and_(max-width:900px)]:w-[90vw] [@media(max-height:500px)_and_(max-width:900px)]:max-w-[380px] [@media(max-height:500px)_and_(max-width:900px)]:-translate-x-1/2">
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-1/2 z-0 aspect-square w-[80vw] max-w-[320px] -translate-x-1/2 rounded-full bg-accent/90 sm:w-[82%] sm:max-w-[40rem] [@media(max-height:500px)_and_(max-width:900px)]:w-[80vw] [@media(max-height:500px)_and_(max-width:900px)]:max-w-[320px]"
          />
          <img
            src="/assets/hero/brayan-leon.webp"
            alt="Brayan León, desarrollador Backend y Fullstack"
            width={1600}
            height={1536}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            className="relative z-20 block h-full w-full object-contain lg:origin-bottom-right lg:scale-[1.05]"
          />
        </figure>
      </Container>
    </section>
  )
}
