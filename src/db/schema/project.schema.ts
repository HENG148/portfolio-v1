import { z } from "zod";

export const ProjectSchema = z.object({
  _id: z.string().optional(),
  title: z.string().min(1),
  category: z.string().optional(),
  description: z.string().min(1),
  imageUrl: z.string().url().optional(),
  tags: z.array(z.string()).min(1),
  githubUrl: z.string().url().optional(),
  liveUrl: z.string().url().optional(),
  featured: z.boolean().default(false),
  // createdAt: z.date().optional(),
});

export type Project = z.infer<typeof ProjectSchema>;