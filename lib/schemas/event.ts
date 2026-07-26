import { z } from "zod";

export const EventSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  date: z.string(),
  time: z.string(),
  description: z.string(),
  image: z.string().optional(),
  mapsUrl: z.string().optional(),
  isDummy: z.boolean().default(false),
  status: z.enum(["upcoming", "ongoing", "completed", "coming-soon"]).default("coming-soon"),
});

export type Event = z.infer<typeof EventSchema>;
