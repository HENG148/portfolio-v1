import z from "zod";

export const BulletZodSchema = z.object({
  text: z.string().min(1, "Bullet text is required"),
});

export const ExperienceZodSchema = z.object({
  title: z.string().min(1, "Title is required"),
  company: z.string().min(1, "Company is required"),
  period: z.string().min(1, "Period is required"),
  bullets: z.array(BulletZodSchema).min(1, "At least on bullet is required"),
})

export type IExperienceInput = z.infer<typeof ExperienceZodSchema>