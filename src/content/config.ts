import { defineCollection } from "astro:content";
import { blogSchema } from "./schema";

export const collections = {
  tudastar: defineCollection({
    schema: blogSchema,
  }),
};
