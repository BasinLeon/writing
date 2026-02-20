import { defineCollection, z } from 'astro:content';

const essays = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date().optional(),
    series: z.string().default('Essay'),
    cycle: z.enum(['manifesto', 'scrollweaver', '3am-covenant', 'literary-lane', 'notes', 'other']).default('other'),
    pretitle: z.string().optional(),
    readingMode: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    canonical: z.string().url().optional()
  })
});

export const collections = { essays };
