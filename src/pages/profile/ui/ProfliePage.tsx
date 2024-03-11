import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { appSlice } from "@/entities/app/model/slice";
import { selectUser } from "@/entities/session";
import { IUser } from "@/entities/session/types";
import { GET_TWEETS } from "@/entities/tweet/model/actions";
import { ITweet } from "@/entities/tweet/types";
import EditProfile from "@/features/profile/editProfile/ui/EditProfile/EditProfile";
import { TweetInput } from "@/features/tweet/addTweet/ui/TweetInput";
import profileBg from "@/shared/assets/profile-bg.png";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Switch } from "@/shared/ui/Switch/Switch";
import { LikeTweetCard } from "@/widgets/LikeTweetCard/ui/LikeTweetCard";

import { getUserProfile } from "../api/getUserProfile";

import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const ProfilePage = () => {
  const user = useAppSelector(selectUser);
  const tweets = useAppSelector((state) => state.tweets.tweets);
  const dispatch = useAppDispatch();
  const theme = useAppSelector((state) => state.app.theme);
  const [activeUser, setActiveUser] = useState<IUser>(user);

  const params = useParams();

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!params.profileId) {
      setActiveUser(user);
      return;
    }
    getUserProfile(params.profileId).then((user) => {
      setActiveUser(user);
    });
  }, [params.profileId]);

  const changeTheme = () => {
    if (theme === "light") {
      dispatch(appSlice.actions.changeTheme("dark"));
    } else {
      dispatch(appSlice.actions.changeTheme("light"));
    }
  };

  useEffect(() => {
    console.log("@useeffect user", 121212);
    dispatch(GET_TWEETS({ userId: activeUser.id }));
  }, [activeUser.id]);

  const isChecked = theme === "dark";

  return (
    <div>
      <div className="border-x border-gray-400">
        <div className="flex justify-between pr-10">
          <h5 className="font-bold px-3 py-4 font-robotoSerif text-1.5xl">
            {activeUser?.name}
            <p className="text-base text-gray-400 font-normal">
              {tweets.length} tweets
            </p>
          </h5>
          <Switch checked={isChecked} onChange={changeTheme} />
        </div>
        <img src={profileBg} />
        <div className="flex items-start border-gray-400 border-b justify-between pr-5 pt-5">
          <ProfileInfo
            profileId={activeUser?.profileId}
            name={activeUser?.name}
            avatarUrl={activeUser?.avatar}
          />
          {activeUser?.id === user.id && <EditProfile />}
        </div>
        {activeUser?.id === user.id && <TweetInput />}
      </div>

      {tweets.length > 0 &&
        tweets.map(
          ({ user, createdAt, text, image, id, userLikesIds }: ITweet) => (
            <LikeTweetCard
              key={id}
              user={user}
              image={image}
              userLikesIds={userLikesIds}
              createdAt={createdAt}
              text={text}
              postId={id}
            />
          )
        )}
    </div>
  );
};
