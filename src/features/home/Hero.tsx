import { ArrowRight, Download } from 'lucide-react'
import { motion } from 'motion/react'
import { lazy, Suspense } from 'react'

import Magnet from '@/components/bits/Magnet'
import SplitText from '@/components/bits/SplitText'
import { Container } from '@/components/layout/Container'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { Marquee } from '@/components/ui/Marquee'
import { Spotlight } from '@/components/ui/Spotlight'
import { experiences } from '@/data/experience'
import { projects } from '@/data/projects'
import { siteConfig } from '@/data/site'
import { marqueeItems } from '@/data/stack'
import { formatDuration, monthsBetween } from '@/lib/collections'
import { useIntroDone } from '@/lib/intro'

// El fondo de puntos es decorativo y arrastra GSAP: se carga después del primer pintado.
const DotGrid = lazy(() => import('@/components/bits/DotGrid'))

const titleClass = 'max-w-3xl text-5xl font-bold sm:text-6xl lg:text-8xl'

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

export function Hero() {
  const ready = useIntroDone()
  const reveal = (delay: number) => ({
    initial: { opacity: 0, y: 16 },
    animate: ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 },
    transition: { duration: 0.6, delay },
  })

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-dvh flex-col justify-center overflow-hidden pt-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 mask-[radial-gradient(ellipse_at_center,black_35%,transparent_80%)]"
      >
        <Suspense fallback={null}>
          <DotGrid
            dotSize={3}
            gap={28}
            baseColor="#cbd5e1"
            activeColor="#2563eb"
            proximity={140}
            shockRadius={200}
            shockStrength={4}
          />
        </Suspense>
      </div>
      <Spotlight />

      {/* Bloques de color decorativos */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 hidden lg:block">
        <motion.div
          className="absolute top-[22%] right-[8%] size-72 rounded-full bg-fog"
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[48%] right-[18%] size-44 rotate-12 rounded-4xl bg-sky"
          animate={{ y: [0, 12, 0], rotate: [12, 6, 12] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute top-[38%] right-[5%] size-16 rounded-full bg-accent"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <Container className="relative flex flex-1 flex-col justify-center py-16">
        {ready ? (
          <SplitText
            tag="h1"
            text={siteConfig.name}
            splitType="words"
            textAlign="left"
            delay={90}
            duration={0.9}
            from={{ opacity: 0, y: 36 }}
            to={{ opacity: 1, y: 0 }}
            rootMargin="0px"
            className={titleClass}
          />
        ) : (
          // Reserva el espacio del titular mientras corre el loader.
          <h1 className={`${titleClass} invisible`}>{siteConfig.name}</h1>
        )}

        <motion.p className="mt-6 max-w-2xl text-lg text-muted sm:text-xl" {...reveal(0.8)}>
          {siteConfig.tagline}
        </motion.p>

        <motion.div className="mt-10 flex flex-wrap items-center gap-3" {...reveal(1)}>
          <Magnet padding={60} magnetStrength={4}>
            <a
              href="#proyectos"
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
        </motion.div>

        <motion.dl className="mt-12 grid max-w-3xl gap-6 sm:grid-cols-3" {...reveal(1.2)}>
          {quickFacts.map((fact) => (
            <div key={fact.label} className="border-l-2 border-accent pl-4">
              <dt className="font-heading text-xl font-bold">{fact.value}</dt>
              <dd className="mt-1 text-sm text-muted">{fact.label}</dd>
            </div>
          ))}
        </motion.dl>
      </Container>

      <Marquee items={marqueeItems} />
    </section>
  )
}
