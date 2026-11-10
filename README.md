# Sohjhro Website

Private source repository for [sohjhro.com](https://www.sohjhro.com/), an applied AI research and engineering initiative.

## Stack
- Next.js 16 App Router, React 19, TypeScript
- Static generation (`output: "export"`) for low-overhead Vercel hosting
- Hand-authored CSS and original SVG research graphics
- React island for the Worlds concept explorer
- ESLint + TypeScript + GitHub Actions CI

## Development
Requires Node.js 22+ and npm.

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
```

Browse http://localhost:3000/ locally. Production uses https://www.sohjhro.com/.

## Routes
- `/` — research-led homepage
- `/research/` — research agenda
- `/worlds/` — **concept only**, not a released product
- `/engineering/` — collaboration possibilities
- `/company/` — company mission and stage
- `/contact/` — email and technical profiles

## Source layout
- `app/`: Next.js routes, metadata, sitemap, shared CSS
- `components/`: reusable header, footer, concept explorer
- `content/`: preserved editorial markup from Sohjhro's previous static design
- `public/`: browser assets and original icon

### Editorial content note
The initial migration preserves existing trusted site-owned HTML in `content/*.ts` and renders it with `StaticContent`. This is **not** a general HTML rendering API: never pass untrusted user, API or CMS content. Gradually convert editorial sections to JSX as normal maintenance work (tracked in issues).

## Contributing
1. Open an issue describing the change.
2. Create a topic branch from `master` (for example `feat/research-publications`).
3. Keep changes focused. Add or update tests when behavior changes.
4. Run lint, typecheck and build locally.
5. Open a PR; CI should pass and another developer should review it.
6. Merge only after review and deployment verification.

## Accuracy
The initiative is early-stage. Do not imply products, client results, funding or papers exist until verified. Sohjhro Worlds remains an exploratory concept.

## Deployment
The app is statically exported and can deploy to Vercel. Keep production domain assignments in Vercel; do not introduce secret credentials into the repository.
