import { useEffect } from "react";

import { GET_TWEETS } from "@/entities/tweet/model/actions";
import { TweetsList } from "@/entities/tweet/ui/TweetsList/TweetsList";
import { TweetInput } from "@/features/tweet/addTweet/ui/TweetInput";
import { useAppDispatch } from "@/shared/model/hooks";
import { PageHeader } from "@/widgets/PageHeader/PageHeader";

export const HomePage = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GET_TWEETS({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="border-x border-gray-400">
      <PageHeader>
        <h4 className="text-1.75xl font-robotoSerif font-bold">Home</h4>
      </PageHeader>
      <TweetInput />
      <TweetsList />
    </div>
  );
};
