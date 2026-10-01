// eslint.config.js
// Enforces accessibility rules — including image alt text — as errors, not
// warnings. This is wired into `npm run build` (see package.json), so a
// violation fails the build locally and fails the Netlify deploy, rather
// than showing up only as an editor squiggle.
import eslintPluginAstro from 'eslint-plugin-astro';

export default [
  { ignores: ['dist/', '.astro/', 'node_modules/'] },

  ...eslintPluginAstro.configs.recommended,
  ...eslintPluginAstro.configs['jsx-a11y-recommended'],

  {
    rules: {
      // Explicit overrides so these are guaranteed to be build-breaking
      // regardless of the shared config's own defaults. This is the rule
      // that catches a missing `alt` on <img>, <area>, <input type="image">,
      // and <object>.
      'astro/jsx-a11y/alt-text': 'error',
      'astro/jsx-a11y/anchor-has-content': 'error',
      'astro/jsx-a11y/heading-has-content': 'error',
      // Safari/VoiceOver drops list semantics from a <ul>/<ol> styled with
      // list-style: none (Tailwind's default), so role="list" is intentional.
      'astro/jsx-a11y/no-redundant-roles': ['error', { ul: ['list'], ol: ['list'] }],
    },
  },
];
