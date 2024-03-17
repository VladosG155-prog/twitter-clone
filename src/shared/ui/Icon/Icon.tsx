import { FC, memo } from "react";

import { IconNames } from "../../const/icons";

import { IIconProps } from "./types";

export const Icon: FC<IIconProps> = memo(({ name, ...props }) => {
  const Component = IconNames[name];

  return <Component data-testid="icon" {...props} />;
});
