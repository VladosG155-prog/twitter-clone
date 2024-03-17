import { FC } from "react";
import cn from "classnames";

import { IButtonProps } from "./types";

export const Button: FC<IButtonProps> = ({
  text,
  className,
  icon,
  type,
  dataTest = "button",
  variant = "primary",
  disabled,
  ...props
}) => {
  return (
    <button
      {...props}
      disabled={disabled}
      data-testid={dataTest}
      className={cn(
        "rounded-full flex justify-center py-3 px-5  font-semibold font-roboto items-center w-full transition-all",
        className,
        {
          "opacity-75": disabled,
          "border-gray-300 border": variant === "outlined",
          "bg-primary text-white hover:bg-opacity-60": variant === "primary",
          "bg-gray-400 text-white": variant === "secondary",
        }
      )}
      type={type}
    >
      {icon && <i className="w-[16px] h-[16px] mr-1">{icon}</i>}
      <span className="">{text}</span>
    </button>
  );
};
