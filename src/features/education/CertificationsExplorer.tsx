import { useSearchParams } from 'react-router-dom'

import { FilterChips } from '@/components/ui/FilterChips'
import { Reveal } from '@/components/ui/Reveal'
import { certifications } from '@/data/certifications'
import { CertificationCard } from '@/features/education/CertificationCard'
import { sortByDateDesc, uniqueValues } from '@/lib/collections'

const areas = uniqueValues(certifications.map((cert) => cert.area))
const issuers = uniqueValues(certifications.map((cert) => cert.issuer))

/** Lista completa de certificados con filtros guardados en la URL. */
export function CertificationsExplorer() {
  const [params, setParams] = useSearchParams()
  const area = params.get('area')
  const issuer = params.get('emisor')

  function setFilter(key: string, value: string | null) {
    const next = new URLSearchParams(params)
    if (value) next.set(key, value)
    else next.delete(key)
    setParams(next, { replace: true })
  }

  const visible = sortByDateDesc(
    certifications.filter((cert) => (!area || cert.area === area) && (!issuer || cert.issuer === issuer)),
    (cert) => cert.issued,
  )

  return (
    <div>
      <div className="space-y-6">
        <FilterChips legend="Área" options={areas} value={area} onChange={(value) => setFilter('area', value)} />
        <FilterChips
          legend="Emisor"
          options={issuers}
          value={issuer}
          onChange={(value) => setFilter('emisor', value)}
        />
      </div>

      <p className="mt-8 text-sm text-muted" role="status">
        {visible.length} {visible.length === 1 ? 'certificado' : 'certificados'}
      </p>

      {visible.length > 0 ? (
        <ul className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {visible.map((cert, index) => (
            <li key={cert.id}>
              <Reveal delay={(index % 4) * 0.07} className="h-full">
                <CertificationCard cert={cert} />
              </Reveal>
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-8 rounded-2xl border border-border bg-background p-8">
          <p className="text-lg">Ningún certificado coincide con esos filtros.</p>
          <button
            type="button"
            onClick={() => setParams({}, { replace: true })}
            className="mt-4 min-h-11 rounded-lg bg-ink px-5 font-medium text-white"
          >
            Quitar filtros
          </button>
        </div>
      )}
    </div>
  )
}
