# Sohjhro Website

Private source repository for [sohjhro.com](https://www.sohjhro.com/), an early-stage applied AI research and engineering initiative.

## Stack
- Next.js 16 App Router with React 19 and TypeScript
- Vercel-native Next.js deployment; routes prerender where possible
- Hand-authored CSS and original SVG research graphics
- React-based Worlds concept explorer
- ESLint, TypeScript, and GitHub Actions CI

## Development
Requires Node.js 22+ and npm.

```bash
npm install
npm run dev
npm run lint
npm run typecheck
npm run build
```

Browse http://localhost:3000/ locally. Production uses https://www.sohjhro.com/.

## Pages
- `/` — research-led homepage
- `/research/` — research agenda
- `/worlds/` — **exploratory concept**, not a released product
- `/engineering/` — technical collaboration possibilities
- `/company/` — mission and stage of the initiative
- `/contact/` — email and GitHub links

## Source layout
- `app/`: Next.js routes, global metadata, sitemap, robots and shared styles
- `components/`: navigation, footer, React-based concept explorer
- `content/`: trusted first-party editorial markup preserved during migration
- `public/`: static public assets and icon
- `.github/`: continuous integration workflow and PR template

### Editorial content warning
`StaticContent` renders trusted, first-party markup from `content/*.ts`. **Never pass user input, API text, or untrusted CMS HTML into it.** Issue #2 tracks migration toward typed JSX components.

## Contributor workflow
1. Create or link a GitHub issue.
2. Branch from `master` (for example `feat/research-publications`).
3. Keep PRs focused. Preserve accurate claims about Sohjhro's research and products.
4. Run lint, typecheck and build locally.
5. Open a PR and verify changes in Vercel Preview.
6. Merge after review and verification. Do not bypass required CI policies.

## Accuracy
Sohjhro is at an exploratory stage. Do not invent customer contracts, published papers, funding, benchmarks, or product launch milestones.

## Deployment
The private GitHub repository is linked to Vercel project `rauf-ai-engineering` in the `abdul-raufs-projects-633fcd02` team. The intended production branch is `master`. Commits to other branches create previews; merging to `master` should trigger a production build. Vercel manages domains `www.sohjhro.com` and `sohjhro.com`.

## Reproducible installs
The current repository does not yet have a `package-lock.json`. Issue #1 should include generating and committing one with Node.js 22 before changing the GitHub Actions install step back to `npm ci`. CI and preview checks must be verified, not assumed.
