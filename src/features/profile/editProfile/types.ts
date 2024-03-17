import { FieldValues } from "react-hook-form";

export interface IEditProfileFormData extends FieldValues {
  name?: string;
  email?: string;
  phone?: string;
  password?: string | null;
  month?: string;
  year?: string;
  day?: string;
}
