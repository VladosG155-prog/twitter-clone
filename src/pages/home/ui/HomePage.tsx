import { useEffect } from "react";

import { GET_TWEETS } from "@/entities/tweet/model/actions";
import { ITweet } from "@/entities/tweet/types";
import { TweetInput } from "@/features/tweet/addTweet/ui/TweetInput";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { LikeTweetCard } from "@/widgets/LikeTweetCard/ui/LikeTweetCard";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  const tweets = useAppSelector((state) => state.tweets.tweets);

  useEffect(() => {
    dispatch(GET_TWEETS({}));
  }, []);

  return (
    <div>
      <TweetInput />
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
