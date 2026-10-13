import { defineCollection, z } from 'astro:content';

const articles = defineCollection({
  type: 'content',
  schema: z.object({ title: z.string(), summary: z.string(), date: z.coerce.date(), category: z.string().default('Notes'), draft: z.boolean().default(false) }),
});

export const collections = { articles };
