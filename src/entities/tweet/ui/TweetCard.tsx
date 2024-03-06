import { FC } from "react";

import Like from "@/shared/assets/icons/like.svg?react";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

import { ITweetCardProps } from "./interfaces";

export const TweetCard: FC<ITweetCardProps> = (props) => {
  const { user, createdAt, text, likesCount, image } = props;

  const dateCreatedAt = createdAt?.toLocaleDateString();

  return (
    <div className="flex p-5">
      <Avatar size="xs" url={user?.avatar} />
      <div className="ml-2">
        <div className="gap-3 flex">
          <span>{user?.name}</span>
          <span>@bobur_mavlonov</span>
          <span> {dateCreatedAt}</span>
        </div>
        <p>{text}</p>
        <img src={image ?? ""} alt="" />
        <button className="flex items-center gap-3 mt-6">
          <Like />
          {likesCount}
        </button>
      </div>
    </div>
  );
};
