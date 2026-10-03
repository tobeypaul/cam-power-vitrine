# CamPower Site Vitrine — Motion Experience v0.1

Dispatch: CAMPOWER-SITE-VITRINE-DSP-MOTION-EXPERIENCE-DESIGN-001

Date: 3 October 2026

Status: for Product Owner review. Not implemented in the Astro estate. Not self-approved.

Prototype closure stays COMPLETE WITH CONTROLLED FOLLOW-UPS. Production readiness stays NOT ESTABLISHED. This document does not change accepted copy, layout, navigation, or the application boundary.

Review prototype: `design/motion-experience-01/index.html`

## 1. Motion design principles

Motion is allowed only when it serves at least one of these jobs:

1. Orientation — show that a region has arrived.
2. Hierarchy — bring the eye to the heading, then the action.
3. Continuity — connect two states of the same control, such as a closed and open menu.
4. Feedback — confirm hover, press, or a filter change.
5. Polish — a short settle that makes the accepted design feel finished.

If a movement does none of these, it is out. Motion is a layer on Homepage Mockup 03 and the accepted inner pages. It does not restyle cards, type, colour, or structure.

## 2. Motion character

Target level: moderate professional motion.

CamPower should feel confident and smooth. A section settles once. A control answers the pointer or the finger. The page then stays still.

The character rejects continuous decoration, large travel, bounce, playful overshoot, and sequences that make the visitor wait before reading. A still page is preferred to motion that keeps drawing the eye after the content is understood.

## 3. Motion token proposal

Proposed tokens, inside the ranges given by the dispatch. One set for the whole estate.

| Token | Value | Role |
| --- | --- | --- |
| `--motion-duration-fast` | 160ms | Hover, press, colour, menu, filter |
| `--motion-duration-standard` | 260ms | Ordinary entrance and reveal |
| `--motion-duration-emphasis` | 420ms | Homepage hero visual only |
| `--motion-ease-standard` | `cubic-bezier(0.2, 0, 0, 1)` | Colour and shadow |
| `--motion-ease-enter` | `cubic-bezier(0.16, 1, 0.3, 1)` | Entrances settle and stop |
| `--motion-ease-exit` | `cubic-bezier(0.4, 0, 1, 1)` | Menu close, filter hide |
| `--motion-distance-small` | 8px | Hero text, mobile travel, menu |
| `--motion-distance-standard` | 16px | Section and card reveal on desktop |
| `--motion-stagger` | 50ms | Delay between siblings |
| `--motion-stagger-max` | 100ms | Cap so later siblings do not wait |

Below 768px, `--motion-distance-standard` becomes 10px and `--motion-stagger` becomes 30ms. Easing and durations stay the same.

These tokens belong on `:root` in the global stylesheet when implementation is accepted. Components must not invent a second duration.

## 4. Entrance and reveal model

Standard entrance: opacity 0 to 1, and `translateY` from the distance token to 0. No horizontal travel. No scale. No blur.

Two triggers:

- Hero, first screen: runs once on load.
- Everything lower on the page: runs once when about 15% of the element is inside the viewport.

Later implementation uses one `IntersectionObserver` and a class, `is-in`. The observer then stops watching that element. Scrolling back up does not replay the entrance.

The hidden state exists only after a tiny head script has marked the document ready for motion, and only when the visitor has not requested reduced motion. Without that script, the accepted HTML is fully visible. See sections 16 and 17.

Hero text uses the small distance. Sections and card groups use the standard distance. Legal pages, when they move at all, use opacity only.

## 5. Stagger model

Stagger applies to a group of peers that explain one idea: audience doors, a step row, a short card group.

Each child sets `--i` to 0, 1, 2… Delay is `min(--motion-stagger-max, --i * --motion-stagger)`. With the proposed numbers, item one starts immediately, item two at 50ms, and every later item at 100ms. A row of four does not take half a second to begin.

Stagger is for the first group in a section. Nested groups do not stagger again. Lists of legal rows, FAQ answers, and footer links do not stagger.

## 6. Hero motion

Homepage hero sequence, using accepted copy and the accepted two-phone composition:

