import { ButtonHTMLAttributes, ReactElement } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant?: "outlined" | "primary" | "secondary";
  className?: string;
  icon?: ReactElement;
}
