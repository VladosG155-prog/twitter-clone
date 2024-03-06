import { FC } from "react";

import { Avatar } from "@/shared/ui/Avatar/Avatar";

import { IProfileInfoProps } from "./interfaces";

export const ProfileInfo: FC<IProfileInfoProps> = ({
  avatarUrl,
  name,
  description,
}) => {
  return (
    <div className="flex flex-col justify-center border-gray-400 border-b  pl-5 pb-14">
      <Avatar size="lg" url={avatarUrl} />
      <div className="ml-3">
        <h5 className="font-robotoSerif text-1.75xl font-bold">{name}</h5>
        <p className=" text-base text-gray-500">@bobur_mavlonov</p>
        <p className=" mb-14">{description}</p>
        <div className="flex">
          <p className="text-gray-500 mr-5">
            <span className="font-bold text-black">67</span> Following
          </p>
          <p className="text-gray-500">
            <span className="font-bold text-black">47</span> Followers
          </p>
        </div>
      </div>
    </div>
  );
};
