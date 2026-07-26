import { z } from "zod";

export const ProductSchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string(),
  price: z.number().int().positive(),
  size: z.string().optional(),
  category: z.enum(["slice", "whole-cake", "seasonal"]),
  image: z.string(),
  badge: z.string().optional(),
  isPlaceholder: z.boolean().default(false),
  isAvailable: z.boolean().default(true),
});

export type Product = z.infer<typeof ProductSchema>;
