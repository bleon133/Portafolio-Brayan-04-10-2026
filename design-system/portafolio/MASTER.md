# Superseded design system

> Replaced for the editorial neo-minimal redesign. The canonical rules are now in [`/DESIGN.md`](../../DESIGN.md). Do not use the blue/cobalt tokens below for new work.

> Si existe `design-system/portafolio/pages/[pagina].md`, sus reglas sobrescriben este archivo.

**Dirección:** claro, minimalista y de una sola familia azul (referencias de estructura: mattfarley.ca y adhamdannaway.com). Movimiento sutil.
**Implementación:** tokens en `src/styles/index.css`.

## Colores (azul hielo: una sola familia)

Reparto 60 / 30 / 10: blanco, pasteles azules y acento.

| Token Tailwind | Hex | Uso |
|---|---|---|
| `background` | `#FFFFFF` | Fondo base |
| `surface` | `#F4F7FC` | Secciones alternas |
| `sky` (azul hielo) | `#E4EEFF` | Único pastel: tarjetas, cabeceras de subpágina, formas |
| `fog` (azul niebla) | `#C9DBFF` | Hover de tarjetas, círculo del hero, texto destacado sobre fondo oscuro |
| `elevated` | `#E7EDF7` | Píldora activa de la barra, hover de botones secundarios |
| `border` | `#DDE5F2` | Líneas |
| `ink` | `#0A0E27` | Loader, footer, botones secundarios |
| `foreground` | `#0A0E27` | Texto principal |
| `muted` | `#475569` | Texto secundario |
| `accent` | `#2563EB` | Botones y bloque de contacto (texto blanco encima) |
| `accent-hover` | `#1D4ED8` | Hover |
| `accent-soft` | `#1D4ED8` | Enlaces y etiquetas sobre fondo claro |

Reglas:
- Las categorías (web, móvil, videojuego...) se distinguen con texto, nunca con color.
- Un solo pastel por pantalla; el cobalto solo para acciones y énfasis.
- Si hace falta otro tono, se deriva de la misma familia (más claro o más oscuro), no de otro matiz.

## Tipografía

- **Títulos:** Space Grotesk 500/600/700 (`font-heading`)
- **Texto:** Archivo 400/500/600 (`font-sans`)
- Escala: Display 48–72, Título 30, Subtítulo 20, Cuerpo 16, Secundario 14.
- Interlineado 1.6 en cuerpo, 1.15 en títulos. Líneas de 65–75 caracteres (`max-w-prose`).

## Espaciado y layout

- Contenedor `max-w-6xl`, gutters 16/24/32px.
- Secciones con 64–96px de separación vertical.
- z-index: header 30, modales 50.
- Responsive: 375, 768, 1024, 1440px. Sin scroll horizontal.

## Interacción y movimiento

- Transiciones de 200–300ms sobre color, borde y opacidad. No mover el layout al hacer hover.
- Objetivos táctiles de mínimo 44px (`min-h-11`).
- `cursor-pointer` en todo lo clicable. Foco visible. Respetar `prefers-reduced-motion`.
- Animaciones de entrada al hacer scroll con `transform` y `opacity` únicamente.

## Evitar

- Emojis como iconos (usar `lucide-react`).
- Más de un matiz pastel a la vez (menta, coral, mantequilla).
- Texto `accent-soft` sobre fondos pastel: usar `foreground`.
- Neón, glitch o resplandores fuertes.
- Diseño plano sin profundidad: usar capas de superficie y bordes.

## Checklist antes de entregar

- [ ] Contraste 4.5:1 en texto
- [ ] Foco visible con teclado
- [ ] `cursor-pointer` y hover claros
- [ ] Probado en 375 / 768 / 1024 / 1440px
- [ ] `prefers-reduced-motion` respetado
