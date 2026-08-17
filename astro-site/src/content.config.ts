import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    name: z.string(),
    summary: z.string(),
    role: z.string(),
    stack: z.array(z.string()),
    githubUrl: z.string().url().optional(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    order: z.number().default(0),
    results: z.array(z.string()).default([]),
    heroImage: z.string().optional(),
  }),
});

export const collections = { work };
