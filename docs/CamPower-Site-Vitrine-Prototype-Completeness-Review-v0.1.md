# CamPower Site Vitrine — Prototype Completeness Review v0.1

Dispatch: CAMPOWER-SITE-VITRINE-DSP-PROTOTYPE-COMPLETENESS-REVIEW-001

Date: 2 October 2026

Nature: audit only. No page, style, navigation, metadata, or content was changed. No follow-up was closed. No host was chosen. No commit and no push.

## 1. Executive disposition

**B. PROTOTYPE COMPLETE WITH CONTROLLED FOLLOW-UPS**

The eleven-route Site Vitrine can be evaluated as one product. A visitor can understand CamPower, the audiences, Missions, help, contact, the prototype privacy treatment, the site conditions, and the prototype legal notice, then proceed to the application at `https://cam-power.net/`.

No P0 and no P1 findings were recorded. P2 items are pre-publication evidence and origin work. They do not break the prototype journeys. This review does not declare production readiness and does not close the prototype phase.

## 2. Baseline

| Item | Value |
| --- | --- |
| Repository | tobeypaul/cam-power-vitrine |
| Local path | `/home/jan-it/Documents/Pauls backup/My Documents/cam-power-vitrine` |
| Branch | `master`, aligned with `origin/master` |
| Starting baseline | `bb81df8b4d46ca509d6d36303e7da1823fe30cfd` |
| Ending HEAD | `bb81df8b4d46ca509d6d36303e7da1823fe30cfd` |
| HEAD subject | Integrate accepted Mentions legales prototype page |
| Review build | Astro static output, 11 pages, 2 October 2026, 19:01 local |
| Preview used | `http://127.0.0.1:4321` serving that build |

## 3. Pages reviewed

All eleven accepted routes returned HTTP 200 at 1440px, 768px, and 390px.

| Route | Title observed |
| --- | --- |
| `/` | CamPower — Talents, entreprises et opportunités au Cameroun |
| `/decouvrir/` | Découvrir CamPower — L’écosystème professionnel |
| `/talents/` | Talents — Votre parcours professionnel sur CamPower |
| `/entreprises/` | Entreprises — Besoins, talents et compétences sur CamPower |
| `/missions/` | Missions — Un besoin, une compétence, une mission sur CamPower |
| `/a-propos/` | À propos — Pourquoi CamPower existe |
| `/aide/` | Aide — Questions fréquentes sur CamPower |
| `/contact/` | Contact — Écrire à CamPower |
| `/confidentialite/` | Confidentialité — Site Vitrine CamPower |
| `/conditions-utilisation/` | Conditions d’utilisation du Site Vitrine — CamPower |
| `/mentions-legales/` | Mentions légales — Site Vitrine CamPower |

Each page has one `h1`. No page is an empty shell.

## 4. Visitor-journey assessment

| Journey | Result | Evidence |
| --- | --- | --- |
| Understand what CamPower is | Pass | Home, Découvrir, À propos, and Aide answer “Qu’est-ce que CamPower ?” describe one professional ecosystem in Cameroon. |
| Understand who it serves | Pass | Home audience doors, Talents, Entreprises, and Aide “À qui s’adresse CamPower ?”. |
| Understand principal value propositions | Pass | Profile, skills, network, opportunities, recruitment, and missions stay in one ecosystem. |
| Understand Talents | Pass | `/talents/` is a distinct parcours page, linked from primary navigation and the footer. |
| Understand Entreprises | Pass | `/entreprises/` presents presence, need, talents, recruitment, and missions. |
| Understand Missions | Pass | `/missions/` states “Une compétence. Un besoin. Une mission.” and keeps missions beside employment. |
| Understand broader positioning | Pass | À propos and Découvrir refuse to reduce CamPower to job search, recruitment, or a single mission. |
| Obtain help | Pass | `/aide/` filters topics and FAQ in the page. Submit stays on `/aide/`. |
| Contact CamPower | Pass | `/contact/` leads to `mailto:contact@cam-power.net`. |
| Understand prototype privacy treatment | Pass | `/confidentialite/` is marked “Information intermédiaire” and limited to the Site Vitrine. |
| Access Site Vitrine conditions | Pass | `/conditions-utilisation/` is site-scoped and points at Confidentialité. |
| Access prototype legal information | Pass | `/mentions-legales/` shows bracketed prototype identity and says the host is not configured. |
| Proceed deliberately to the application | Pass | Every “Accéder à CamPower” control uses `https://cam-power.net/` with no `target`. |

