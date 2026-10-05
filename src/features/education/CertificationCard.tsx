import { ArrowUpRight, Award } from 'lucide-react'

import { formatMonthYear } from '@/lib/collections'
import type { Certification } from '@/types'

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-border bg-background p-5 transition-colors duration-200 hover:border-foreground/30"
    >
      <span className="flex size-11 items-center justify-center rounded-xl bg-sky text-accent-soft">
        <Award className="size-5" aria-hidden="true" />
      </span>
      <span className="mt-4 text-sm text-muted">
        {cert.issuer} · {formatMonthYear(cert.issued)}
      </span>
      <span className="mt-1 flex-1 text-lg leading-snug font-semibold">{cert.name}</span>
      <span className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent-soft">
        Ver credencial
        <ArrowUpRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </a>
  )
}
