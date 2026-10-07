import { ArrowUp, Download } from 'lucide-react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { projects } from '@/data/projects'
import { navItems, siteConfig } from '@/data/site'

const currentYear = new Date().getFullYear()

// Featured projects only — keeps the footer compact.
const footerProjects = projects.filter((project) => project.featured)

export function Footer() {
  return (
    <footer className="relative bg-background">
      <Container className="py-20">
        {/* ——— Contact CTA ——— */}
        <div className="mb-16 max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            ¿Tienes un proyecto en mente? <span className="text-accent">Escríbeme.</span>
          </h2>
          <Link
            to="/#contacto"
            className="mt-6 inline-flex min-h-11 items-center rounded-sm bg-accent px-7 font-semibold text-white transition-colors duration-200 hover:bg-accent-hover"
          >
            Enviar un mensaje
          </Link>
        </div>

        {/* ——— Dividing rule ——— */}
        <div className="mb-10 h-px bg-border" />

        {/* ——— Four columns ——— */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Identity */}
          <div>
            <p className="font-heading text-lg font-semibold">{siteConfig.shortName}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">
              {siteConfig.role}. Busco prácticas profesionales en 2027-1.
            </p>
          </div>

          {/* Navigation */}
          <nav aria-label="Pie de página">
            <h3 className="text-sm font-medium text-muted">Navegación</h3>
            <ul className="mt-3 space-y-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="inline-flex min-h-11 items-center text-sm text-ink transition-colors duration-200 hover:text-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Projects */}
          <nav aria-label="Proyectos destacados">
            <h3 className="text-sm font-medium text-muted">Proyectos</h3>
            <ul className="mt-3 space-y-3">
              {footerProjects.map((project) => (
                <li key={project.slug}>
                  <Link
                    to={`/proyectos/${project.slug}`}
                    className="inline-flex min-h-11 items-center text-sm text-ink transition-colors duration-200 hover:text-accent"
                  >
                    {project.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/proyectos"
                  className="inline-flex min-h-11 items-center text-sm font-medium text-accent transition-colors duration-200 hover:text-accent-hover"
                >
                  Ver todos
                </Link>
              </li>
            </ul>
          </nav>

          {/* Social & CV */}
          <div>
            <h3 className="text-sm font-medium text-muted">Redes y CV</h3>
            <ul className="mt-3 space-y-3">
              <li>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-ink transition-colors duration-200 hover:text-accent"
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
                  className="inline-flex min-h-11 items-center gap-2 text-sm text-ink transition-colors duration-200 hover:text-accent"
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
                    className="inline-flex min-h-11 items-center gap-2 text-sm text-ink transition-colors duration-200 hover:text-accent"
                  >
                    <Download className="size-4" aria-hidden="true" />
                    Descargar CV
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* ——— Bottom bar: copyright + analytics + back-to-top ——— */}
        <div className="mt-10 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted sm:flex-row sm:items-center">
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
            className="group inline-flex min-h-11 items-center gap-2 text-muted transition-colors duration-200 hover:text-accent"
          >
            Volver arriba
            <ArrowUp
              className="size-4 transition-transform duration-200 group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </button>
        </div>
      </Container>
    </footer>
  )
}
