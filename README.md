# LaunchItLocally

Marketing site for [LaunchItLocally](https://launchitlocally.com): custom-coded,
high-performance websites for local businesses.

Built with **Astro 6** (static output), **Tailwind CSS 4** and **daisyUI 5**,
deployed to **Netlify**. Design and content decisions live in
[`STYLE-GUIDE.md`](STYLE-GUIDE.md).

## Getting started

Requires Node 22.

```sh
npm install
npm run dev
```

The dev server runs at http://localhost:4321 (Astro picks the next free port
if that one's taken).

## Commands

| Command | What it does |
| :-- | :-- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Type check (`astro check`), lint (`eslint .`), then build to `dist/`. This is exactly what Netlify runs, so run it before pushing |
| `npm run lint` | Just the accessibility/lint check |
| `npm run typecheck` | Just the `astro check` type check |
| `npm run preview` | Serve the production build from `dist/` locally |

The build fails on type errors and accessibility problems (for example an
image with no `alt`). Fix the cause rather than disabling the rule.

## Project structure

```text
src/
├── assets/            Images (optimised by astro:assets)
│   └── portfolio/     Portfolio screenshots, uploaded via Pages CMS
├── components/        Navbar, Nav (shared nav links), Footer, logos
├── content/portfolio/ Portfolio entries (Markdown)
├── content.config.ts  Content collection schema
├── layouts/
│   └── MainLayout.astro  Page shell: SEO tags, theme, navbar, footer
├── pages/             One file per route
└── styles/global.css  Tailwind + daisyUI config and theme colours
public/                Served as-is (favicons, robots.txt)
```

- **Nav links** are in `src/components/Nav.astro`. They're used in the desktop navbar, the mobile menu and the footer.
- **SEO**: every page passes a unique `title` and `description` to `MainLayout`, which renders them with `astro-seo`. The sitemap is generated at build time.
- **Theme**: `corporate` (light) and `business` (dark) daisyUI themes. Colour values are contrast-checked, so see `STYLE-GUIDE.md` §2 before changing them.
- **Contact form**: Netlify Forms. Submissions show up in the Netlify dashboard under *Forms*.
- **`/timezone`** is a standalone personal tool, separate from the marketing site.

## Editing the portfolio

Portfolio entries are editable through [Pages CMS](https://pagescms.org)
(config in `.pages.yml`). Saving there commits to `master`, which triggers a
deploy. If you add a field, update both `.pages.yml` and
`src/content.config.ts`.

## Deploying

`master` deploys to production automatically on Netlify. For bigger
changes, work on a branch and open a pull request. Netlify posts a deploy
preview link on the PR so you can check it before merging.
