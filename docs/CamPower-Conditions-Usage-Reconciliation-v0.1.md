# CamPower Conditions d’utilisation — Scope, Evidence and Contractual-Boundary Reconciliation — v0.1

Date of evidence: 2 October 2026

Status: reconciliation for Product Owner review. This is not a terms page, not a contract, and not legal advice.

Site Vitrine baseline: `9e92734b64f71163b4aabdf912156f9d3bc834e7` in `tobeypaul/cam-power-vitrine`. Local and remote match. No production page was modified.

Known constraint, not a question: the Product Owner does not currently have the CamPower application source. Application behaviour is not inferred.

## 1. Answer

CamPower can legitimately publish **conditions for use of the public Site Vitrine**. It cannot legitimately publish the contractual rules of the platform or the application.

The near-term page should be **Conditions d’utilisation du Site Vitrine**. The footer may keep the shorter label “Conditions d’utilisation”. The page itself must say that it governs the informational site, and that it is not acceptance of application terms.

A visible scope statement is recommended. The privacy label “Information intermédiaire” should not be copied. The site rules that are ready can be stated as the current conditions of that site. What is missing is application coverage, not a draft of the site rules.

## 2. How to read the classes

| Class | Meaning |
|---|---|
| CONFIRMED | Shown by the reviewed Site Vitrine, a public page retrieved on this date, or an official legal text that was read. |
| SAFE FOR SITE VITRINE | Proportionate wording for the public site, still subject to the legal-review flags below. |
| APPLICATION — NOT ESTABLISHED | No authoritative CamPower source states this rule. Do not draft it. |
| LEGAL REVIEW REQUIRED | A Cameroonian lawyer should confirm it before it is presented as a final clause. |
| PRODUCT OWNER DECISION REQUIRED | A real product choice. Lack of application source is not one of these. |

## 3. Evidence sources

### Reviewed

| Source | Result |
|---|---|
| Site Vitrine at `9e92734` | Static French site. No account, no form, no terms checkbox. Footer “Conditions d’utilisation” still points at `#mentions`. Privacy page is `/confidentialite/` and is expressly interim and site-scoped. `robots.txt` allows all crawlers. |
| `docs/CamPower-Privacy-Data-Practices-Reconciliation-v0.1.md` and `src/content/confidentialite.ts` | Discipline reused. Privacy text is not copied into proposed terms. |
| `https://cam-power.net/cgu` on 2 October 2026 | HTTP 404. Apache/2.4.66 (Ubuntu). No terms text. |
| Google Play `com.campower`, reviewed in the privacy reconciliation and not re-audited line by line here | Developer display name “Hope corporation”. Description of profiles, opportunities, missions, and a network. Data Safety says no data is collected. Privacy control targets `/cgu`. Content rating 3+. |
| LinkedIn company post dated in search results 26 June 2026 | Describes CamPower as a temporary-work agency and publishes `+237 621 61 41 63` and `contact@cam-power.net`. |
| Law No. 2010/021 of 21 December 2010 on electronic commerce | Official PDF published by the Ministry of Commerce was read for the articles cited below. |
| Law No. 2024/017 of 23 December 2024 on personal data | Already reconciled. Not re-extracted. Terms should point to `/confidentialite/` rather than restate it. |

### Not treated as CamPower evidence

| Item | Why excluded |
|---|---|
| kamerpower.com terms | Different site and different operator. |
| `hopecorporations.com` | A digital-services site with its own email and telephone. The Play name “Hope corporation” does not, by itself, prove that this website is the CamPower operator. |
| JanSoft entities | No CamPower-specific document in the reviewed repository names them as the operator. They are not assumed. |

### Not established

Application source, database, Android project, a readable `/cgu` document, a trade-register extract, a trademark filing, and a registered office.

## 4. What `/cgu` establishes

CONFIRMED: on 2 October 2026, `https://cam-power.net/cgu` returned HTTP 404.

