import { FC } from "react";
import cn from "classnames";

import { IButtonProps } from "./interfaces";

export const Button: FC<IButtonProps> = ({
  text,
  className,
  icon,
  variant = "primary",
  ...props
}) => {
  return (
    <button
      {...props}
      className={cn(
        "py-4 rounded-full flex justify-center mb-5 items-center",
        className,
        {
          "border-gray-300 border": variant === "outlined",
        }
      )}
      type="button"
    >
      {icon && <i className="w-[16px] h-[16px] mr-1">{icon}</i>}
      <span className="font-roboto font-medium ">{text}</span>
    </button>
  );
};
