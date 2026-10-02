# CamPower Privacy & Data Practices Reconciliation — v0.1

Date of evidence: 2 October 2026

Status: evidence report for Product Owner review. This is not a privacy notice, not legal advice, and not an instruction to change the product.

Source-control note, 2 October 2026: before this report was committed, literal network addresses and one reverse-DNS hostname were removed. The conclusions are unchanged. The HTTPS endpoint for `cam-power.net` is on OVH infrastructure in France. The mail host is likely LWS in France. Neither finding establishes where application personal data is stored.

Site Vitrine baseline reviewed: `7dff16dea79ef749e630ff10d5086dd9a84366f6` in `tobeypaul/cam-power-vitrine`.

## 1. Executive summary

A public Confidentialité page cannot yet describe what CamPower does with personal data. The application source, database, Android project, and live application were not available for inspection. What can be established is narrower.

The Site Vitrine, at the accepted baseline, is a static French site. It does not collect form data. Contact is a `mailto:` link to `contact@cam-power.net`. Its source sets no cookies, no analytics, and no third-party scripts. Fonts are self-hosted.

The hostname `cam-power.net` answers on an OVH address in France. On 2 October 2026 the site root returned HTTP 403, and the privacy URL published on Google Play, `https://cam-power.net/cgu`, returned HTTP 404. No application screen, API, account flow, or privacy text could be read there.

Google Play lists `com.campower` as CAMPower, developer Hope corporation, updated 10 September 2026. The same listing says the application collects no user data and shares none, and also describes professional profiles, skills, experience, opportunity posting, missions, and a professional network. Those two public statements cannot both be used as the privacy notice.

Cameroon Law No. 2024/017 of 23 December 2024 is the current dedicated personal-data statute. The official Presidency PDF has no extractable text layer, so the legal section below relies on that official publication plus two dated secondary commentaries. Those commentaries disagree on territorial scope. That disagreement is left open. It is not resolved by this audit.

Public-notice readiness: **NOT READY**.

## 2. Scope and evidence sources

### Reviewed

| Source | What was inspected | Authority |
|---|---|---|
| `tobeypaul/cam-power-vitrine` at `7dff16d` | Pages, content, layout, global CSS, `package.json`, header and page scripts | Authoritative for the Site Vitrine only. GitHub. |
| DNS and HTTPS for `cam-power.net` and `mail.cam-power.net` | A/AAAA/NS/MX, TLS certificate, HTTP status of `/` and of the Play-listed legal paths | Public infrastructure. Not application source. |
| Google Play listing `com.campower`, French storefront, 2 October 2026 | Description, developer, data-safety summary, content rating, privacy-policy link | Public declaration by the listed developer. Not source code. |
| LinkedIn company post retrieved in search | Public telephone and email on a June 2026 post | Public marketing text. Not product configuration. |
| Presidency of the Republic publication of Law No. 2024/017 | PDF identity and the fact that pages are image-only | Official text exists. Wording of articles was not extracted from it. |
| Tech Hive Advisory, 4 February 2025; African Law & Business / Dentons and KMN, 17 July 2025 | Secondary article-level commentary | Commentary, not the statute. |

### Not reviewed — gaps

| Gap | What was attempted | Consequence |
|---|---|---|
| Application repository | Local disk search. GitHub account `janitdevelopers` repository list. `git ls-remote` as `tobeypaul` for `cam-power`, `campower`, `cam-power-app`, `cam-power-api`, `cam-power-backend`, `cam-power-android`, `campower-android`, `campower-app`, `cam-power-mobile`, `campower-mobile`, `cam-power-web`, `campower-web`. | No application repository was found. Backend, schema, auth, deletion, retention, and visibility are **NOT ESTABLISHED**. |
| Android project / APK | No local project. Play listing does not expose a permission manifest to this audit. | Declared permissions and actual permission use are **NOT ESTABLISHED**. |
| Live application | Browser and HTTP client, 2 October 2026. | `/` is 403. Tested legal and entry paths are 404. No account, profile, or API was observed. |
| Database, object storage, backups, logs, admin roles | No configuration access. | **NOT ESTABLISHED**. |
| Site Vitrine production host | `README.md` states that no hosting target is configured in the repository. | Where the marketing site will be hosted, and whether that host logs IP addresses, is **NOT ESTABLISHED**. |
| Official article text of Law No. 2024/017 | Presidency PDF downloaded. `pdftotext` returned only the cover line and watermarks. No OCR tool was available. | Legal research is **PARTIAL**. |
| Full text of Law No. 2010/012, Law No. 2010/013, Law No. 2010/021, Law No. 2023/009, and the 2012 ANTIC security-audit regulation | Titles confirmed from the ANTIC texts page and from the Dentons commentary. Articles not read. | Related obligations are identified, not reconciled article by article. |
| Google Play Data Safety field-by-field form, and any Play account-deletion URL beyond the listing | The public data-safety page was read. It states no collection and no sharing, with no further categories. | Reconciliation is partial: declaration versus description, not declaration versus code. |

No production code was modified. `/confidentialite/` was not implemented. No mockup was created.

## 3. Application architecture and data-flow overview

An application data flow cannot be drawn from source. The only flows with evidence are these.