No material journey failure was recorded.

Information architecture notes, none raised to P1:

- Page purposes stay distinct: discover, audience, missions, story, help, contact, privacy, site conditions, legal identity.
- Primary labels match their routes.
- Footer labels match `/aide/`, `/contact/`, `/confidentialite/`, `/conditions-utilisation/`, and `/mentions-legales/`.
- No orphan route and no dead-end page. Each page offers a next step: application, another vitrine page, or email.
- Homepage “Découvrir CamPower” stays on `#besoins`. Primary “Découvrir” goes to `/decouvrir/`. Both targets exist. This is the accepted homepage behaviour, not a dead control.
- The footer column titled “Découvrir” lists À propos, Talents, Entreprises, and Missions, and does not itself link to `/decouvrir/`. Recorded as P3. The page remains in the primary navigation.

## 5. Findings register

| ID | Severity | Area |
| --- | --- | --- |
| PCR-001 | P2 | Public origin still localhost |
| PCR-002 | P2 | Application terms evidence still open |
| PCR-003 | P2 | Legal operator identity still open |
| PCR-004 | P2 | Application privacy evidence still open |
| PCR-005 | P2 | Play privacy destination still open |
| PCR-006 | P3 | Footer current-page mark missing on five routes |
| PCR-007 | P3 | Unused `#mentions` exception |
| PCR-008 | P3 | Footer “Découvrir” column does not link to `/decouvrir/` |
| PCR-009 | P3 | Google Play window behaviour differs |

P0 count: 0. P1 count: 0. P2 count: 5. P3 count: 4.

## 6. P0 findings

None.

## 7. P1 findings

None.

## 8. P2 findings

### PCR-001 — Public origin still localhost

- Severity: P2 — pre-publication / production-readiness
- Route / file: `astro.config.mjs`; built `dist/robots.txt`; `dist/sitemap-0.xml`; every page canonical and `og:url`
- Evidence: `const site = process.env.SITE_URL ?? 'http://localhost:4321'`. `.env.example` documents the same default and says not to point it at `https://cam-power.net/`. The review build, with no production `SITE_URL`, emitted canonical `http://localhost:4321/…` on all eleven pages, `Sitemap: http://localhost:4321/sitemap-index.xml`, and the same origin in the sitemap `<loc>` entries. Mentions states that production hosting is not configured and names no host.
- Consequence: publishing the default build would advertise localhost as the canonical and social origin. The local prototype itself remains coherent.
- Recommended remediation boundary: when a Site Vitrine origin is chosen, set `SITE_URL` for that publication build only. Do not point it at the application. Do not choose a host inside this review.

### PCR-002 — Application terms evidence still open

- Severity: P2
- Route / file: `/conditions-utilisation/`; `src/content/conditions.ts`; follow-up `CAMPOWER-FUP-APPLICATION-TERMS-EVIDENCE-001`
- Evidence: the page says accounts, profiles, recruitment, applications, Missions, messages, and content deposited in the application are governed by other rules, and that those rules are not established on this site. Browsing does not accept unpublished application terms.
- Consequence: the Site Vitrine can be evaluated. Public production must not imply that application terms exist on this site until the follow-up is resolved from application evidence.
- Recommended remediation boundary: keep the page site-scoped. Do not draft application terms here. Leave the follow-up open.

### PCR-003 — Legal operator identity still open

- Severity: P2
- Route / file: `/mentions-legales/`; `src/content/mentions.ts`; follow-up `CAMPOWER-FUP-LEGAL-OPERATOR-IDENTITY-001`
- Evidence: identity rows are bracketed dummy values with status “Prototype”. The hero says they are not verified and not for publication. The source gate is `PROTOTYPE → VERIFIED OPERATOR EVIDENCE → PRODUCTION LEGAL CONTENT REVIEW → PRODUCTION-READY PUBLICATION`. The site email is the only row marked established for the site.
- Consequence: prototype legal information is usable as a marked prototype. It is not a verified legal notice.
- Recommended remediation boundary: do not replace the brackets without verified operator evidence. Do not treat Play developer name, registrar data, or hosting endpoints as the operator. Leave the follow-up open.

