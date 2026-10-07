# Brayan León — Editorial Neo-Minimal Portfolio

## Direction

An editorial, image-led portfolio for a backend/full-stack engineering student. The page should feel like a printed project journal translated to the web: clear, quietly bold, asymmetrical, tactile, and useful to a recruiter scanning real work. Combine Direction A's light editorial surface with Direction B's **systems journey**: a route-map motif connecting real sections and projects. Do not import Direction B's dark theme.

## Design tokens

- Paper: `#F3F1EB`; raised surface: `#FAF9F5`; ink: `#1D1D1B`; secondary text: `#66645E`; hairline: `#D7D3CA`.
- One accent only: oxidized terracotta `#B94E36`; hover/deeper accent: `#963B2A`.
- Display: Outfit (500–800); body: DM Sans (400–600); technical labels/route indices: IBM Plex Mono (400–500). Self-host fonts as local WOFF2 files and use `font-display: swap`.
- Radius: 2–4px for editorial surfaces; pill only for compact controls. Avoid glass pills, soft blue panels, gradients, glow, and generic rounded-card grids.
- Content width: 1320px maximum; 24px desktop gutters, 18px mobile gutters. Editorial sections 88–120px apart desktop, 56–72px mobile.

## Homepage composition

1. **Hero**: left-aligned 2-column editorial split; a short overline, oversized but controlled name/title, one-sentence value proposition, and at most two clear actions. Right column carries one full-scene original artwork generated for this project (abstract sculptural computing artifact, no fake portrait, no text or logo). Keep both art and primary action visible at 1440×900.
2. **Journey map**: a compact, horizontal route line on desktop, vertical route on mobile, connecting real anchors/paths (profile → experience → selected work → education → contact). Project nodes link to actual project detail routes. It is a navigation aid, not a decorative fake architecture diagram; do not claim nonexistent technical components.
3. **About / experience / capabilities / work / education / contact**: varied editorial compositions with short headings, real project screenshots, restrained dividers, and mixed image ratios. No wall of repeated cards, no empty spacer sections, and no repeated stats.
4. **Projects**: actual screenshots from `public/projects`, category and technology filters stay shareable in query params, each project remains linked to `/proyectos/:slug`; never generate fake screenshots or rewrite project claims.
5. **Project detail**: preserve each slug, gallery captions and next-project link. Use the real screenshot/gallery assets already associated with the project.
6. **Experience and education**: preserve all existing data, chronology, certificate URLs, filtering and deep links.

## Motion

- Use the existing `motion` package for brief entrance/reveal and navigation state transitions; use GSAP only where an actual scroll-led route-map explanation benefits from it.
- Each motion must explain hierarchy, route continuity, or interaction feedback. Avoid infinite motion, scroll hijacks, and animated layout dimensions.
- Animate transform/opacity; use 160–260ms interaction feedback and a restrained 400–650ms first entrance.
- Respect `prefers-reduced-motion`; content must remain visible and usable without animation. No element may depend on an intro event to become visible.

## Accessibility, responsive behavior, and content

- Semantic landmarks, correct heading order, keyboard-accessible links/buttons, visible focus, accessible names for icon-only controls, minimum 44px targets, and WCAG AA contrast.
- Test 390px mobile and 1440px desktop, including no horizontal overflow. Collapse split layouts to one column, keep route map readable, and retain tappable project filters.
- Keep Spanish source copy and actual data; do not invent user identity, project screenshots, metrics, employers, or claims.
- Provide descriptive alt text for generated decorative art only when meaningful; otherwise use empty alt. Provide a local fallback surface if an asset fails.

## Acceptance

- Every existing route works; query-string filters and gallery carousel behavior are unchanged.
- No invisible-on-load sections, dead whitespace, fake UI screenshots, fake portrait, or duplicated CTA intent.
- Visual identity differs clearly from the superseded blue/white system while remaining restrained and editorial.
