import { useEffect } from "react";

import { selectUser } from "@/entities/session";
import { GET_TWEETS } from "@/entities/tweet/model/actions";
import profileBg from "@/shared/assets/profile-bg.png";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";

import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const ProfilePage = () => {
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GET_TWEETS());
  }, []);

  const { displayName, photoURL } = user!;

  return (
    <div>
      <div className="border-x border-gray-400">
        <h5 className="font-bold px-3 py-4 font-robotoSerif text-1.5xl">
          {displayName}
        </h5>
        <img src={profileBg} />
        <div className="-mt-8">
          <ProfileInfo name={displayName} avatarUrl={photoURL} />
        </div>
      </div>
    </div>
  );
};
