import { InputHTMLAttributes } from "react";
export interface IInputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "onChange"> {
  name: string;
  error?: string;
  register?: any;
}
