import { defineCollection, z } from 'astro:content';

const sourceSchema = z.object({
  title: z.string().min(1, "Source title is required"),
  url: z.string().url("Must be a valid URL"),
  publisher: z.string().min(1, "Publisher name is required"),
  accessedDate: z.string().optional()
});

const baseContentSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  publishDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
  draft: z.boolean().default(false),
  category: z.string().min(1, "Category is required"),
  tags: z.array(z.string()).default([]),
  featuredImage: z.string().optional(),
  featuredImageAlt: z.string().optional(),
  sources: z.array(sourceSchema).default([]),
  seoTitle: z.string().optional(),
  seoDescription: z.string().optional(),
  canonicalUrl: z.string().url().optional(),
  noindex: z.boolean().default(false)
});

const guidesCollection = defineCollection({
  type: 'content',
  schema: baseContentSchema
});

const destinationsCollection = defineCollection({
  type: 'content',
  schema: baseContentSchema.extend({
    region: z.string().optional(),
    bestTimeToVisit: z.string().optional()
  })
});

const safetyCollection = defineCollection({
  type: 'content',
  schema: baseContentSchema
});

export const collections = {
  'guides': guidesCollection,
  'destinations': destinationsCollection,
  'safety': safetyCollection
};