### PCR-004 — Application privacy evidence still open

- Severity: P2
- Route / file: `/confidentialite/`; `src/content/confidentialite.ts`; follow-up `CAMPOWER-FUP-APPLICATION-PRIVACY-EVIDENCE-001`
- Evidence: status pill “Information intermédiaire”. Scope covers the public site only. Account, profile, recruitment, mission, message, and notification processing are explicitly not described. Update date observed in content: 2 octobre 2026.
- Consequence: the prototype privacy journey is honest. It is not an application-wide privacy notice.
- Recommended remediation boundary: do not extend claims to the application until technical and operational evidence exists. Leave the follow-up open.

### PCR-005 — Play privacy destination still open

- Severity: P2
- Route / file: homepage Google Play control and Aide “Google Play” link, both `https://play.google.com/store/apps/details?id=com.campower&hl=fr`; follow-up `CAMPOWER-FUP-PLAY-PRIVACY-DESTINATION-001`
- Evidence: the vitrine links to the Play listing for `com.campower`. The previously recorded Play privacy URL (`https://cam-power.net/cgu`) was HTTP 404 and is not linked from these pages. This review did not re-test the Play console.
- Consequence: the prototype store destination is the correct package. A public listing still needs a working privacy destination before production reliance on that listing.
- Recommended remediation boundary: do not invent a privacy URL and do not add an Apple App Store link. Leave the follow-up open.

## 9. P3 findings

### PCR-006 — Footer current-page mark missing on five routes

- Severity: P3
- Route / file: `src/pages/decouvrir.astro`, `talents.astro`, `entreprises.astro`, `missions.astro`, `a-propos.astro`
- Evidence: those pages pass `homeHref="/"` and do not pass `currentPath`. Aide, Contact, Confidentialité, Conditions, and Mentions do pass `currentPath`, and the matching footer link receives `aria-current="page"`. Header current state is set on the five audience routes.
- Consequence: footer does not announce the current audience page. Destinations still resolve.
- Recommended remediation boundary: pass the matching `currentPath` if a later dispatch asks for footer consistency. Do not change labels.

### PCR-007 — Unused `#mentions` exception

- Severity: P3
- Route / file: inner page frontmatter; `src/components/SiteFooter.astro`
- Evidence: inner pages still rewrite hash links except `#mentions`. Footer legal links are real routes, so the exception does not fire. The Mentions link still receives `id="mentions"`.
- Consequence: no broken destination. The exception is leftover from the earlier hash.
- Recommended remediation boundary: remove the exception and the id only in a later hygiene pass.

### PCR-008 — Footer “Découvrir” column does not link to `/decouvrir/`

- Severity: P3
- Route / file: `src/content/fr.ts` footer column “Découvrir”
- Evidence: the column links to `/a-propos/`, `/talents/`, `/entreprises/`, and `/missions/`. `/decouvrir/` is in the primary navigation on every page.
- Consequence: the column title is broader than its links. The Découvrir page is not stranded.
- Recommended remediation boundary: optional label or link adjustment. Do not duplicate the whole primary navigation into the footer without a product decision.

### PCR-009 — Google Play window behaviour differs

- Severity: P3
- Route / file: homepage store control; `src/content/aide.ts` FAQ link
- Evidence: the homepage Play control opens `https://play.google.com/store/apps/details?id=com.campower&hl=fr` in a new tab and announces that. The Aide “Google Play” link uses the same URL with an empty target, so it stays in the same window.
- Consequence: both destinations are correct. The window behaviour is inconsistent.
- Recommended remediation boundary: align the Aide link with the established external-tab treatment if a later dispatch touches Aide. Do not change the package id.

## 10. Navigation review

Primary header, observed on all eleven routes:

- Logo accessible name: “CamPower, accueil”.
- Homepage logo href: `#accueil`, and `index.astro` wraps the page in `id="accueil"`.
- Every other page passes `logoHref="/"`.
- Links: Découvrir, Talents, Entreprises, Missions, À propos.
- Access control: Accéder à CamPower → `https://cam-power.net/`.
- Absent from the primary header: Accueil, Aide, Contact, Confidentialité, Conditions d’utilisation, Mentions légales.

Current page: `aria-current="page"` on the matching header item for Découvrir, Talents, Entreprises, Missions, and À propos. Homepage has no current item, which is correct because those destinations are other routes.

