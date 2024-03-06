import { FC } from "react";

import { Avatar } from "@/shared/ui/Avatar/Avatar";

import { ITweetCardProps } from "./interfaces";

export const TweetCard: FC<ITweetCardProps> = (props) => {
  const { user, createdAt, text, image, slotLike } = props;

  const dateCreatedAt = createdAt?.toLocaleDateString();
  console.log(props);

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
        {slotLike}
      </div>
    </div>
  );
};
