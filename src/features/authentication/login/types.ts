import { FieldValues } from "react-hook-form";

export interface IAuthFormData extends FieldValues {
  email: string;
  password: string;
}
