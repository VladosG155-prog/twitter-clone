import { FC } from "react";

import { Avatar } from "@/shared/ui/";

import { IProfileInfoProps } from "./types";

export const ProfileInfo: FC<IProfileInfoProps> = ({
  avatarUrl,
  name,
  description,
  profileId,
}) => {
  return (
    <div className="flex -mt-10 flex-col justify-center   pl-5 pb-14">
      <Avatar size="lg" url={avatarUrl} />
      <div className="ml-3">
        <h5 className="font-robotoSerif text-1.75xl font-bold">{name}</h5>
        <p className=" text-base text-gray-500">{profileId}</p>
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
