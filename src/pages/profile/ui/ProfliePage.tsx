import { useEffect } from "react";

import { selectUser } from "@/entities/session";
import { ITweet } from "@/entities/tweet/interfaces";
import { GET_TWEETS } from "@/entities/tweet/model/actions";
import { TweetCard } from "@/entities/tweet/ui/TweetCard";
import { TweetInput } from "@/features/tweet/addTweet/ui/TweetInput";
import { LikeTweetButton } from "@/features/tweet/likeTweet/ui/LikeTweetButton";
import profileBg from "@/shared/assets/profile-bg.png";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";

import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

export const ProfilePage = () => {
  const user = useAppSelector(selectUser);
  const tweets = useAppSelector((state) => state.tweets.tweets);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GET_TWEETS());
  }, []);

  const { name, avatar } = user!;
  console.log(tweets);

  return (
    <div>
      <div className="border-x border-gray-400">
        <h5 className="font-bold px-3 py-4 font-robotoSerif text-1.5xl">
          {name}
        </h5>
        <img src={profileBg} />
        <div className="-mt-8">
          <ProfileInfo name={name} avatarUrl={avatar} />
        </div>
        <TweetInput />
      </div>

      {tweets.length > 0 &&
        tweets.map(({ user, createdAt, text, image }: ITweet) => (
          <TweetCard
            user={user}
            image={image}
            createdAt={createdAt}
            text={text}
            slotLike={<LikeTweetButton />}
          />
        ))}
    </div>
  );
};