CONFIRMED from the earlier Play review: the listing labels that URL as privacy rules (“Règles de confidentialité”). The path spelling is CGU, which in French usually means terms of use, not a privacy notice.

That is a naming conflict on the store listing. It does **not** establish that `/cgu` was a privacy policy, and it does **not** establish that valid application terms exist. No historical text of that URL was found. Follow-up `CAMPOWER-FUP-PLAY-PRIVACY-DESTINATION-001` remains the right place for the broken Play link. This reconciliation does not close it and does not change Play.

## 5. Product boundary

CONFIRMED in the repository: the Site Vitrine presents CamPower and sends people onward. `README.md` states that the site does not search, apply, recruit, or manage accounts. “Accéder à CamPower” goes to `https://cam-power.net/`. Contact is `mailto:contact@cam-power.net`.

CONFIRMED: there is no Site Vitrine account, login, checkbox, or clickwrap.

The application’s search, apply, recruit, network, publish, and manage functions are product positioning. They are not rules that this site can impose.

## 6. Recommended page scope

**Conditions d’utilisation du Site Vitrine.**

A broader title, “Conditions d’utilisation CamPower”, would be read as covering accounts, recruitment, and Missions. Those rules are not established. The footer words are not a reason to widen the contract.

Recommended visible scope, in substance:

> Ces conditions concernent l’utilisation du Site Vitrine public de CamPower. Elles ne constituent pas les conditions de la plateforme ou de l’application, et les consulter n’emporte pas acceptation de conditions d’application qui ne sont pas publiées ici.

Scoped status: **yes**. Interim privacy badge: **no**. Reason: visitors must see the boundary immediately, without being told that the site conditions themselves are unfinished.

## 7. Site Vitrine terms that are ready

These are SAFE FOR SITE VITRINE. Wording in a future page should stay this short. Items marked for legal review should not be strengthened into waivers before that review.

### Purpose and access

- The site is a public information site about CamPower.
- Pages may be read without creating an account. The site does not offer registration or login.
- Reaching the application, Google Play, LinkedIn, or an email programme leaves this site. Each of those surfaces has its own rules. The CamPower application is CamPower’s own product surface, not an unrelated third-party site. These site conditions do not state, and do not replace, the application’s conditions.

### Informational content

- The pages present CamPower, its ecosystem, and its capabilities.
- A page on this site is not itself an employment offer, a promise of recruitment, a promise of a Mission, a promise of a professional result, or a contract between the visitor and an employer or a talent.
- CamPower is not defined here as only a job board. The site also does not say that CamPower employs the people who may appear in illustrations, recruits for every company, or guarantees a hire, a candidate, or an employer.

This matches pages already accepted: opportunities are not only job offers, and Missions are not a freelance marketplace. Do not add bidding, escrow, payment, deliverables, milestones, disputes, ratings, invoices, commissions, or worker classification.

### Appropriate use

A short boundary is enough: do not use the site to disrupt it, compromise its security, gain access that is not offered, introduce malicious code, or use it unlawfully.

Do not publish a long code of conduct. Do not say that this boundary governs application accounts.

### Indexing

CONFIRMED: `src/pages/robots.txt.ts` allows all user agents and publishes the sitemap. Ordinary search indexing should remain allowed. Do not prohibit all bots, all automation, or all crawling.

### External destinations

State the four intentional exits: `https://cam-power.net/`, the Play listing, the LinkedIn company page, and `mailto:contact@cam-power.net`.

External services apply their own conditions. Do not add a clause that CamPower has no responsibility for the CamPower application.

Opening the application does not mean the visitor has accepted application terms. None are published on this site, and this site has no acceptance control.

### Availability and changes

The public site can change, and access can be interrupted, because it is an informational site under maintenance. Do not promise 24/7 access, an uptime percentage, or a service level. Do not take a right to shut down the whole CamPower service. Do not take a right to rewrite application contracts by editing these pages.

