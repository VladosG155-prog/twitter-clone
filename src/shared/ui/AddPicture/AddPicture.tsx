import { FC } from "react";

import { Icon } from "../Icon/Icon";

import { IAddPictureProps } from "./types";

export const AddPicture: FC<IAddPictureProps> = ({ value, onChange }) => {
  return (
    <label htmlFor="img" className="cursor-pointer">
      <Icon name="image" />
      {value?.name}
      <input
        type="file"
        onChange={(e) => {
          if (!e.target.files) return;
          onChange(e.target.files[0]);
        }}
        className="hidden absolute l-0  h-0 w-0 "
        id="img"
      />
    </label>
  );
};
