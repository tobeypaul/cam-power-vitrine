# CamPower Site Vitrine — Owner review reconciliation 004

Dispatch: CAMPOWER-SITE-VITRINE-DSP-OWNER-REVIEW-RECONCILIATION-004

Date: 7 October 2026

Starting baseline: `80774a08a4d3161455396e4b3f2428b0aac2715a`

## 1. Supplied screenshot inventory

Source package: `/home/jan-it/Downloads/Cam-power.zip`, extracted as `/home/jan-it/Downloads/Cam-power/`. Sixteen images, each a current application screen.

| File | Content |
| --- | --- |
| IMG_9510.jpeg | Splash: logo and the tagline. |
| IMG_9511.jpeg | Actualités feed. |
| IMG_9512.jpeg | Mes Offres, employment listings. |
| IMG_9513.jpeg | Mes Offres, Mini-jobs tab. |
| IMG_9514.jpeg | Mon Réseau, suggestions. |
| IMG_9515.jpeg | Mon Réseau, one connection. |
| IMG_9516.jpeg | Notifications. |
| IMG_9517.jpeg | Mon profil. |
| IMG_9518.jpeg | Détail de l’offre, with Postuler. |
| IMG_9519.jpeg | Filtres of the offers list. |
| IMG_9520.jpeg | Détail Mini-Job. |
| IMG_9521.jpeg | In-app privacy summary, dated 11 June 2026. |
| IMG_9522.jpeg | Support & Assistance, including a telephone number. |
| IMG_9523.jpeg | Compléter le profil form. |
| IMG_9524.jpeg | Message thread. |
| IMG_9525.jpeg | The same thread with the keyboard open. |

Five images are used. Eleven are unused.

Unused, and why:

- IMG_9510 is a splash. No page presents a splash.
- IMG_9513 and IMG_9520 are Mini-jobs. The vitrine does not describe Missions as that list, and no existing slot asked for it.
- IMG_9515 repeats the network screen with less content than IMG_9514.
- IMG_9516 is notifications. No section is about notifications.
- IMG_9519 is a filter sheet. The offers list already shows the capability.
- IMG_9521 is an in-app privacy summary. It is not placed on `/confidentialite/`.
- IMG_9522 is support. The telephone on that screen is not published in the legal pages, so it is not adopted.
- IMG_9523 is a profile form. The profile home already supports the profile slots.
- IMG_9524 and IMG_9525 are messaging. The vitrine does not add a messaging section.

## 2. Image mapping

| Route | Existing image | Purpose | New image | Decision |
| --- | --- | --- | --- | --- |
| `/` hero, back phone | screen-recruit.png | Decorative second phone | screen-network.jpg | REPLACE |
| `/` hero, front phone | screen-offers.png | Offers | screen-offers.jpg | REPLACE |
| `/` product trio | profile-card.png, screen-offers.png, screen-recruit.png | Profile, offers, people | screen-profile.jpg, screen-offers.jpg, screen-network.jpg | REPLACE |
| `/` professionals card | profile-card.png | Profile | screen-profile.jpg | REPLACE |
| `/` mobile band | screen-feed.png | Daily application | screen-feed.jpg | REPLACE |
| `/decouvrir/` profile | profile-card.png | Profile | screen-profile.jpg | REPLACE |
| `/decouvrir/` offers | screen-offers.png | Offers | screen-offers.jpg | REPLACE |
| `/decouvrir/` meeting | screen-recruit.png | Recruitment | screen-offer.jpg | REPLACE |
| `/decouvrir/` daily | screen-feed.png | Feed | screen-feed.jpg | REPLACE |
| `/talents/` profile | profile-card.png | Profile | screen-profile.jpg | REPLACE |
| `/talents/` offers | screen-offers.png | Offers | screen-offers.jpg | REPLACE |
| `/talents/` profiles | screen-recruit.png | Looking at people | screen-network.jpg | REPLACE |
| `/talents/` phone | screen-feed.png | Application on a phone | screen-feed.jpg | REPLACE |
| `/entreprises/` talents | screen-recruit.png | Consulting profiles | screen-network.jpg | REPLACE |
| `/missions/`, `/a-propos/`, `/aide/`, `/contact/`, legal routes | none | No application screenshot | none | KEEP |

