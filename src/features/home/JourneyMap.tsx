import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { navItems } from '@/data/site'

/** Editorial navigation map linking real sections and routes across the portfolio. */
export function JourneyMap() {
  return (
    <section
      aria-labelledby="titulo-recorrido"
      className="editorial-journey border-y border-border bg-surface py-16 sm:py-20"
    >
      <Container>
        <div className="editorial-journey__layout">
          <div className="editorial-journey__intro">
            <p className="editorial-journey__eyebrow">Mapa del portafolio</p>
            <h2 id="titulo-recorrido" className="editorial-journey__title">
              Un recorrido por lo que construyo.
            </h2>
            <p className="editorial-journey__copy">
              De la experiencia a los proyectos: una ruta breve para explorar mi trabajo.
            </p>
          </div>

          <nav className="editorial-journey__map" aria-label="Recorrido del portafolio">
            <img
              className="editorial-journey__texture"
              src="/assets/editorial/journey-map-texture.webp"
              alt=""
              aria-hidden="true"
              width="1248"
              height="832"
              loading="lazy"
            />
            <ol className="editorial-journey__stops">
              {navItems.map((item, index) => (
                <li key={item.href} className="editorial-journey__stop">
                  <Link to={item.href} className="editorial-journey__link">
                    <span className="editorial-journey__index" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="editorial-journey__label">{item.label}</span>
                    <ArrowUpRight className="editorial-journey__arrow" aria-hidden="true" />
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
