import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { ITweet } from "@/entities/tweet/types";
import { TweetCard } from "@/entities/tweet/ui/TweetCard";
import { Skeleton } from "@/shared/ui/";
import { PageHeader } from "@/widgets/";

import { fetchData } from "../api/fetchTweet";

export const TweetPage = () => {
  const [tweet, setTweet] = useState<ITweet | undefined>();

  const [isLoading, setIsLoading] = useState(false);

  const { tweetId } = useParams();

  useEffect(() => {
    if (!tweetId) return;
    setIsLoading(true);
    fetchData(tweetId).then((d) => {
      setTweet(d);
      setIsLoading(false);
    });
  }, [tweetId]);

  return (
    <div className="border-x border-gray-400 pl-5 h-max">
      <PageHeader>
        <h3 className="font-bold font-robotoSerif text-1.5xl">Home</h3>
      </PageHeader>
      {isLoading ? (
        <Skeleton />
      ) : (
        <TweetCard
          text={tweet?.text || ""}
          image={tweet?.image || ""}
          user={tweet?.user}
          createdAt={tweet?.createdAt}
          userLikesIds={tweet?.userLikesIds || []}
        />
      )}
    </div>
  );
};
