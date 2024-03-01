import { z, ZodType } from "zod";

import { IRegistrationFormData } from "../interfaces";

const phoneRegex = new RegExp(
  /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/
);

export const RegistrationScheme: ZodType<IRegistrationFormData> = z.object({
  email: z.string().email().min(10),
  name: z.string().min(3, "name should contain more than 3 characters"),
  tel: z.string().regex(phoneRegex, "Invalid phone number"),
  password: z.string().min(3),
  month: z.string(),
  year: z.string(),
  day: z.string(),
});