| Piece | Delay | Duration | Distance |
| --- | --- | --- | --- |
| Eyebrow | 0 | standard | small |
| Heading | 40ms | standard | small |
| Lead | 80ms | standard | small |
| Actions | 120ms | standard | small |
| Signals | 140ms | standard | small |
| Visual (phones and offer chip) | 60ms | emphasis | standard, 16px |

The heading starts moving 40ms after load and is fully present by about 300ms. The visual may take 420ms. Reading is not held behind the illustration.

Inner-page heroes (Découvrir, Talents, Entreprises, Missions, À propos) use the same text sequence without the phone visual. Contact, Aide, and the three legal pages use a shorter version: eyebrow, heading, and lead only, standard duration, small distance, delays of 0 / 40 / 80ms. They do not use the emphasis duration.

Ambient motion after the entrance is specified in section 21 as a rejected default. The review prototype can turn a 6px drift on for comparison. The recommendation is that the hero visual stays still once it has settled.

## 7. Card interactions

A surface moves on hover or press only when that surface is itself the control.

Audience doors, benefit panels, and process steps are not one big link. The panel stays put. The text link inside may move its arrow 3px on the x-axis over the fast duration. That confirms the link without pretending the whole panel is a button.

Where a future or existing control is the card itself, the allowed hover is `translateY(-2px)` and a slightly deeper shadow, fast duration, ease-standard. Press returns to 0. Non-interactive notes, prototype flags, and legal fact rows get no hover motion.

## 8. CTA interactions

Primary, ghost, and line buttons already change background on hover. Add:

- Hover: background as today, plus `translateY(-1px)`, fast, ease-standard.
- Active: `translateY(1px)`, fast, ease-exit. No scale.
- The arrow icon, where the button has one: `translateX(3px)` on hover, fast.
- Focus: the existing 2px outline stays. Yellow outline on primary controls stays. Focus is not animated and is not replaced by movement.

Text links that are not buttons: colour transition, fast. An arrow, when present, may move 3px. Underline and destination do not change.

`Accéder à CamPower` keeps its destination and same-window behaviour.

## 9. Header and mobile navigation

Desktop header stays as built. Nav labels may change colour over the fast duration. The current-page underline does not animate in. The logo does not move.

The compact menu, below 981px, today appears and disappears with `display`. That cannot transition. The proposed behaviour keeps the same labels, the same open, focus, and Escape behaviour, and changes only the presentation:

- Open: panel opacity 0 to 1 and `translateY(-8px)` to 0, fast, ease-enter. The icon bars rotate to the close glyph over the fast duration. The first link still receives focus.
- Close: opacity to 0 and `translateY(-8px)`, fast, ease-exit, then the panel stops taking space. Escape still returns focus to the button.
- The panel may animate `grid-template-rows` from `0fr` to `1fr` so the header grows smoothly. This is the only layout animation in the system. It is limited to that small panel.

No new header links. No drawer that covers the page.

## 10. Aide interaction motion

Aide search and topic filters stay in the page. They do not become a route change.

When a topic or the query hides a block:

- The block fades out over the fast duration, ease-exit, then `hidden` is set so it leaves the tab order.
- Blocks that remain do not replay an entrance.
- A block that returns fades in over the fast duration, opacity only, no travel.
- The empty state fades in over the fast duration.

Typing must stay immediate. The filter runs first. The fade is allowed to follow. It must not debounce the search.

FAQ disclosure (`details`) keeps the browser’s own open and close. No extra height animation on answers.

## 11. Legal-page motion limits

`/confidentialite/`, `/conditions-utilisation/`, and `/mentions-legales/` are reading pages.

Allowed:

- One short hero entrance, opacity and 8px, standard duration, no emphasis, no stagger.

Not allowed:

- Staggered articles.
- Movement on the prototype identity rows, the “Prototype — non vérifié” flag, or the interim privacy status.
- Hover lift on related-page cards. Their links may still move an arrow 3px, because that is control feedback.
- Ambient motion.

The prototype flag and the bracketed identity values stay visually stable.

## 12. Route-by-route motion matrix

