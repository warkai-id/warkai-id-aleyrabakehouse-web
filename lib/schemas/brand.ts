import { z } from "zod";

export const BrandSchema = z.object({
  name: z.string(),
  tagline: z.string(),
  motto: z.string(),
  description: z.string(),
  values: z.array(
    z.object({
      title: z.string(),
      description: z.string(),
      icon: z.string(),
    })
  ),
});

export type Brand = z.infer<typeof BrandSchema>;
