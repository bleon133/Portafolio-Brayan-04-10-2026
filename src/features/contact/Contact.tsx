import { ArrowUpRight, Check, Copy, Download } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import type { ComponentProps } from 'react'
import { siInstagram, siWhatsapp } from 'simple-icons'

import { Container } from '@/components/layout/Container'
import { Section } from '@/components/layout/Section'
import { GithubIcon, LinkedinIcon } from '@/components/ui/icons'
import { buildWhatsappUrl, contactData, formatWhatsappDisplay } from '@/data/contact'

const revealTransition =
  'transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100'

function revealState(isRevealed: boolean): string {
  return isRevealed ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
}

function InstagramIcon(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d={siInstagram.path} />
    </svg>
  )
}

function WhatsAppIcon(props: ComponentProps<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d={siWhatsapp.path} />
    </svg>
  )
}

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [isRevealed, setIsRevealed] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window),
  )
  const revealRef = useRef<HTMLDivElement>(null)
  const copyResetTimer = useRef<number | null>(null)

  useEffect(() => {
    if (isRevealed || !revealRef.current) return

    const target = revealRef.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 },
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [isRevealed])

  useEffect(
    () => () => {
      if (copyResetTimer.current !== null) window.clearTimeout(copyResetTimer.current)
    },
    [],
  )

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(contactData.email)
      setCopied(true)
      if (copyResetTimer.current !== null) window.clearTimeout(copyResetTimer.current)
      copyResetTimer.current = window.setTimeout(() => {
        setCopied(false)
        copyResetTimer.current = null
      }, 2000)
    } catch {
      setCopied(false)
    }
  }

  const whatsappDisplay = formatWhatsappDisplay()
  const rowReveal = revealState(isRevealed)

  return (
    <Section
      id="contacto"
      titleId="titulo-contacto"
      className="min-h-0 scroll-mt-[13.5rem] py-20 md:scroll-mt-28 md:py-24"
    >
      <Container>
        <div ref={revealRef} className="min-w-0">
          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-16">
            <div className="min-w-0">
              <p className="text-xs font-medium tracking-wide text-muted uppercase">Contacto</p>
              <h2 id="titulo-contacto" className="mt-4 max-w-md text-4xl font-bold lg:text-5xl">
                ¿Trabajamos juntos? Busco prácticas 2027-1.
              </h2>
              <p className="mt-6 max-w-[45ch] text-lg text-ink/80">
                Si tu equipo necesita a alguien que construya web, móvil o videojuegos, escríbeme por
                correo o LinkedIn, o revisa mi código en GitHub.
              </p>
            </div>

            <div className="min-w-0">
              <ul className="divide-y divide-border border-y border-border">
                <li
                  className="group min-h-[4.5rem] px-3 py-5 transition-colors duration-150 hover:bg-accent focus-within:bg-accent"
                >
                  <div
                    className={`grid min-h-[4.5rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 ${rowReveal} ${revealTransition}`}
                    style={{ transitionDelay: '0ms' }}
                  >
                    <a
                      href={`mailto:${contactData.email}`}
                      className="flex min-h-11 min-w-0 flex-1 items-center justify-between gap-3 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      <span className="min-w-0">
                        <span className="block text-xs uppercase tracking-wide text-muted transition-colors duration-150 group-hover:text-surface group-focus-within:text-surface">
                          Correo
                        </span>
                      <span className="mt-1 block min-w-0 text-xl leading-tight text-ink transition-colors duration-150 [overflow-wrap:anywhere] group-hover:text-surface group-focus-within:text-surface lg:text-2xl">
                        {contactData.email}
                      </span>
                    </span>
                  </a>
                  <div className="flex min-h-11 shrink-0 items-center gap-3">
                    <button
                      type="button"
                      onClick={copyEmail}
                      aria-label="Copiar correo"
                      className="inline-flex min-h-11 min-w-[5.5rem] shrink-0 items-center justify-center gap-2 rounded-sm px-2 text-ink transition-colors duration-150 hover:text-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink group-hover:text-surface group-focus-within:text-surface"
                    >
                      {copied ? (
                        <>
                          <Check className="size-5 shrink-0" aria-hidden="true" />
                          <span aria-hidden="true" className="text-xs">Copiado</span>
                        </>
                      ) : (
                        <Copy className="size-5" aria-hidden="true" />
                      )}
                    </button>
                    <ArrowUpRight
                      className="size-5 shrink-0 text-ink transition-[color,transform] duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-surface group-focus-within:text-surface"
                      aria-hidden="true"
                    />
                  </div>
                  </div>
                  <span role="status" aria-live="polite" className="sr-only">
                    {copied ? 'Copiado' : ''}
                  </span>
                </li>

                <li
                  className="group min-h-[4.5rem] px-3 py-5 transition-colors duration-150 hover:bg-accent focus-within:bg-accent"
                >
                  <div
                    className={`${rowReveal} ${revealTransition}`}
                    style={{ transitionDelay: '80ms' }}
                  >
                    <a
                      href={buildWhatsappUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`WhatsApp ${whatsappDisplay}, se abre en una pestaña nueva`}
                      className="flex min-h-11 w-full items-center justify-between gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                    >
                      <span>
                        <span className="block text-xs uppercase tracking-wide text-muted transition-colors duration-150 group-hover:text-surface group-focus-within:text-surface">
                          WhatsApp
                        </span>
                        <span className="mt-1 flex items-center gap-2 text-xl leading-tight text-ink transition-colors duration-150 group-hover:text-surface group-focus-within:text-surface lg:text-2xl">
                          <WhatsAppIcon className="size-5 shrink-0" />
                          {whatsappDisplay}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="size-5 shrink-0 text-ink transition-[color,transform] duration-150 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-surface group-focus-within:text-surface"
                        aria-hidden="true"
                      />
                    </a>
                  </div>
                </li>

                {contactData.cvUrl && (
                  <li
                    className="group min-h-[4.5rem] px-3 py-5 transition-colors duration-150 hover:bg-accent focus-within:bg-accent"
                  >
                    <div
                      className={`${rowReveal} ${revealTransition}`}
                      style={{ transitionDelay: '160ms' }}
                    >
                      <a
                        href={contactData.cvUrl}
                        download={contactData.cvFileName}
                        className="flex min-h-11 w-full items-center justify-between gap-4 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
                      >
                        <span>
                          <span className="block text-xs uppercase tracking-wide text-muted transition-colors duration-150 group-hover:text-surface group-focus-within:text-surface">
                            Currículum
                          </span>
                          <span className="mt-1 block text-xl leading-tight text-ink transition-colors duration-150 group-hover:text-surface group-focus-within:text-surface lg:text-2xl">
                            Descargar CV
                          </span>
                        </span>
                        <Download
                          className="size-5 shrink-0 text-ink transition-colors duration-150 group-hover:text-surface group-focus-within:text-surface"
                          aria-hidden="true"
                        />
                      </a>
                    </div>
                  </li>
                )}
              </ul>

              <ul className="mt-8 flex flex-wrap gap-3">
                <li className={`${rowReveal} ${revealTransition}`} style={{ transitionDelay: '240ms' }}>
                  <a
                    href={contactData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn, se abre en una pestaña nueva"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <LinkedinIcon className="size-5" />
                    LinkedIn
                  </a>
                </li>
                <li className={`${rowReveal} ${revealTransition}`} style={{ transitionDelay: '320ms' }}>
                  <a
                    href={contactData.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub, se abre en una pestaña nueva"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <GithubIcon className="size-5" />
                    GitHub
                  </a>
                </li>
                <li className={`${rowReveal} ${revealTransition}`} style={{ transitionDelay: '400ms' }}>
                  <a
                    href={contactData.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram, se abre en una pestaña nueva"
                    className="inline-flex min-h-11 items-center gap-2 rounded-full border border-border px-4 text-sm font-medium text-ink transition-colors duration-150 hover:border-accent hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <InstagramIcon className="size-5" />
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <figure
            className={`mt-16 ${rowReveal} ${revealTransition}`}
            style={{ transitionDelay: '480ms' }}
          >
            <blockquote className="max-w-[28ch] text-2xl font-normal leading-snug text-ink lg:text-3xl">
              <p>«La simplicidad es un requisito previo para la fiabilidad.»</p>
            </blockquote>
            <figcaption className="mt-4 text-xs uppercase tracking-widest text-muted">
              — Edsger W. Dijkstra
            </figcaption>
          </figure>
        </div>
      </Container>
    </Section>
  )
}
