import { FC, useId } from "react";

import { LIKE_TWEET } from "@/entities/tweet/model/actions";
import Like from "@/shared/assets/icons/like.svg?react";
import { useAppDispatch } from "@/shared/model/hooks";

import { ILikeTweetButtonProps } from "./interfaces";

export const LikeTweetButton: FC<ILikeTweetButtonProps> = ({
  userId,
  postId,
  likesCount,
}) => {
  const dispatch = useAppDispatch();

  const handleClickButton = () => {
    dispatch(LIKE_TWEET({ userId, postId }));
  };

  const id = useId();

  return (
    <button
      onClick={handleClickButton}
      className="flex items-center gap-2 mt-6 pl-12"
    >
      <input type="checkbox" id={id} />
      <label htmlFor={id}>
        <Like className="like-heart" />
      </label>
      {likesCount}
    </button>
  );
};
