import { useEffect } from "react";

import { GET_TWEETS, TweetsList } from "@/entities/tweet/";
import { TweetInput } from "@/features/tweet/";
import { useAppDispatch } from "@/shared/model/hooks";
import { PageHeader } from "@/widgets/";

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