```text
Visitor → Site Vitrine static HTML
          no form, no API, no account
          "Nous écrire" → mailto:contact@cam-power.net
          "Accéder à CamPower" → https://cam-power.net/
          Play badge → Google Play, package com.campower

https://cam-power.net/  → OVH (AS16276), France at allocation level
                         → literal network addresses removed before commit
                         → Apache/2.4.66 (Ubuntu), TLS by Let's Encrypt
                         → observed result: HTTP 403 at /, HTTP 404 at /cgu

MX mail.cam-power.net → likely LWS / AS210403, France
                       → literal network addresses removed before commit
                       → mailbox contents and retention NOT ESTABLISHED

Google Play listing → public description and Data Safety form
                    → privacy link https://cam-power.net/cgu (404 on this date)
```

There is no evidenced path `User → CamPower frontend → API → database`. That path may exist. It was not observed.

## 4. Personal-data inventory

Legend: **PRESENT** means the system under review actually processes it. **ABSENT** means the reviewed system does not. **NOT ESTABLISHED** means the application source was not available, so absence must not be inferred.

Marketing screenshots in `src/assets/screens/` are listed separately in section 10 and section 25. They are not treated as proof of collection.

| Category | Site Vitrine | Application |
|---|---|---|
| Name | ABSENT | NOT ESTABLISHED |
| Username / display name | ABSENT | NOT ESTABLISHED |
| Email | The address `contact@cam-power.net` is displayed and used in `mailto:`. The site does not collect the visitor's address. | NOT ESTABLISHED |
| Telephone | ABSENT on the site. A LinkedIn post publishes `+237 621 61 41 63`. That number is not a site or evidenced application field. | NOT ESTABLISHED |
| Password / authentication data | ABSENT | NOT ESTABLISHED |
| Profile photograph | ABSENT | NOT ESTABLISHED |
| Location | ABSENT | NOT ESTABLISHED |
| Professional headline | ABSENT | NOT ESTABLISHED |
| Biography | ABSENT | NOT ESTABLISHED |
| Skills | ABSENT | NOT ESTABLISHED |
| Work experience | ABSENT | NOT ESTABLISHED |
| Education | ABSENT | NOT ESTABLISHED |
| Certifications | ABSENT | NOT ESTABLISHED |
| Languages | ABSENT | NOT ESTABLISHED |
| CV / resume | ABSENT | NOT ESTABLISHED |
| Portfolio | ABSENT | NOT ESTABLISHED |
| Employment preferences | ABSENT | NOT ESTABLISHED |
| Availability | ABSENT | NOT ESTABLISHED |
| Salary / compensation expectations | ABSENT | NOT ESTABLISHED |
| Social / professional links | The site links to LinkedIn and the application. It does not collect the visitor's links. | NOT ESTABLISHED |
| Contacts / connections / follows | ABSENT | NOT ESTABLISHED |
| Posts / content | ABSENT | NOT ESTABLISHED |
| Comments / reactions | ABSENT | NOT ESTABLISHED |
| Messages | ABSENT | NOT ESTABLISHED |
| Job applications | ABSENT | NOT ESTABLISHED |
| Mission interactions | ABSENT | NOT ESTABLISHED |
| Saved opportunities | ABSENT | NOT ESTABLISHED |
| Notifications | ABSENT | NOT ESTABLISHED |
| Device information | ABSENT in source | NOT ESTABLISHED |
| IP address | Not collected by site code. A future host's access logs are NOT ESTABLISHED. The OVH server for `cam-power.net` may log requests; log configuration was not inspected. | NOT ESTABLISHED |
| Security / audit events | ABSENT in site code | NOT ESTABLISHED |

Play's own description claims that people create a professional profile, present skills and experience, and that companies publish opportunities. That is a public claim, not a confirmed data model. See section 20.

## 5. Enterprise-data inventory

No organisation object, membership table, or recruiter role was found, because no application schema was available.

The Site Vitrine describes enterprises, missions, and talents as product concepts. That copy is marketing. It does not create or store organisation records.

| Item | Evidence | Status |
|---|---|---|
| Organisation name, logo, industry, location, description, website | Not in vitrine data collection. Not in an accessible schema. | NOT ESTABLISHED |
| Employee / user memberships | No schema. | NOT ESTABLISHED |
| Administrator identities | No schema. | NOT ESTABLISHED |
| Recruiter identities | No schema. Play text says companies find profiles and publish opportunities. | NOT ESTABLISHED as a data model |
| Opportunities, job listings, mission listings | Claimed on Play and on the vitrine. Not confirmed in storage. | NOT ESTABLISHED |
| Candidate interactions, applications, recruitment activity | Claimed in marketing screenshots and Play text. Not confirmed. | NOT ESTABLISHED |
| Organisation communications | No messaging system was inspected. | NOT ESTABLISHED |

Personal data of employees, recruiters, or company representatives cannot be separated from organisation data until the schema exists. Both remain **NOT ESTABLISHED**.

## 6. Public / private visibility model

**NOT ESTABLISHED.**

No profile-visibility rules, connection-only fields, recruiter-only fields, or user privacy settings were found in accessible source. A LinkedIn-like model must not be assumed. The marketing screenshots show a profile card and a feed, but they do not state who can see those fields, and the repository itself treats part of that artwork as placeholder.

## 7. Employment and recruitment processing

Play listing, retrieved 2 October 2026, says CAMPower helps people find work, helps companies find profiles, and supports publishing opportunities. The Site Vitrine says the same at marketing level and states that the vitrine itself does not search, apply, or recruit (`README.md`, Application boundary).

The following were **not** confirmed in code: opportunity publication, search indexing, saved opportunities, applications, CV submission, application status, employer access, shortlisting, rejection, acceptance, recruitment notes, or applicant messages.

Do not describe an applicant-tracking system in the privacy notice on current evidence.

## 8. Mission processing

