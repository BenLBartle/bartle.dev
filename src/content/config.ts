import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      date: z.coerce.date(),
      featuredImage: image().optional(),
      excerpt: z.string().optional(),
    }),
});

const uses = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date().optional(),
  }),
});

export const collections = { blog, uses };
