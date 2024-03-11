import { useState } from "react";
import { NavLink } from "react-router-dom";
import classNames from "classnames";

import { Logout } from "@/features/authentication/logout/ui/Logout";
import { TweetInput } from "@/features/tweet/addTweet/ui/TweetInput";
import TwitterIcon from "@/shared/assets/icons/twitter.svg?react";
import { Button, Modal } from "@/shared/ui";

import { links } from "../../config";

export const SideBar = () => {
  const [isShowTweetModal, setIsShowTweetModal] = useState(false);

  return (
    <div className="col-span-2 pt-8">
      <TwitterIcon width={50} height={41} className="text-primary mb-10" />
      {links.map(({ Icon, name }) => (
        <NavLink
          key={name}
          to={"/" + name.toLowerCase()}
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