The word "mission" appears in the vitrine and in the Play description ("annonces pour des missions ponctuelles"). No mission schema or workflow was inspected.

| Capability | Status |
|---|---|
| Mission publication | NOT ESTABLISHED |
| Mission discovery | NOT ESTABLISHED |
| Expression of interest / application | NOT ESTABLISHED |
| Professional–enterprise interaction | NOT ESTABLISHED |
| Status data | NOT ESTABLISHED |
| Communications | NOT ESTABLISHED |
| Payments | NO EVIDENCE IN REVIEWED SOURCES |
| Escrow | NO EVIDENCE IN REVIEWED SOURCES |
| Bidding | NO EVIDENCE IN REVIEWED SOURCES |
| Proposals | NO EVIDENCE IN REVIEWED SOURCES |
| Contracts | NO EVIDENCE IN REVIEWED SOURCES |
| E-signatures | NO EVIDENCE IN REVIEWED SOURCES |
| Invoicing | NO EVIDENCE IN REVIEWED SOURCES |
| Milestones | NO EVIDENCE IN REVIEWED SOURCES |
| Timesheets | NO EVIDENCE IN REVIEWED SOURCES |
| Ratings | NO EVIDENCE IN REVIEWED SOURCES |
| Reviews | NO EVIDENCE IN REVIEWED SOURCES |
| Dispute resolution | NO EVIDENCE IN REVIEWED SOURCES |

"No evidence in reviewed sources" is not a finding that the capability is absent from an unreviewed repository.

## 9. Communications and notifications

| Channel | Evidence | Status |
|---|---|---|
| Site contact form | `src/pages/contact.astro` has no form fields. Primary action is `mailto:contact@cam-power.net`. | ABSENT on the vitrine |
| In-app direct messages | No source. | NOT ESTABLISHED |
| Email delivery of product mail | MX points at `mail.cam-power.net`. What is sent, and by which software, is unknown. | NOT ESTABLISHED |
| Push | No source, no Firebase or equivalent dependency in the vitrine. Android not reviewed. | NOT ESTABLISHED |
| SMS | No source. | NOT ESTABLISHED |
| In-app notifications | No source. | NOT ESTABLISHED |

No newsletter, promotional email programme, marketing push, or promotional SMS was found in the vitrine. Application marketing communications are **NOT ESTABLISHED**, not proven absent.

## 10. Android data practices

Reviewed surface: Google Play listing only.

| Item | Result |
|---|---|
| Package | `com.campower` |
| Store name | CAMPower |
| Developer name on the listing | Hope corporation |
| Store category shown | Professionnel |
| Updated | 10 September 2026 |
| Installs shown | 10+ |
| Content rating shown | 3 ans et plus, with "Interactivité des utilisateurs" |
| Data Safety | "Aucune donnée partagée avec des tiers." "Aucune donnée collectée." The developer states that the app does not collect or share user data. |
| Privacy-policy control | Labelled "Règles de confidentialité". Href: `https://cam-power.net/cgu`. That URL returned HTTP 404. |
| Permissions, advertising ID, analytics SDK, crash SDK, location, camera, microphone, contacts, storage | NOT ESTABLISHED. Declared-versus-used cannot be separated without the manifest and call sites. |

The four images in `src/assets/screens/` are described in `README.md` as Play Store screenshots used by the homepage mockup. `profile-card.png` is explicitly a crop because the rest of that screen contained placeholder biography text. They depict, and do not prove, a signed-in home, search, posts, reactions, comments, shares, job cards, salary figures, favourites, and a recruiter view with application counts and a status "En revue". One offers screen mixes a "Microsoft / Washington, USA / $200/m" card with Cameroon listings in FCFA. That internal inconsistency is a reason not to treat the images as a data dictionary.

## 11. Site Vitrine data practices

Evidence: repository at `7dff16d`. Dependencies in `package.json` are `astro`, `@astrojs/sitemap`, `@astrojs/check`, and `typescript`.

| Practice | Result | Evidence |
|---|---|---|
| Cookies | NONE in source | No `document.cookie` or `Set-Cookie` in `src/` |
| localStorage / sessionStorage / IndexedDB | NONE in source | Search of `src/` |
| Analytics | NONE | No analytics dependency or script |
| Tracking pixels / advertising | NONE | No third-party image or script tags for ads |
| Fingerprinting | NONE found | No such script |
| Embedded third-party resources | NONE found | Fonts are `/fonts/*.ttf` in `src/styles/global.css` |
| Externally hosted fonts | ABSENT | Self-hosted Sora and Source Sans 3 |
| CDN | NONE configured in the repository | |
| Third-party scripts | NONE | Header, contact, and aide scripts are inline and local |
| Forms | NONE | Contact is `mailto:` |
| Server-side collection by the site | NONE in this codebase | Static prerender. `README.md`: the site does not call the application API |
| IP / access logging | NOT ESTABLISHED | Depends on a host that is not configured here |

The contact page script (`src/pages/contact.astro`) only changes the `mailto:` subject on the "Nous écrire" link and a visible note. It does not send the subject anywhere else.

Aide search (`src/pages/aide.astro`) filters six topics and six FAQs in the browser. The query is not sent to a server by that script.

External destinations the visitor can choose: `https://cam-power.net/`, the Play Store URL, `https://www.linkedin.com/company/campower`, and `mailto:contact@cam-power.net`. Choosing them leaves the vitrine. The vitrine does not receive a copy of what happens next.

## 12. Cookies and client storage

### Cookies