Desktop at 1440px shows the link row. At 768px and 390px the row is closed, the menu button is 44×44, and “Accéder à CamPower” remains available. At 390px the access control wraps onto its own full-width row. No header collision and no horizontal overflow.

Mobile menu on `/` at 390px: open sets `aria-expanded="true"` and focuses the first nav link. Escape sets `aria-expanded="false"` and returns focus to the button.

## 11. CTA review

Classification of meaningful controls. Wording matched the destination in every case checked.

| Control | Class | Destination | Where |
| --- | --- | --- | --- |
| Accéder à CamPower | APPLICATION | `https://cam-power.net/`, same window | Header on all 11 pages; homepage hero and finale; inner hero and closing blocks where present. Three controls on `/`, `/decouvrir/`, `/talents/`, `/entreprises/`, `/missions/`, `/a-propos/`; two on `/aide/` and `/contact/`; one (header) on the three legal pages. |
| Découvrir CamPower | INTERNAL VITRINE | `#besoins` and, separately, `#talents` | Homepage. Anchors exist. |
| Trouver des opportunités | INTERNAL VITRINE | `#professionnels` | Homepage. |
| Trouver des talents | INTERNAL VITRINE | `#organisations` | Homepage. |
| Découvrir les missions | INTERNAL VITRINE | `#action` | Homepage. |
| CamPower pour les entreprises | INTERNAL VITRINE | `#entreprises` | Homepage. |
| Voir l’écosystème | INTERNAL VITRINE | `#ensemble` | Découvrir. |
| Découvrir pour les talents | INTERNAL VITRINE | `#parcours` | Talents. |
| Découvrir pour les entreprises | INTERNAL VITRINE | `#presence` | Entreprises. |
| Découvrir les missions | INTERNAL VITRINE | `#besoin` | Missions. |
| Découvrir notre ambition | INTERNAL VITRINE | `#ambition` | À propos. |
| Aide topic and FAQ jumps | INFORMATIONAL | in-page filter / `#sujets` | Aide. Form submit does not navigate. |
| cam-power.net in Aide | APPLICATION | `https://cam-power.net/` | Aide FAQ. |
| Google Play | EXTERNAL | Play listing `com.campower` | Homepage badge, new tab; Aide FAQ, same window (PCR-009). |
| Nous écrire / email address | EMAIL | `mailto:contact@cam-power.net` | Contact, Confidentialité, Conditions, Mentions, footer. |
| Lire les conditions / Lire la confidentialité | INTERNAL VITRINE | the two legal routes | Mentions related cards; Conditions privacy card. |
| LinkedIn | EXTERNAL | `https://www.linkedin.com/company/campower`, new tab | Footer on all pages; Contact follow card. |
| Footer logo | INTERNAL VITRINE | `#accueil` on `/`; `/` on the other ten | SiteFooter. |

No dead CTA, no empty `href`, no localhost link in a control, and no access control pointed anywhere other than `https://cam-power.net/`.

## 12. Application-boundary review

The vitrine does not search jobs, submit applications, recruit, manage profiles or accounts, publish or manage Missions, message, take payment, manage users, or call an application API.

Observed boundary:

- Aide search is `role="search"` and filters topics and FAQ in the page. Requesting submit left the URL at `/aide/`.
- Contact motives only prepare a mailto subject. There is no contact form and no ticket.
- Conditions say the site does not open an account and does not define application rules.
- Confidentialité says the site has no signup and does not collect the message.
- The application is named as a CamPower surface at `cam-power.net`, not as an unrelated third party. Conditions say leaving these terms does not make the application a foreign service.

No boundary drift was found.

## 13. Responsive review

Viewports: 1440, 768, 390. All eleven routes.

| Check | Result |
| --- | --- |
| Horizontal overflow | 0 px on every route at every viewport |
| Header | Desktop links at 1440. Hamburger at 768 and 390. Access control remains usable. At 390 it wraps to a second row instead of colliding. |
| Footer | Links remain in the document. No collision recorded by overflow. |
| Grids and cards | No broken grid and no card overflow that created scroll. |
| Typography | Body text remained readable. No clipped heading that created overflow. |
| Blank areas | No route presented as an empty page. |
| Mobile menu | Opens, receives focus, closes on Escape. |

