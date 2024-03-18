import { FC, useRef, useState } from "react";
import cn from "classnames";

import { useOnClickOutside } from "@/shared/lib/hooks/useClickOutside";

import AngleDown from "../../assets/icons/angle-down.svg?react";

import { ISelectProps } from "./types";

export const Select: FC<ISelectProps> = (props) => {
  const { placeholder, options, value, onChange, className } = props;
  const [isOpenOptions, setIsOpenOptions] = useState(false);

  const selectRef = useRef(null);

  const handleChangeSelect = (val: string) => () => {
    onChange(val);
  };

  const onClickSelect = () => {
    setIsOpenOptions((prev) => !prev);
  };

  const active = options.find((option) => option.value === value);

  useOnClickOutside(selectRef, () => setIsOpenOptions(false));

  return (
    <div
      ref={selectRef}
      className={cn(
        "text-sm h-[60px] cursor-pointer relative border-gray-400 border p-5 rounded-md",
        className
      )}
      onClick={onClickSelect}
    >
      <input
        type="text"
        className="text-xl cursor-pointer caret-transparent bg-transparent h-full w-full rounded-sm outline-none"
        value={active?.label || value}
        onChange={() => null}
        placeholder={placeholder}
      />
      <i className="absolute right-2 top-[50%] ">
        <AngleDown className="color-gray-500" />
      </i>
      {isOpenOptions && (
        <div className="absolute w-full transition-all max-h-40 overflow-auto left-0 cursor-pointer top-16 bg-white dark:bg-darkBg border-gray-400 border">
          {options.map(({ value, label }) => (
            <p
              className={cn(
                "p-3 hover:bg-primary hover:text-white cursor-pointer",
                {
                  "bg-primary text-white dark:text-dark":
                    active?.value === value,
                }
              )}
              key={value + label}
              onClick={handleChangeSelect(value)}
            >
              {label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
