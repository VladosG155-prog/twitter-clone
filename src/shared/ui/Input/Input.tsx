import { ChangeEvent, FC } from "react";

import { IInputProps } from "./interfaces";

export const Input: FC<IInputProps> = ({
  value,
  onChange,
  name,
  register,
  ...props
}) => {
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <input value={value} placeholder={name} {...register(name)} {...props} />
  );
};
