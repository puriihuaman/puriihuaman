import { defineCollection, z } from "astro:content";
import { defineMiddleware } from "astro:middleware";

const menuSchema = z.object({
  name: z.string(),
  href: z.string(),
  pathname: z.string(),
});

const menu = defineCollection({
  type: "content",
  schema: z.object({
    items: z.array(menuSchema),
  }),
});

const serviceCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
  }),
});

const about = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    author: z.string(),
    role: z.string(),
    yearsExperience: z.number(),
  }),
});

const sectionSchema = z.object({
  title: z.string(),
  icon: z.string(),
  items: z.array(z.string()),
});

const skillGroupSchema = z.object({
  category: z.string(),
  items: z.array(z.string()),
});

export const summarySchema = z.object({
  type: z.literal("summary"),
  title: z.string(),

  training: sectionSchema,
  experience: sectionSchema,
  specialty: sectionSchema,
});

const instituteSchema = z.object({
  type: z.literal("institute"),
  title: z.string(),
  training: z.string(),
  institute: z.string(),

  startDate: z.string(),
  graduationDate: z.string(),

  skills: z.array(skillGroupSchema),
});

const certificationSchema = z.object({
  type: z.literal("certification"),
  title: z.string(),
  company: z.string(),

  startDate: z.string(),
  graduationDate: z.string(),

  skills: z.array(skillGroupSchema),
});

const education = defineCollection({
  type: "content",
  schema: z.discriminatedUnion("type", [
    summarySchema,
    instituteSchema,
    certificationSchema,
  ]),
});

/**
 * Project
 */

const project = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      id: z.string(),
      title: z.string(),

      image: image(),

      startDate: z.string(),
      deadline: z.string(),

      demoLink: z.string().url(),
      codeLink: z.string().url(),

      stack: z.array(z.string()),
    }),
});

/**
 * Technologies
 */

const techSchema = z.object({
  name: z.string(),
  href: z.string().url(),
  icon: z.string(),
});

const backSchema = z.object({
  type: z.literal("backend"),
  category: z.string(),
  tech: z.array(techSchema),
});

const frontSchema = z.object({
  type: z.literal("frontend"),
  category: z.string(),
  tech: z.array(techSchema),
});

const toolSchema = z.object({
  type: z.literal("tool"),
  category: z.string(),
  tech: z.array(techSchema),
});

const tech = defineCollection({
  type: "content",

  schema: z.discriminatedUnion("type", [backSchema, frontSchema, toolSchema]),
});

export const collections = {
  menu,
  service: serviceCollection,
  about,
  education,
  project,
  tech,
};