| Route | Level | Why |
| --- | --- | --- |
| `/` | Motion required | First impression and the three audience choices. Hero plus one staggered group. Later bands are optional reveals. |
| `/decouvrir/` | Motion required | Same entrance language, so the estate feels like one product. Hero and the first possibility group. |
| `/talents/` | Motion required | Hero and the parcours steps. |
| `/entreprises/` | Motion required | Hero and the first presence or need group. |
| `/missions/` | Motion required | Hero and the need / skill / mission group. No marketplace-style motion. |
| `/a-propos/` | Motion required | Hero and the reason group. Later belief and vision bands are optional. |
| `/aide/` | Motion required only for filter feedback | Searching is an interaction. Decorative reveal of every answer would make search feel slow. |
| `/contact/` | Motion optional | Hero may use the short entrance. Intent buttons use CTA feedback because they are controls. |
| `/confidentialite/` | Motion optional, limited | Short hero only. The interim notice stays still. |
| `/conditions-utilisation/` | Motion optional, limited | Short hero only. |
| `/mentions-legales/` | Motion optional, limited | Short hero only. Identity rows and the prototype flag stay still. |

Header, footer, and skip link follow the global rules on every route. The footer does not reveal on scroll.

## 13. Mobile behaviour

Reviewed against a 390px frame.

- Travel uses 10px, not 16px.
- Stagger step is 30ms, still capped at 100ms.
- Hero delays stay at 0 / 40 / 80 / 120ms. They are already short. The visual uses the standard duration, not emphasis, because the phones reflow under the text and a 420ms move reads as larger.
- No ambient motion.
- Hover effects are not required for touch. Pressed state (`translateY(1px)`) still applies.
- The menu transition is the useful motion on a phone. It must finish in 160ms so the first link is focusable without a long wait.
- Buttons may be full width, as they are today. Movement stays on `transform`, so the wrap does not jump.

## 14. Tablet behaviour

Reviewed against a 768px frame.

The header is already the compact menu. Audience doors stack. Stagger still runs, with the mobile distance and the 30ms step, because 768px is inside the reduced-distance breakpoint.

Reflow must not restart an entrance. The observer fires once. A resize from desktop to tablet does not replay sections that have already entered.

## 15. Desktop behaviour

Reviewed against a 1440px frame.

Stagger cap of 100ms keeps a three-column row inside one beat. Sections below the hero wait until they actually approach the viewport, so motion does not play unseen at the bottom of a tall page.

The hero visual uses the emphasis duration only here and from 981px upward.

## 16. Reduced-motion behaviour

`@media (prefers-reduced-motion: reduce)` is mandatory.

- No translation, stagger, emphasis duration, or ambient drift.
- Hero, sections, and cards are visible immediately.
- Menu open and close are immediate. The icon may still change to the close glyph without a rotation transition. Focus behaviour stays.
- Aide filtering still shows and hides the right blocks. The fade is removed. `hidden` updates immediately.
- Button colour may still change. The 1px translate is removed.
- `scroll-behavior` stays `auto`, which the stylesheet already does under reduced motion.
- The 2px focus outline stays.

The review prototype has a control that previews this mode without changing the operating system. That control is not a production feature.

## 17. No-JS behaviour

Critical content is visible when JavaScript does not run.

The stylesheet must not set entrance elements to `opacity: 0` by default. That hidden state is allowed only under `html.motion-ready`, and a script in `head` adds `motion-ready` only when reduced motion is off. If the script never runs, the class is absent and the accepted page paints normally.

The mobile menu keeps a CSS path: without the script, the existing disclosure behaviour must still be able to show the links. Implementation must not leave `grid-template-rows: 0fr` as the no-JS default. The closed animated state is also behind `motion-ready`, or the button remains a progressive enhancement on top of a menu that can open.

Aide filtering today is a script. That stays a script. With JavaScript off, the topics and answers remain in the page, which is the current behaviour.

## 18. Performance constraints

Animate `opacity` and `transform` only, except the mobile menu panel, which may animate `grid-template-rows` for its own height.

