import { ArrowUp, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { projects } from '@/data/projects'
import { navItems, siteConfig } from '@/data/site'

const currentYear = new Date().getFullYear()

const footerProjects = projects.filter((project) => project.featured)

export function Footer() {
  return (
    <footer className="bg-surface text-ink">
      <Container className="pt-16 pb-10">
        {/* Top row — name + tagline + CTA */}
        <div className="flex flex-col gap-8 border-b border-border pb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="font-display text-[19px] font-semibold tracking-[0.012em] text-ink">
              {siteConfig.shortName}
            </h2>
            <p className="mt-2 max-w-xs text-sm text-muted">
              {siteConfig.role}. Busco prácticas profesionales en 2027-1.
            </p>
          </div>
          <Link
            to="/#contacto"
            className="inline-flex min-h-11 items-center rounded-pill bg-accent px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            Escríbeme
          </Link>
        </div>

        {/* Columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3">

          <nav aria-label="Pie de página">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Navegación
            </h3>
            <ul className="mt-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-ink transition-colors duration-200 hover:text-accent-soft"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Proyectos">
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Proyectos
            </h3>
            <ul className="mt-3">
              {footerProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    to={`/proyectos/${project.slug}`}
                    className="inline-flex min-h-11 items-center text-sm text-ink transition-colors duration-200 hover:text-accent-soft"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/proyectos"
                  className="inline-flex min-h-11 items-center text-sm text-ink transition-colors duration-200 hover:text-accent-soft font-semibold"
                >
                  Ver todos
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">
              Redes y CV
            </h3>
            <ul className="mt-3">
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-ink transition-colors duration-200 hover:text-accent-soft"
                >
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-ink transition-colors duration-200 hover:text-accent-soft"
                >
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </a>
              </li>
              {siteConfig.cvUrl && (
                <li>
                  <a
                    href={siteConfig.cvUrl}
                    download={siteConfig.cvFileName}
                    className="inline-flex min-h-11 items-center gap-2 text-sm text-ink transition-colors duration-200 hover:text-accent-soft"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    Descargar CV
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-2 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <div>
            <p>
              © {currentYear} {siteConfig.name}. Hecho con React, Tailwind y motion.
            </p>
            <p className="mt-1">
              Este sitio mide visitas de forma anónima con Vercel Analytics, sin cookies.
            </p>
          </div>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-flex min-h-11 items-center gap-2 text-muted hover:text-ink"
          >
            Volver arriba
            <ArrowUp className="size-4" aria-hidden="true" />
          </button>
        </div>
      </Container>
    </footer>
  )
}
