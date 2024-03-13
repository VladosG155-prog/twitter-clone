import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IUser } from "@/entities/session/types";
import { ITweet } from "@/entities/tweet/types";
import { TweetCard } from "@/entities/tweet/ui/TweetCard";
import { db } from "@/shared/api/firebase/instance";
import { Skeleton } from "@/shared/ui/Skeleton/Skeleton";
import { PageHeader } from "@/widgets/PageHeader/PageHeader";

export const TweetPage = () => {
  const [tweet, setTweet] = useState<ITweet | undefined>();

  const [isLoading, setIsLoading] = useState(false);

  const { tweetId } = useParams();

  useEffect(() => {
    setIsLoading(true);
    db.collection("tweets")
      .doc(tweetId)
      .get()
      .then((post) => {
        console.log(post.data());

        const data = post.data();

        data?.user.get().then((user) => {
          const userData = user.data() as IUser;
          setTweet({ ...(data as ITweet), user: userData });
          setIsLoading(false);
        });
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
          userLikesIds={tweet?.userLikesIds || []}
        />
      )}
    </div>
  );
};
