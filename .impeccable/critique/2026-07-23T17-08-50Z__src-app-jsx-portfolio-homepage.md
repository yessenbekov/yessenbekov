---
target: src/App.jsx (portfolio homepage)
total_score: 22
max_score: 28
na_heuristics: 7,9,10
p0_count: 0
p1_count: 2
timestamp: 2026-07-23T17-08-50Z
slug: src-app-jsx-portfolio-homepage
---
Method: dual-agent (A: ac7266f0572657788 · B: adc2dbc4d569fa2c0)

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 3 | No persistent scroll/section indicator once past the hero |
| 2 | Match Between System / Real World | 4 | Conventional, familiar portfolio vocabulary throughout |
| 3 | User Control and Freedom | 3 | No anchor nav / back-to-top; language switcher only lives in the hero |
| 4 | Consistency and Standards | 3 | `.service-card h4` / `.services-meta h4` have an unreset UA margin other cards don't |
| 5 | Error Prevention | 4 | No forms beyond `mailto:`; outbound links correctly use `rel="noreferrer"` |
| 6 | Recognition Rather Than Recall | 2 | Language switcher renders once, only in the hero; not repeated in footer |
| 7 | Flexibility and Efficiency of Use | n/a | Static single page, no repeat-use workflow to accelerate |
| 8 | Aesthetic and Minimalist Design | 3 | h4 margin bug and dark-on-dark project thumbnail break otherwise careful restraint |
| 9 | Help Recognize/Diagnose/Recover from Errors | n/a | No input/validation flows exist on this static page |
| 10 | Help and Documentation | n/a | Self-explanatory single-page portfolio |
| **Total** | | **22/28** | **Good (79%)** |

## Design Specificity Verdict

**LLM assessment (Assessment A):** Split verdict. The *content* is genuinely specific and non-interchangeable: real employers (DNA Payments, Halyk Bank, InvestaX), real domain vocabulary (Camunda tasklist, Oracle PL/SQL, MobX), a real bespoke Tyess Group brand mark, real trilingual EN/RU/KZ copy. The *visual shell*, however, reads as a generic "dark-mode developer portfolio starter": CSS-variable dark navy palette, JetBrains Mono metadata labels, 10px-radius cards with a translateY hover lift, IntersectionObserver fade-up reveal. Swap the content for any other frontend engineer's details and the exact same CSS would serve them unchanged. Content saves this page from genericness; the chrome itself signals "developer portfolio," not specifically "FinTech engineering leader" or "boutique consultancy."

**Deterministic scan (Assessment B):** `detect.mjs --json` against all source files (App.jsx, App.css, index.css, data.js, translations.js, Logo.jsx, Icon.jsx, LanguageSwitcher.jsx) returned **zero findings** (exit code 0, stdout `[]`) — no failing rules, no advisory findings (e.g. no em-dash-overuse flags, confirming the earlier manual audit already cleared the automated-pattern-level issues). Assessment B traced the detector's own source to confirm this is a genuine "clean scan," not a swallowed error.

**Browser evidence (Assessment B):** No console errors at either viewport. All 4 project images and all script/CSS requests returned 200/304. Interactive elements (3 language buttons, 5 social links) all resolved to real, non-empty hrefs. Layout held up correctly at both desktop and mobile widths, and in a light-`prefers-color-scheme` browser context (confirming the light-theme CSS variant also renders correctly, not just the dark default).

No false positives to report: there were no findings to review.

## Overall Impression

The page is honest, content-rich, and technically clean, zero console errors, zero automated-detector findings, real evidence instead of fabricated claims. But it under-serves its own two-audience premise: the strongest proof point (real project screenshots) lands at a visual low point (a dark screenshot vanishing into the dark theme), the section meant to carry the most trust (Experience) has an unexplained four-way date overlap that a fast recruiter skim will read as an error, and the page's one conversion action sits mid-scroll with nothing at the actual end. The single biggest opportunity: make Experience and Projects work as hard as the copy already does, they're carrying real substance that the current presentation is quietly undermining in three specific, fixable spots.

## What's Working

1. **Trilingual layout robustness is real, not assumed.** Verified live at 320px, 375px, 1280px, and 1920px, and with KZ actively selected: the hero row, `.services-meta` grid, and timeline heads all held up cleanly with the longest-language variant. Many trilingual sites break under exactly this stress; this one didn't.
2. **The Tyess Group brand mark is embedded, not bolted on.** The actual `<Logo>` lockup (indigo T + cyan node) appears inline at the top of Services rather than as a text mention, making the consultancy read as a distinct real entity, not "founder moonlighting" prose. Confirmed correct in both dark and light color schemes.
3. **The three-typeface system is applied with real discipline.** JetBrains Mono is reserved exclusively for machine-like metadata (dates, stack tags, eyebrows, language codes), Space Grotesk exclusively for name/headings, with zero exceptions found across the CSS file.

## Priority Issues

**[P1] Unexplained overlapping employment dates undermine the section meant to build trust.**
Why it matters: Halyk Bank runs Dec 2017–Jun 2022; inside that window, Prime Source (Nov 2021–Mar 2022), Titanium Technologies (Dec 2021–Jul 2022), and InvestaX (Jan 2022–Jul 2022) are all also listed as active, four concurrent roles, zero annotation. A recruiter skimming the timeline in under a minute will read this as a dating error or padded tenure, either reading damages the one section whose whole job is credibility.
Fix: Add a one-line qualifier on the overlapping entries (e.g., "Freelance, concurrent with Halyk Bank").
Suggested command: `/impeccable clarify`

