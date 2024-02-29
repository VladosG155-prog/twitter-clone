import { FieldValues } from "react-hook-form";

export interface IRegistrationFormData extends FieldValues {
  name: string;
  email: string;
  tel: string;
  password: string;
}

export interface IAuthFormData extends FieldValues {
  email: string;
  password: string;
}
