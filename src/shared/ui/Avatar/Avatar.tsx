import { FC } from "react";
import cn from "classnames";

import defaultAvatar from "@/shared/assets/defaultAvatar.png";

import { IAvatarProps } from "./interfaces";

export const Avatar: FC<IAvatarProps> = ({ url, size = "xs" }) => {
  return (
    <img
      src={url ?? defaultAvatar}
      alt="avatar"
      className={cn("rounded-full", {
        "w-[150px] h-[150px]": size === "lg",
        "w-[50px] h-[50px]": size === "xs",
        "w-[60px] h-[60px]": size === "md",
      })}
    />
  );
};
