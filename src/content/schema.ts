import { z } from "zod";

export const blogSchema = z.object({
  title: z.string(),
  description: z.string().max(160),
  pubDate: z.string().transform((val) => new Date(val)),
  updatedDate: z.string().optional().transform((val) => (val ? new Date(val) : undefined)),
  author: z.string().default("Juhász Balázs"),
  tags: z.array(z.string()).optional().default([]),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  keywords: z.array(z.string()).optional().default([]),
});

export type BlogFrontmatter = z.infer<typeof blogSchema>;
