import z from "zod";

export const projectSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  slug: z
    .string()
    .regex(
      /^[a-z0-9-]+$/,
      "Slug must be lowercase and can only contain letters, numbers, and hyphens"
    ),
  description: z.string().min(10, "Description must be at least 10 characters"),
  features: z
    .array(z.string().min(1, "Each feature must have text"))
    .nonempty("At least one feature is required"),
  thumbnail: z.string().url("Invalid thumbnail URL").optional().default(""),
  liveUrl: z.string().url("Invalid live site URL").optional().default(""),
  repoUrl: z.string().url("Invalid repository URL").optional().default(""),
});

export type ProjectFormValues = z.infer<typeof projectSchema>;
