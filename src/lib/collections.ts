const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

/** 'AAAA-MM' a 'sep 2026'. */
export function formatMonthYear(iso: string) {
  const [year, month] = iso.split('-')
  return `${MONTHS[Number(month) - 1]} ${year}`
}

/** Meses completos entre dos fechas 'AAAA-MM'. Sin `end` usa el mes actual. */
export function monthsBetween(start: string, end?: string) {
  const [startYear, startMonth] = start.split('-').map(Number)
  const now = new Date()
  const [endYear, endMonth] = end ? end.split('-').map(Number) : [now.getFullYear(), now.getMonth() + 1]
  return (endYear - startYear) * 12 + (endMonth - startMonth)
}

/** 27 meses a '2 años y 3 meses'. */
export function formatDuration(months: number) {
  const years = Math.floor(months / 12)
  const rest = months % 12
  const yearsText = years > 0 ? `${years} ${years === 1 ? 'año' : 'años'}` : ''
  const restText = rest > 0 ? `${rest} ${rest === 1 ? 'mes' : 'meses'}` : ''
  return [yearsText, restText].filter(Boolean).join(' y ')
}

export function sortByDateDesc<T>(items: T[], getDate: (item: T) => string) {
  return [...items].sort((a, b) => getDate(b).localeCompare(getDate(a)))
}

export function uniqueValues(values: string[]) {
  return [...new Set(values)].sort((a, b) => a.localeCompare(b, 'es'))
}

/** 'jun 2023 a sep 2025 · 2 años y 3 meses'. Sin `end` muestra «hoy». */
export function formatPeriod(start: string, end?: string) {
  const range = `${formatMonthYear(start)} a ${end ? formatMonthYear(end) : 'hoy'}`
  return `${range} · ${formatDuration(monthsBetween(start, end))}`
}
