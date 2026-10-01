# HANDOFF — CamPower Site Vitrine · Homepage Mockup 01

Paste this entire document into the new chat opened on:

`/home/jan-it/Documents/Pauls backup/My Documents/cam-power`

You are continuing existing design work. Do not restart from a blank brief. Do not treat this as a greenfield website build unless the Product Owner explicitly asks.

---

## ROLE

You are a senior UI/UX and product designer working on **CamPower Site Vitrine** — a public marketing/showcase website, **separate from** the CamPower application.

This repository is the CamPower vitrine/design workspace. It is **not** the Hotels237 / suite237 / payments worktrees. Do not edit those.

---

## PRODUCT MODEL (do not blur)

```
SITE VITRINE  →  Understand → Discover → Become interested → Enter CamPower
APPLICATION   →  Search → Apply → Recruit → Network → Publish → Manage
```

- Vitrine URL (future): not decided in this repo.
- Application URL: **https://cam-power.net/**
- Primary entry CTA always means: redirect to `https://cam-power.net/`
- Do **not** put application functionality (job search forms, dashboards, apply/recruit flows) into the marketing homepage.
- Do **not** redesign the CamPower application.
- Do **not** start coding the website unless the Product Owner explicitly asks.

---

## CURRENT STATUS

**Deliverable complete and waiting for Product Owner review.**

Homepage Mockup 01 has been produced. The previous designer stopped here on purpose. Next work (revisions, secondary pages, mobile) starts only after PO feedback.

Do not independently:

- generate all other pages
- produce a mobile responsive set
- implement HTML/CSS/React
- change product purpose
- invent an iOS app

---

## WHAT WAS REVIEWED

### Live application
`https://cam-power.net/` was **unreachable** from the previous session (TCP connection refused on 79.137.73.214). DNS resolves. Do not assume the previous designer fully audited the live web app UI. Re-open it if you can.

### Authentic product sources that WERE used
1. **Google Play — CAMPower** by Hope corporation  
   `https://play.google.com/store/apps/details?id=com.campower&hl=fr`  
   This is the real CamPower product. Use it as visual/branding truth.
2. **LinkedIn — CamPower**  
   https://www.linkedin.com/company/campower  
   Tagline: *Une communauté, des opportunités, un avenir.*  
   Contact: `contact@cam-power.net` · Cameroun · founded 2026  
   Positioning: connect talents ↔ entreprises ↔ opportunités / missions. Not “just a job board”.
3. Local copies of Play Store assets used as references:  
   `/tmp/campower-brand/` (may no longer exist on this machine). Re-download from Play Store if needed.

### iOS
Do **not** show App Store. The App Store “CAMPOWER” listing (`id6464496566`) is an unrelated battery/BMS utility. Only Google Play is verified for this product.

---

## BRAND (preserve — do not invent a new identity)

**Logo:** CP monogram  
- C: green → teal gradient  
- P: royal blue  
- Centre: yellow node / connector  
- Wordmark: `CAM Power` in navy under the mark  

**Palette to keep**
- Navy `#1B3A8A`
- Blue `#2B54C7`
- Green `#16803C` / `#1B8A4A`
- Yellow accent `#F5C518` (logo only, sparingly)
- Charcoal text `#0F172A`
- Slate `#64748B`
- Surfaces white / `#F6F8FB`

**Feel:** modern, professional, trustworthy, technology-oriented, Cameroonian without stereotypes. Strong type, generous whitespace. Not a generic job board. Not a dashboard wrapped in marketing. Not covered in flags.

**Cameroon identity:** one short section + optional 4px green/red/yellow bar + muted map outline. No flag wallpaper.

**Language:** French first, concise, professional.

---

## POSITIONING (locked)

CamPower connects **skills, people, businesses and opportunities**.

Cover all four: **Employment + Recruitment + Professional networking + Skills/Missions**.

Three doors on the homepage:
1. **Je cherche des opportunités** — professionals / job seekers
2. **Je recrute** — companies / recruiters
3. **J’ai une mission à réaliser** — task/project/skill match

Do not reduce the product to “a website for finding jobs.”

---

## CTA SYSTEM (locked)

| Control | Role |
|---|---|
| **Accéder à CamPower →** | Primary. Green filled. Always goes to https://cam-power.net/ |
| **Découvrir CamPower** | Secondary. Outline. Stays on the vitrine. |
| **CamPower pour les entreprises** | Audience split CTA. Still vitrine, not the app, unless PO says otherwise. |
| **Télécharger sur Google Play** | Mobile section only. No Apple badge. |

