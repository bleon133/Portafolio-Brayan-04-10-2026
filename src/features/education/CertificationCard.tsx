import { ArrowUpRight } from 'lucide-react'

import { formatMonthYear } from '@/lib/collections'
import type { Certification } from '@/types'

interface CertificationCardProps {
  cert: Certification
  layout?: 'default' | 'stacked'
}

export function CertificationCard({ cert, layout = 'default' }: CertificationCardProps) {
  if (layout === 'stacked') {
    return (
      <a
        href={cert.url}
        target="_blank"
        rel="noreferrer"
        aria-label={`Ver credencial: ${cert.name}, se abre en una pestaña nueva`}
        className="group flex min-h-[44px] w-full flex-col transition-colors duration-200 hover:bg-ink/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-soft"
      >
        <span className="text-sm text-muted">
          {cert.issuer} · {formatMonthYear(cert.issued)}
        </span>
        <span className="mt-4 text-base leading-snug font-semibold lg:whitespace-nowrap">
          {cert.name}
        </span>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent-soft">
          Ver credencial
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </a>
    )
  }

  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noreferrer"
      className="group flex flex-col min-h-[44px] border-b border-border py-5 gap-4 transition-colors duration-200 hover:bg-ink/[0.03] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-accent-soft md:grid md:grid-cols-[1fr_auto] md:grid-rows-1 md:items-center md:gap-6 md:py-4 md:border-b-0 md:even:border-r md:even:border-l md:last:border-b-0"
    >
      {/* Compact metadata — issuer + date */}
      <span className="text-sm text-muted md:col-span-2 md:hidden">
        {cert.issuer} · {formatMonthYear(cert.issued)}
      </span>
      {/* Primary line — credential name */}
      <span className="text-base leading-snug font-semibold md:text-base">
        {cert.name}
      </span>
      {/* Action affordance — inline label + arrow */}
      <span className="col-span-2 flex items-center justify-between gap-2 text-sm font-medium text-accent-soft md:col-span-1 md:justify-end md:gap-1.5">
        <span className="hidden md:inline text-sm text-muted">
          {cert.issuer} · {formatMonthYear(cert.issued)}
        </span>
        <span className="inline-flex items-center gap-1">
          Ver credencial
          <ArrowUpRight
            className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden="true"
          />
        </span>
      </span>
    </a>
  )
}
