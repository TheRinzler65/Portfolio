import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    id: z.number().optional(),
    title: z.string(),
    description: z.string().default(""),
    imageproject: z.string().optional(),
    location: z.string().optional(),
    year: z.string().optional(),
    team: z.object({
      network: z.array(z.string()).default([]),
      dev: z.array(z.string()).default([]),
    }).optional(),
    technologies: z.array(z.object({
      name: z.string(),
      logo: z.string(),
    })).default([]),
    documents: z.array(z.object({
      title: z.string(),
      url: z.string(),
    })).default([]),
    demoLink: z.string().default("#"),
    repoLink: z.string().default("#"),
  }),
});

const miscProjects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/misc" }),
  schema: z.object({
    id: z.number().optional(),
    title: z.string(),
    description: z.string().default(""),
    tags: z.array(z.string()).default([]),
    demoLink: z.string().nullable().optional(),
    repoLink: z.string().nullable().optional(),
  }),
});

const veilleArticles = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/veille" }),
  schema: z.object({
    id: z.number().optional(),
    month: z.string(),
    title: z.string(),
    summary: z.string().default(""),
    tags: z.array(z.string()).default([]),
    sources: z.array(z.object({
      name: z.string(),
      url: z.string(),
    })).default([]),
  }),
});

export const collections = {
  projects,
  miscProjects,
  veilleArticles,
};
