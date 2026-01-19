import { z } from 'zod';

export const contactInputValidator = z.object({
  name: z.string().min(1),
  email: z.email(),
  message: z.string().min(1),
});

export type ContactInput = z.infer<typeof contactInputValidator>;