### Privacy and cookies

Link to `/confidentialite/`. Do not repeat that notice. Say that it is the current privacy information for the Site Vitrine and that it does not yet describe the application.

Do not add cookie-consent language. The accepted notice says that, in the reviewed implementation, no cookie deposited by the site was identified, and no visitor analytics tool was identified. No cookie banner exists.

### Contact

`contact@cam-power.net` can be the contact for questions about these site conditions. Do not invent legal@, support@, or privacy@.

### What not to say

No “we never sell data”. No retention period. No account deletion. No minimum age. No DPO. No certification. No regulatory approval. No “stored in France” or “stored only in Cameroon”. No Google Play Data Safety sentence.

## 8. Application terms — not established

Do not draft rules for any of the following. No authoritative CamPower source states them.

Account creation, eligibility, identity checks, suspension, termination, profile accuracy, employer verification, job-posting rules, applications, recruitment decisions, Mission creation, acceptance, or completion, payments, commissions, refunds, disputes, ratings, messaging, moderation, sanctions, account deletion, and application licences.

User-content licences, prohibited in-app conduct, and versioning of application terms are in the same class. They belong to `CAMPOWER-FUP-APPLICATION-TERMS-EVIDENCE-001`, which is separate from the privacy follow-up.

## 9. Intellectual property

CONFIRMED: the site uses the name CamPower, the logo at `src/assets/brand/logo.png`, original French page text, and the visual system of the accepted mockups.

NOT ESTABLISHED: a trademark registration, an assignment, or that a named company owns the mark. Do not write “CamPower is a registered trademark” or name an owner that the file does not identify.

SAFE FOR SITE VITRINE, with legal review of the ownership sentence: visitors may read the pages for information. They should not copy the site’s design or present it as their own service. The precise ownership sentence needs counsel because the legal owner is not in the repository.

Product screenshots in `src/assets/screens/` are described in `README.md` as Play Store screenshots, and the biography area was treated as placeholder. They are illustrations of the product, not evidence of a contract with the organisations pictured.

## 10. Third-party marks

The supplied screens include names such as Microsoft, Orange Cameroun, Cabinet Ngono & Associés, and AfricaMedia Group, with mixed currencies and locations. A partnership, endorsement, or affiliation is not established by those images.

A single calm sentence is justified, because the homepage can show those images:

> La présence d’un nom ou d’un signe tiers dans une illustration du produit ne signifie pas, à elle seule, un partenariat, un agrément ou une affiliation.

Do not build a brand-disclaimer section around it.

## 11. Liability and warranties

Do not paste a clause excluding all direct, indirect, incidental, consequential, or punitive damages. Do not add “as is / as available”.

SAFE FOR SITE VITRINE, and LEGAL REVIEW REQUIRED before it is treated as a limitation of liability: the pages are informational. They do not create an employment contract, a recruitment mandate, or a Mission contract.

Law No. 2010/021, article 24, which was read in the Ministry PDF, nullifies some clauses that shift risk to the consumer in a sale with a trial period. That article is about a sale. It is a reason not to import a general exemption. It is not a finding that the Site Vitrine is that kind of sale.

## 12. Governing law

The footer states “Cameroun” as the site’s place line. That is not a choice-of-court clause.

SAFE FOR SITE VITRINE, LEGAL REVIEW REQUIRED: say that questions about these site conditions are considered in light of the Cameroonian rules that apply to this public site. Do not name a court, a city, an arbitration body, or a mediation body. None is established.

Do not copy French or OHADA boilerplate jurisdiction from other companies’ terms.

## 13. Age

NOT ESTABLISHED: an application minimum age. The Play rating of 3 years is not an eligibility rule.

For merely reading the public site, no age gate exists and none should be invented. LEGAL REVIEW REQUIRED only if counsel considers a children’s-services rule triggered by an informational site. Do not write 13+, 16+, or 18+ in the meantime.

