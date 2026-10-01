# LaunchItLocally — project memory

> This supplements `~/.claude/CLAUDE.md` (universal brochure-site rules,
> lives outside this repo) with facts specific to *this* site. Keep it
> short — point to `STYLE-GUIDE.md` for anything design/content related
> rather than duplicating it here.

@STYLE-GUIDE.md

## What this site is
Mike Young's own business site: LaunchItLocally sells custom-coded,
high-performance websites to local businesses as a managed service
(lump sum or $199/month). Live at https://launchitlocally.com.

## DaisyUI theme name in use
`corporate` (light, default) and `business` (dark, `prefersdark`), both stock
daisyUI themes with contrast-tuned overrides (logo blue primary, accent,
success text) — defined in `src/styles/global.css`. Full palette and the
contrast checks in `STYLE-GUIDE.md` §2.

## Pages
See the site map in `STYLE-GUIDE.md` (source of truth).
- Home, Services, Pricing, Portfolio (+ detail pages), Contact, Privacy, Success

## Content source
Copy is written by Mike and is final — fix typos/grammar only, don't rewrite.

## Special integrations / exceptions
- This site predates the starter template, so its structure differs: the
  layout is `src/layouts/MainLayout.astro` (not `BaseLayout`), there's no
  `src/site-config.ts`, and nav links live in `src/components/Nav.astro`.
- Contact form uses Netlify Forms and redirects to `/success`.
- Portfolio is editable via Pages CMS — see `.pages.yml`; keep it in sync
  with `src/content.config.ts`.
- `src/pages/timezone.astro` is a standalone personal tool (own HTML shell,
  CDN Tailwind, `is:inline` script). It's intentionally outside the site's
  layout and design system — don't restyle or refactor it.
- The two portfolio entries (`test.md`, `does-this-work-on-prod.md`) are test
  content kept on purpose for now.
- `.npmrc` sets `legacy-peer-deps=true` because `eslint-plugin-jsx-a11y`
  doesn't list ESLint 10 as a supported peer yet; Netlify's install needs it.
- No custom fonts — system font stack by design (see STYLE-GUIDE.md §3).

## Status
Shipped and live. Upgraded to Astro 6 + astro-seo/sitemap/build checks on
2026-09-30. Open items: Portfolio not in nav until real entries exist.