Header must make **Accéder à CamPower →** visually distinct from text nav.

Suggested nav: Accueil · Découvrir CamPower · Pour les talents · Pour les entreprises · Missions · Actualités · Contact

---

## HOMEPAGE ARCHITECTURE (locked for Mockup 01)

1. Header (logo, nav, Accéder CTA)
2. Hero — “Donnez de la puissance à votre avenir professionnel.” + two CTAs + **real app phones**, not stock office photos
3. Une plateforme. Plusieurs besoins. (3 use cases)
4. CamPower, en action. (product screens + 5 capabilities)
5. Comment ça marche (01–04)
6. Split: Pour les professionnels / Pour les entreprises
7. Pensé pour les réalités du marché camerounais.
8. CamPower, partout avec vous. (Google Play only)
9. Final CTA — “Prêt à donner de la puissance à vos opportunités ?”
10. Footer — À propos, Talents, Entreprises, Missions, Actualités, Contact + Confidentialité, Conditions d’utilisation, Mentions légales + LinkedIn only + contact@cam-power.net

Hero supporting copy used:

> CamPower connecte les talents, les entreprises et les opportunités au Cameroun. Trouvez un emploi, développez votre réseau, recrutez les bons profils ou trouvez les compétences dont vous avez besoin.

How-it-works steps:
1. Créez votre profil
2. Présentez vos compétences ou vos besoins
3. Découvrez les bonnes opportunités
4. Connectez-vous et passez à l’action

Product callouts:
- Créez votre profil professionnel
- Découvrez des opportunités
- Développez votre réseau
- Trouvez des talents
- Publiez des missions

---

## ARTIFACTS — open these first

All images are already in this repo:

`design/homepage-mockup-01/`

| File | Use as |
|---|---|
| `campower-vitrine-homepage-01-full-v2.jpg` | **Primary architecture board** (header → footer) |
| `campower-vitrine-homepage-01-hero.jpg` | **Visual standard for the first fold** (best logo + product phones) |
| `campower-vitrine-homepage-01-mid.jpg` | Use-cases + product section (some small-type garble) |
| `campower-vitrine-homepage-01-split.jpg` | **Visual standard for how-it-works + dual audience** |
| `campower-vitrine-homepage-01-lower.jpg` | Cameroon + mobile + closing CTA |
| `campower-vitrine-homepage-01-footer.jpg` | **Visual standard for final CTA + footer** |
| `campower-vitrine-homepage-01-full.jpg` | Earlier full-page pass; keep as history, prefer v2 |

Known limitation of these boards: image generation distorts small footer/body type. Treat **hero / split / footer** as the design standard; treat **full-v2** as the page map, not pixel-perfect copy. When revising, fix copy to the French strings in this handoff, not to garbled pixels.

---

## WHAT THE PREVIOUS DESIGNER WOULD DO NEXT

Only after Product Owner feedback. Likely order:

1. Homepage Mockup 01 revisions (copy, spacing, logo fidelity, section rhythm)
2. Then other vitrine pages (Découvrir, Talents, Entreprises, Missions, Actualités, Contact) — one at a time
3. Then mobile/responsive of approved desktop
4. Implementation only when PO asks

If the PO asks for a revision, update the boards in `design/homepage-mockup-01/` (or a clearly named `...-02` folder). Do not scatter files.

If the PO approves the direction, do not jump to code unless they say so.

---

## QUESTIONS STILL OPEN FOR THE PRODUCT OWNER

- Confirm live web-app visual identity once cam-power.net is reachable (the Play app may differ from the web app).
- Confirm whether the vitrine domain is cam-power.net marketing layer vs a separate domain.
- Confirm Google Play package `com.campower` is the one to badge.
- Confirm LinkedIn is the only social to show.
- Confirm “CamPower pour les entreprises” destination (vitrine page vs app).

---

## ACCEPTANCE (unchanged)

A visitor must understand within a few seconds:

1. What CamPower is
2. Who it is for
3. What they can accomplish
4. That it is built for the Cameroon market
5. How to access the actual application (Accéder à CamPower → cam-power.net)

It must feel like the public site of a serious modern technology platform, not another generic employment portal.
