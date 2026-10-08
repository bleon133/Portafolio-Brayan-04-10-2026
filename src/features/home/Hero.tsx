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
      <Container className="relative flex flex-col pt-[104px] pb-10 sm:pb-12 lg:min-h-[100svh] lg:pb-0">
        {/* Masthead — always visible, never wraps, vertically elongated */}
        <h1
          className={`${portfolioTitleClass} relative z-0 origin-bottom`}
          style={{ transform: 'scaleY(1.15)' }}
        >
          Portafolio
        </h1>

        {/* Two-column grid: copy left, portrait right (stacks on mobile)
            — portrait anchored to section bottom on desktop for full overlap */}
        <div className="relative -mt-2 grid flex-1 items-end gap-6 sm:mt-0 lg:-mt-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-0">

          {/* ── Copy column — left ─────────────────────────────────── */}
          <div className="relative z-10 py-6 lg:self-center lg:py-10">
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
            height so it overlaps the masthead.  Mobile: stacks below copy.
          */}
          <figure className="relative isolate mx-auto lg:flex lg:h-full lg:w-full lg:items-end lg:justify-end">
            {/* Terracotta circle backdrop */}
            <span
              aria-hidden="true"
              className="absolute bottom-[4%] left-1/2 aspect-square w-[82%] max-w-[32rem] -translate-x-1/2 rounded-full bg-accent/20 lg:max-w-[40rem]"
            />

            {/*
              Transparent portrait — real 1600×1572 ratio (≈1.018),
              object-contain so both arms are fully visible.
              Scaled by viewport height on desktop to fill the fold and
              physically overlap the lower-right masthead letters.
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
              className="relative z-20 mx-auto aspect-[1600/1572] h-[26rem] w-[82%] max-w-[28rem] object-contain sm:h-[31rem] sm:max-w-[32rem] lg:mx-0 lg:h-auto lg:w-full lg:max-w-full lg:max-h-[min(48rem,calc(100svh_-_12rem))] [@media(min-width:1024px)_and_(max-height:800px)]:origin-bottom-right [@media(min-width:1024px)_and_(max-height:800px)]:scale-[1.14] [@media(min-width:1024px)_and_(max-height:800px)]:translate-x-10"
            />
          </figure>
        </div>
      </Container>
    </section>
  )
}
