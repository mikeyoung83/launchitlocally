// content.config.ts
// Content Layer API collections. `portfolio` is edited via Pages CMS after
// launch — keep this schema in sync with .pages.yml by hand.

import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Pages CMS may save a blank optional field as "" or null rather than
// leaving it out; normalise all three to undefined.
const optionalText = z
  .string()
  .nullish()
  .transform((v) => v?.trim() || undefined);

const portfolio = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/portfolio' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      // Shown under the title and used as the page's meta description.
      intro: z.string(),
      publishDate: z.coerce.date(),
      // Live site link.
      url: z
        .union([z.url({ protocol: /^https?$/ }), z.literal('')])
        .nullish()
        .transform((v) => v || undefined),
      image: image(),
      imageAlt: optionalText,
      tags: z.array(z.string()).default([]),
      gallery: z
        .array(
          z.object({
            image: image(),
            alt: z.string().min(1),
            caption: optionalText,
          }),
        )
        .nullish()
        .transform((v) => v ?? []),
    }),
});

export const collections = { portfolio };