No prototype-blocking responsive defect. No cosmetic item was raised to P1.

## 14. Accessibility review

Prototype-level review. This is not a WCAG certification.

| Check | Result |
| --- | --- |
| One `h1` | One per route. |
| Heading order | No skipped level in the `h1`–`h4` sequence sampled on each route. |
| Navigation | `<nav aria-label="Navigation principale">`. |
| Skip link | “Aller au contenu” to `#contenu`. |
| Focus | `:focus-visible` outline in `src/styles/global.css`. Skip link becomes visible on `:focus`. |
| Buttons and links | Menu is a `<button>`. Access and footer actions are links. Aide filters that are not links are `<button>`. |
| Logo | Image `alt=""` inside a link named “CamPower, accueil”. The wordmark stays in the image. |
| Illustrations | Homepage and inner screenshots that are content have French alt text. They loaded once scrolled into view. |
| Language | `<html lang="fr">`. |
| Menu keyboard | Open focuses the first link. Escape closes and returns focus to the button. |
| Targets | Menu button measures 44×44. Primary access control measures 48px tall. |

No prototype-blocking accessibility defect.

## 15. Link-integrity review

Internal routes: all eleven returned 200. In-page hashes checked on each route had matching ids, apart from the skip link `#contenu`, which exists.

External destinations:

| Destination | Observed |
| --- | --- |
| Application | `https://cam-power.net/` |
| LinkedIn | `https://www.linkedin.com/company/campower`, `target="_blank"`, `rel="noopener noreferrer"` |
| Google Play | `https://play.google.com/store/apps/details?id=com.campower&hl=fr` |
| Email | `mailto:contact@cam-power.net` |

No empty href, no Apple App Store link, no development path, and no visitor-facing localhost link. Localhost appears only in build metadata when `SITE_URL` is unset (PCR-001).

Browser console: no error on the eleven-route pass. No response with status 400 or above.

## 16. Content and language review

French copy is loaded from `src/content/`. Visitor-facing scan found no lorem, TODO, FIXME, or “App Store”.

Terminology stays aligned:

- Prose name CamPower.
- Missions: a defined need and a skill, beside employment, not instead of it.
- Aide: employment is one door; identity, skills, network, and missions remain.
- Entreprises: recruitment and missions are two responses to one need.

No material spelling, accidental English, or conflicting product description was recorded on the pages read in full (Conditions, Confidentialité, Mentions) or on the hero and navigation copy of the other eight. This was not a line-by-line literary edit.

The English string `privacy-title` is an element id on Confidentialité, not visible copy.

## 17. SEO and discoverability review

Present and coherent at prototype level:

- Unique `<title>` and meta description on each route, taken from page content.
- Canonical link, Open Graph (`og:type`, `og:locale` `fr_FR`, `og:site_name`, title, description, url, image), and Twitter summary card.
- JSON-LD Organization and WebSite in `BaseLayout`.
- `sitemap-index.xml` and `sitemap-0.xml` list all eleven routes.
- `robots.txt` allows `/` and points at the sitemap.
- One meaningful `h1` per page.

Classification of the origin gap:

| Item | Class |
| --- | --- |
| Canonical, Open Graph URL, sitemap, and robots sitemap using `http://localhost:4321` until `SITE_URL` is set | PRE-PUBLICATION REQUIREMENT (PCR-001) |
| Choosing or configuring a production host | PRE-PUBLICATION REQUIREMENT, and explicitly out of this review |
| Further SEO framework, hreflang, or richer social cards | OPTIONAL ENHANCEMENT |

No SEO gap was classified as a prototype blocker.

## 18. Technical and build review

Commands run from the repository root on 2 October 2026:

`ASTRO_TELEMETRY_DISABLED=1 npm run check`

- 43 files
- 0 errors, 0 warnings, 0 hints

`ASTRO_TELEMETRY_DISABLED=1 npm run build`

- output static
- 11 pages built in 3.49s
- routes: `/`, `/a-propos/`, `/aide/`, `/conditions-utilisation/`, `/confidentialite/`, `/contact/`, `/decouvrir/`, `/entreprises/`, `/mentions-legales/`, `/missions/`, `/talents/`, plus `robots.txt`
- sitemap index written
- image optimization reused cached entries; no missing-asset error

