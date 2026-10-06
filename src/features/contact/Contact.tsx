import { ArrowUpRight, Check, Copy, Download, Mail } from 'lucide-react'
import { useState } from 'react'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { Reveal } from '@/components/ui/Reveal'
import { siteConfig } from '@/data/site'

const profiles = [
  { label: 'LinkedIn', handle: 'Brayan Steven León', href: siteConfig.linkedin, Icon: LinkedinIcon },
  { label: 'GitHub', handle: `@${siteConfig.githubUser}`, href: siteConfig.github, Icon: GithubIcon },
]

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
        <div className="relative overflow-hidden rounded-card border border-border bg-background px-6 py-14 sm:px-14">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Contacto</p>
            <h2
              id="titulo-contacto"
              className="mt-3 max-w-3xl font-display text-[40px] font-semibold leading-none text-ink text-balance"
            >
              ¿Trabajamos juntos? Busco prácticas 2027-1.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 max-w-xl text-[17px] leading-[1.47] tracking-[-0.022em] text-muted">
              Si tu equipo necesita a alguien que construya web, móvil o videojuegos, escríbeme por
              correo o LinkedIn, o revisa mi código en GitHub.
            </p>
          </Reveal>

          <div className="relative mt-8 flex flex-wrap items-center gap-3">
            {siteConfig.email && (
              <button
                type="button"
                onClick={copyEmail}
                className="inline-flex min-h-11 items-center gap-2 rounded-pill bg-accent px-6 text-sm font-medium text-white transition-colors duration-200 hover:bg-accent-hover"
              >
                {siteConfig.email}
                {copied ? (
                  <Check className="size-4 text-white" aria-hidden="true" />
                ) : (
                  <Copy className="size-4" aria-hidden="true" />
                )}
                <span className="sr-only">Copiar correo</span>
              </button>
            )}
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex min-h-11 items-center gap-2 rounded-pill border border-steel px-6 text-sm font-medium text-ink transition-colors duration-200 hover:bg-elevated"
              >
                <Mail className="size-4" aria-hidden="true" />
                Abrir en mi correo
              </a>
            )}
            {siteConfig.cvUrl && (
              <a
                href={siteConfig.cvUrl}
                download={siteConfig.cvFileName}
                className="inline-flex min-h-11 items-center gap-2 rounded-pill border border-steel px-6 text-sm font-medium text-ink transition-colors duration-200 hover:bg-elevated"
              >
                <Download className="size-4" aria-hidden="true" />
                Descargar CV
              </a>
            )}
            <span role="status" className="text-sm">
              {copied ? 'Correo copiado' : ''}
            </span>
          </div>

          <ul className="relative mt-8 grid gap-4 sm:grid-cols-2">
            {profiles.map(({ label, handle, href, Icon }, index) => (
              <li key={label}>
                <Reveal delay={0.15 + index * 0.1}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex min-h-20 items-center justify-between gap-4 rounded-card border border-border bg-background px-6 py-4 text-ink transition-colors duration-200 hover:border-steel"
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
