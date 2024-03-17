import { FC } from "react";

import { Icon } from "../Icon/Icon";

import { ISearchProps } from "./types";

export const Search: FC<ISearchProps> = ({ value, onChange }) => {
  return (
    <div className="relative w-full mb-8">
      <i className="absolute -translate-y-1/2 top-1/2 left-5">
        <Icon name="search" />
      </i>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        className="w-full h-[55px] bg-gray-100 rounded-full pl-16 text-xl dark:text-black"
        placeholder="Search Twitter"
      />
    </div>
  );
};