**Site Vitrine: no cookie is created by the application source.** Confidence: HIGH for the repository. A hosting platform or TLS terminator in front of a future deploy could add a cookie; no such platform is configured. Confidence that production will remain cookie-free: NOT ESTABLISHED, because production hosting is not in the repo.

**Application and `cam-power.net`: NOT ESTABLISHED.** The live host did not serve an application page, so no cookie jar was observed.

No cookie banner recommendation follows from the vitrine source. Whether the application needs one cannot be decided until its client is inspected.

### Client storage

| Store | Site Vitrine | Application |
|---|---|---|
| localStorage | ABSENT | NOT ESTABLISHED |
| sessionStorage | ABSENT | NOT ESTABLISHED |
| IndexedDB | ABSENT | NOT ESTABLISHED |
| Service worker | ABSENT | NOT ESTABLISHED |
| Auth tokens | ABSENT | NOT ESTABLISHED |

## 13. Third-party processors and services

A package or DNS link is not a contract. Status says what the evidence supports.

| Provider | Purpose | Data involved | Evidence | Geography | Status |
|---|---|---|---|---|---|
| OVH SAS (AS16276) | Host answering for `cam-power.net` | HTTP requests to that host, possibly logs. Application database not shown. | Public DNS and RIR records place the endpoint in an OVH allocation whose country is France. Certificate CN `cam-power.net`. Literal addresses removed before commit. | France at RIR allocation. Exact datacenter city not confirmed. | Confirmed as the HTTPS endpoint operator. Not confirmed as the database host. |
| Let's Encrypt (issuer YE2) | TLS certificate | Certificate issuance data held by the CA, not inspected. Not the application database. | Certificate dates 1 Oct 2026–30 Dec 2026. SAN `cam-power.net`, `www.cam-power.net`. | Not established for CA processing. | Certificate issuer only. |
| DNS Host Services (`ns1`–`ns4.dnshostservices.com`) | DNS | Domain queries, not page content. | NS records for `cam-power.net`. | Not established. | DNS operator. |
| LWS / AS210403 | Likely mail host for `mail.cam-power.net` | Mail sent to the domain, including messages to `contact@cam-power.net`, if the MX is in use. | Secondary DNS intelligence places the published mail host with LWS in France. Direct RIPE text for the exact address was not captured. Literal addresses removed before commit. | Likely France. | LIKELY. Contract not seen. |
| Google Play | Distributes `com.campower` | Store account data is Google's. App data safety text is the developer's declaration. | Listing retrieved 2 October 2026. | Google's processing locations not established here. | Distribution platform. Not proof of an analytics SDK inside the app. |
| LinkedIn | Public company page linked from the vitrine | Visitors who choose the link. No CamPower user database is shown being sent to LinkedIn. | `siteConfig.linkedInUrl`. | Not established. | Public presence. Not an assistance channel on the vitrine. |

No Google Analytics, Google Tag Manager, Meta Pixel, Firebase, Sentry, Crashlytics, or custom analytics endpoint was found in the vitrine. Their presence in the application is **NOT ESTABLISHED**.

## 14. Hosting, storage, and cross-border findings

| Store | Finding |
|---|---|
| Primary database | NOT ESTABLISHED |
| Object / file storage | NOT ESTABLISHED |
| Cache | NOT ESTABLISHED |
| Search index | NOT ESTABLISHED |
| Backups | NOT ESTABLISHED |
| Application logs | NOT ESTABLISHED |
| Analytics store | No analytics store in the vitrine. Application store NOT ESTABLISHED |
| Web endpoint | OVH, France, allocation-level. See section 13. |
| Mail endpoint | Likely LWS, France. MEDIUM confidence. |

### Cross-border

| Arrangement | Classification |
|---|---|
| `cam-power.net` HTTPS endpoint on OVH infrastructure whose RIR country is France | **Confirmed** that this endpoint is outside Cameroon. Whether personal data of users is stored on it is **not confirmed**, because the application did not respond and no database was inspected. |
| Mail host likely in France | **Likely, requiring confirmation** of the operator and of what mail is retained. |
| Application database, backups, push, analytics | **Unknown** |
| Site Vitrine production | **Unknown**. The repository has no hosting target. |

No evidence was found that processing stays inside Cameroon. "No international transfer" must not be written.

## 15. User controls

| Control | Site Vitrine | Application |
|---|---|---|
| Edit profile | Not applicable | NOT ESTABLISHED |
| Change email | Not applicable | NOT ESTABLISHED |
| Change phone | Not applicable | NOT ESTABLISHED |
| Change password | Not applicable | NOT ESTABLISHED |
| Privacy / visibility controls | Not applicable | NOT ESTABLISHED |
| Download / export | ABSENT | NOT ESTABLISHED |
| Delete individual content | ABSENT | NOT ESTABLISHED |
| Deactivate account | ABSENT | NOT ESTABLISHED |
| Delete account | ABSENT | NOT ESTABLISHED |
| Block / report | ABSENT | NOT ESTABLISHED |
| Withdraw an application | ABSENT | NOT ESTABLISHED |
| Notification preferences | ABSENT | NOT ESTABLISHED |
| Write to CamPower | IMPLEMENTED via `mailto:contact@cam-power.net` | Whether the app has another channel is NOT ESTABLISHED |

## 16. Deletion

**Account deletion: NOT ESTABLISHED.**

No deletion screen, API, soft-delete flag, or hard-delete job was reviewed. Backups, leftover content, and recruitment records after deletion are equally **NOT ESTABLISHED**.

The privacy notice must not promise deletion, a delay, or residual retention.

Play's data-safety page does not offer a deletion story because it says no data is collected. If the application does collect account data, that declaration is already in conflict with itself. See section 25.

