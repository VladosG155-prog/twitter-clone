import { useAppSelector } from "@/shared/model/hooks";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { LikeTweetCard } from "@/widgets/LikeTweetCard/ui/LikeTweetCard";

import { ITweet } from "../../types";

export const TweetsList = () => {
  const tweets = useAppSelector((state) => state.tweets.tweets);
  const isLoading = useAppSelector((state) => state.tweets.isLoading);
  return (
    <>
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
      {isLoading &&
        tweets.length === 0 &&
        new Array(5).fill(9).map((_, index) => <Skeleton key={index} />)}
    </>
  );
};
