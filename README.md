# Portafolio de Brayan Steven León Martinez

Portafolio de estudiante de Ingeniería de Sistemas. React 19 + TypeScript + Vite + Tailwind CSS v4 + React Router.

## Scripts

| Comando | Acción |
|---------|--------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Typecheck + build de producción |
| `npm run preview` | Previsualizar el build |
| `npm run lint` | Lint con oxlint |

## Estructura

```
src/
├── app/          Raíz de la app: App.tsx, router
├── components/
│   ├── layout/   FloatingNav, Footer, Container, MainLayout
│   ├── ui/       Loader, Stepper, Reveal, Marquee...
│   └── bits/     Componentes de React Bits (vía shadcn CLI)
├── features/     Un módulo por sección (home, projects, about, contact)
├── pages/        Una página por ruta (Home, ProjectPage, NotFound); solo componen features
├── hooks/        Hooks compartidos
├── lib/          Utilidades (cn, ...)
├── data/         Contenido editable (site.ts, projects.ts)
├── types/        Tipos compartidos
├── styles/       CSS global y tokens (Tailwind @theme)
└── assets/       Imágenes y recursos importados
design-system/    Sistema de diseño (MASTER.md es la fuente de verdad)
```

## Convenciones

- Import absoluto con alias `@/` (ej. `@/components/layout/Header`).
- El contenido (textos, proyectos) vive en `src/data`, no dentro de los componentes.
- Cada feature agrupa sus componentes, hooks y tipos en su carpeta.
- Los estilos salen de los tokens en `src/styles/index.css` y de `design-system/portafolio/MASTER.md`.
- Accesibilidad: foco visible, contraste 4.5:1, `prefers-reduced-motion`, iconos SVG (lucide-react), nunca emojis.

## Rutas

- `/` Home. `/proyectos/:slug` subpágina de cada proyecto (datos en `src/data/projects.ts`).
- Para agregar un proyecto: nueva entrada en `projects.ts` con `slug`, `category`, `tint` e imagen.
- Pendiente: `siteConfig.email` en `src/data/site.ts` activa el botón de copiar correo en Contacto.

## SEO y despliegue

- `npm run build` ejecuta `tsc`, `vite build` y `scripts/generate-seo.mjs`. El script crea un `index.html` por ruta (título, descripción, canonical, Open Graph, Twitter y JSON-LD propios), además de `sitemap.xml` y `robots.txt`.
- La URL del sitio sale de la variable `SITE_URL`. Si no existe, usa `VERCEL_PROJECT_PRODUCTION_URL` (la entrega Vercel) y, como último recurso, `https://portafolio-brayan-leon.vercel.app`.
- Los textos de las páginas fijas están en `src/data/seo.ts`; los de cada proyecto salen de `src/data/projects.ts`. Las imágenes de proyectos viven en `public/projects/<slug>/`.
- Requiere Node 22.18 o superior (el script importa los archivos de datos en TypeScript directamente).
- En Vercel: framework Vite, comando `npm run build`, carpeta de salida `dist`. En Deployment Protection, dejar la protección solo para Preview para que Google pueda indexar producción.
- Después de desplegar: revisar `/sitemap.xml`, darlo de alta en Google Search Console y probar la vista previa al compartir en LinkedIn.
