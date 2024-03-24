import { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { Logout } from "@/features/authentication/";
import { TweetInput } from "@/features/tweet/";
import { SCREEN } from "@/shared/const/screens";
import { useMediaQuery } from "@/shared/lib/hooks/useMediaQuery";
import { Button, Modal } from "@/shared/ui";
import { Icon } from "@/shared/ui/";

import { links } from "../../config";

export const SideBar = () => {
  const [isShowTweetModal, setIsShowTweetModal] = useState(false);

  const isTablet = useMediaQuery(SCREEN.TABLET);

  const handleClickTweet = () => {
    setIsShowTweetModal((prev) => !prev);
  };

  return (
    <div className="col-span-2 pt-8 md:flex md:flex-col md:items-center pl-3">
      <Icon
        name="twitter"
        width={50}
        height={41}
        className="text-primary mb-10"
      />
      {links.map(({ iconName, name }) => (
        <NavLink
          key={name}
          to={"/" + name.toLowerCase()}
          className={({ isActive }) =>
            classNames(
              "flex mb-8 items-center md:w-[70%] text-start hover:font-bold",
              {
                "font-bold": isActive,
                "justify-between": isTablet,
              }
            )
          }
        >
          <Icon name={iconName} />
          <span className="ml-5">{name}</span>
        </NavLink>
      ))}
      {!isTablet && (
        <>
          <Modal onClose={handleClickTweet} isOpen={isShowTweetModal}>
            <TweetInput onClose={handleClickTweet} />
          </Modal>
          <Button variant="primary" text="Tweet" onClick={handleClickTweet} />
          <Logout />
        </>
      )}
    </div>
  );
};
