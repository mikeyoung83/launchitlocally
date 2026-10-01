// content.config.ts
// Content Layer API collections. `portfolio` is edited via Pages CMS after
// launch — keep this schema in sync with .pages.yml by hand.

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      intro: z.string(),
      description: z.string(),
      image: image(),
      tags: z.array(z.string()).default([]),
      publishDate: z.coerce.date(),
    }),
});

export const collections = { portfolio };
