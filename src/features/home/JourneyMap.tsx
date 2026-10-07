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
            {/* Desktop: horizontal connected path */}
            <ol
              className="hidden gap-0 sm:flex sm:items-center sm:overflow-x-auto sm:py-2"
            >
              {navItems.map((item, index) => (
                <li
                  key={item.href}
                  className="flex items-center"
                >
                  {/* Numbered stop */}
                  <Link
                    to={item.href}
                    className="group flex min-h-[44px] min-w-[44px] items-center justify-center gap-2 rounded-lg px-3 py-2 transition-colors hover:bg-[#F3F1EB]"
                  >
                    <span
                      className="mr-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-[#D7D3CA] bg-[#F3F1EB] text-[10px] font-mono font-medium text-[#1D1D1B]"
                      aria-hidden="true"
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="whitespace-nowrap text-sm font-medium text-[#1D1D1B] group-hover:text-[#B94E36]">
                      {item.label}
                    </span>
                    <ArrowUpRight
                      className="ml-1 h-4 w-4 shrink-0 text-[#D7D3CA] transition-colors group-hover:text-[#B94E36]"
                      aria-hidden="true"
                    />
                  </Link>

                  {/* Connector line between stops (desktop) */}
                  {index < navItems.length - 1 && (
                    <div
                      className="mx-0 h-[1px] w-8 shrink-0 bg-[#D7D3CA]"
                      aria-hidden="true"
                    />
                  )}
                </li>
              ))}
            </ol>

            {/* Mobile: clean vertical path below 768px */}
            <ol
              className="sm:hidden"
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

                  {/* Numbered stop */}
                  <span
                    className="relative z-10 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-[#D7D3CA] bg-[#F3F1EB] text-xs font-mono font-medium text-[#1D1D1B]"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  {/* Link destination (44px minimum hit area) */}
                  <Link
                    to={item.href}
                    className="group flex min-h-[44px] min-w-0 flex-1 items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-[#F3F1EB]"
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
