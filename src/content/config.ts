// src/content/config.ts
import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: (
    { image }, // Added the image helper here
  ) =>
    z.object({
      title: z.string(),
      description: z.string(),
      image: image(), // Changed from z.string() to image()
      tags: z.array(z.string()).default([]),
      publishDate: z.coerce.date(),
    }),
});

export const collections = { portfolio };
