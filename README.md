# CamPower — Site Vitrine

Public marketing site for CamPower. It presents the platform and sends people to the application. It does not search, apply, recruit, or manage accounts.

The accepted visual baseline is Homepage Mockup 03 (`design/homepage-mockup-03/`).

## Status

CamPower Site Vitrine prototype: COMPLETE WITH CONTROLLED FOLLOW-UPS.

Prototype routes: 11. Closure baseline: `bb81df8b4d46ca509d6d36303e7da1823fe30cfd`.

Production readiness: NOT ESTABLISHED.

Open production-readiness dependencies: PCR-001 through PCR-005. Evidence is in `docs/CamPower-Site-Vitrine-Prototype-Completeness-Review-v0.1.md`.

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
├── components/      Shared sections, header, footer, store badges, social links
├── content/         French copy; content/en/ holds the English copy
├── i18n/            Locales, the French/English route map, interface strings
├── layouts/         Document shell, metadata, hreflang, structured data
├── lib/             Site URLs and social links shared by content and metadata
├── pages/           One thin file per route; pages/en/ for English
├── views/           Page templates shared by both languages
└── styles/          Visual system from Mockup 03
public/fonts/        Self-hosted font files
design/              Accepted mockups. Not served by the site.
```

## Content

Homepage copy lives in `src/content/fr.ts`. Découvrir copy lives in `src/content/decouvrir.ts`. Talents copy lives in `src/content/talents.ts`. Entreprises copy lives in `src/content/entreprises.ts`. Missions copy lives in `src/content/missions.ts`. À propos copy lives in `src/content/a-propos.ts`. Aide copy lives in `src/content/aide.ts`. Contact copy lives in `src/content/contact.ts`. Confidentialité copy lives in `src/content/confidentialite.ts`. Conditions d’utilisation copy lives in `src/content/conditions.ts`. Mentions légales copy lives in `src/content/mentions.ts`. All eleven load through `src/content/index.ts`.

English copy lives in `src/content/en/`, one file per page, with the same structure as the French file. Edit both when wording changes.

To change ordinary wording, edit those files. Section order and layout live in `src/views/` and the matching component. Interface text that is not page copy, such as image descriptions, menu labels and the new-tab notice, lives in `src/i18n/index.ts`.

## Languages

French is the default and keeps its existing addresses. English lives under `/en/` with English addresses:

| French | English |
| --- | --- |
| `/` | `/en/` |
| `/decouvrir/` | `/en/discover/` |
| `/talents/` | `/en/talent/` |
| `/entreprises/` | `/en/companies/` |
| `/missions/` | `/en/missions/` |
| `/mini-jobs/` | `/en/mini-jobs/` |
| `/a-propos/` | `/en/about/` |
| `/aide/` | `/en/help/` |
| `/contact/` | `/en/contact/` |
| `/confidentialite/` | `/en/privacy/` |
| `/conditions-utilisation/` | `/en/terms/` |
| `/mentions-legales/` | `/en/legal-notice/` |

The map lives in `src/i18n/index.ts`. The FR/EN control in the header opens the same page in the other language. Each page declares both versions with `hreflang`. The English legal pages state that the French version is the reference.

## Mini-jobs

On 10 November 2026 the Owner added the informal sector as a service: restaurants, small shops, bakeries, hotels, households, technicians and student jobs post short-term needs as Mini-jobs, the name used in the app. The earlier rule that kept Mini-jobs away from the Missions story is lifted. Mini-jobs have their own page and a homepage section. Missions stay described as a professional skill for a defined need. The site does not promise a task or an income.

## Assets

- Logo: `src/assets/brand/logo.png` — the accepted CamPower logo. Do not redraw, recolour, or substitute it.
- Screens: `src/assets/screens/` — application screenshots supplied by the Owner on 10 November 2026. `screen-messages.jpg`, `screen-chat.jpg`, `screen-connections.jpg`, `screen-suggestions.jpg` and `screen-notifications.jpg` are anonymised: real users’ names, photos and private messages were replaced with fictional ones. The app interface itself is unchanged. Companies shown posting public job offers are kept.
- Mini-jobs illustrations: `src/assets/minijobs/` — AI-generated photographs of fictional people and businesses (restaurants, bakeries, shops, hotels, households, technicians, deliveries, events, car wash, tailoring, tutoring). The Mini-jobs page and the homepage section say so next to the images. Do not present them as real customers or partners.

## Application boundary

Calls to action labelled **Accéder à CamPower** go to `https://cam-power.net/`.

The Google Play listing is `https://play.google.com/store/apps/details?id=com.campower&hl=fr`.

The App Store listing is `https://apps.apple.com/app/campower/id6812945656`.

Social links: Facebook `https://www.facebook.com/people/CamPower/61591516614513/`, TikTok `https://www.tiktok.com/@campower8`, LinkedIn `https://www.linkedin.com/company/campower/`. They are defined once in `src/lib/site.ts`.

This site does not call the application API.

## Environment

Copy `.env.example` if you need a local override.

`SITE_URL` is the public origin of this marketing site. It is used for the canonical URL, `hreflang` links, Open Graph tags, and the sitemap. Set it before a production build.

Do not set `SITE_URL` to `https://cam-power.net/`. That address is the application, not this site.

If `SITE_URL` is omitted, those links are written as root-relative paths and no sitemap is generated.

`BASE_PATH` is the path the site is served from. It defaults to `/cam-power-vitrine` for the GitHub Pages project site. Use `/` for the root of a subdomain.

## Deployment

GitHub Pages: `.github/workflows/deploy.yml` builds with `SITE_URL=https://tobeypaul.github.io`, `SITE_NOINDEX=true` and the default base path. It is a preview, not the indexed site.

Subdomain or any static host at the root of a domain:

```bash
BASE_PATH=/ SITE_URL=https://your-subdomain.example npm run build
```

Upload the contents of `dist/`. Each page is a folder with an `index.html`, so the server must serve `index.html` for directory requests, which Apache and Nginx do by default.

The live subdomain is `https://site.cam-power.net`:

```bash
BASE_PATH=/ SITE_URL=https://site.cam-power.net npm run build
```

Not-found page: `dist/404.html`. `public/.htaccess` sets it for Apache. On Nginx, add `error_page 404 /404.html;` to the server block.

## Search engines

- Sitemap: `https://site.cam-power.net/sitemap-index.xml`, listed in `robots.txt`. Submit it in Google Search Console and Bing Webmaster Tools.
- Verification by meta tag: set `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` to the content values before building.
- Verification by file: put the file Google or Bing provides (for example `google1234abcd.html`) in `public/` and rebuild.
- Verification by DNS TXT record needs no change to the site.
- Sharing image: `public/og/campower-fr.jpg` and `public/og/campower-en.jpg` (1200×630), used for Open Graph and Twitter cards.
- The 404 page is `noindex` and is left out of the sitemap.
- The GitHub Pages copy is a preview. Its workflow sets `SITE_NOINDEX=true`, so every page there is `noindex` and `robots.txt` lists no sitemap. Only `site.cam-power.net` should be indexed.

## Architecture notes

- Pages are prerendered. Visible copy is in the HTML.
- Images in phone frames use Astro’s image pipeline so the browser receives resized assets.
- The header script only opens and closes the compact navigation. It is not a hydrated framework component.
- Confidentialité points to `/confidentialite/`. Conditions d’utilisation points to `/conditions-utilisation/`. Mentions légales points to `/mentions-legales/`. The operator fields on that page are prototype data and are not verified.
