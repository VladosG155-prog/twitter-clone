import { IRegistrationFormData } from "../types";

export interface IOption {
  value: string;
  label: string;
}

export interface IRegistrationFormProps {
  onSubmit: (data: IRegistrationFormData) => void;
}
