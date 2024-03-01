import { FC, useState } from "react";
import cn from "classnames";

import AngleDown from "../../assets/icons/angle-down.svg?react";

import { ISelectProps } from "./interfaces";

export const Select: FC<ISelectProps> = (props) => {
  const { placeholder, options, value, onChange, className } = props;
  const [isOpenOptions, setIsOpenOptions] = useState(false);
  const handleChangeSelect = (val: string) => () => {
    onChange(val);
  };

  const onClickSelect = () => {
    setIsOpenOptions((prev) => !prev);
  };

  const active = options.find((option) => option.value === value);

  return (
    <div
      className={cn(
        "text-sm h-[60px] cursor-pointer relative border-gray-400 border p-5 rounded-md",
        className
      )}
      onClick={onClickSelect}
    >
      <input
        type="text"
        disabled
        className="text-xl cursor-pointer h-full w-full rounded-sm outline-none"
        value={active?.label || value}
        placeholder={placeholder}
      />
      <i className="absolute right-2 top-[50%] ">
        <AngleDown className="color-gray-500" />
      </i>
      {isOpenOptions && (
        <div className="absolute w-full left-0 cursor-pointer top-16 bg-white border-gray-400 border">
          {options.map((option) => (
            <p
              className="p-3 hover:bg-primary hover:text-white cursor-pointer"
              onClick={handleChangeSelect(option.value)}
            >
              {option.label}
            </p>
          ))}
        </div>
      )}
    </div>
  );
};
