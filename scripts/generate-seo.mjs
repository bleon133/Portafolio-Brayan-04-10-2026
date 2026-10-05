/**
 * Se ejecuta después de `vite build`. Genera en `dist/`:
 *  - un index.html por ruta con su propio título, descripción, canonical,
 *    Open Graph, Twitter y datos estructurados (JSON-LD);
 *  - sitemap.xml y robots.txt con la URL real del sitio.
 *
 * Así los rastreadores que no ejecutan JavaScript (LinkedIn, WhatsApp, X...)
 * ven la información correcta de cada página.
 *
 * Lee los datos directamente de src/data (se ejecuta con tsx, que entiende TypeScript),
 * por eso esos archivos solo contienen datos y `import type`.
 *
 * URL del sitio: SITE_URL, o el dominio de producción que entrega Vercel, o el valor por defecto.
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { projects } from '../src/data/projects.ts'
import { pageMeta } from '../src/data/seo.ts'
import { siteConfig } from '../src/data/site.ts'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')

const DEFAULT_URL = 'https://portafolio-brayan-leon.vercel.app'
const siteUrl = (
  process.env.SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : DEFAULT_URL)
).replace(/\/$/, '')

const defaultImage = '/og-image.png'

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function truncate(text, max = 158) {
  if (text.length <= max) return text
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, '')}…`
}

const absolute = (route) => `${siteUrl}${route === '/' ? '/' : route}`
const absoluteAsset = (asset) => (asset.startsWith('http') ? asset : `${siteUrl}${asset}`)

// --- Datos estructurados -------------------------------------------------

const person = {
  '@type': 'Person',
  '@id': `${siteUrl}/#persona`,
  name: siteConfig.name,
  givenName: 'Brayan Steven',
  familyName: 'León Martinez',
  jobTitle: 'Estudiante de Ingeniería de Sistemas | Desarrollador Backend y Fullstack',
  description: siteConfig.description,
  url: siteUrl,
  image: absoluteAsset(defaultImage),
  email: `mailto:${siteConfig.email}`,
  alumniOf: { '@type': 'CollegeOrUniversity', name: 'Universidad Autónoma de Bucaramanga' },
  address: { '@type': 'PostalAddress', addressLocality: 'Bucaramanga', addressCountry: 'CO' },
  knowsAbout: ['Java', 'Spring Boot', 'React', 'TypeScript', '.NET', 'MongoDB', 'Kotlin Multiplatform', 'Unity'],
  sameAs: [siteConfig.github, siteConfig.linkedin],
}

const website = {
  '@type': 'WebSite',
  '@id': `${siteUrl}/#sitio`,
  url: siteUrl,
  name: `${siteConfig.shortName} | Portafolio`,
  inLanguage: 'es',
  publisher: { '@id': person['@id'] },
}

function breadcrumb(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absolute(item.route),
    })),
  }
}

// --- Rutas ---------------------------------------------------------------

const routes = [
  {
    route: '/',
    ...pageMeta['/'],
    image: defaultImage,
    graph: [person, website],
  },
  ...['/experiencia', '/proyectos', '/educacion'].map((route) => ({
    route,
    ...pageMeta[route],
    image: defaultImage,
    graph: [
      breadcrumb([
        { name: 'Inicio', route: '/' },
        { name: pageMeta[route].title.split(' | ')[0], route },
      ]),
    ],
  })),
  ...projects.map((project) => {
    const route = `/proyectos/${project.slug}`
    return {
      route,
      title: `${project.title} | Brayan León`,
      description: truncate(project.description),
      image: project.image ?? defaultImage,
      graph: [
        breadcrumb([
          { name: 'Inicio', route: '/' },
          { name: 'Proyectos', route: '/proyectos' },
          { name: project.title, route },
        ]),
        {
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          url: absolute(route),
          image: absoluteAsset(project.image ?? defaultImage),
          genre: project.category,
          keywords: project.stack.join(', '),
          author: { '@id': person['@id'] },
          ...(project.year ? { dateCreated: project.year } : {}),
        },
      ],
    }
  }),
]

// --- HTML ----------------------------------------------------------------

function stripManagedTags(html) {
  return html
    .replace(/<title>[\s\S]*?<\/title>\s*/i, '')
    .replace(/<meta\s+name="description"[\s\S]*?\/>\s*/i, '')
    .replace(/<meta\s+property="og:[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+name="twitter:[\s\S]*?\/>\s*/gi, '')
    .replace(/<meta\s+name="robots"[\s\S]*?\/>\s*/gi, '')
    .replace(/<link\s+rel="canonical"[\s\S]*?\/>\s*/gi, '')
}

function headBlock({ route, title, description, image, graph }) {
  const url = absolute(route)
  const imageUrl = absoluteAsset(image)
  const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:locale" content="es_CO" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.shortName)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${imageUrl}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(title)}" />`,
    ...(image === defaultImage
      ? [`<meta property="og:image:width" content="1200" />`, `<meta property="og:image:height" content="630" />`]
      : []),
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${imageUrl}" />`,
    `<meta name="twitter:image:alt" content="${escapeHtml(title)}" />`,
    `<script type="application/ld+json">${jsonLd.replace(/</g, '\\u003c')}</script>`,
  ]
    .map((line) => `    ${line}`)
    .join('\n')
}

const template = stripManagedTags(await readFile(path.join(dist, 'index.html'), 'utf-8'))

for (const entry of routes) {
  const html = template.replace('</head>', `${headBlock(entry)}\n  </head>`)
  const target = entry.route === '/' ? dist : path.join(dist, ...entry.route.split('/').filter(Boolean))
  await mkdir(target, { recursive: true })
  await writeFile(path.join(target, 'index.html'), html, 'utf-8')
}

// --- sitemap.xml y robots.txt ---------------------------------------------

const today = new Date().toISOString().slice(0, 10)
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(
    ({ route }) =>
      `  <url><loc>${absolute(route)}</loc><lastmod>${today}</lastmod><priority>${route === '/' ? '1.0' : '0.8'}</priority></url>`,
  ),
  '</urlset>',
  '',
].join('\n')

await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf-8')
await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`, 'utf-8')

console.log(`SEO: ${routes.length} páginas generadas para ${siteUrl}`)
