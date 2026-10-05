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

/** Estilo Aceternity UI "Floating Navbar": píldora flotante con la sección o página activa resaltada. */
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
        className="fixed inset-x-4 top-4 z-30 mx-auto flex max-w-fit items-center gap-1 rounded-full border border-border bg-background/85 p-1.5 shadow-lg shadow-ink/10 backdrop-blur"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
      >
        <Link
          to="/"
          className="px-3 text-sm font-semibold whitespace-nowrap"
          aria-label={`${siteConfig.shortName}, ir al inicio`}
        >
          {siteConfig.shortName}
        </Link>

        <nav aria-label="Principal" className="hidden md:block">
          <ul className="flex items-center">
            {navItems.map((item) => {
              const active = isActive(item.href, item.section)
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    aria-current={active ? 'true' : undefined}
                    className={cn(
                      'relative flex min-h-11 items-center rounded-full px-4 text-sm whitespace-nowrap transition-colors duration-200',
                      active ? 'text-foreground' : 'text-muted hover:text-foreground',
                    )}
                  >
                    {active && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-elevated"
                        transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                      />
                    )}
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          onClick={() => setMenuOpen(true)}
          aria-haspopup="dialog"
          aria-expanded={menuOpen}
          className="flex min-h-11 items-center gap-2 rounded-full bg-ink px-4 text-sm font-medium text-white md:hidden"
        >
          <Menu className="size-4" aria-hidden="true" />
          Menú
        </button>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
