import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'

import Magnet from '@/components/bits/Magnet'
import SplitText from '@/components/bits/SplitText'
import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/data/site'

const profiles = [
  { label: 'LinkedIn', handle: 'Brayan Steven León', href: siteConfig.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', handle: `@${siteConfig.githubUser}`, href: siteConfig.github, Icon: GithubIcon },
]

const secondaryButton =
  'inline-flex min-h-14 items-center gap-2 rounded-full border border-white/50 px-6 font-semibold transition-colors duration-200 hover:bg-white/15'

export function Contact() {
  const [copied, setCopied] = useState(false)

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(siteConfig.email)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2200)
    } catch {
      // Sin permiso de portapapeles el usuario aún puede seleccionar el correo visible.
    }
  }

  return (
    <Section id="contacto" titleId="titulo-contacto">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-accent px-6 py-16 text-white sm:px-14 sm:py-24">
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 -right-24 size-80 rounded-full bg-white/10"
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-16 left-1/3 size-48 rounded-full bg-white/10"
            animate={{ y: [0, -16, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          />

          <p className="relative text-sm font-medium tracking-widest uppercase">Contacto</p>
          <SplitText
            tag="h2"
            id="titulo-contacto"
            text="¿Trabajamos juntos? Busco prácticas 2027-1."
            splitType="words"
            textAlign="left"
            delay={70}
            duration={0.8}
            rootMargin="-60px"
            className="relative mt-4 max-w-4xl text-4xl font-bold sm:text-6xl"
          />
          <Reveal delay={0.1}>
            <p className="relative mt-6 max-w-xl text-lg text-white">
              Si tu equipo necesita a alguien que construya web, móvil o videojuegos, escríbeme por
              correo o LinkedIn, o revisa mi código en GitHub.
            </p>
          </Reveal>

          <div className="relative mt-10 flex flex-wrap items-center gap-3">
            {siteConfig.email && (
              <Magnet padding={50} magnetStrength={5}>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="inline-flex min-h-14 items-center gap-3 rounded-full bg-white px-7 text-lg font-semibold text-ink transition-transform duration-200 hover:scale-[1.02]"
                >
                  {siteConfig.email}
                  {copied ? (
                    <Check className="size-5 text-accent" aria-hidden="true" />
                  ) : (
                    <Copy className="size-5" aria-hidden="true" />
                  )}
                  <span className="sr-only">Copiar correo</span>
                </button>
              </Magnet>
            )}
            {siteConfig.email && (
              <a href={`mailto:${siteConfig.email}`} className={secondaryButton}>
                <Mail className="size-5" aria-hidden="true" />
                Abrir en mi correo
              </a>
            )}
            {siteConfig.cvUrl && (
              <a href={siteConfig.cvUrl} download={siteConfig.cvFileName} className={secondaryButton}>
                <Download className="size-5" aria-hidden="true" />
                Descargar CV
              </a>
            )}
            <span role="status" className="text-sm">
              {copied ? 'Correo copiado' : ''}
            </span>
          </div>

          <ul className="relative mt-10 grid gap-4 sm:grid-cols-2">
            {profiles.map(({ label, handle, href, Icon }, index) => (
              <li key={label}>
                <Reveal delay={0.15 + index * 0.1}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-20 items-center justify-between gap-4 rounded-2xl bg-white/10 px-6 py-4 transition-colors duration-200 hover:bg-white hover:text-ink"
                  >
                    <span className="flex items-center gap-4">
                      <Icon className="size-6" />
                      <span>
                        <span className="block font-semibold">{label}</span>
                        <span className="block text-sm opacity-90">{handle}</span>
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  )
}
