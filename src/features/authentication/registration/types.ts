import { FieldValues } from "react-hook-form";

export interface IRegistrationFormData extends FieldValues {
  name: string;
  email: string;
  tel: string;
  password: string;
  month: string;
  year: string;
  day: string;
}

export interface IAuthFormData extends FieldValues {
  email: string;
  password: string;
}