## 17. Retention

**NO FORMAL RETENTION PERIOD ESTABLISHED** for accounts, profiles, posts, applications, missions, messages, notifications, security logs, backups, or deleted accounts.

Mailbox retention at `mail.cam-power.net` was not configured in any reviewed repository.

Law No. 2024/017, as described by secondary commentary, expects maximum retention periods to follow a reference framework from the data-protection authority. That framework was not retrieved. Do not invent a number of months or years.

## 18. Security controls

Verifiable from this audit:

| Control | Evidence | Confidence |
|---|---|---|
| HTTPS on `cam-power.net` | TLS certificate, Let's Encrypt, valid on 2 October 2026 | HIGH for the endpoint that answered |
| HTTPS as a property of the future vitrine host | Not configured | NOT ESTABLISHED |
| Password hashing | No authentication code reviewed | NOT ESTABLISHED |
| Access control / roles | No code reviewed | NOT ESTABLISHED |
| Encryption at rest | No infrastructure reviewed | NOT ESTABLISHED |
| Secrets management | Not reviewed. No secrets are reproduced here. | NOT ESTABLISHED |
| Audit logging | Not reviewed | NOT ESTABLISHED |
| Backups | Not reviewed | NOT ESTABLISHED |
| Rate limiting / abuse protection | Not reviewed. The 403 on `/` shows that some requests are refused. The rule was not inspected, so this is not evidence of an application control. | LOW |
| Vitrine has no account database to breach | Static site, no API | HIGH for the vitrine codebase only |

No "bank-grade" or similar claim is supported.

## 19. Administrative access

**NOT ESTABLISHED.** No admin role, support impersonation, or privileged-access log was reviewed.

The only evidenced human route to CamPower is `contact@cam-power.net`. Who can read that mailbox was not established.

## 20. Existing legal and public declarations

| Text | Where | What it says | Reconciliation |
|---|---|---|---|
| No privacy page on the vitrine | Footer legal links still point at `#mentions` (`README.md`) | Confidentialité, terms, and mentions are not published on the vitrine | Consistent with this dispatch. Not a privacy notice. |
| Contact model | `src/content/contact.ts`, `src/lib/site.ts` | One address, `contact@cam-power.net`. No form. | Confirmed for the vitrine. |
| Aide escalation | `src/content/aide.ts` | "Contacter CamPower" goes to `/contact/`. The address remains visible as a `mailto:`. | Confirmed. This is not a recorded privacy-request workflow. |
| Play description | `com.campower`, 2 October 2026 | Profiles, skills, experience, opportunities, missions, professional network | Public claim. Not confirmed in source. |
| Play Data Safety | Same listing | No data collected. No data shared with third parties. | Conflicts with the description if those features exist. Cannot be checked against code. |
| Play privacy URL | `https://cam-power.net/cgu`, label "Règles de confidentialité" | No document. HTTP 404. | The declared privacy text is not available. The path is named CGU, not privacy. |
| Play content rating | 3 years and older | No minimum age of 18 is stated | No age gate was found in reviewed source. |
| LinkedIn post | Company page post retrieved in search, dated in the result as 26 June 2026 | Publishes `+237 621 61 41 63` and `contact@cam-power.net`, and describes CamPower as a temporary-work agency | Telephone is not on the accepted vitrine. Agency-versus-platform positioning is a product question, not a data-model finding. |
| `cam-power.com` privacy policy | Taiwan machinery company | Unrelated | Do not use it. |

No registration checkbox, cookie notice, or in-app consent record was found in the vitrine. Application consent text is **NOT ESTABLISHED** because `/cgu` did not resolve and the app source was not found.

No privacy@, dpo@, or legal@ address was found. Do not create one in the notice until the Product Owner adopts it.

## 21. Cameroon legal research

This section is **LEGAL RESEARCH / RECOMMENDED CLASSIFICATION**. It does not say that the code implements the law. It is not formal legal advice.

### A. What was read

**Official**

