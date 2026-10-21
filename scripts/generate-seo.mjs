/**
 * Se ejecuta después de `vite build`. Genera en `dist/`:
 *  - un index.html por ruta con su propio título, descripción, canonical,
 *    Open Graph, Twitter y datos estructurados (JSON-LD), y con el contenido
 *    de la página dentro de #root para que el HTML servido tenga texto real;
 *  - 404.html, que Vercel sirve en las rutas inexistentes;
 *  - sitemap.xml y robots.txt con la URL real del sitio.
 *
 * Así los rastreadores que no ejecutan JavaScript (LinkedIn, WhatsApp, X...)
 * ven la información correcta de cada página.
 *
 * Lee los datos directamente de src/data (se ejecuta con tsx, que entiende TypeScript),
 * por eso esos archivos solo contienen datos y `import type`.
 *
 * URL del sitio: la variable SITE_URL o, si no existe, el dominio definitivo (DEFAULT_URL).
 */
import { mkdir, readFile, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { projectsByDate } from '../src/data/projects.ts'
import { pageMeta } from '../src/data/seo.ts'
import { siteConfig } from '../src/data/site.ts'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const publicDir = path.join(root, 'public')

// Dominio definitivo del portafolio. Las vistas previas (preview) de Vercel también apuntan aquí
// como canonical, para que Google solo indexe el dominio propio y no las direcciones .vercel.app.
const DEFAULT_URL = 'https://brayandeveloper.online'
const siteUrl = (process.env.SITE_URL || DEFAULT_URL).replace(/\/$/, '')

// Use a versioned filename to invalidate social crawlers' cached preview image.
const defaultImage = '/og-image-v2.png'

const escapeHtml = (text) =>
  text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function truncate(text, max = 158) {
  if (text.length <= max) return text
  return `${text.slice(0, max - 1).replace(/\s+\S*$/, '')}…`
}

const absolute = (route) => `${siteUrl}${route === '/' ? '/' : route}`
const absoluteAsset = (asset) => (asset.startsWith('http') ? asset : `${siteUrl}${asset}`)

// --- Tamaño real de las imágenes (og:image:width y og:image:height) --------

/** Lee ancho y alto de la cabecera del archivo, sin dependencias externas. */
function imageSizeFromBuffer(buffer, extension) {
  if (extension === '.png' && buffer.length >= 24) {
    return { width: buffer.readUInt32BE(16), height: buffer.readUInt32BE(20) }
  }

  if (extension === '.webp' && buffer.length >= 30) {
    const chunk = buffer.toString('ascii', 12, 16)
    if (chunk === 'VP8X') {
      return { width: 1 + buffer.readUIntLE(24, 3), height: 1 + buffer.readUIntLE(27, 3) }
    }
    if (chunk === 'VP8 ') {
      return { width: buffer.readUInt16LE(26) & 0x3fff, height: buffer.readUInt16LE(28) & 0x3fff }
    }
    if (chunk === 'VP8L') {
      const bits = buffer.readUInt32LE(21)
      return { width: (bits & 0x3fff) + 1, height: ((bits >> 14) & 0x3fff) + 1 }
    }
  }

  return null
}

const imageSizes = new Map()

/** Tamaño de una imagen de /public. `null` si no se puede leer (se omiten los meta). */
async function readImageSize(asset) {
  if (!asset || asset.startsWith('http')) return null
  if (imageSizes.has(asset)) return imageSizes.get(asset)

  let size = null
  try {
    const file = path.join(publicDir, asset.replace(/^\//, ''))
    const buffer = await readFile(file)
    size = imageSizeFromBuffer(buffer, path.extname(asset).toLowerCase())
  } catch {
    size = null
  }

  imageSizes.set(asset, size)
  return size
}

// --- Datos estructurados -------------------------------------------------

const personImage = '/assets/hero/brayan-leon.webp'

const person = {
  '@type': 'Person',
  '@id': `${siteUrl}/#persona`,
  name: siteConfig.name,
  alternateName: [
    'Brayan León',
    'Brayan Leon',
    'Brayan León Martinez',
    'Brayan Leon Martinez',
    'Brayan Steven Leon Martinez',
    'Brayan Developer',
    'bleon133',
  ],
  givenName: 'Brayan Steven',
  familyName: 'León Martinez',
  jobTitle: 'Estudiante de Ingeniería de Sistemas | Desarrollador Fullstack con enfoque en Backend',
  description: siteConfig.description,
  url: siteUrl,
  image: absoluteAsset(personImage),
  email: `mailto:${siteConfig.email}`,
  affiliation: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad Autónoma de Bucaramanga',
  },
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Universidad Autónoma de Bucaramanga',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bucaramanga',
    addressRegion: 'Santander',
    addressCountry: 'CO',
  },
  hasOccupation: {
    '@type': 'Occupation',
    name: 'Desarrollador de software',
    occupationLocation: { '@type': 'City', name: 'Bucaramanga' },
  },
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

// Solo en la Home: declara que la página es el perfil público de esa persona.
const profilePage = {
  '@type': 'ProfilePage',
  '@id': `${siteUrl}/#perfil`,
  url: absolute('/'),
  name: `${siteConfig.shortName} | Portafolio`,
  description: siteConfig.description,
  inLanguage: 'es',
  isPartOf: { '@id': website['@id'] },
  about: { '@id': person['@id'] },
  mainEntity: { '@id': person['@id'] },
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

// Título sin la marca, para el <h1> del HTML estático.
const plainTitle = (title) => title.split(' | ')[0]

const routes = [
  {
    route: '/',
    ...pageMeta['/'],
    h1: `${siteConfig.name}, desarrollador de software`,
    image: defaultImage,
    type: 'website',
    graph: [person, website, profilePage],
  },
  ...['/experiencia', '/proyectos', '/educacion'].map((route) => ({
    route,
    ...pageMeta[route],
    h1: plainTitle(pageMeta[route].title),
    image: defaultImage,
    type: 'website',
    graph: [
      breadcrumb([
        { name: 'Inicio', route: '/' },
        { name: pageMeta[route].title.split(' | ')[0], route },
      ]),
    ],
  })),
  ...projectsByDate.map((project) => {
    const route = `/proyectos/${project.slug}`
    return {
      route,
      project,
      title: `${project.title} | Brayan León`,
      h1: project.title,
      description: truncate(project.description),
      image: project.image ?? defaultImage,
      type: 'article',
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
          ...(project.publishedAt ? { datePublished: project.publishedAt } : {}),
        },
      ],
    }
  }),
]

// Dimensiones reales de la imagen social: solo se emiten si se pudieron leer.
for (const entry of routes) {
  const size = await readImageSize(entry.image)
  if (size) {
    entry.imageWidth = size.width
    entry.imageHeight = size.height
  }
}

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

function headBlock({ route, title, description, image, graph, type = 'website', imageWidth, imageHeight }) {
  const url = absolute(route)
  const imageUrl = absoluteAsset(image)
  const jsonLd = JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<meta name="robots" content="index, follow" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:locale" content="es_CO" />`,
    `<meta property="og:site_name" content="${escapeHtml(siteConfig.shortName)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${imageUrl}" />`,
    `<meta property="og:image:alt" content="${escapeHtml(title)}" />`,
    ...(imageWidth && imageHeight
      ? [
          `<meta property="og:image:width" content="${imageWidth}" />`,
          `<meta property="og:image:height" content="${imageHeight}" />`,
        ]
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

// --- Contenido estático dentro de <div id="root"> -------------------------
// Se inyecta en cada index.html para que el HTML servido tenga texto real
// (rastreadores y lectores que no ejecutan JavaScript). Al montar la app,
// createRoot reemplaza este bloque; por eso no hay que tocar los componentes.

const rootPlaceholder = '<div id="root"></div>'

const staticNavLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/proyectos', label: 'Proyectos' },
  { href: '/experiencia', label: 'Experiencia' },
  { href: '/educacion', label: 'Educación' },
]

function staticNavHtml() {
  const items = staticNavLinks
    .map(({ href, label }) => `      <li><a href="${href}">${escapeHtml(label)}</a></li>`)
    .join('\n')
  return `  <nav aria-label="Navegación principal">\n    <ul>\n${items}\n    </ul>\n  </nav>`
}

function staticProjectListHtml(currentSlug) {
  const items = projectsByDate
    .filter((project) => project.slug !== currentSlug)
    .map(
      (project) =>
        `      <li><a href="/proyectos/${project.slug}">${escapeHtml(project.title)}</a>: ${escapeHtml(truncate(project.description, 150))}</li>`,
    )
    .join('\n')
  const heading = currentSlug ? 'Otros proyectos' : 'Proyectos'
  return `  <section>\n    <h2>${heading}</h2>\n    <ul>\n${items}\n    </ul>\n  </section>`
}

function staticContactHtml() {
  return [
    '  <section>',
    '    <h2>Contacto</h2>',
    '    <ul>',
    `      <li>Correo: <a href="mailto:${escapeHtml(siteConfig.email)}">${escapeHtml(siteConfig.email)}</a></li>`,
    `      <li>GitHub: <a href="${escapeHtml(siteConfig.github)}" rel="me noopener noreferrer">${escapeHtml(siteConfig.githubUser)}</a></li>`,
    `      <li>LinkedIn: <a href="${escapeHtml(siteConfig.linkedin)}" rel="me noopener noreferrer">${escapeHtml(siteConfig.name)}</a></li>`,
    '    </ul>',
    '  </section>',
  ].join('\n')
}

/** Títulos de sección y párrafos del proyecto. Las tablas (credenciales) no se copian. */
function staticProjectSectionsHtml(project) {
  if (!project?.sections?.length) return ''

  return project.sections
    .map((section) => {
      const paragraphs = section.blocks
        .filter((block) => block.type === 'paragraph')
        .map((block) => `    <p>${escapeHtml(block.text)}</p>`)
      if (!paragraphs.length) return null
      return `  <section>\n    <h2>${escapeHtml(section.title)}</h2>\n${paragraphs.join('\n')}\n  </section>`
    })
    .filter(Boolean)
    .join('\n')
}

function staticContentHtml(entry) {
  const { h1, description, project } = entry
  const summary = project ? project.description : description
  const blocks = [
    '  <main>',
    `    <h1>${escapeHtml(h1)}</h1>`,
    `    <p>${escapeHtml(summary)}</p>`,
    staticNavHtml(),
  ]

  const sections = staticProjectSectionsHtml(project)
  if (sections) blocks.push(sections)

  blocks.push(staticProjectListHtml(project?.slug))
  blocks.push(staticContactHtml())
  blocks.push('  </main>')

  return blocks.join('\n')
}

const template = stripManagedTags(await readFile(path.join(dist, 'index.html'), 'utf-8'))

for (const entry of routes) {
  const html = template
    .replace('</head>', `${headBlock(entry)}\n  </head>`)
    .replace(rootPlaceholder, `<div id="root">\n${staticContentHtml(entry)}\n  </div>`)
  const target = entry.route === '/' ? dist : path.join(dist, ...entry.route.split('/').filter(Boolean))
  await mkdir(target, { recursive: true })
  await writeFile(path.join(target, 'index.html'), html, 'utf-8')
}

// --- 404 ------------------------------------------------------------------
// Vercel sirve 404.html automáticamente en las rutas que no existen.

const notFoundHtml = template
  .replace(
    '</head>',
    [
      '    <title>Página no encontrada | Brayan León</title>',
      '    <meta name="description" content="La página que buscas no existe o cambió de dirección." />',
      '    <meta name="robots" content="noindex" />',
      '  </head>',
    ].join('\n'),
  )
  .replace(
    rootPlaceholder,
    [
      '<div id="root">',
      '  <main>',
      '    <h1>Página no encontrada</h1>',
      '    <p>La página que buscas no existe o cambió de dirección.</p>',
      '    <p><a href="/">Volver al inicio</a></p>',
      '  </main>',
      '  </div>',
    ].join('\n'),
  )

await writeFile(path.join(dist, '404.html'), notFoundHtml, 'utf-8')

// --- sitemap.xml y robots.txt ---------------------------------------------

const today = new Date().toISOString().slice(0, 10)
const sitemap = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...routes.map(
    ({ route, project }) =>
      `  <url><loc>${absolute(route)}</loc><lastmod>${project?.publishedAt ?? today}</lastmod><priority>${route === '/' ? '1.0' : '0.8'}</priority></url>`,
  ),
  '</urlset>',
  '',
].join('\n')

await writeFile(path.join(dist, 'sitemap.xml'), sitemap, 'utf-8')
await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`, 'utf-8')

console.log(`SEO: ${routes.length} páginas generadas para ${siteUrl}`)
