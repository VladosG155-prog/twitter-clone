import { z, ZodType } from "zod";

import { IAuthFormData } from "../types";

export const LoginScheme: ZodType<IAuthFormData> = z.object({
  email: z.string().email().min(10),
  password: z.string().min(3),
});
