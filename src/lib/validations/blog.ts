import z from "zod";

export const blogSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z
    .string()
    .regex(
      /^[a-z0-9-]+$/,
      "Slug must be lowercase and can only contain letters, numbers, and hyphens"
    ),
  excerpt: z
    .string()
    .max(160, "Excerpt must be less than 160 characters")
    .optional()
    .default(""),
  content: z.string().min(10, "Content must be at least 10 characters"),
  published: z.boolean().default(true),
  coverUrl: z.string().url("Invalid cover image URL").optional().default(""),
});

export type BlogFormValues = z.infer<typeof blogSchema>;
