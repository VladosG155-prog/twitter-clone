import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { Logout } from "@/features/authentication/logout/ui/Logout";
import TwitterIcon from "@/shared/assets/icons/twitter.svg?react";
import { Button } from "@/shared/ui";

import { links } from "../../config";

export const SideBar = () => {
  return (
    <div className="col-span-2 pt-8">
      <TwitterIcon width={50} height={41} className="text-primary mb-10" />
      {links.map(({ Icon, name }) => (
        <NavLink
          key={name}
          to={"/" + name}
          className={({ isActive }) =>
            classNames("flex mb-8 items-center hover:font-bold", {
              "font-bold": isActive,
            })
          }
        >
          <Icon />
          <span className="ml-5">{name}</span>
        </NavLink>
      ))}
      <Button variant="primary" text="Tweet" />
      <Logout />
    </div>
  );
};
