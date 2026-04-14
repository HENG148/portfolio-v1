import { z } from 'zod';

export const PostZodSchema = z.object({
  title: z.string().min(1, "Title is required").trim(),
  excerpt: z.string().min(1, "Excerpt is required").trim(),
  tags: z.array(z.string()).default([]),
  publishedAt: z.date().optional().default(() => new Date()),
  slug: z.string().min(1).trim().toLowerCase(),
  author: z.string().optional().default("Anonymous"),
  readingTime: z.number().optional().default(3),
})

export type IBlogInput = z.infer<typeof PostZodSchema>;