**[P1] The accent color fails WCAG AA contrast on the elements meant to carry information, including the primary CTA.**
Why it matters: Computed from the real hex values in `index.css`: `--accent` (#6b82ff) on `--bg` (#242b38) = 4.24:1; accent text inside `.stack` tags (on `--accent-dim`) = ~3.67:1. Both are below the 4.5:1 AA minimum for normal text. This color drives `.eyebrow`, every `.period` date, every `.stack` tag, and `.services-cta`, the primary conversion button.
Fix: Lighten the accent for text use (e.g. ~#8b9dff) while keeping the more saturated #6b82ff for non-text UI like borders and the logo dot.
Suggested command: `/impeccable audit`

**[P2] `.service-card h4` / `.services-meta h4` carry an unintended ~21px extra top margin, breaking card rhythm.**
Why it matters: `index.css` only resets margin on `h1, h2, h3`; `h4` is never included, so browser default UA margin stacks on top of the card's own padding. Verified via computed geometry: every one of the 5 service cards shows visibly more whitespace above its heading than below its copy, breaking the vertical rhythm the rest of the page otherwise maintains carefully.
Fix: Add `h4` to the global margin reset, or set `margin: 0` explicitly on `.service-card h4` / `.services-meta h4`.
Suggested command: `/impeccable layout`

**[P2] Dark project screenshots disappear into the dark theme, undercutting the page's strongest proof point.**
Why it matters: The Kokpar 3D thumbnail (a dark game login screen) sits in `.project-thumb` on the site's own dark background with almost no visual separation. The one thing meant to differentiate this from a static resume, real screenshots as evidence, loses impact exactly where it should peak.
Fix: Give `.project-thumb img` a fixed light inset border or subtle shadow independent of each screenshot's own palette.
Suggested command: `/impeccable polish`

**[P3] Language switcher has no footer counterpart, unlike social links.**
Why it matters: `<LanguageSwitcher />` renders once, only in `.hero-top`. The footer repeats the social row but not the language switcher, a real recall/control cost for a feature PRODUCT.md treats as core (trilingual parity).
Fix: Duplicate `LanguageSwitcher` next to the footer's social row.
Suggested command: `/impeccable polish`

## Persona Red Flags

**Jordan (confused first-timer):** Nothing up front signals this is a dual person-plus-company site, that framing only lands once Jordan reaches Services, roughly halfway down. The Shezhire project card is the only one with no thumbnail (by design, it has no web build), but nothing on the card explains that, so Jordan is likely to read it as a broken image rather than an intentional omission.

**Riley (stress-tester):** Layout survives 320px, KZ language switching, and 1920px ultra-wide with correctly centered, symmetric gutters. But Riley's exact skillset (reading dates carefully, running a contrast checker) is precisely what surfaces the two P1 issues above, these aren't hypothetical edge cases, they're things a careful reader hits on a normal first pass.

**Recruiter/technical interviewer (60-second skim):** The employment-overlap issue is the single biggest risk in this window, a fast tenure-math skim of the Experience timeline is exactly recruiter behavior, and four unexplained simultaneous roles is the kind of thing that ends a "reach out" decision on the spot.

**Prospective Tyess Group client (trust evaluation):** The Services pitch is clean and specific, but there is nothing between "read the pitch" and "commit to emailing a stranger," no scoping call, no response-time expectation, no lower-commitment next step. The Tyess Group identity also appears exactly once, at 40px, inline in one section; nothing elsewhere reinforces it as a distinct operating business.

## Minor Observations

- Social row mixes professional (GitHub, LinkedIn, Email) and personal (Telegram, Instagram) channels with identical visual weight and no text labels.
- The project grid juxtaposes two kokpar/horse-themed personal projects against a medical site and a learning PWA with no grouping or framing, all honest and real, but thematically disjointed in one unbroken grid.
- Footer copyright line is the quietest text on the page (13px, `--text-dim`), consistent with, and reinforcing, the weak page-ending noted above.
- `--text-dim` on `--bg-alt` (muted text inside cards) computes to 4.49:1, right at the AA line, not a clear failure but worth watching if either token shifts in a future edit.

## Questions to Consider

1. If recruiter and prospective-client really are co-equal audiences reading the identical linear scroll, should the page ever let a visitor self-identify, even two lightweight hero links ("Hiring? -> Experience" / "Need dev help? -> Services"), rather than assuming both audiences are equally happy to read About -> Services -> Experience -> Projects in that exact order?
2. Experience is meant to be the credibility engine for both audiences, so why does its single most scrutinizable claim (the 2021-2022 overlapping roles) carry zero supporting context, when one sentence turns a potential red flag into a strength?
3. "Restraint over spectacle" was a deliberate, named choice here, but is restraint being spent evenly, or is it under-designing exactly the moments where the two audiences' actual decisions get made (the project-evidence presentation, the final page-end CTA, the overlap explanation) while over-applying itself elsewhere?
