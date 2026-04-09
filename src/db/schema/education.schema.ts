import { z } from 'zod'

export const educationZodSchema = z.object({
  title: z.string().min(1, "Title is required"),
  school: z.string().min(1, "School is required"),
  year: z.string().min(1, "Year is required"),
})

export type IEducationInput = z.infer<typeof educationZodSchema>