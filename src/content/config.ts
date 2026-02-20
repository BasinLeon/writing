import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    series: z.string().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false)
  })
});

export const collections = { essays };
