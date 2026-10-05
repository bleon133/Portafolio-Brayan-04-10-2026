import { ArrowUp, Download } from 'lucide-react'
import { motion } from 'motion/react'
import { Link } from 'react-router-dom'

import { Container } from '@/components/layout/Container'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { projects } from '@/data/projects'
import { navItems, siteConfig } from '@/data/site'

const currentYear = new Date().getFullYear()

const linkClass = 'inline-flex min-h-11 items-center text-slate-300 transition-colors duration-200 hover:text-white'

// El pie de página lista solo los proyectos destacados para no crecer con cada proyecto nuevo.
const footerProjects = projects.filter((project) => project.featured)

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <Container className="pt-20 pb-10">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-14 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-2xl text-4xl font-bold sm:text-5xl">
            Construyamos algo <span className="text-fog">juntos</span>.
          </h2>
          <Link
            to="/#contacto"
            className="inline-flex min-h-12 w-fit items-center rounded-full bg-white px-7 font-semibold text-ink transition-colors duration-200 hover:bg-fog"
          >
            Escríbeme
          </Link>
        </div>

        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-heading text-xl font-semibold">{siteConfig.shortName}</p>
            <p className="mt-3 max-w-xs text-slate-300">
              {siteConfig.role}. Busco prácticas profesionales en 2027-1.
            </p>
          </div>

          <nav aria-label="Pie de página">
            <h3 className="text-sm font-medium text-slate-400">Navegación</h3>
            <ul className="mt-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className={linkClass}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Proyectos">
            <h3 className="text-sm font-medium text-slate-400">Proyectos</h3>
            <ul className="mt-3">
              {footerProjects.map((project) => (
                <li key={project.slug}>
                  <Link to={`/proyectos/${project.slug}`} className={linkClass}>
                    {project.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/proyectos" className={`${linkClass} font-medium text-white`}>
                  Ver todos
                </Link>
              </li>
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-medium text-slate-400">Redes y CV</h3>
            <ul className="mt-3">
              <li>
                <a href={siteConfig.github} target="_blank" rel="noreferrer" className={`${linkClass} gap-2`}>
                  <GithubIcon className="size-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className={`${linkClass} gap-2`}>
                  <LinkedinIcon className="size-4" />
                  LinkedIn
                </a>
              </li>
              {siteConfig.cvUrl && (
                <li>
                  <a href={siteConfig.cvUrl} download={siteConfig.cvFileName} className={`${linkClass} gap-2`}>
                    <Download className="size-4" aria-hidden="true" />
                    Descargar CV
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>

        <motion.p
          aria-hidden="true"
          className="select-none text-center font-heading text-[9.5vw] leading-none font-bold tracking-tight whitespace-nowrap text-white/6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          BRAYAN LEÓN
        </motion.p>

        <div className="mt-6 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row sm:items-center">
          <p>
            © {currentYear} {siteConfig.name}. Hecho con React, Tailwind y motion.
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex min-h-11 items-center gap-2 text-slate-300 transition-colors duration-200 hover:text-white"
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
