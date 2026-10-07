# CamPower Site Vitrine — Privacy and Legal Reconciliation 005

Dispatch: CAMPOWER-SITE-VITRINE-DSP-PRIVACY-AND-LEGAL-RECONCILIATION-005

Date: 7 October 2026

Starting HEAD: `d63a2f245067d7a567a98719b406c57a68ebbd58`

## CGU evidence summary

Live source consulted on 7 October 2026: `https://cam-power.net/cgu`

The page is titled Conditions générales d'utilisation. The version shown has been in force since 21 July 2026. It has sixteen sections:

1. Objet et champ d'application
2. Définitions
3. Acceptation des CGU
4. Inscription et compte
5. Services proposés
6. Obligations des utilisateurs
7. Obligations des recruteurs
8. Contenus publiés
9. Abonnements et paiement
10. Données personnelles
11. Propriété intellectuelle
12. Limitation de responsabilité
13. Suspension et résiliation
14. Modification des CGU
15. Droit applicable et résolution des litiges
16. Contact

The CGU names HOPE CORPORATIONS, société de droit camerounais, as editor of the CAMPPOWER platform. The contact block shows `contact@campower.cm` and République du Cameroun.

Section 10 says the platform collects, among other things, name, first name, email, telephone, city, CV, professional skills, application history, and navigation data. Purposes shown are account management and personalisation, connecting candidates and recruiters, service improvement and personalised recommendations, communications about the account and offers, and legal compliance. Rights shown are access, rectification, and deletion, exercised by contacting the editor.

The CGU cites Loi N°2010/021 du 21 décembre 2010 régissant le commerce électronique and Loi N°2010/012 du 21 décembre 2010 relative à la cybersécurité et à la cybercriminalité. It assigns disputes about the CGU to the courts of Douala.

## Mentions légales evidence summary

Live source consulted on 7 October 2026: `https://cam-power.net/mentions-legales`

Éditeur du site, as published:

- Éditeur et exploitant: CamPower
- Pays d'exploitation: République du Cameroun
- E-mail: `contact@campower.cm`
- Directeur de la publication: Direction de CamPower

The page says the digital solution was developed by Hope Corporation as software-development provider. It says Hope Corporation is not owner of CamPower, is not co-editor, is not responsible for processing users' personal data, and that operation and data responsibility fall exclusively to CamPower.

Hosting is described as third-party cloud infrastructure. No host is named. The page tells the reader to ask the editor for host information.

Intellectual property: the content of the CAMPPOWER site, including texts, graphics, images, logos, icons, videos, software, and databases, is stated to be the exclusive property of CamPower or its partners.

Personal data: CamPower is said to handle users' personal data for providing and improving the services. Rights of access, rectification, and deletion are stated, at `contact@campower.cm`.

Cookies and similar technologies are described for the platform only: logged-in session, preferences, usage analysis, and securing member-only functionality.

Applicable law is Cameroonian law. Jurisdiction stated for those mentions is the courts of Douala, République du Cameroun.

No legal form, RCCM, NIU, registered address, telephone, or named natural-person publication director is published.

## Google Play privacy destination

The Project Owner confirmed that Google Play currently points to `https://cam-power.net/cgu`.

That confirmation identifies the current destination. It does not certify that the destination is ideal or compliant, and it does not make the CGU the Site Vitrine privacy page.

## Operator contradiction

The two application pages do not name the same editor.

- CGU: HOPE CORPORATIONS, société de droit camerounais, editor of the platform.
- Mentions légales: CamPower is editor and operator. Hope Corporation is the software-development provider and is explicitly not owner, not co-editor, and not responsible for personal data.

This reconciliation does not choose either formulation. It does not treat CamPower as an incorporated entity. It does not treat HOPE CORPORATIONS as owner of CamPower. It does not treat Hope Corporation and HOPE CORPORATIONS as the same legal entity.

CAMPOWER-FUP-LEGAL-OPERATOR-IDENTITY-001 stays open.

## Contact-email discrepancy

- Site Vitrine marketing contact, unchanged: `contact@cam-power.net`
- Contact published on the application legal pages: `contact@campower.cm`

The Vitrine address is kept for questions about the Vitrine. The `.cm` address is used when the page quotes or points to the application legal contact. Neither address is treated as invalid.

## Disclosures adopted

