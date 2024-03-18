import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { selectUser } from "@/entities/session";
import { IUser } from "@/entities/session/types";
import { TweetsList } from "@/entities/tweet/";
import { GET_TWEETS } from "@/entities/tweet/model/actions";
import { tweetSlice } from "@/entities/tweet/model/slice";
import { EditProfile } from "@/features/profile/editProfile";
import { TweetInput } from "@/features/tweet/addTweet";
import profileBg from "@/shared/assets/profile-bg.png";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { PageHeader } from "@/widgets/";

import { getUserProfile } from "../api/getUserProfile";

import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const ProfilePage = () => {
  const user = useAppSelector(selectUser);
  const { tweets } = useAppSelector((state) => state.tweets);
  const dispatch = useAppDispatch();

  const [activeUser, setActiveUser] = useState<IUser>(user);

  const { profileId } = useParams();

  useEffect(() => {
    if (!profileId && user) {
      setActiveUser(user);
      return;
    }
    getUserProfile(profileId!).then((user) => {
      setActiveUser(user!);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileId]);

  useEffect(() => {
    if (!activeUser.id) return;

    dispatch(tweetSlice.actions.saveTweets([]));
    dispatch(GET_TWEETS({ userId: activeUser.id }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeUser]);

  return (
    <div>
      <div className="border-x border-gray-400">
        <PageHeader>
          <h5 className="font-bold font-robotoSerif text-1.5xl">
            {activeUser?.name}
            <p className="text-base text-gray-400 font-normal">
              {tweets.length} tweets
            </p>
          </h5>
        </PageHeader>
        <img src={profileBg} />
        <div className="flex items-start border-gray-400 border-b justify-between pr-5 pt-5">
          <ProfileInfo
            profileId={activeUser?.profileId}
            name={activeUser?.name}
            description={activeUser.bio}
            avatarUrl={activeUser?.avatar}
          />
          {activeUser?.id === user.id && <EditProfile />}
        </div>
        {activeUser?.id === user.id && <TweetInput />}
      </div>
      <TweetsList />
    </div>
  );
};
