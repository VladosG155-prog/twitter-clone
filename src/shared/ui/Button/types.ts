import { ButtonHTMLAttributes, ReactElement } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "outlined" | "primary";
  className?: string;
  icon?: ReactElement;
}
