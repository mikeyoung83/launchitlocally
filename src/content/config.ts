// src/content/config.ts
import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    image: z.string().default("/images/placeholder.jpg"),
    tags: z.array(z.string()).default([]),
    publishDate: z.coerce.date(),
  }),
});

export const collections = { portfolio };
