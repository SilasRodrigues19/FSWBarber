import { z } from "zod";

const envSchema = z.object({
  DATABASE_URL: z.string().refine((url) => url.startsWith('postgresql://postgres:')),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
});

export const env = envSchema.parse(process.env);

export type GOOGLE_CLIENT_ID = typeof env.GOOGLE_CLIENT_ID;
export type GOOGLE_CLIENT_SECRET = typeof env.GOOGLE_CLIENT_SECRET;