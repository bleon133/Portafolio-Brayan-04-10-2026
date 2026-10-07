import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { navItems } from '@/data/site'

/** Editorial navigation map linking real sections and routes across the portfolio. */
export function JourneyMap() {
  return (
    <section
      aria-labelledby="titulo-recorrido"
      className="relative border-y border-[#D7D3CA] bg-[#FAF9F5] py-16 sm:py-20"
    >
      {/* Decorative texture — soft backdrop only */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.06] select-none"
        aria-hidden="true"
      >
        <img
          className="h-full w-full object-cover"
          src="/assets/editorial/journey-map-texture.webp"
          alt=""
          width="1248"
          height="832"
          loading="lazy"
        />
      </div>

      <Container className="relative z-10">
        {/* Split intro + map layout */}
        <div className="mx-auto grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">

          {/* — Intro column — */}
          <div className="max-w-sm">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.12em] text-[#B94E36]">
              Mapa del portafolio
            </p>
            <h2
              id="titulo-recorrido"
              className="mb-4 text-2xl font-heading font-semibold tracking-tight text-[#1D1D1B] sm:text-3xl"
            >
              Un recorrido por lo que construyo.
            </h2>
            <p className="text-base leading-relaxed text-[#66645E]">
              Esta ruta conecta las secciones del portafolio: de la experiencia
              a los proyectos, pasando por mi formación y cómo contactarme.
            </p>
          </div>

          {/* — Map area — */}
          <nav
            className="editorial-journey__map relative"
            aria-label="Recorrido del portafolio"
          >
            {/* Desktop (≥768px): 5-column grid, horizontal route, no scroll */}
            <ol
              className="hidden md:grid md:grid-cols-5 md:items-center md:gap-x-0 md:py-2"
            >
              {navItems.map((item, index) => (
                <div
                  key={item.href}
                  className="group relative flex flex-col items-center md:px-4"
                >
                  {/* Connector line to next stop (desktop) */}
                  {index < navItems.length - 1 && (
                    <div
                      className="absolute bottom-[2.5rem] left-1/2 right-[-50%] top-1/2 h-[1px] bg-[#D7D3CA] -translate-y-1/2 md:block"
                      aria-hidden="true"
                    />
                  )}

                  {/* Circular node marker (always circular) */}
                  <span
                    className="relative z-10 mb-2 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D7D3CA] bg-[#F3F1EB] text-xs font-mono font-medium text-[#1D1D1B] md:mb-3"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Stop surface — 2–4px corner, not pill */}
                  <Link
                    to={item.href}
                    className="relative z-10 flex min-h-[44px] min-w-0 items-center justify-center gap-1.5 rounded-[4px] border border-transparent bg-transparent px-3 py-2 transition-colors hover:border-[#D7D3CA] hover:bg-[#F3F1EB]"
                    aria-label={item.label}
                  >
                    <span className="whitespace-nowrap text-sm font-medium text-[#1D1D1B] group-hover:text-[#B94E36]">
                      {item.label}
                    </span>
                    <ArrowUpRight
                      className="h-3.5 w-3.5 shrink-0 text-[#D7D3CA] transition-colors group-hover:text-[#B94E36] md:hidden"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              ))}
            </ol>

            {/* Mobile (<768px): clean vertical path, no horizontal overflow */}
            <ol
              className="md:hidden"
            >
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className="relative flex items-center gap-4 py-3"
                >
                  {/* Vertical path line */}
                  <div
                    className="absolute left-[17px] top-[36px] h-[calc(100%+0.5rem)] w-[1px] bg-[#D7D3CA]"
                    aria-hidden="true"
                  />

                  {/* Circular node marker */}
                  <span
                    className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D7D3CA] bg-[#F3F1EB] text-xs font-mono font-medium text-[#1D1D1B]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Link destination (44px minimum hit area) */}
                  <Link
                    to={item.href}
                    className="group flex min-h-[44px] min-w-0 flex-1 items-center gap-3 rounded-[4px] border border-transparent bg-transparent px-2 py-2 transition-colors hover:border-[#D7D3CA] hover:bg-[#F3F1EB]"
                    aria-label={item.label}
                  >
                    <span className="text-sm font-medium text-[#1D1D1B] group-hover:text-[#B94E36]">
                      {item.label}
                    </span>
                    <ArrowUpRight
                      className="ml-auto h-4 w-4 shrink-0 text-[#D7D3CA] transition-colors group-hover:text-[#B94E36]"
                      aria-hidden="true"
                    />
                  </Link>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </Container>
    </section>
  )
}
