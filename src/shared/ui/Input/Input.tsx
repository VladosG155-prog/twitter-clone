import { FC } from "react";

import { IInputProps } from "./interfaces";

export const Input: FC<IInputProps> = (props) => {
  const { value, placeholder, name, error, register } = props;
  console.log(props);

  return (
    <div className="w-full">
      <input
        className="w-full border-gray-300 border-2 pl-5 rounded-md mb-5 h-[70px]"
        value={value}
        placeholder={placeholder}
        {...register(name)}
        {...props}
      />
      {error && error}
    </div>
  );
};
