import { FC, memo } from "react";
import cn from "classnames";

import defaultAvatar from "@/shared/assets/default.jpeg";

import { IAvatarProps } from "./types";

export const Avatar: FC<IAvatarProps> = memo(({ url, size = "xs" }) => {
  console.log(url);

  return (
    <img
      src={url ?? defaultAvatar}
      alt="User Avatar"
      className={cn("rounded-full", {
        "w-[150px] h-[150px] md:w-[90px] md:h-[90px]": size === "lg",
        "w-[50px] h-[50px]": size === "xs",
        "w-[60px] h-[60px]": size === "md",
      })}
    />
  );
});
