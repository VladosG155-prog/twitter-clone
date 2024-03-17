import { FC } from "react";
import classNames from "classnames";

import { Avatar } from "@/shared/ui";

import { IUserCardProps } from "../../types";

export const UserCard: FC<IUserCardProps> = ({
  avatar,
  name,
  userId,
  isCurrentUser = false,
  isShowFollowBtn = true,
  isSmallCard = false,
}) => {
  return (
    <div
      className={classNames(
        "flex mb-5 py-5 items-center xl:flex-wrap xl:gap-3",
        {
          "py-0": isSmallCard,
        }
      )}
    >
      <Avatar url={avatar} />
      <div className="ml-5 xl:ml-0">
        <h5 className="font-semibold text-base">{name}</h5>
        <p className="text-gray-500">{userId}</p>
      </div>
      {!isCurrentUser && isShowFollowBtn && (
        <button className="bg-black max-w-max xl:max-w-full font-robotoSerif xl:w-full xl:ml-0 font-bold w-36 text-white py-3 px-4 rounded-full ml-auto">
          Follow
        </button>
      )}
    </div>
  );
};
