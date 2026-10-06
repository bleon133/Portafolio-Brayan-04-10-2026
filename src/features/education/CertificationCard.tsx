import { ArrowUpRight } from 'lucide-react'

import { CredentialIconBubble, kindFromIssuer } from '@/components/ui/credential-icons'
import { formatMonthYear } from '@/lib/collections'
import type { Certification } from '@/types'

export function CertificationCard({ cert }: { cert: Certification }) {
  return (
    <a
      href={cert.url}
      target="_blank"
      rel="noreferrer"
      className="group flex h-full flex-col rounded-card border border-border bg-background p-6 transition-colors duration-200 hover:border-steel"
    >
      <CredentialIconBubble kind={kindFromIssuer(cert.issuer)} />
      <span className="mt-4 text-xs text-muted">
        {cert.issuer} · {formatMonthYear(cert.issued)}
      </span>
      <span className="mt-1 flex-1 text-[17px] leading-snug font-semibold text-ink">{cert.name}</span>
      <span className="mt-4 inline-flex min-h-11 items-center gap-1 text-sm font-medium text-accent-soft group-hover:text-ink">
        Ver credencial
        <ArrowUpRight
          className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </span>
    </a>
  )
}
