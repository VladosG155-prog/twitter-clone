import { z, ZodType } from "zod";

import { IEditProfileFormData } from "../types";

export const EditProfileScheme: ZodType<IEditProfileFormData> = z.object({
  email: z.string().email().min(10),
  name: z.string().min(1, "name should be exist"),
  phone: z.string(),
  password: z.string().nullable(),
  month: z.string(),
  year: z.string(),
  day: z.string(),
  bio: z.string(),
});