## 14. Acceptance

CONFIRMED: there is no checkbox, registration, or clickwrap.

Recommended distinction, which must stay visible:

- these conditions are **made available** on the site;
- opening or reading the site is **not presented as a signed acceptance**;
- nothing on this site records acceptance of application terms.

LEGAL REVIEW REQUIRED: whether Cameroonian law treats mere availability, or continued browsing, as acceptance of a contract for an informational site. Do not assert either theory in the page until that review.

Law No. 2010/021, articles 11 and 12, which were read, require electronic **offers to supply goods or services** to provide storable terms, order steps, error correction, language, and acknowledgement of an order. The Site Vitrine does not take an order. Those articles should not be implemented as a fake checkout. Whether the application later makes such offers is APPLICATION — NOT ESTABLISHED.

## 15. Cameroon legal research

### Official text read

Law No. 2010/021 of 21 December 2010 governing electronic commerce in Cameroon. Source: Ministry of Commerce PDF, `mincommerce.gov.cm`, retrieved 2 October 2026. The text extraction is continuous and was checked against the article numbers below. It is not a substitute for the gazette.

| Provision read | What it says, in short | Use here |
|---|---|---|
| Articles 1 and 2 | The law governs electronic commerce: supplying goods or services by electronic means, and commercial communications that promote goods, services, or image. | A marketing site can be a commercial communication even when it does not sell. LEGAL REVIEW whether CamPower’s operator is a “prestataire” under article 30. |
| Article 5 | Advertising accessible by electronic communication must be clearly identifiable as such, and as coming from the person for whom it is made. Misleading advertising remains punishable. | Supports clear identification of CamPower as the speaker. Does not identify the legal entity. |
| Articles 6 and 7 | Unsolicited commercial email needs clear identification and prior consent. | The site sends no newsletter. Do not invent an email-marketing programme. |
| Article 9 | Electronic contracts are allowed, subject to other statutes. | Does not create CamPower’s application contract. |
| Articles 11 and 12 | Online offers to supply goods or services must ship with storable terms and a real order path. | Not a Site Vitrine checkout. Do not fake one. |
| Articles 15 to 22 | Pre-contract information, withdrawal periods, and refunds for consumer sales. | Do not copy into an informational site that takes no order. |
| Article 24 | Some risk-shifting clauses in a trial sale are void. | Reason to avoid a universal liability waiver. |
| Article 30 | A provider of electronic-commerce services must give easy, direct, and permanent access to identity, establishment address, email, and telephone; and, where applicable, trade-register number, share capital, registered office, taxpayer number, authorisation, and professional body. | This is the main legal-identity duty. The facts it asks for are **not established** for CamPower. It belongs first to Mentions légales. LEGAL REVIEW on whether the Site Vitrine alone triggers it. |
| Article 31 | A price, if mentioned, must be clear about tax and delivery. | The site is not a shop. Illustrative salaries in screenshots are not the site’s prices. Do not treat them as offers. |

### Identified and not read article by article

These are titles only. They are not conclusions.

- Law No. 2010/012 of 21 December 2010 on cybersecurity and cybercrime.
- Law No. 2010/013 of 21 December 2010 on electronic communications, as amended.
- Law No. 2011/012 of 6 May 2011 on consumer protection.
- Law No. 2024/017 of 23 December 2024 on personal data. Already used for the privacy page. Terms should link to it indirectly through `/confidentialite/`, not rehearse the legal debate.
- OAPI / Bangui Agreement copyright and trade-mark regime. No register search was completed, so no filing is claimed.

### Secondary material

None of the article readings above is taken from a law-firm summary. The privacy report’s secondary commentaries are not reused as terms.

### Product recommendation, separate from the statute

Publish site-scoped conditions now only if the Product Owner accepts that the legal operator’s name, address, and telephone required by article 30, if that article applies, will sit on Mentions légales and are not yet known. Do not fill those fields with Hope Corporation, JanSoft, or the LinkedIn telephone in order to look complete.

