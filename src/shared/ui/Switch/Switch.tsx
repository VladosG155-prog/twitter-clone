import { FC } from "react";

import { ISwitchProps } from "./types";

export const Switch: FC<ISwitchProps> = ({ onChange, checked }) => {
  return (
    <label className="inline-flex items-center cursor-pointer">
      <input
        onClick={onChange}
        type="checkbox"
        checked={checked}
        className="sr-only peer"
      />
      <div className="relative w-20 h-10  bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:content-[''] after:absolute after:top-1/2 after:-translate-y-1/2 after:start-[1px] after:bg-white  after:border after:rounded-full after:h-10 after:border-gray-600 after:w-10 after:transition-all  peer-checked:bg-primary"></div>
    </label>
  );
};
