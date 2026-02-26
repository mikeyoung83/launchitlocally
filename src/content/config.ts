// src/content/config.ts
import { defineCollection, z } from "astro:content";

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string(),
    // Make image optional or provide a default if you forget one
    image: z.string().default("/images/placeholder.jpg"),
    tags: z.array(z.string()).default([]),
    // Use coerce to help Astro turn strings into Date objects
    publishDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
  }),
});

export const collections = { portfolio };