- Law No. 2024/017 of 23 December 2024 relating to personal data protection in Cameroon. Presidency publication: [English document page](https://www.prc.cm/en/multimedia/documents/10271-law-n-2024-017-of-23-12-2024-web) and [PDF](https://www.prc.cm/files/9b/df/2c/e818fedc7d5568778f884ea2886bea7d.pdf). The PDF is 17 pages, created 23 December 2024. Its text layer does not contain the articles. Article numbers below are **not** taken from that PDF.

**Secondary commentary used for article-level description**

- Tech Hive Advisory, "Operationalising Cameroon's Data Protection Law", 4 February 2025: [techhiveadvisory.africa](https://www.techhiveadvisory.africa/insights/operationalising-cameroons-data-protection-law-a-review-of-key-provisions-and-impacts). Contributors named on the page: Dorcas Tsebee, Precious Nwadike, Victoria Adaramola, Ridwan Oloyede.
- Aissatou Sylla (Dentons) and Tina Brenda Koti Amundam (KMN), "Key features of Cameroon's new data protection law", African Law & Business, 17 July 2025: [africanlawbusiness.com](https://www.africanlawbusiness.com/expert-views/key-features-of-cameroons-new-data-protection-law/).

**Related instruments identified, not read article by article**

- Law No. 2010/012 of 21 December 2010 on cybersecurity and cybercrime.
- Law No. 2010/013 of 21 December 2010 on electronic communications, as amended by Law No. 2015/006.
- Law No. 2010/021 of 21 December 2010 on electronic commerce.
- Law No. 2023/009 of 25 July 2023, charter on protection of children online.
- Regulation No. 2012/1643/PM of 14 June 2012 on compulsory security audits of electronic-communication networks and information systems, cited by the Dentons commentary for breach notice to ANTIC.
- Titles listed on the ANTIC texts page: [antic.cm](https://antic.cm/index.php/fr/info-tic/textes-du-secteur-des-tic/95-non-categorise.html).

### B. Points on which the two commentaries agree

Treat these as commentary, pending a reading of the gazette text.

- A Personal Data Protection Authority is created. Its practical start depends on further instruments. Tech Hive says a presidential decree.
- Principles include lawfulness, fairness, purpose limitation, accuracy, storage limitation, and security.
- People have rights of information, access, rectification, erasure, objection, restriction, and portability, and a protection against decisions based only on automated assessment. Response times depend on later regulation.
- Cross-border transfers require prior authorisation by the Authority. Adequacy and contracts are part of that regime. The Authority had not, in these articles, published the authorisation procedure.
- Sensitive data includes religious, philosophical, political and trade-union opinions, racial or ethnic origin, sex life, genetics, health, and biometrics. Dentons also lists linguistic or regional origin, banking transactions, legal proceedings, and criminal sanctions.
- Minors are under 18. Processing on the basis of consent needs the parent or guardian. Tech Hive adds prior authorisation for sensitive data of a minor, and a necessity limit when a service is offered to a minor.
- Security measures and breach notification to the Authority and to the person are required. Both commentaries say the duty is not limited to "high risk" breaches, and that processors as well as controllers notify.
- An 18-month transition from enactment is described. Counted from 23 December 2024, that period ends in June 2026. This audit is dated 2 October 2026. If that reading is right, the transition has ended. Confirm against the gazette before relying on it.
- Sanctions described include administrative fines up to 100,000,000 FCFA and criminal penalties up to 10 years. Confirm the exact offence thresholds in the statute.

### C. Conflict between the commentaries — do not pick one here

| Question | Tech Hive, 4 February 2025 | Dentons / KMN, 17 July 2025 |
|---|---|---|
| Territorial scope | Articles 2 and 3 do **not** give extraterritorial effect. Processing by controllers established outside Cameroon, of people in Cameroon, is described as excluded. | The Act applies when the person is in Cameroon, including in transit, and when the controller is in Cameroon. The article calls this broader than most African statutes. |
| Legal bases | Consent is described as elevated, with legal obligation still relevant. Contract and legitimate interest are not clearly listed as bases. | Legitimate interest is not an exception to consent. Contractual necessity is not an exception to consent. Other bases named: legal obligation, public-interest task, or a task of the Authority. |

A privacy notice must not state a legal basis until counsel reads the gazette and chooses. In particular, do not write "we process your data to perform the contract" as if that phrase settled Cameroon law.

### D. What the law may require, once facts exist

These are follow-ups, not findings that CamPower already complies or already fails.

| Topic | Commentary indication | CamPower fact gap |
|---|---|---|
| Information to the person before collection | Purpose, recipients, rights, retention, post-mortem guidance, via a notice | No notice is published. Purposes are not established from code. |
| Record of processing | Controller identity, purposes, recipient categories, safeguards or authorisation number | Cannot be completed without the application inventory |
| Authority authorisation / registration | Required before processing, procedure still regulatory | Not established whether CamPower has filed anything |
| Transfer authorisation | Required for cross-border transfers | France-hosted endpoint is confirmed. Whether it stores personal data is not. |
| Minors | Under-18 rule if the service is open to them | Play rating is 3+. No age field or gate was found. |
| Automated decisions | Right not to be subject to a decision based solely on automated assessment | No ranking or rejection algorithm was found, and none was ruled out |
| Retention | Follow the Authority's future reference framework | No schedule exists in reviewed sources |
| Security report | Annual report to the Authority is described | No report was found |
| Breach notice | Authority and person, described as immediate; ANTIC notice may also arise under the 2012 regulation | No procedure was found |

### E. Legal basis classification

**Not assigned.** Purposes are not established for the application. Assigning "consent" or "contract" now would invent both the fact and the legal conclusion.

For the Site Vitrine alone, the only personal-data-adjacent behaviour is that a visitor may open their own mail programme to write to `contact@cam-power.net`, and that a future host may log the connection. Even that hosting log is not a confirmed processing activity until a host exists.

## 22. Data-practice matrix

Confidence is HIGH, MEDIUM, or LOW. Status is CONFIRMED, PARTIAL, or NOT ESTABLISHED.

| Data / activity | Collected? | Source | Purpose | Visible to / recipient | Storage | Retention | User control | Evidence | Confidence |
|---|---|---|---|---|---|---|---|---|---|
| Vitrine page content | No personal data stored by the site | Static HTML | Present the product | Public | Repository and whatever host publishes `dist/` | Not a personal-data store | Not applicable | `src/pages/`, `README.md` | HIGH |
| Contact email action | Visitor's message is not received by the vitrine | User's mail client | Let the person write to CamPower | Recipient of `contact@cam-power.net`; mail host likely LWS | Mailbox, not inspected | NO FORMAL PERIOD | The person uses their own mail | `src/pages/contact.astro`, MX records | HIGH for the vitrine; LOW for the mailbox |
| Aide search query | Not sent to a server | Browser only | Filter six help topics | The visitor's browser | Not stored by the site | None in the site | None needed on the site | `src/pages/aide.astro` | HIGH |
| Optional mailto subject | Not stored | Browser | Suggest a subject | The person's mail client, if they send | Not stored by the site | None | Selecting an intent is optional and reversible | `src/pages/contact.astro` | HIGH |
| Professional profile | NOT ESTABLISHED | Play description claims it | Claimed: present skills and experience | NOT ESTABLISHED | NOT ESTABLISHED | NONE FOUND | NOT ESTABLISHED | Play listing | LOW as a claim only |
| Posts, reactions, comments, shares | NOT ESTABLISHED | Depicted in marketing screenshots | NOT ESTABLISHED | NOT ESTABLISHED | NOT ESTABLISHED | NONE FOUND | NOT ESTABLISHED | `src/assets/screens/screen-feed.png` | LOW |
| Job listing and salary display | NOT ESTABLISHED | Depicted; figures conflict across screenshots | NOT ESTABLISHED | NOT ESTABLISHED | NOT ESTABLISHED | NONE FOUND | NOT ESTABLISHED | `screen-offers.png` | LOW |
| Applications and status | NOT ESTABLISHED | Recruiter screenshot shows counts and "En revue" | NOT ESTABLISHED | NOT ESTABLISHED | NOT ESTABLISHED | NONE FOUND | NOT ESTABLISHED | `screen-recruit.png` | LOW |
| Play "no data collected" | Declaration, not a measurement | Developer form | Store disclosure | Google Play users | Google's listing | Google's | Not a product control | Data Safety page, 2 Oct 2026 | HIGH that the declaration says this; LOW that it matches the app |
| HTTP request to `cam-power.net` | A request reaches OVH. Whether it is logged is unknown. | Any client that connects | Serve the host | OVH, and whoever operates the VPS | NOT ESTABLISHED | NONE FOUND | None | DNS, TLS, HTTP 403/404 | MEDIUM |
| Analytics / advertising sale | NO EVIDENCE FOUND in the vitrine. Application NOT ESTABLISHED. | — | — | — | — | — | — | `package.json`, scripts | HIGH for vitrine only |

## 23. Third-party matrix

| Provider | Function | Data potentially or actually processed | Location / transfer evidence | Contract / policy evidence | Status |
|---|---|---|---|---|---|
| OVH SAS | HTTPS host for `cam-power.net` | Connection metadata; any content the server stores, which was not visible | France, RIR country. Outside Cameroon. | No contract reviewed | CONFIRMED endpoint. PARTIAL as a processor of personal data. |
| LWS (likely) | MX host | Email to the domain | Likely France. MEDIUM. | No contract reviewed | PARTIAL |
| DNS Host Services | DNS | DNS queries | Not established | No contract reviewed | CONFIRMED for DNS only |
| Let's Encrypt | Certificate | CA issuance records, not reviewed | Not established | Public CA policy, not reviewed | Certificate only |
| Google Play | App distribution | Store listing and Data Safety form | Not established | Play developer terms not reviewed | CONFIRMED as the store listing |
| LinkedIn | Public company page | Only if the visitor opens it | Not established | Not a processing contract for app data | Public link only |
| Analytics, SMS, push, auth, maps | None identified in the vitrine | Unknown in the app | Unknown | None | NOT ESTABLISHED |

## 24. Rights and capability gap matrix

"Legal consideration" follows section 21 and stays qualified.

| Privacy / user need | Current product capability | Legal consideration | Gap | Proposed follow-up |
|---|---|---|---|---|
| Know what is processed | Vitrine can be described. Application cannot. | Information duty before collection, if the 2024 law applies as the commentaries describe | No accurate notice can be written | Inspect application source, then draft |
| Access | No export | Right of access described in commentary | No feature found | Product decision after the inventory |
| Correction | Profile edit not confirmed | Rectification described | Gap if profiles exist | Confirm in the app |
| Erasure | Deletion not confirmed | Erasure described | Gap if accounts exist | Product decision. Do not promise a period. |
| Objection / restriction | Not found | Described in commentary | Gap | Counsel plus product design |
| Portability | Not found | Described in commentary | Gap | Do not build under this dispatch |
| Withdraw consent | No recorded consent found | Commentaries treat consent as central and say contract is not a substitute | Cannot withdraw what is not recorded | Find registration UI, or decide there is none |
| Automated decision challenge | No such system confirmed | Right described | Unknown | Confirm there is no scoring before denying it in public |
| Minor protection | Play rating 3+. No age gate found. | Under-18 rules in commentary | Gap | Product Owner decides minimum age |
| Cross-border authorisation | France endpoint confirmed; database not confirmed | Prior authorisation described | Cannot file a complete transfer request yet | Counsel, after storage location is known |
| Breach notice | No procedure found | Authority, person, and possibly ANTIC | Operational gap | Separate from the public page |
| Privacy request channel | `contact@cam-power.net` only | A channel is needed in practice | No dedicated privacy address. The general mailbox is the only evidenced route. | Product Owner decides whether that mailbox is the public channel |
| Cookie choice | Vitrine sets none | A banner is not indicated for the vitrine source | Application cookies unknown | Re-check the app client |

## 25. Contradictions

1. **Play description versus Play Data Safety.** The listing describes profiles, skills, experience, published opportunities, missions, and a professional network. The same listing says the application collects no user data and shares none. Both were read on 2 October 2026. This is the highest-priority public contradiction.

2. **Play privacy link versus the server.** The control labelled privacy opens `https://cam-power.net/cgu`. That URL returned HTTP 404. There is no privacy text to reconcile with the product. The path name is terms (`cgu`), not a privacy notice.

3. **Marketing screenshots versus Data Safety, with low confidence in the screenshots.** `src/assets/screens/` depicts names, photos, posts, reactions, comments, shares, salaries, applications, and a status. The README says related biography text was placeholder. The offers image also mixes an American dollar card with FCFA listings. These images must not be "fixed" into the privacy notice, and they must not be ignored if they were uploaded to Play as real screens.

4. **LinkedIn telephone versus the accepted site.** A company post publishes `+237 621 61 41 63`. The accepted Contact page has no telephone. The privacy notice must not inherit the LinkedIn number unless the Product Owner decides that the number is a real channel.

5. **Secondary legal commentaries disagree on territorial scope.** Tech Hive says the 2024 law does not reach foreign controllers processing data of people in Cameroon. Dentons says it does, including people in transit. The official PDF could not be text-extracted. This is a legal-evidence conflict, not a product bug.

No contradiction was found inside the Site Vitrine contact model: one address, no form, Aide escalates to `/contact/`, and the address stays visible.

## 26. Public-notice readiness

Overall: **NOT READY**.

| Topic | Class | Why |
|---|---|---|
| Vitrine does not use a contact form | READY | `contact.astro` |
| Vitrine contact address is `contact@cam-power.net` | READY | `site.ts`, contact content |
| Vitrine sets no cookies and loads no analytics or third-party scripts | READY WITH QUALIFICATION | True of this repository. Untrue as a promise about a future host or about the application. |
| Vitrine fonts are self-hosted | READY | `global.css` |
| Aide is self-service and Contact is the direct write-to-us route | READY | Accepted pages at this baseline |
| Application account data | NOT READY | Source missing |
| Profile visibility | NOT READY | Not established |
| Recruitment and missions | NOT READY | Claims only |
| Messages, push, SMS | NOT READY | Not established |
| Android permissions and SDKs | NOT READY | Manifest not reviewed |
| Play Data Safety wording | NOT READY | Conflicts with the store description |
| Deletion | NOT READY | No evidence |
| Retention periods | NOT READY | None established |
| Legal basis | NOT READY | Facts incomplete, and commentaries conflict |
| International transfers | NOT READY | France endpoint is real; the data stored there is not known |
| Minors | NOT READY | Play says 3+. No rule in source. |
| Sale of data / advertising | NOT READY as a promise of "we never sell" | No evidence of sale was found in the vitrine. That is not a permanent policy. |
| Security assurances beyond HTTPS on the current `cam-power.net` certificate | NOT READY | Other controls not verified |

## 27. Required Product Owner decisions

These are open because the evidence does not decide them. This audit does not choose.

1. Where the authoritative application, API, database, and Android repositories are, and who may review them.
2. Whether the Play description or the Play Data Safety form is the intended public position. They currently conflict.
3. Whether `https://cam-power.net/cgu` was meant to be terms, privacy, or both, and why it 404s.
4. Minimum age, given a store rating of 3 years and a statute discussed as protecting under-18s.
5. Whether `contact@cam-power.net` is the privacy-request channel, or whether another channel will be created. No privacy@ address exists in reviewed sources.
6. Account-deletion policy: whether deletion exists, and what it means. Do not publish a promise first.
7. Retention policy. None exists in reviewed sources.
8. Whether marketing email, push, or SMS will exist.
9. Profile visibility: public, members, connections, or recruiters. Not established.
10. Acceptance of processing on infrastructure in France (OVH confirmed for the web endpoint; mail likely LWS), including a later authorisation question for counsel.
11. Whether analytics or crash reporting is wanted. None is in the vitrine. The app was not inspected.
12. Whether the LinkedIn telephone number is a CamPower channel. The vitrine says it is not.
13. Whether CamPower is, for the privacy notice, the platform described on the vitrine or the temporary-work agency described on the LinkedIn post. Those descriptions differ.

## 28. Required engineering and legal follow-ups

Not started. Not authorised by this dispatch.

### Engineering, before any public promise

- Identify and review the application repository, schema, and Android project.
- Read registration, login, password storage, session, and recovery without copying secrets into a report.
- Map profile fields to actual visibility.
- Confirm or exclude messaging, push, SMS, analytics, and crash SDKs.
- Confirm or exclude payments, contracts, and ratings on missions.
- Confirm whether account deletion exists and whether it is soft or hard.
- Compare the Play Data Safety form and the privacy URL with the code. Do not change the Play form in that review pass unless a later dispatch says so.
- After a vitrine host is chosen, record whether it logs IP addresses or sets cookies.

### Legal

- Have counsel read the gazette text of Law No. 2024/017, not only the two commentaries, and resolve the territorial-scope conflict.
- Confirm whether the 18-month transition has ended and whether the Authority exists in practice.
- Decide legal bases only after the processing inventory is real.
- Determine whether a France-hosted server requires a transfer authorisation, and what to do while the Authority's procedure is unpublished.
- Read Law No. 2023/009 if the service remains rated for young children.
- Do not treat this report as a filing, a record of processing, or a breach procedure.

## Confidence summary

| Conclusion | Confidence |
|---|---|
| Vitrine source collects no account data, sets no cookies, and has no analytics | HIGH |
| `cam-power.net` is served from OVH infrastructure in France | HIGH for the endpoint; MEDIUM for any personal-data storage there |
| Mail host is LWS in France | MEDIUM |
| Play says both "no data collected" and that users create professional profiles | HIGH |
| Play privacy URL 404s | HIGH on 2 October 2026 |
| Application data model, deletion, retention, Android permissions | NOT ESTABLISHED |
| Article-level statement of Law No. 2024/017 | PARTIAL. Official PDF not text-extracted. Two commentaries conflict on scope. |
