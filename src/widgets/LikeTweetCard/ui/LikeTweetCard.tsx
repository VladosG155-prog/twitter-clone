import { FC } from "react";

import { selectUser } from "@/entities/session";
import { TweetCard } from "@/entities/tweet/ui/TweetCard";
import { LikeTweetButton } from "@/features/tweet/likeTweet/ui/LikeTweetButton";
import { useAppSelector } from "@/shared/model/hooks";

import { ILikeTweetCardProps } from "./types";

export const LikeTweetCard: FC<ILikeTweetCardProps> = (props) => {
  const { user, createdAt, text, image, postId, userLikesIds } = props;

  const { id } = useAppSelector(selectUser);

  const isLikedByUser = userLikesIds ? userLikesIds.includes(id) : false;
  return (
    <div className="flex p-5 flex-col border-y border-gray-300">
      <TweetCard
        user={user}
        userLikesIds={userLikesIds}
        text={text}
        image={image}
        createdAt={createdAt}
      />
      <LikeTweetButton
        userId={id}
        likesCount={userLikesIds.length}
        isLikedByUser={isLikedByUser}
        postId={postId}
      />
    </div>
  );
};
