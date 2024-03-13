import { FC } from "react";

import { IconNames } from "../../const/icons";

import { IIconProps } from "./types";

export const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const Component = IconNames[name];

  return <Component data-testid="icon" {...props} />;
};
