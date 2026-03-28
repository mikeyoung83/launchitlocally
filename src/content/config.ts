// src/content/config.ts
import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: (
    { image }, // Use the image helper here
  ) =>
    z.object({
      title: z.string(),
      description: z.string(),
      // Change this from z.string() to image()
      image: image(),
      tags: z.array(z.string()).default([]),
      publishDate: z.coerce.date(),
    }),
});

export const collections = { portfolio };
