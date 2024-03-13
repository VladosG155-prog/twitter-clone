import { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { Logout } from "@/features/authentication/logout/ui/Logout";
import { TweetInput } from "@/features/tweet/addTweet/ui/TweetInput";
import { Button, Modal } from "@/shared/ui";
import { Icon } from "@/shared/ui/Icon/Icon";

import { links } from "../../config";

export const SideBar = () => {
  const [isShowTweetModal, setIsShowTweetModal] = useState(false);

  return (
    <div className="col-span-2 pt-8">
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
            classNames("flex mb-8 items-center hover:font-bold", {
              "font-bold": isActive,
            })
          }
        >
          <Icon name={iconName} />
          <span className="ml-5">{name}</span>
        </NavLink>
      ))}
      <Modal
        onClose={() => setIsShowTweetModal(false)}
        isOpen={isShowTweetModal}
      >
        <TweetInput />
      </Modal>
      <Button
        variant="primary"
        text="Tweet"
        onClick={() => setIsShowTweetModal(true)}
      />
      <Logout />
    </div>
  );
};