## 16. Legal operator — for Mentions légales

| Item | Status |
|---|---|
| Legal name | NOT ESTABLISHED. “CamPower” and “CAM Power” are the public brand. Play shows “Hope corporation” as the developer name only. |
| Country of the brand presentation | The site says Cameroun. That is not a registered office. |
| Trade register, capital, taxpayer number | NOT ESTABLISHED |
| Registered or business address | NOT ESTABLISHED |
| Publication director | NOT ESTABLISHED. Do not import a French press-law office. |
| Telephone | NOT ESTABLISHED for the site. The LinkedIn post publishes `+237 621 61 41 63`. The accepted Contact page has no telephone. Do not promote that number into legal notices without a decision that it is a real CamPower channel. |
| Email | CONFIRMED public contact: `contact@cam-power.net` |
| Hosting of the future Site Vitrine | NOT ESTABLISHED. `README.md` says no hosting target is configured. |
| Host answering for `cam-power.net` | PARTIAL, from the privacy reconciliation: OVH infrastructure in France for the HTTPS endpoint; mail host likely LWS in France. That does not identify the legal operator, and it does not say where application data is stored. Literal network addresses were removed from the committed privacy report and are not repeated here. |

Reusable for the next Mentions légales dispatch: brand Cameroun line, email, absence of register data, Play developer name kept separate, `/cgu` 404, and the article 30 list as the checklist still empty.

## 17. Recommended future page architecture

1. Purpose — conditions of the public site.
2. Scope — Site Vitrine only; not the application; reading them is not acceptance of application terms.
3. Access — no account on this site.
4. Informational nature — no employment, recruitment, or Mission promise.
5. Appropriate use — the short security and legality boundary.
6. Intellectual property — read freely; do not pass the site off; third-party names in illustrations are not partnerships.
7. Other destinations — application, Play, LinkedIn, email, each with its own rules.
8. Availability and changes — the site can change or be interrupted; no uptime promise; no power to rewrite application contracts.
9. Responsibility — informational limit only; no universal damages waiver.
10. Privacy — link to `/confidentialite/`.
11. Framework — Cameroonian rules that apply, without a named court, after legal review.
12. Contact — `contact@cam-power.net`.
13. Updates — these site conditions can be updated on the page; no fictional acceptance log.

## 18. Legal review required

- Whether article 30 applies to this informational site, and whether conditions may be published before the operator is named.
- Whether continued browsing is acceptance.
- The ownership sentence for the name, logo, and text.
- Any sentence that could be read as a limitation of liability.
- The governing-law sentence, before it names a forum. Do not name a forum without evidence.
- Whether any children’s rule applies to browsing alone.
- How article 5’s “identifiable advertiser” duty is met while the legal entity is unknown. That may block Mentions légales more than it blocks a scoped conditions page, but counsel should say which page carries the identity.

## 19. Product Owner decision required

1. Publish **Conditions d’utilisation du Site Vitrine** before a legal entity, address, and telephone are documented, or wait until those facts exist for Mentions légales.
2. Keep the footer label “Conditions d’utilisation” while the page title states “du Site Vitrine”. Recommended: yes. Confirm.
3. Include the single third-party illustration sentence. Recommended: yes.

No other product policy is proposed. Application rules are not offered for decision in the absence of evidence.

## 20. Follow-up

`docs/follow-ups/CAMPOWER-FUP-APPLICATION-TERMS-EVIDENCE-001.md`

Status: **OPEN — BLOCKED BY APPLICATION EVIDENCE AVAILABILITY**

Not merged with `CAMPOWER-FUP-APPLICATION-PRIVACY-EVIDENCE-001`.

## 21. What this dispatch did not do

No mockup. No `/conditions-utilisation/` page. No footer change. No accepted page edited. No Play change. Mentions légales not started. This file is in the working tree and is not committed.
