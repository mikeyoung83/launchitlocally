# LaunchItLocally — Style Guide

> The single source of truth for this site's design and content decisions;
> `CLAUDE.md` just points here. Written on 2026-09-30 by documenting the site
> as already built (it predates the starter template), so where this guide
> and the code disagree, check which is the intended one before "fixing"
> either.

---

## 1. Brand & voice

**Who is this for?**
- Business: LaunchItLocally — Mike Young (owner, developer) builds custom-coded, high-performance websites for local businesses, sold as a managed service.
- Audience: owners of small local businesses who are frustrated with slow WordPress/template sites or don't want to deal with the technical side at all.
- Primary goal of the site: get a contact-form enquiry (every page funnels to `/contact`, "Work With Us" / "Get Started").

**Personality**
Confident, direct, speed-obsessed, reassuring ("we handle it"), anti-bloat.

**Voice dos and don'ts**
- Do: speak to the owner as "you"; refer to the business as "we"; lead with the business outcome (rankings, leads, customers) before the technical reason; punchy two-part lines ("Zero bloat. Zero waste."); bold one key phrase per paragraph; contrast against WordPress, templates and plugins.
- Don't: technical jargon without the payoff; vague filler ("we're passionate about…"); hedging; exclamation points outside the form-success page.

**One line of example copy in this voice**
"Your Business Deserves Better Than a Template."

**Copy status:** the current copy on the site is final. Treat it as the voice reference and only fix outright errors (typos, grammar) without asking.

---

## 2. Color palette

Two stock daisyUI themes (`corporate` light, `business` dark) with a few
overrides. The brand color is the logo blue (`#3564E4`, hue 265). Each
theme uses it at a different lightness, and the accent and success-button
text are adjusted, so that **every text/background pair on the site meets
WCAG AA (4.5:1)** in both themes. Light is the default; dark follows the OS
preference until the visitor uses the navbar toggle, which is remembered in
`localStorage`.

| Role | Light — `corporate` | Dark — `business` |
|---|---|---|
| `primary` | `oklch(52% 0.2 265.01)` — the logo blue, a touch deeper (override). CTAs, links, eyebrow pills, highlighted headline words | `oklch(70% 0.15 265.01)` — lighter logo blue (override) |
| `primary-content` | `oklch(100% 0 0)` white (stock) | `oklch(18% 0.04 265.01)` dark navy (override), so dark-mode blue buttons get dark text |
| `secondary` | `oklch(55% 0.046 257.417)` slate (stock) — used only at 10% as section backgrounds (`bg-secondary/10`) and the `.grid-bg` pattern | `oklch(64.092% 0.027 229.389)` (stock) |
| `accent` | `oklch(50% 0.118 184.704)` teal (override) — icons, small emphasised words, bold labels | `oklch(70% 0.167 35.791)` orange (override). The hue changing between themes is intentional |
| `success-content` | `oklch(20% 0.03 149.214)` dark green (override) — text on the `btn-success` featured-plan CTA | stock |
| `neutral` | `oklch(0% 0 0)` | `oklch(27.441% 0.013 253.041)` |
| `base-100/200/300` | white / 93% / 86% grey | 24% / 23% / 21% grey |
| `base-content` | `oklch(22.389% 0.031 278.072)` | `oklch(84.87% 0 0)` |
| `info / success / warning / error` | daisyUI defaults | daisyUI defaults |

The logo SVGs keep the exact `#3564E4`. Logos are exempt from contrast
rules, and the brand mark shouldn't shift between themes.

**Current theme block** (in `src/styles/global.css`):

```css
@plugin "daisyui" {
    themes:
        corporate --default,
        business --prefersdark;
}

@plugin "daisyui/theme" {
    name: "corporate";
    default: true;
    --color-primary: oklch(52% 0.2 265.01);
    --color-accent: oklch(50% 0.118 184.704);
    --color-success-content: oklch(20% 0.03 149.214);
}

@plugin "daisyui/theme" {
    name: "business";
    prefersdark: true;
    --color-primary: oklch(70% 0.15 265.01);
    --color-primary-content: oklch(18% 0.04 265.01);
    --color-accent: oklch(70% 0.167 35.791);
}
```

