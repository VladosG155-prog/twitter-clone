import { forwardRef } from "react";
import cn from "classnames";

import { IInputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, IInputProps>((props) => {
  const { placeholder, error } = props;

  return (
    <div className="w-full">
      <input
        className={cn(
          "w-full border-gray-300 border-2 pl-5 rounded-md mb-3 h-[60px]",
          {
            "border-red-400": error,
          }
        )}
        placeholder={placeholder}
        {...props}
      />
      {error && <span className="text-red-300 mb-5">{error.message}</span>}
    </div>
  );
});