Route validation against the preview of that build: 11/11 HTTP 200. Console clean. Illustrations completed loading after they were scrolled into view (`naturalWidth` 246–344). The earlier zero-width readings were lazy images not yet in view, not missing files.

`dist/` is gitignored. The review build did not change source.

Static deployability: the build is a coherent static tree with relative asset paths under `/_astro/` and root-absolute internal routes. Absolute canonical and sitemap URLs follow `site` in `astro.config.mjs`. With the default, they are localhost. A later publication build needs `SITE_URL` set to the chosen Site Vitrine origin. No host was selected.

## 19. Prototype-data review

| Data | Class | Treatment |
| --- | --- | --- |
| Mentions éditeur, forme, RCCM, NIU, adresse, téléphone | A. Intentional prototype data | Brackets, flag “Prototype — non vérifié”, notice that bracketed lines are not CamPower facts, meta description saying the identity is prototype. |
| Mentions courriel `contact@cam-power.net` | Established for the site | Status “Établi pour le site”. |
| Mentions hébergement | Honest absence | Says production hosting is not configured and names no host. |
| Confidentialité status and date | Intentional interim scope | “Information intermédiaire”, 2 octobre 2026, site-only. |
| Conditions without an operator block | Intentional | Application and operator gaps are stated as outside this page, not filled with dummy identity. |
| Homepage product screenshots | Intentional product illustration | French alt text. Not live listings. |
| Aide FAQ | Intentional explanatory copy | Does not invent account screens. |

No accidental placeholder and no production-evidence dependency was presented as verified fact. The mere presence of the Mentions prototype block is not a defect.

## 20. Legal-page coherence

The three pages keep distinct jobs:

- Confidentialité: what the examined Site Vitrine does with privacy, marked interim.
- Conditions: rules for using the public site, not application terms.
- Mentions: who publishes the site, with identity still prototype.

Cross-references:

- Conditions point to `/confidentialite/` and do not restate the privacy notice.
- Mentions point to `/conditions-utilisation/` and `/confidentialite/` and say it does not restate them.
- All three use `mailto:contact@cam-power.net` for questions about that page.

No material contradiction. Conditions do not become application terms. Mentions do not pretend the operator is verified. Confidentialité does not claim application-wide evidence. Prototype status is visible on Confidentialité and Mentions. Conditions are written as site rules without a false “interim operator” block.

## 21. Security and privacy-surface review

Lightweight surface review only.

- No embedded secret, credential, API key, or private token in `src/`.
- No `.env` file. `.env.example` contains only the localhost `SITE_URL` comment and value.
- Forms: one, on Aide, local filter, no action URL.
- No analytics, tag manager, pixel, or other tracking script.
- No unexpected cookie-setting script. Confidentialité’s cookie section is a statement that none were identified.
- External destinations are the application, Google Play, LinkedIn, schema.org in JSON-LD, and mailto.
- Fonts are self-hosted. Page scripts are the header menu, the Aide filter, and the Contact subject buttons.
- No accidental personal data beyond the public site email.

No penetration test was performed.

## 22. Open-follow-up classification

None of these was closed.

| Follow-up | Class |
| --- | --- |
| CAMPOWER-FUP-APPLICATION-TERMS-EVIDENCE-001 | B. Non-blocking for prototype / required before production |
| CAMPOWER-FUP-LEGAL-OPERATOR-IDENTITY-001 | B. Non-blocking for prototype / required before production |
| CAMPOWER-FUP-APPLICATION-PRIVACY-EVIDENCE-001 | B. Non-blocking for prototype / required before production |
| CAMPOWER-FUP-PLAY-PRIVACY-DESTINATION-001 | B. Non-blocking for prototype / required before production |

They match PCR-002 through PCR-005. The pages already say what is not established.

## 23. Prototype closure recommendation

Recommend **B. PROTOTYPE COMPLETE WITH CONTROLLED FOLLOW-UPS**.

The prototype meets the closure tests used here: no P0, no P1, all eleven routes function, the principal journeys are coherent, the application boundary holds, prototype data stays marked, and the production build succeeds.

Do not treat that recommendation as production readiness. Production still needs a chosen Site Vitrine origin, a publication build with `SITE_URL`, and resolution of the four open evidence follow-ups. Product Owner decides whether to accept this recommendation. This review does not close the phase.