On `/confidentialite/`:

- What a visit to the public Vitrine does and does not do.
- A short application summary of the verified categories, purposes, and rights.
- The two 2010 laws cited by the CGU.
- The editor contradiction, left unresolved.
- A direct link to `https://cam-power.net/cgu`, with wording that this Vitrine page does not replace the CGU.
- Platform cookie uses, attributed only to the platform.

On `/mentions-legales/`:

- The published editor facts and the unpublished registry fields.
- Hope Corporation’s published role, including the statements that it is not owner, co-editor, or data controller.
- Unnamed third-party cloud hosting.
- The published intellectual-property statement, plus the conflicting CGU attribution, without choosing.
- A pointer to the Vitrine privacy page and to the application CGU.
- Cameroonian law and the Douala jurisdiction as stated for the application mentions.
- Direct links to `https://cam-power.net/cgu` and `https://cam-power.net/mentions-legales`.

## Disclosures not adopted

- The CGU and the application mentions were not copied into the Vitrine.
- Application accounts, CVs, recruiter data, payments, messages, and application profiles are not attributed to the Vitrine.
- No host vendor is named.
- No legal form, RCCM, NIU, address, telephone, or named publication director was invented.
- Liability limits, hyperlink rules, payment terms, and the platform cookie-acceptance sentence were not turned into Vitrine rules.
- The earlier interim citation of loi n° 2024/017 du 23 décembre 2024 was removed from `/confidentialite/`. This evidence does not establish that citation.
- `/conditions-utilisation/` was not rewritten. It still states that browsing the Vitrine, or choosing Accéder à CamPower, does not accept the application CGU. It still cites `https://cam-power.net/cgu` as text.

## Exact page changes

- `src/content/confidentialite.ts` — Vitrine scope, application summary, external CGU source, update date 7 octobre 2026.
- `src/pages/confidentialite.astro` and `src/styles/confidentialite.css` — external source link, not passed through the base helper.
- `src/content/mentions.ts` — editor sheet aligned to the live mentions, development, intellectual property, personal data, and Douala law. Both contact addresses remain.
- `src/pages/mentions-legales.astro` and `src/styles/mentions.css` — extra sections. Absolute application URLs are not prefixed.
- `src/content/types.ts` — fields for the privacy source link and the extra mentions sections.
- Follow-up records listed below.

## Follow-up status changes

- CAMPOWER-FUP-APPLICATION-TERMS-EVIDENCE-001 — remains CLOSED. Not reopened.
- CAMPOWER-FUP-LEGAL-OPERATOR-IDENTITY-001 — OPEN. The contradiction is recorded again.
- CAMPOWER-FUP-APPLICATION-PRIVACY-EVIDENCE-001 — OPEN — EVIDENCE AVAILABLE / POLICY STRUCTURE STILL REQUIRES OWNER RESOLUTION. Published text is now available. Closure still requires an audit, not only discovery of that text.
- CAMPOWER-FUP-PLAY-PRIVACY-DESTINATION-001 — CLOSED — DESTINATION CONFIRMED. Evidence: Google Play currently points to `https://cam-power.net/cgu`. The closure does not certify compliance.

## Validation results

- `astro check`: 0 errors, 0 warnings, 0 hints.
- Production build: 11 pages.
- Eleven routes returned HTTP 200 with a visible main heading: `/`, `/decouvrir/`, `/talents/`, `/entreprises/`, `/missions/`, `/a-propos/`, `/aide/`, `/contact/`, `/confidentialite/`, `/conditions-utilisation/`, `/mentions-legales/`.
- No horizontal overflow at 1440, 768, and 390 on those eleven routes.
- Internal links use `/cam-power-vitrine/`. `mailto:` and `https://` links are not prefixed. Built HTML contains no `/cam-power-vitrine/https://`.
- `/confidentialite/` links to `https://cam-power.net/cgu`.
- `/mentions-legales/` links to `https://cam-power.net/cgu` and `https://cam-power.net/mentions-legales`.
- Both live application URLs opened in the browser on 7 October 2026.
- `motion-ready` is present when reduced motion is not requested, and absent when it is. Page content stays visible with reduced motion and with JavaScript disabled.
- Motion implementation was not changed. Hero sections on the legal pages still use the accepted hero motion only.

Production readiness remains NOT ESTABLISHED.
