import { Menu } from 'lucide-react'
import { motion } from 'motion/react'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { MobileMenu } from '@/components/layout/MobileMenu'
import { navItems, siteConfig } from '@/data/site'
import { useActiveSection } from '@/hooks/useActiveSection'
import { cn } from '@/lib/cn'

// Se observan también Inicio y Stack para que la barra no resalte la sección anterior.
const sectionIds = [...navItems.map((item) => item.section ?? ''), 'inicio', 'stack']

/** Restrained editorial masthead — full-width paper bar with ink text, thin bottom rule. */
export function FloatingNav() {
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const isHome = pathname === '/'
  const activeSection = useActiveSection(isHome ? sectionIds : [])

  function isActive(href: string, section?: string) {
    if (isHome) return activeSection === section
    const path = href.split('#')[0]
    return path !== '/' && pathname.startsWith(path)
  }

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-30 mx-auto h-[80px] max-w-7xl items-center justify-between px-4 md:flex md:px-8"
        style={{
          background: 'var(--color-background)',
          borderBottom: `1px solid var(--color-border)`,
        }}
        initial={{ opacity: 0, transform: 'translateY(-8px)' }}
        animate={{ opacity: 1, transform: 'translateY(0)' }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
      >
        {/* Brand — left */}
        <Link
          to="/"
          className="flex items-center whitespace-nowrap text-sm font-semibold tracking-tight"
          aria-label={`${siteConfig.shortName}, ir al inicio`}
        >
          {siteConfig.shortName}
        </Link>

        {/* Desktop nav — right, single line */}
        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center gap-6">
            {navItems.map((item) => {
              const active = isActive(item.href, item.section)
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'relative inline-block px-1 py-2 text-sm transition-colors duration-200',
                      active
                        ? 'font-medium text-ink'
                        : 'text-muted hover:text-ink',
                    )}
                  >
                    {item.label}
                    {active && (
                      <span
                        className="absolute bottom-0 left-0 right-0 h-px bg-ink"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        {/* Mobile: compact brand + 44px menu button */}
        <div className="flex items-center justify-end gap-3 md:hidden">
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={menuOpen}
            aria-label="Abrir menú"
            className="flex size-11 items-center justify-center rounded border border-border bg-background"
          >
            <Menu className="size-5" aria-hidden="true" />
          </button>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
