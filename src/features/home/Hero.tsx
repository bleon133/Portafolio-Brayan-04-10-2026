import { ArrowRight, Download } from 'lucide-react'
import { Suspense } from 'react'

import Magnet from '@/components/bits/Magnet'
import { Container } from '@/components/layout/Container'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { siteConfig } from '@/data/site'

// ---------------------------------------------------------------------------
// Hero — warm editorial split: left text / right image
// ---------------------------------------------------------------------------

const titleClass =
  'text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-7xl xl:text-8xl'

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-dvh flex-col">
      <div className="relative flex flex-1 flex-col lg:flex-row">
        {/* ——— Left: text ——— */}
        <div className="relative flex flex-1 flex-col justify-center px-6 py-16 sm:px-8 lg:px-16 xl:px-24">
          <Container>
            <h1 className={titleClass}>{siteConfig.shortName}</h1>

            <p className="mt-4 max-w-xl text-lg text-muted sm:text-xl">
              Desarrollador Backend y Fullstack con Java, Spring Boot, React y{' '}
              .NET.
            </p>

            <p className="mt-2 max-w-lg text-base text-muted">
              Construyo aplicaciones web y APIs robustas, con atención al
              rendimiento y a la experiencia de usuario.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnet padding={60} magnetStrength={4}>
                <a
                  href="/proyectos"
                  className="group inline-flex min-h-11 items-center gap-2 rounded-lg bg-accent px-5 font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
                >
                  Ver proyectos
                  <ArrowRight
                    className="size-4 transition-transform duration-200 group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </a>
              </Magnet>
              {siteConfig.cvUrl && (
                <a
                  href={siteConfig.cvUrl}
                  download={siteConfig.cvFileName}
                  className="inline-flex min-h-11 items-center gap-2 rounded-lg border border-foreground/20 px-5 font-medium transition-colors duration-200 hover:bg-elevated"
                >
                  <Download className="size-4" aria-hidden="true" />
                  Descargar CV
                </a>
              )}
              <a
                href="#contacto"
                className="inline-flex min-h-11 items-center rounded-lg border border-foreground/20 px-5 font-medium transition-colors duration-200 hover:bg-elevated"
              >
                Contacto
              </a>
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="flex size-11 items-center justify-center rounded-lg text-muted transition-colors duration-200 hover:text-foreground"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="flex size-11 items-center justify-center rounded-lg text-muted transition-colors duration-200 hover:text-foreground"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </Container>
        </div>

        {/* ——— Right: image ——— */}
        <div className="relative flex-1 overflow-hidden bg-fog lg:min-h-[560px] xl:min-h-[640px]">
          <Suspense fallback={
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-fog"
            />
          }>
            <img
              src="/assets/editorial/hero-artifact.webp"
              alt="Ilustración abstracta — composición de formas orgánicas en tonos cálidos"
              className="absolute inset-0 h-full w-full object-cover"
              width={1536}
              height={864}
            />
          </Suspense>
        </div>
      </div>

      {/* ——— Reduced-motion / no-JS fallback: ensure content is visible ——— */}
      <style>{`
        @media (prefers-reduced-motion: reduce) {
          .hero-enter {
            opacity: 1 !important;
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}