Do not animate `top`, `left`, `width`, `height`, `margin`, or `filter`. Do not add a scroll listener. Do not animate on every frame. Do not put large blurred layers in motion. The existing hero radial gradient stays still.

One observer for the document. Hero load animation is CSS. Unobserve after `is-in`.

`prefers-reduced-motion` is read once in the head script and subscribed so a change in the system setting clears `motion-ready` and shows content at once.

## 19. Accessibility constraints

- Focus outline remains visible over any transform.
- The menu’s first-link focus and Escape return stay.
- Entrances do not run again when the visitor tabs through the page.
- Nothing moves after a click except the control’s own feedback and the Aide result fade.
- Meaning does not depend on motion. Copy, colour, and the current-page underline still carry the message.
- Reduced motion removes travel before it removes colour changes.
- Reveal targets use `transform`, so they need a final state of `transform: none` in order not to create a containing box that clips focus outlines. Outline offset is already 3px. Implementation should check the primary button outline after the hover transform.

## 20. Proposed technical implementation model

Do this only after acceptance. Not part of this dispatch.

1. Add the tokens and the primitive classes to `src/styles/global.css`.
2. Add one module, `src/scripts/motion.ts`, loaded once from `BaseLayout`. It marks `motion-ready`, observes `[data-motion="reveal"]`, and adds `is-in` once.
3. Mark hero pieces with `data-motion="hero"` and groups with `data-motion="reveal"` plus `--i` on children.
4. Extend the existing header script for the panel transition. Do not add a second menu script.
5. In the Aide script, toggle a fading class around the existing show and hide. Do not replay reveal.
6. Leave legal rows unmarked.

Primitives, and only these:

| Class / attribute | Behaviour |
| --- | --- |
| `data-motion="hero"` | Load sequence, child delays from tokens |
| `data-motion="reveal"` | Opacity and translate, once, in view |
| `data-motion="stagger"` | Parent of reveal children that use `--i` |
| `motion-interactive` | Fast hover and press on a real control |
| `motion-menu` | Fast panel and icon transition |

No `motion-float`, no per-section keyframes, no page-transition class in the first implementation.

Native View Transitions are an optional later enhancement. They are not required for acceptance of this system. A later trial would have to preserve history, focus, and the no-JS path. This dispatch does not include them.

## 21. Dependency decision

No new dependency.

React, `@astrojs/react`, Framer Motion / Motion, GSAP, AOS, and any scroll-animation library are out. The entrance, stagger, menu, and filter behaviours are within CSS and `IntersectionObserver`.

No finding requires a library.

Ambient hero motion is the one optional effect that was evaluated and is not recommended for the first implementation. A 6px, 8-second drift on the offer chip meets the amplitude rule and is in the review prototype behind a switch. It still asks the eye to keep watching a settled screen. The hero visual should remain still after its entrance unless the Product Owner explicitly accepts the drift.

## 22. Explicit anti-patterns

- Hiding content in CSS without a `motion-ready` gate.
- Replaying entrances on scroll up.
- Stagger delays that grow with the number of cards.
- Hover-lift on a card that is not a link.
- Bounce, elastic easing, or travel above 24px.
- Infinite motion on text, buttons, legal data, or the prototype flag.
- Animating layout of page sections.
- A scroll listener that updates positions every frame.
- Page transitions that delay navigation.
- Different durations on each page.
- Using motion to change the accepted wording or the application boundary.

## 23. Review and acceptance criteria

Accept the system only if all of these are true in `design/motion-experience-01/` and, later, on the real pages:

- The hero can be read while it settles, and is fully present well inside one second.
- A group staggers by at most 100ms before the last peer starts.
- Scrolling back does not replay a section.
- Non-link panels do not move on hover.
- Buttons and arrows respond, and the focus outline remains visible.
- The compact menu opens and closes, and Escape still works.
- Aide filtering does not replay an entrance on rows that stayed visible.
- Legal rows and the prototype flag do not travel.
- Reduced motion shows everything immediately and drops travel, stagger, and ambient motion.
- With JavaScript disabled, the same content is visible.
- At 1440, 768, and 390 there is no horizontal overflow.
- No production source, dependency, or P2 item changed in this design pass.

