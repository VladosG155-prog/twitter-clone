import { FC } from "react";

import { Icon } from "@/shared/ui";

import { IAddPictureProps } from "./types";

export const AddPicture: FC<IAddPictureProps> = ({ value, onChange }) => {
  return (
    <label htmlFor="img" data-testid="addPicture" className="cursor-pointer">
      <Icon name="image" />
      {value?.name}
      <input
        data-testid="addPictureInput"
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
