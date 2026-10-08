import { ArrowRight, Download } from 'lucide-react'

import { Container } from '@/components/layout/Container'
import { siteConfig } from '@/data/site'

/**
 * Masthead class — giant "PORTAFOLIO" that stays single-line at 1440 px
 * (clamp caps at 11 rem ≈ 176 px, 12.5 vw at 1440 px = 180 px ≈ 11.25 rem).
 * On a 390 px viewport clamp(3.2 rem, 48.75 vw, 11 rem) → 3.2 rem (≈ 51 px)
 * so it never overflows the fold.
 */
const portfolioTitleClass =
  'whitespace-nowrap font-heading text-[clamp(3.2rem,12.5vw,11rem)] font-bold uppercase leading-[0.82] tracking-[-0.06em] text-ink'

export function Hero() {
  return (
    <section
      id="inicio"
      aria-label="Inicio"
      className="relative isolate overflow-hidden bg-background"
    >
      <Container className="relative pt-24 pb-10 sm:pb-12">
        {/* Masthead — always visible, never wraps */}
        <h1 className={`${portfolioTitleClass} relative z-0`}>
          Portafolio
        </h1>

        {/* Two-column grid: copy left, portrait right (stacks on mobile) */}
        <div className="relative -mt-2 grid items-end gap-6 sm:mt-0 lg:-mt-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-8">

          {/* ── Copy column — left ─────────────────────────────────── */}
          <div className="relative z-10 py-6 lg:py-10">
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted">
              Hola, soy
            </p>
            <h2 className="mt-2 text-4xl font-bold leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl">
              {siteConfig.shortName}
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-[0.1em] text-accent">
              Desarrollador Backend y Fullstack
            </p>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
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
            <figure> provides intrinsic dimensions (width/height) for zero
            layout shift, and a semantic wrapper for the <img>.
            The terracotta circle sits behind the portrait via absolute
            positioning.  The portrait is cropped to a 3:4 aspect ratio
            (face-biased) and scales fluidly from mobile to desktop.
          */}
          <figure className="relative isolate mx-auto lg:max-w-none">
            {/* Terracotta circle backdrop */}
            <span
              aria-hidden="true"
              className="absolute bottom-[4%] left-1/2 aspect-square w-[82%] max-w-[32rem] -translate-x-1/2 rounded-full bg-accent/20"
            />

            {/*
              Transparent portrait — cropped to 3:4, face-biased crop,
              positioned over the circle.  Intrinsic width/height prevent
              CLS; eager loading ensures first-fold delivery.
            */}
            <img
              src="/assets/hero/brayan-leon.webp"
              alt="Brayan León, desarrollador Backend y Fullstack"
              width={1080}
              height={1440}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              className="relative z-10 mx-auto aspect-[3/4] h-[26rem] w-[82%] max-w-[28rem] sm:h-[31rem] lg:h-[35rem] object-cover object-[50%_30%]"
            />
          </figure>
        </div>
      </Container>
    </section>
  )
}
