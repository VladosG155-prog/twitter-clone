import { z, ZodType } from "zod";

import { IEditProfileFormData } from "../types";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const EditProfileScheme: ZodType<IEditProfileFormData> = z.object({
  email: z.string().email().min(10),
  name: z.string().min(1, "name should be exist"),
  tel: z.string().regex(phoneRegex, "Invalid phone number"),
  password: z.string(),
  month: z.string(),
  year: z.string(),
  day: z.string(),
});
