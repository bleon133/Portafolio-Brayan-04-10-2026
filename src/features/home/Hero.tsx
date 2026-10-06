import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { experiences } from '@/data/experience'
import { projects } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { formatDuration, monthsBetween } from '@/lib/collections'
import { useIntroDone } from '@/lib/intro'
import { motion, useReducedMotion } from 'motion/react'

const titleClass =
  'font-display text-[clamp(2.75rem,6.5vw,5rem)] font-semibold leading-[1.05] tracking-[-0.02em] text-ink'
const kickerClass = 'font-display text-[21px] font-semibold tracking-[0.01em] text-ink'
const descClass = 'mx-auto mt-6 max-w-2xl text-[17px] leading-[1.47] tracking-[-0.022em] text-muted'
const pillBase = 'min-h-11 rounded-pill px-6 text-sm font-medium'

// --- data ---

const devsTechnology = experiences.find((item) => item.id === 'devs-technology')
const quickFacts = [
  ...(devsTechnology
    ? [
        {
          value: formatDuration(monthsBetween(devsTechnology.start, devsTechnology.end)),
          label: 'de experiencia en desarrollo',
        },
      ]
    : []),
  { value: '8.º semestre', label: 'Ingeniería de Sistemas, UNAB' },
  { value: `${projects.length} proyectos`, label: 'web, móviles, redes y videojuegos' },
]

const techStrip =
  'Java · Spring Boot · React · .NET · TypeScript · MongoDB · PostgreSQL · Docker · Git'

// --- component ---

export function Hero() {
  const ready = useIntroDone()
  const reduced = useReducedMotion()

  // Entrada suave tras el loader; sin movimiento si el usuario lo pide.
  const reveal = (delay: number) => ({
    initial: reduced ? { opacity: 0 } : { opacity: 0, y: 12 },
    animate: ready ? { opacity: 1, y: 0 } : reduced ? { opacity: 0 } : { opacity: 0, y: 12 },
    transition: {
      duration: reduced ? 0.2 : 0.5,
      delay: delay * 0.08,
      ease: [0.23, 1, 0.32, 1] as [number, number, number, number],
    },
  })

  return (
    <section
      id="inicio"
      className="relative flex min-h-dvh flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto w-full max-w-5xl px-6 text-center">
        {/* 1. Kicker */}
        <motion.p
          className={kickerClass}
          {...reveal(0)}
        >
          Desarrollador Backend y Fullstack
        </motion.p>

        {/* 2. Title — two blocks */}
        <h1 className={`${titleClass} mt-3`}>
          <motion.span className="block" {...reveal(1)}>
            Brayan Steven
          </motion.span>
          <motion.span className="block" {...reveal(2)}>
            León Martinez
          </motion.span>
        </h1>

        {/* 3. Description */}
        <motion.p className={descClass} {...reveal(3)}>
          Construyo aplicaciones web y móviles en producción con Java, Spring Boot, React y .NET.
        </motion.p>

        {/* 4. Availability */}
        <motion.p className="mt-4 text-xs font-semibold text-launch" {...reveal(4)}>
          Disponible para prácticas profesionales 2027-1
        </motion.p>

        {/* 5. CTA row */}
        <motion.div
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
          {...reveal(5)}
        >
          {/* Filled */}
          <a
            href="#proyectos"
            className={`${pillBase} bg-accent text-white hover:bg-accent-hover`}
          >
            Ver proyectos
          </a>

          {/* Outlined CV */}
          {siteConfig.cvUrl && (
            <a
              href={siteConfig.cvUrl}
              download={siteConfig.cvFileName}
              className={`${pillBase} border border-steel text-ink hover:bg-elevated bg-transparent`}
            >
              Descargar CV
            </a>
          )}

          {/* Link */}
          <a
            href="#contacto"
            className="inline-flex min-h-11 items-center px-2 text-[17px] font-medium text-accent-soft hover:text-ink"
          >
            Contacto
          </a>

          {/* Social icons */}
          <a
            href={siteConfig.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted hover:text-ink px-2"
          >
            <GithubIcon className="size-5" />
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted hover:text-ink px-2"
          >
            <LinkedinIcon className="size-5" />
          </a>
        </motion.div>

        {/* 6. Quick facts */}
        <motion.dl
          className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-3 sm:divide-x sm:divide-border"
          {...reveal(6)}
        >
          {quickFacts.map((fact) => (
            <div key={fact.label} className="text-center">
              <dt className="font-display text-[21px] font-semibold text-ink">
                {fact.value}
              </dt>
              <dd className="mt-1 text-xs text-muted">{fact.label}</dd>
            </div>
          ))}
        </motion.dl>

        {/* 7. Tech strip */}
        <motion.div
          className="mt-12 border-t border-border pt-8 text-xs uppercase tracking-[0.14em] text-muted"
          {...reveal(7)}
        >
          {techStrip}
        </motion.div>
      </div>
    </section>
  )
}
