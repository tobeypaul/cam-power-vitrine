# CamPower — Site Vitrine

Public marketing site for CamPower. It presents the platform and sends people to the application. It does not search, apply, recruit, or manage accounts.

The accepted visual baseline is Homepage Mockup 03 (`design/homepage-mockup-03/`).

## Technology

- Astro, static HTML by default
- TypeScript
- Component CSS in `src/styles/global.css`
- No React. The mobile menu is a small script in the header, with no client framework
- Self-hosted Sora and Source Sans 3

## Prerequisites

- Node.js 20 or newer
- npm

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

The site is served at `http://localhost:4321`.

## Checks and production build

```bash
npm run check
npm run build
npm run preview
```

`npm run check` runs the Astro TypeScript check. There is no separate linter in this project.

## Project structure

```text
src/
├── assets/          Authoritative logo and application screenshots
├── components/      Homepage sections
├── content/         French homepage copy, separate from the components
├── layouts/         Document shell, metadata, structured data
├── lib/             Site URLs shared by content and metadata
├── pages/           Homepage, robots.txt
└── styles/          Visual system from Mockup 03
public/fonts/        Self-hosted font files
design/              Accepted mockups. Not served by the site.
```

## Content

Homepage copy lives in `src/content/fr.ts`. Découvrir copy lives in `src/content/decouvrir.ts`. Talents copy lives in `src/content/talents.ts`. Entreprises copy lives in `src/content/entreprises.ts`. Missions copy lives in `src/content/missions.ts`. All five load through `src/content/index.ts`.

To change ordinary wording, edit that file. Section order and layout live in `src/pages/index.astro` and the matching component.

`src/content/index.ts` selects copy by locale. French is the only locale shipped. Another locale can be added as a new content file without replacing Astro.

## Assets

- Logo: `src/assets/brand/logo.png` — the accepted CamPower logo. Do not redraw, recolour, or substitute it.
- Screens: `src/assets/screens/` — Play Store screenshots used in Mockup 03. `profile-card.png` is the identity portion of the profile screen. The rest of that screen is not used because it contains placeholder biography text.

## Application boundary

Calls to action labelled **Accéder à CamPower** go to `https://cam-power.net/`.

The Google Play listing is `https://play.google.com/store/apps/details?id=com.campower&hl=fr`.

This site does not call the application API.

## Environment

Copy `.env.example` if you need a local override.

`SITE_URL` is the public origin of this marketing site. It is used for the canonical URL, Open Graph tags, and the sitemap. Set it before a production build.

Do not set `SITE_URL` to `https://cam-power.net/`. That address is the application, not this site.

If `SITE_URL` is omitted, the build uses `http://localhost:4321`.

## Deployment

No hosting target is configured in this repository. A production deploy is a static publish of the `dist/` directory from `npm run build`, with `SITE_URL` set to the real marketing domain.

## Architecture notes

- Pages are prerendered. Visible copy is in the HTML.
- Images in phone frames use Astro’s image pipeline so the browser receives resized assets.
- The header script only opens and closes the compact navigation. It is not a hydrated framework component.
- Legal footer links currently point at `#mentions` because privacy, terms, and legal-notice pages are outside this homepage scope.