## 24. Implementation map

Global pieces, every route:

| Section | Motion | Trigger | Duration | Stagger | Mobile | Reduced motion | Primitive |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Skip link | None beyond existing focus reveal | Focus | — | — | Same | Same | Existing CSS |
| Header logo and desktop nav | Colour only | Hover | Fast | — | Menu replaces the row | Colour only, no travel | `motion-interactive` |
| Compact menu | Panel fade and 8px, icon rotation | Open, close, Escape | Fast | — | This is the mobile header | Instant open and close | `motion-menu` |
| Primary access button | 1px hover and press, arrow 3px | Hover, press, focus | Fast | — | Full width, same transform | Colour and outline only | `motion-interactive` |
| Footer | None | — | — | — | — | — | — |

### `/`

| Section | Motion | Trigger | Duration | Stagger | Mobile | Reduced motion | Primitive |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hero copy and actions | Entrance | Load | Standard | 0–140ms fixed sequence | 10px, no emphasis | Immediate | `data-motion="hero"` |
| Hero visual | Entrance, then still | Load | Emphasis from 981px, standard below | Starts at 60ms | Standard duration | Immediate, no drift | `data-motion="hero"` |
| Audiences doors | Reveal | In view, once | Standard | 50ms, cap 100ms | 10px, 30ms step | Immediate | `reveal` + `stagger` |
| Door text links | Arrow 3px | Hover | Fast | — | Press only | No arrow travel | `motion-interactive` |
| Product showcase | Reveal of the section | In view, once | Standard | None | 10px | Immediate | `reveal` |
| How it works steps | Reveal | In view, once | Standard | Cap 100ms | 10px, 30ms | Immediate | `reveal` + `stagger` |
| Audience split, Cameroon, mobile band | Reveal of the section heading and body as one unit | In view, once | Standard | None | 10px | Immediate | `reveal` |
| Final CTA | Reveal of the band | In view, once | Standard | None | 10px | Immediate | `reveal` |

### `/decouvrir/`

| Section | Motion | Trigger | Duration | Stagger | Mobile | Reduced motion | Primitive |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hero | Short entrance | Load | Standard | 0 / 40 / 80ms | 10px | Immediate | `hero` |
| `band` possibilities | Reveal | In view, once | Standard | Cap 100ms | 30ms step | Immediate | `reveal` + `stagger` |
| `block`, `opp`, `meet`, `missions`, `ensemble`, `cm-block`, `daily` | One reveal per section | In view, once | Standard | None | 10px | Immediate | `reveal` |
| Finale | One reveal | In view, once | Standard | None | 10px | Immediate | `reveal` |

### `/talents/`

| Section | Motion | Trigger | Duration | Stagger | Mobile | Reduced motion | Primitive |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hero | Short entrance | Load | Standard | 0 / 40 / 80ms | 10px | Immediate | `hero` |
| `presence` | Reveal | In view, once | Standard | Cap 100ms on the step marks | 30ms | Immediate | `reveal` + `stagger` |
| `network`, `opp`, `routes`, `value`, `life`, `place`, `daily` | One reveal per section | In view, once | Standard | None | 10px | Immediate | `reveal` |
| Finale | One reveal | In view, once | Standard | None | 10px | Immediate | `reveal` |

### `/entreprises/`

| Section | Motion | Trigger | Duration | Stagger | Mobile | Reduced motion | Primitive |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hero | Short entrance | Load | Standard | 0 / 40 / 80ms | 10px | Immediate | `hero` |
| `presence` and `need` | Reveal | In view, once | Standard | Cap 100ms inside the first group only | 30ms | Immediate | `reveal` + `stagger` |
| Later sections and finale | One reveal per section | In view, once | Standard | None | 10px | Immediate | `reveal` |

### `/missions/`

