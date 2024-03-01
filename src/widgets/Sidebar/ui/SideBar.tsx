import { NavLink } from "react-router-dom";

import TwitterIcon from "@/shared/assets/icons/twitter.svg?react";

import { links } from "../config";

export const SideBar = () => {
  return (
    <div className="col-span-2">
      <TwitterIcon width={50} height={41} className="text-primary" />
      {links.map(({ icon, name }) => (
        <NavLink to={"/" + name}>
          <i>{icon}</i>
          <span>{name}</span>
        </NavLink>
      ))}
    </div>
  );
};