The four previous screenshot files are removed. They are no longer referenced.

The offers frame keeps its top alignment so the new screen header stays visible. Phone frames still use their existing ratio. The new screens are close to that ratio, so the frame does not stretch them.

## 3. Application CGU

Source: `https://cam-power.net/cgu`, read in the browser on 7 October 2026.

The page title is Conditions générales d'utilisation. It says the version has been in force since 21 July 2026. It says the platform is edited by HOPE CORPORATIONS, a Cameroonian company. It governs the platform, including accounts, offers, short missions, content, messaging, subscriptions, personal data, intellectual property, liability, suspension, and the courts of Douala for those CGU. Contact stated there: `contact@campower.cm`.

Adopted on `/conditions-utilisation/`:

- The vitrine conditions stay limited to the public site.
- The page now points to `https://cam-power.net/cgu` and the 21 July 2026 version.
- It states that browsing the vitrine, or choosing Accéder à CamPower, does not accept those CGU.
- It states that the CGU and the application mentions do not name the same rights holder, and this page does not choose.
- It records that the CGU names the courts of Douala for itself, and this page does not adopt that forum for the vitrine.

Not adopted:

- Account, payment, subscription, moderation, and suspension clauses are not copied onto the vitrine.
- HOPE CORPORATIONS is not stated as the settled operator of the vitrine.
- The CGU email does not replace `contact@cam-power.net` on the vitrine contact path.

## 4. Application mentions légales

Source: `https://cam-power.net/mentions-legales`, read in the browser on 7 October 2026.

Published there:

- Editor and operator: CamPower
- Country: Republic of Cameroon
- Email: `contact@campower.cm`
- Publication director: Direction de CamPower
- Developer: Hope Corporation, stated as neither owner nor co-publisher, and not responsible for personal data
- Hosting: unnamed third-party cloud
- Intellectual property claimed for CamPower or its partners
- Cameroonian law and the courts of Douala for those mentions
- A privacy and cookies section

Not published there: legal form, RCCM, NIU, address, telephone, named director.

`/mentions-legales/` no longer shows bracketed prototype values. It reports both published editor statements and marks the missing registry fields as not established. The Site Vitrine email stays `contact@cam-power.net`. The application legal email is shown as published, not substituted for the site email.

`/confidentialite/` is unchanged. The in-app privacy card and the privacy paragraphs inside the CGU and the mentions are not used to expand that page.

## 5. Follow-ups

| Follow-up | Before | After |
| --- | --- | --- |
| CAMPOWER-FUP-APPLICATION-TERMS-EVIDENCE-001 | OPEN — blocked by missing evidence | CLOSED — CGU captured 7 October 2026 |
| CAMPOWER-FUP-LEGAL-OPERATOR-IDENTITY-001 | OPEN | OPEN — the two legal pages name different editors |
| CAMPOWER-FUP-APPLICATION-PRIVACY-EVIDENCE-001 | OPEN | OPEN — no processing audit |
| CAMPOWER-FUP-PLAY-PRIVACY-DESTINATION-001 | OPEN | OPEN — no Play privacy URL |

## 6. Unresolved

The legal operator is not established. HOPE CORPORATIONS and CamPower are both published, by different pages. Hope Corporation is published as the developer and is not treated as the operator.

## 7. Validation

Astro check: 0 errors, 0 warnings. Production build: 11 pages.

Preview at `http://127.0.0.1:4324/cam-power-vitrine/`: all eleven routes returned 200 at 1440, 768, and 390 pixels, with no horizontal overflow. No old screenshot filename remained. Internal links kept the `/cam-power-vitrine/` base. Every Accéder à CamPower link stayed `https://cam-power.net/` in the same window. Phone screens use `object-fit: cover` and are not stretched. The profile figure keeps its natural ratio. Conditions include the CGU address and the 21 July 2026 date. Mentions show both published editor names and no bracketed prototype values. Reduced motion leaves the homepage heading visible with no transform. Without JavaScript the heading stays visible. Escape closes the compact menu.
