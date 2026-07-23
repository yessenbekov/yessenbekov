# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two co-equal audiences, both scanning the same single page:
1. Recruiters and technical interviewers evaluating Talgat Yessenbekov for Team Lead / Senior Frontend Engineer roles.
2. Prospective clients (startups without an in-house tech team, businesses needing an extra expert hand, agencies needing outsource/outstaff frontend capacity) evaluating whether to hire Tyess Group.

## Product Purpose

A personal about-me and portfolio site that establishes professional credibility (10+ years, FinTech engineering leadership) and pitches Tyess Group's IT consulting and development services, driving either a recruiter conversation or a client inquiry via email/Telegram.

## Positioning

Not a static resume: real, hands-on FinTech leadership experience (DNA Payments, Halyk Bank, InvestaX) paired with a working, currently-operating consulting practice (Tyess Group) and real shipped side projects with live screenshots as evidence, not claims.

## Operating Context

Static single-page React + Vite site, no backend, no auth, no forms beyond `mailto:` links. Trilingual (EN/RU/KZ) with a language switcher persisted in `localStorage`, defaulting from browser language. Source lives in the `yessenbekov/yessenbekov` GitHub repo (the special profile-README repo); not yet deployed to a live URL.

## Capabilities and Constraints

- Content is static and hand-authored; no CMS.
- Experience and education content is sourced from a real LinkedIn export (PDF); not fabricated.
- Project descriptions come from real GitHub repos the user owns.
- Kazakh (KZ) translations were AI-assisted and have **not** been reviewed by a native speaker; flagged as a known gap before wide KZ-audience distribution.
- One project (Shezhire, an Expo/React Native app) has no live web build, so it intentionally has no screenshot thumbnail on the card. This is expected, not a bug.
- Deployment target (Vercel/Netlify/GitHub Pages/custom domain) is undecided.

## Brand Commitments

- Personal name: Talgat Yessenbekov.
- Company: **Tyess Group**, with an existing, binding logo system supplied by the user (PDF spec): an angular "T" mark with a cyan connection-node on an indigo-black plate, "technological/futuristic" indigo + cyan palette. This identity is fixed evidence, not open for redesign.
- Site typography: Space Grotesk (display/headings), Inter (body), JetBrains Mono (labels, tags, dates) — chosen to move away from generic Inter-only defaults while staying legible.
- Accent palette locked to the Tyess Group brand: indigo `#6b82ff` (primary) + cyan `#22d3ee` (secondary, used sparingly).
- Visual direction explicitly chosen by the user: strict/professional minimalism appropriate for a FinTech leadership profile, over a louder game-themed or Awwwards-style alternative.

## Evidence on Hand

- Real work history: DNA Payments (Team Lead, Senior Frontend Developer), InvestaX, Titanium Technologies, Halyk Bank, Prime Source, QAZKOM.
- Real education: Al-Farabi Kazakh National University.
- Real project screenshots captured via headless Chrome from the live deployments: Daukey, Unilab, CodeQuest, plus a local capture of Kokpar 3D's login screen.
- Real social links: GitHub, LinkedIn, Telegram, Instagram, email.
- No testimonials, client logos, or case studies exist yet. Do not invent any.

## Product Principles

1. Real evidence only. Never fabricate metrics, clients, testimonials, or screenshots.
2. Serve both audiences without the page feeling split: the experience section builds the credibility that makes the Services pitch land, and vice versa.
3. Trilingual parity. EN/RU/KZ must stay content-equivalent, not EN with afterthought translations.
4. Brand fidelity to the supplied Tyess Group mark and palette; don't introduce a competing visual identity for the company.
5. Restraint over spectacle: minimal motion, one accent color, consistent corner-radius scale, real content over decorative filler.

## Accessibility & Inclusion

`prefers-reduced-motion` is respected for the scroll-reveal animation. No other accessibility standard has been mandated beyond baseline WCAG contrast.
