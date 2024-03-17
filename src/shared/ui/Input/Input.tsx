import { forwardRef, useId } from "react";

import { IInputProps } from "./types";

export const Input = forwardRef<HTMLInputElement, IInputProps>(
  ({ placeholder, role, ...props }, ref) => {
    const { error } = props;

    const id = useId();

    return (
      <div data-testid="input" className="w-full relative mb-3">
        <input
          role={role}
          ref={ref}
          placeholder=" "
          id={id}
          className={
            "block px-2.5 pb-2.5 pt-5 w-full rounded-md text-xl text-gray-900 border-gray-300 bg-white border appearance-none focus:outline-none focus:ring-0 focus:border-primary peer h-[60px]"
          }
          {...props}
        />

        <label
          htmlFor={id}
          className="absolute text-xl text-gray-300 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-primary  peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
        >
          {placeholder}
        </label>

        {error && <span className="text-red-300 mb-5">{error.message}</span>}
      </div>
    );
  }
);
