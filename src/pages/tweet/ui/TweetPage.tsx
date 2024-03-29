import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { TweetCard } from "@/entities/tweet/";
import { ITweet } from "@/entities/tweet/";
import { Skeleton } from "@/shared/ui/";
import { PageHeader } from "@/widgets/";

import { fetchTweet } from "../api/fetchTweet";

export const TweetPage = () => {
  const [tweet, setTweet] = useState<ITweet | undefined>();

  const [isLoading, setIsLoading] = useState(false);

  const { tweetId } = useParams();

  useEffect(() => {
    if (!tweetId) return;
    setIsLoading(true);
    fetchTweet(tweetId).then((d) => {
      setTweet(d);
      setIsLoading(false);
    });
  }, [tweetId]);

  return (
    <div className="border-x border-gray-400 pl-5 h-max">
      <PageHeader>
        <h3 className="font-bold font-robotoSerif text-1.5xl">Home</h3>
      </PageHeader>
      {!tweet || isLoading ? (
        <Skeleton />
      ) : (
        <TweetCard
          text={tweet.text}
          image={tweet.image}
          user={tweet.user}
          createdAt={tweet.createdAt}
          userLikesIds={tweet.userLikesIds}
        />
      )}
    </div>
  );
};