**Contrast checked (2026-09-30)**, lowest ratio per pair across both themes:
body text on every background (≥ 8.9), `base-content/70` (≥ 5.7), `primary`
text on `base-100` / `bg-secondary/10` / `base-200` mobile drawer (≥ 4.7),
`accent` text on `base-100` / `bg-secondary/10` (≥ 4.77), `primary-content`
on `primary` buttons and the featured pricing card (≥ 5.78),
`success-content` on `btn-success` (≥ 5.45). Before changing any value
above, re-check these pairs. The tightest are light-mode `primary` text in
the mobile drawer (4.70) and light-mode `accent` on `bg-secondary/10` (4.77).

---

## 3. Typography

- Heading font: none — system font stack (Tailwind's default `font-sans`).
- Body font: same system stack.
- Pairing feel: a single sans throughout, set by the visitor's OS. A deliberate choice: no web-font download fits the "pure speed" pitch. Don't add a Google Font or the Astro Fonts API config unless this section changes.

**Type scale notes**
- Headings: `font-semibold tracking-tight text-pretty`. Page H1s are `text-4xl sm:text-5xl`; the homepage hero H1 is oversized (`text-5xl sm:text-7xl`). Key words in headlines are highlighted with `text-primary` (or `text-accent`).
- Eyebrows: every section opens with a pill label above the heading: `rounded-full outline-primary outline-2 px-3 py-1 text-base/6 font-semibold text-primary`.
- Body: intro paragraphs `text-lg sm:text-xl/8`; standard paragraphs `text-base/7`.
- Special treatment: large stat numbers (`text-6xl font-semibold`) for PageSpeed score and satisfaction on the homepage.

---

## 4. Shape & feel

- Corner rounding: daisyUI tokens are sharp-ish (`0.25rem`), but layout blocks are rounded with utilities: `rounded-xl` on images, `rounded-3xl` on pricing cards, `rounded-full` on pills and the headshot.
- Density: spacious. Sections use `py-24 sm:py-32`, content capped at `max-w-7xl` (or `max-w-4xl` for text-led pages).
- Borders: thin, low-contrast (`border-base-300`, `ring-base-content/10`).
- Shadows: soft elevation on images and the featured pricing card (`shadow-xl`/`shadow-2xl`).
- Backgrounds: sections alternate between plain `base-100`, `bg-secondary/10`, and the subtle `.grid-bg` grid pattern (defined in `global.css`).
- Overall reference: a clean, modern tech studio site — trustworthy and professional, with energy coming from the blue accents rather than decoration.

---

## 5. Imagery direction

- Style: real-world photography of small business owners and storefronts (warm, candid); one hand-drawn website mockup as the homepage hero; real photos of Mike for trust.
- Source: stock photography plus Mike's own photos; portfolio entries use screenshots of client sites.
- Do: real people and real local businesses, natural light, warm tones; show Mike by name where trust matters (home, contact).
- Don't: corporate handshake stock, generic laptop-on-desk imagery with no people, text over busy photos.
- Aspect ratios in use: homepage performance grid is square (cropped via `aspect-square`); portfolio screenshots sit in a `mockup-window` frame at `aspect-video` / `sm:aspect-2/1` / `lg:aspect-3/2`; Mike's portrait is tall (~2:3); headshot is 1:1. Every image goes through `astro:assets` with real `alt` text.

---

## 6. Site map

| Page | Purpose | Key sections |
|---|---|---|
| Home `/` | Convert: get an enquiry | Hero (split, mockup image, "Get Started" CTA), What We Do (3 value props), Services Offered ($0 down / $199 a month, with Mike's photo), Performance (stats + photo grid), Pricing (2 plans) |
| Services `/services` | Explain the offering in depth | Intro, "Performance by Design" split section, speed as a competitive edge, closing CTA |
| Pricing `/pricing` | Show the two plans | Lump Sum ($4,500 + $25/month hosting) vs Monthly ($199/month, featured) |
| Portfolio `/portfolio` | Show past work | Grid of projects (Pages CMS); each has a detail page `/portfolio/<id>`. **Not in the nav yet** — waiting on real entries (the two current entries are tests and are kept on purpose) |
| Contact `/contact` | Capture a lead | Netlify form (name, email, website, message), quote from Mike with headshot |
| Privacy `/privacy` | Legal | Privacy policy |
| Success `/success` | Form thank-you | Confirmation message; `noindex`, excluded from sitemap |

`/timezone` is a standalone personal tool, not part of the marketing site. It has no shared layout or styling and is excluded from the sitemap. Leave it alone.

---

## 7. Inspiration folder (optional)

*Claude: before building or substantially revising a page, check for files matching `inspiration/<page>-*.{jpg,jpeg,png,webp}` (e.g. `services-1.jpg`) — a bare `<page>.jpg` also counts. If any exist, view them and treat them as loose reference for layout, hierarchy and finesse only — never copy exact copy, logos or brand assets from someone else's real site. If none exist for a page, build it from this guide alone and say nothing about the missing file.*

**Using it?** Yes — `inspiration/` exists in the project root and is gitignored.

**Naming convention:** `inspiration/<page-name>-1.jpg`, `inspiration/<page-name>-2.jpg`, etc. — matching the page names in the site map above (`home`, `services`, `pricing`, `portfolio`, `contact`).

---

## 8. CMS (optional)

**Needed?** Yes — portfolio only. Nothing else is client/owner-editable; keep the rest of the copy in the `.astro` files.

| Section | What's editable | Content type |
|---|---|---|
| Portfolio | title, intro, description, image, publish date, body (markdown) | collection — `src/content/portfolio`, schema in `src/content.config.ts`, CMS config in `.pages.yml` (keep the two in sync by hand) |

---

## 9. Components & patterns

- **Navbar**: sticky, solid `base-100` with a bottom border. Light/dark logo SVGs swap with the theme. Desktop: horizontal menu + "Work With Us" `btn-primary btn-sm` + theme toggle. Mobile: hamburger opens a daisyUI `drawer` from the side. Active link is `text-primary font-bold` (set server-side in `Nav.astro`).
- **Hero**: split layout — headline, subhead, a second short H2 line, then a primary CTA plus a text "Learn more →" link; image on the right. Left-aligned.
- **Section header**: eyebrow pill → H2 → intro paragraph (see Typography). Reuse this pattern for any new section.
- **Cards**: pricing cards only — the standard plan is `bg-secondary/10`; the featured plan is solid `bg-primary` with `text-primary-content`, `shadow-2xl` and a `btn-success` CTA. The plans are currently duplicated in `index.astro` and `pricing.astro`; change both together.
- **CTA buttons**: solid `btn-primary` for the main action; `btn-outline btn-primary` for secondary actions; inline text links with `→` for "Learn more". Every CTA points to `/contact` or `/services`, always as a root-relative path.
- **Footer**: centered — the same nav (incl. the "Work With Us" button) + copyright line, on `bg-secondary/10`.
- **Forms**: Netlify Forms (`data-netlify="true"`, redirects to `/success`). Fields use daisyUI `input` / `textarea`, with visible `<label>`s and native `required`/`type` validation. No honeypot or reCAPTCHA yet — add a `netlify-honeypot` field if spam shows up.

---

## 10. Accessibility & performance notes

- Performance is the product: the site itself has to score ~100 on PageSpeed, so no web fonts, no client-side frameworks, no third-party scripts without a strong reason.
- All theme colors meet WCAG AA (see section 2). Re-check contrast before changing any of them. Otherwise no exceptions to the global baseline.
