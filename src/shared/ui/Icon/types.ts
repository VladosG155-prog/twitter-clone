import { SVGProps } from "react";

import { IconNames } from "@/shared/const/icons";

export interface IIconProps extends SVGProps<SVGSVGElement> {
  name: keyof typeof IconNames;
}
