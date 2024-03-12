import { FC } from "react";

import { IconNames } from "@/shared/const/icons";

import { IIconProps } from "./types";

export const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const Component = IconNames[name];

  return <Component {...props} />;
};
