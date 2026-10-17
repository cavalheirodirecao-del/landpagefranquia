import { z } from "zod";
export const leadSchema = z.object({
  name: z.string().min(2).max(120), whatsapp: z.string().min(8).max(30), email: z.string().email(),
  city: z.string().min(2).max(80), state: z.string().length(2), investmentRange: z.string().min(1),
  experience: z.string().max(500).optional().default(""), operationAvailability: z.string().min(1),
});
export type LeadInput = z.infer<typeof leadSchema>;
