import { Check, Copy, Download, Mail } from 'lucide-react'
import { useState } from 'react'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
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
    <Section id="contacto" titleId="titulo-contacto" className="min-h-0 py-20 md:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr] md:items-center md:gap-12">
          {/* Left — editorial copy */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-ink/60">Contacto</p>
            <h2
              id="titulo-contacto"
              className="mt-4 max-w-md text-3xl font-bold sm:text-4xl"
            >
              ¿Trabajamos juntos? Busco prácticas 2027-1.
            </h2>
            <p className="mt-6 max-w-md text-lg text-ink/80">
              Si tu equipo necesita a alguien que construya web, móvil o videojuegos, escríbeme por
              correo o LinkedIn, o revisa mi código en GitHub.
            </p>
          </div>

          {/* Right — actions + profile links, separated by hairline */}
          <div className="flex flex-col gap-6">
            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3">
              {siteConfig.email && (
                <button
                  type="button"
                  onClick={copyEmail}
                  className={btnPrimary}
                  aria-label={copied ? 'Correo copiado' : 'Copiar correo'}
                >
                  {siteConfig.email}
                  {copied ? (
                    <Check className="size-5 text-accent" aria-hidden="true" />
                  ) : (
                    <Copy className="size-5" aria-hidden="true" />
                  )}
                  <span className="sr-only">Copiar correo</span>
                </button>
              )}
              {siteConfig.email && (
                <a href={`mailto:${siteConfig.email}`} className={btnSecondary}>
                  <Mail className="size-5" aria-hidden="true" />
                  Abrir en mi correo
                </a>
              )}
              {siteConfig.cvUrl && (
                <a
                  href={siteConfig.cvUrl}
                  download={siteConfig.cvFileName}
                  className={btnSecondary}
                >
                  <Download className="size-5" aria-hidden="true" />
                  Descargar CV
                </a>
              )}
              <span role="status" className="text-sm text-ink/60">
                {copied ? 'Correo copiado' : ''}
              </span>
            </div>

            {/* Profile links */}
            <ul className="flex flex-col">
              {profiles.map(({ label, handle, href, Icon }, index) => (
                <li key={label} className={index > 0 ? 'border-t border-ink/10 pt-4' : ''}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex min-h-[44px] items-center gap-2 py-2 text-sm font-medium underline-offset-4 underline-offset-[4px] hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                  >
                    <Icon className="size-4 text-ink/60" />
                    <span className="text-ink/80">{label}</span>
                    <span className="text-ink/50">{handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </Section>
  )
}

/* ---- button styles ---- */

const btnPrimary =
  'inline-flex min-h-[44px] items-center gap-3 rounded-sm bg-accent px-5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-accent/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent'

const btnSecondary =
  'inline-flex min-h-[44px] items-center gap-2 rounded-sm border border-ink/20 px-5 text-sm font-medium transition-colors duration-200 hover:bg-ink/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent'
