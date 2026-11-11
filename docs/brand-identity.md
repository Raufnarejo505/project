# Sohjhro identity — Folded Worlds / Sandstone & Petrol

## Rationale
The geometric folded **S** represents Sohjhro, connected simulated environments, iteration and verifiable AI systems. Its original vector geometry is retained; its colors now follow the unified Sandstone & Petrol brand. Sohjhro is an early-stage independent applied AI research initiative, not a launched product.

## Core color tokens
| Role | Hex | Usage |
| --- | --- | --- |
| Sandstone background | `#F5EFE3` | Global page background |
| Porcelain surface | `#FFFBF3` | Cards, light sections and surface layers |
| Petrol text | `#19353D` | Headlines, body text, dark technical panels and footer |
| Muted text | `#61767A` | Supporting copy on light surfaces |
| Primary teal | `#12697B` | Links, focus states, primary actions and top ribbon |
| Secondary gold | `#E4B56D` | Diagrams, accents and selected logo surfaces |

Supporting tinted values are used for borders, hover states and diagrams where necessary for readability. In dark technical panels, use off-white text and gold accents instead of dark-on-dark text.

## Asset and component usage
- `public/logo-mark.svg` — primary folded-S logo, transparent background.
- `public/favicon.svg` and `app/icon.svg` — folded-S mark on petrol background for browser tabs and Next.js.
- `public/favicon.ico` — legacy-browser raster fallback, refreshed to match the brand.
- `app/globals.css` — authoritative design tokens and component color rules.
- `content/*.ts` — original inline SVG diagrams, recolored with teal/petrol/gold for the new palette.
- `app/layout.tsx` — sandstone browser theme color and versioned favicon references.

Header and footer retain the accessible wordmark `sohjhro.`; decorative SVGs must have empty alt text. Preserve contrast, keyboard focus visibility, and reduced-motion behavior. Keep the brand distinct from claims about launched products or published research.

## Acceptance checks
Verify the home page, Research, Worlds, Engineering, Company and Contact routes; mobile navigation; concept explorer interactions; contrast on petrol diagram panels; browser tab icon and theme color; lint, typecheck, build and live HTTPS response.
