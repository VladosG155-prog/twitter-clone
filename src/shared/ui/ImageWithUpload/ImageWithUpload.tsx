import { FC, useId } from "react";

import { IImageWithUploadProps } from "./types";

export const ImageWithUpload: FC<IImageWithUploadProps> = ({
  children,
  onChange,
}) => {
  const id = useId();

  return (
    <label
      htmlFor={id}
      className="relative overflow-hidden block max-w-max group/img"
    >
      {children}
      <div className="bg-black invisible group-hover/img:visible flex justify-center cursor-pointer items-center bg-opacity-15 left-0 top-0 absolute bottom-0 right-0 rounded-full text-white">
        Upload photo
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => {
          if (!e.target.files) return;
          onChange(e.target.files[0]);
        }}
        className="hidden absolute l-0 h-0 w-0 "
        id={id}
      />
    </label>
  );
};