| Section | Motion | Trigger | Duration | Stagger | Mobile | Reduced motion | Primitive |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hero | Short entrance | Load | Standard | 0 / 40 / 80ms | 10px | Immediate | `hero` |
| `become` | Reveal of need, skill, mission | In view, once | Standard | Cap 100ms | 30ms | Immediate | `reveal` + `stagger` |
| `meet`, `family`, `journey`, `life`, `eco`, `place` | One reveal per section | In view, once | Standard | None | 10px | Immediate | `reveal` |
| Finale | One reveal | In view, once | Standard | None | 10px | Immediate | `reveal` |

### `/a-propos/`

| Section | Motion | Trigger | Duration | Stagger | Mobile | Reduced motion | Primitive |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hero | Short entrance | Load | Standard | 0 / 40 / 80ms | 10px | Immediate | `hero` |
| `why` | Reveal | In view, once | Standard | Cap 100ms on the reason items | 30ms | Immediate | `reveal` + `stagger` |
| `belief`, `life`, `community`, `place`, `vision`, `growth` | One reveal per section | In view, once | Standard | None | 10px | Immediate | `reveal` |
| Finale | One reveal | In view, once | Standard | None | 10px | Immediate | `reveal` |

### `/aide/`

| Section | Motion | Trigger | Duration | Stagger | Mobile | Reduced motion | Primitive |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hero | Short entrance | Load | Standard | 0 / 40 / 80ms | 10px | Immediate | `hero` |
| Topics, FAQ, paths | No entrance | — | — | — | — | — | — |
| Filter show and hide | Opacity only | Query or topic | Fast | None | Same | Instant show and hide | Aide script class |
| Empty state | Opacity only | No matches | Fast | None | Same | Instant | Aide script class |
| Escalate link | Arrow 3px | Hover | Fast | — | Press only | No travel | `motion-interactive` |

### `/contact/`

| Section | Motion | Trigger | Duration | Stagger | Mobile | Reduced motion | Primitive |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hero | Short entrance | Load | Standard | 0 / 40 / 80ms | 10px | Immediate | `hero` |
| Intent buttons | Press and hover feedback | Hover, press | Fast | None | Same | Colour only | `motion-interactive` |
| Write, bridges, final | No section travel | — | — | — | — | — | — |
| Mailto and LinkedIn controls | Colour and arrow | Hover | Fast | — | Press only | No travel | `motion-interactive` |

### `/confidentialite/`, `/conditions-utilisation/`, `/mentions-legales/`

| Section | Motion | Trigger | Duration | Stagger | Mobile | Reduced motion | Primitive |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Hero | Opacity and 8px | Load | Standard | None | 8px | Immediate | `hero` |
| All following sections, including identity, prototype flag, cookies, limits, related cards | None | — | — | — | — | — | — |
| Related-page and mailto links | Arrow or colour | Hover | Fast | — | Press only | No travel | `motion-interactive` |

## Questions for the Product Owner

1. Accept the still hero visual after entrance, which is the recommendation, or accept the optional 6px offer-chip drift shown in the prototype?
2. Accept the route matrix: required hero and first group on the six marketing pages, filter feedback on Aide, short hero only on Contact and the legal pages?
3. Leave native View Transitions out of the first implementation?

## 25. Implementation record

Recorded when CAMPOWER-SITE-VITRINE-DSP-MOTION-EXPERIENCE-IMPLEMENTATION-001 applied this specification. The motion decisions are unchanged.

- Hero drift was not implemented. The hero visual animates in once and stays still.
- View Transitions were not added.
- Tokens live on `:root` in `src/styles/global.css`. Below 768px, standard travel is 10px and the stagger step is 30ms.
- `html.motion-ready` is set by a head script only when the visitor has not requested reduced motion. Reveal hiding exists only in that case, and only inside `@media (prefers-reduced-motion: no-preference)`.
- One controller, `src/scripts/motion.ts`, uses one `IntersectionObserver`. It does not listen to scroll. A target reveals once about 15% of it is visible. A target taller than 75% of the viewport reveals as soon as it intersects, so a long band cannot remain invisible.
- The compact menu fades and moves 8px with opacity and transform. Its height is not animated. The icon bars move with transform. No `grid-template-rows` animation.
- Aide filtering fades results over 160ms. Rows that stay matching are left alone.
