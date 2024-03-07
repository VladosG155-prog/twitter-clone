import { FC } from "react";

import { Avatar } from "@/shared/ui/";

import { ITweetCardProps } from "./types";

export const TweetCard: FC<ITweetCardProps> = (props) => {
  const { user, createdAt, text, image } = props;

  const dateCreatedAt = createdAt?.toLocaleDateString();

  return (
    <div className="flex">
      <Avatar size="xs" url={user?.avatar} />
      <div className="ml-2">
        <div className="gap-3 flex">
          <span>{user?.name}</span>
          <span>@bobur_mavlonov</span>
          <span> {dateCreatedAt}</span>
        </div>
        <p>{text}</p>
        {image && (
          <img
            src={image}
            alt=""
            className="object-contain max-w-[500px] max-h-[500px]"
          />
        )}
      </div>
    </div>
  );
};
