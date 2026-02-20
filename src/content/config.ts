import { z, defineCollection } from 'astro:content';

const literaryCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    description: z.string().max(160, 'Description must be under 160 characters.'),
    type: z.enum(['essay', 'fragment', 'memory']),
    isDraft: z.boolean().default(true),
    series: z.string().optional(),
    tags: z.array(z.string()).default([])
  }).strict()
});

const ideasCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    lastEdited: z.date(),
    status: z.enum(['seed', 'incubating', 'mature'])
  }).strict()
});

export const collections = {
  literary: literaryCollection,
  ideas: ideasCollection
};
