import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.coerce.date(),
    author: z.string().default('Martha Rhino'),
    category: z.string().default('Panduan CCTV'),
    tags: z.array(z.string()).default([]),
    image: z.string().default('/images/blog/default.webp'),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    faq: z.array(
      z.object({
        question: z.string(),
        answer: z.string(),
      })
    ).optional().default([]),
  }),
});

export const collections = { blog };
