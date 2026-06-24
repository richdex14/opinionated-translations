import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const posts = defineCollection({
  loader: glob({
    base: './src/content/posts',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.date(),
    tags: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

const songs = defineCollection({
  loader: glob({
    base: './src/content/songs',
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    band: z.string(),
    album: z.string().optional(),
    description: z.string().optional(),
    date: z.date(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, songs };
