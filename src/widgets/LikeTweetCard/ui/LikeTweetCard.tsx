import { FC, memo } from "react";

import { TweetCard } from "@/entities/tweet/";
import { LikeTweetButton } from "@/features/tweet/";
import { useAppSelector } from "@/shared/model/hooks";

import { ILikeTweetCardProps } from "./types";

export const LikeTweetCard: FC<ILikeTweetCardProps> = memo((props) => {
  const { user, createdAt, text, image, postId, userLikesIds } = props;

  const currentUser = useAppSelector((state) => state.session.profile!);

  const { id } = currentUser;

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
});
