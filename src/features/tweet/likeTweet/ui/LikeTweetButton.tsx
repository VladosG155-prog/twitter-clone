import { FC, useId } from "react";
import classNames from "classnames";

import { LIKE_TWEET } from "@/entities/tweet/model/actions";
import { useAppDispatch } from "@/shared/model/hooks";
import { Icon } from "@/shared/ui/Icon/Icon";

import { ILikeTweetButtonProps } from "./interfaces";

export const LikeTweetButton: FC<ILikeTweetButtonProps> = ({
  userId,
  postId,
  likesCount,
  isLikedByUser,
}) => {
  const dispatch = useAppDispatch();

  const handleClickButton = () => {
    dispatch(LIKE_TWEET({ userId, postId }));
  };

  const id = useId();

  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        handleClickButton();
      }}
      className="inline-flex group/item items-center gap-2 mt-6 pl-12 max-w-max"
    >
      <input
        type="checkbox"
        onChange={() => null}
        checked={isLikedByUser}
        id={id}
      />
      <label
        htmlFor={id}
        className="group-hover/item:bg-pink-500 rounded-full transition-all group-hover/item:bg-opacity-25"
      >
        <Icon
          name="like"
          className="like-heart text-gray-400 group-hover/item:text-pink-500"
        />
      </label>
      <span
        className={classNames("group-hover/item:text-pink-500", {
          "text-[#e2264d]": isLikedByUser,
        })}
      >
        {likesCount}
      </span>
    </button>
  );
};
