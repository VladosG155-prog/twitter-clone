import { useEffect } from "react";

import { selectUser } from "@/entities/session";
import { GET_TWEETS } from "@/entities/tweet/model/actions";
import { ITweet } from "@/entities/tweet/types";
import { TweetInput } from "@/features/tweet/addTweet/ui/TweetInput";
import profileBg from "@/shared/assets/profile-bg.png";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { LikeTweetCard } from "@/widgets/Sidebar/ui/LikeTweetCard/LikeTweetCard";

import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const ProfilePage = () => {
  const user = useAppSelector(selectUser);
  const tweets = useAppSelector((state) => state.tweets.tweets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GET_TWEETS({ userId: user?.id }));
  }, []);

  return (
    <div>
      <div className="border-x border-gray-400">
        <h5 className="font-bold px-3 py-4 font-robotoSerif text-1.5xl">
          {user?.name}
          <p className="text-base text-gray-400 font-normal">
            {tweets.length} tweets
          </p>
        </h5>
        <img src={profileBg} />
        <div className="-mt-8">
          <ProfileInfo name={user?.name} avatarUrl={user?.avatar} />
        </div>
        <TweetInput />
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
