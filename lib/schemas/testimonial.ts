import { z } from "zod";

export const TestimonialSchema = z.object({
  id: z.string(),
  image: z.string(),
  alt: z.string(),
  source: z.enum(["whatsapp", "instagram", "text-crop"]),
  orientation: z.enum(["portrait", "landscape"]),
  privacyNote: z.string().optional(),
  requiresMasking: z.boolean().default(false),
});

export type Testimonial = z.infer<typeof TestimonialSchema>;
