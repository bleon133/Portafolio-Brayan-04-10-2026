import '@fontsource/bebas-neue/latin-400.css'

import { ArrowRight, Download } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { siteConfig } from '@/data/site'

/**
 * Masthead class — giant "PORTAFOLIO" that stays single-line at 1440 px.
 * Bebas Neue 400, clamp(5rem,17vw,17rem), uppercase, tight line-height
 * and tracking.  No scaleY transform.
 */
const portfolioTitleClass =
  'whitespace-nowrap font-["Bebas_Neue"] text-[clamp(5rem,17vw,17rem)] font-normal uppercase leading-[0.85] tracking-[-0.01em] text-ink'

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="relative isolate overflow-hidden bg-background"
    >
      <Container className="relative flex flex-col pt-[104px] pb-10 sm:pb-12 lg:min-h-[100svh] lg:pb-0">
        {/* Masthead — Bebas Neue 400, z-10 above circle (z-0) */}
        <h1
          className={`${portfolioTitleClass} relative z-10 origin-left scale-x-[1.05] sm:scale-x-[1.25] lg:scale-x-[1.3]`}
        >
          Portafolio
        </h1>

        {/* Two-column grid: copy left, portrait right (stacks on mobile)
            — portrait anchored to section bottom on desktop for full overlap
            — circle backdrop now z-0 so H1 (z-10) renders above it */}
        <div className="relative -mt-2 grid flex-1 items-end gap-6 sm:mt-0 lg:-mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-0">

          {/* ── Copy column — left ─────────────────────────────────── */}
          <div className="relative z-30 py-6 font-heading lg:self-start lg:py-0 lg:pt-14">
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

          {/* ── Portrait column — right ────────────────────────────── */}
          {/*
            Desktop: portrait anchored to section bottom, scaled to viewport
            height so it overlaps the masthead.  Mobile: small top-right
            cutout (~6 rem at 390 px, ~12 rem at 768 px) overlapping
            the final "LIO" letters without cropping arms.
          */}
          <figure className="absolute -top-4 right-0 h-24 w-24 sm:-top-20 sm:right-[5.5rem] sm:h-40 sm:w-40 md:right-32 md:h-48 md:w-48 lg:relative lg:top-auto lg:right-auto lg:h-full lg:w-full lg:flex lg:items-end lg:justify-end">
            {/* Terracotta circle backdrop — z-0, behind H1 and photo */}
            <span
              aria-hidden="true"
              className="absolute bottom-[4%] left-1/2 z-0 aspect-square w-[82%] max-w-[32rem] -translate-x-1/2 rounded-full bg-accent/90 lg:max-w-[40rem]"
            />

            {/*
              Mobile: absolute top-right cutout (6rem at 390px; 12rem at 768px)
              overlapping the masthead. Desktop: large bottom-aligned portrait.
              Intrinsic width/height prevent CLS; eager loading ensures
              first-fold delivery.
            */}
            <img
              src="/assets/hero/brayan-leon.webp"
              alt="Brayan León, desarrollador Backend y Fullstack"
              width={1600}
              height={1572}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative z-20 aspect-[1600/1572] h-full w-full object-contain lg:mx-0 lg:h-auto lg:w-full lg:max-w-full lg:max-h-[min(48rem,calc(100svh_-_16rem))] lg:origin-bottom-right lg:scale-[1.05] [@media(min-width:1024px)_and_(max-height:800px)]:origin-bottom-right [@media(min-width:1024px)_and_(max-height:800px)]:scale-[1.14] [@media(min-width:1024px)_and_(max-height:800px)]:translate-x-10"
            />
          </figure>
        </div>
      </Container>
    </section>
  )
}
