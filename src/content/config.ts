import { defineCollection, z } from 'astro:content';

const literary = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    isDraft: z.boolean().default(false),
    type: z.enum(['essay', 'fragment', 'memory']),
    description: z.string().max(160),
    series: z.string().default('Literary Lane'),
    tags: z.array(z.string()).default([]),
    readingMode: z.boolean().default(true)
  })
});

const ideas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lastEdited: z.date(),
    status: z.enum(['seed', 'incubating', 'mature']),
    description: z.string().max(160),
    tags: z.array(z.string()).default([])
  })
});

export const collections = { literary, ideas };
