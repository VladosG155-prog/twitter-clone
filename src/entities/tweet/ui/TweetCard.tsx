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
          <span>{user?.profileId}</span>
          <span> {dateCreatedAt}</span>
        </div>
        <p className="mb-5">{text}</p>
        {image && (
          <img
            width="100%"
            height="auto"
            src={image}
            alt="Tweet Image"
            className="object-contain max-w-[500px] max-h-[500px]"
          />
        )}
      </div>
    </div>
  );
};
