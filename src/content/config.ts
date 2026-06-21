import {defineCollection, z} from "astro:content";

const serviceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  service: serviceCollection,
};
