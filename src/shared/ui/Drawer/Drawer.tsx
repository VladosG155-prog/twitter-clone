import { FC } from "react";

import { Icon } from "../Icon/Icon";

import { IDrawerProps } from "./types";

export const Drawer: FC<IDrawerProps> = ({ children, title, onClose }) => {
  return (
    <div className="fixed left-0 right-0 bottom-0 top-0 w-full h-full bg-black z-40 px-10 py-5">
      <div className="flex gap-5 items-center">
        <Icon
          onClick={onClose}
          name="arrowLeft"
          width={30}
          height={30}
          className="fill-white"
        />
        <h3 className="text-2xl font-bold"> {title}</h3>
      </div>
      {children}
    </div>
  );
};
