import { FC } from "react";
import { Link } from "react-router-dom";

import { ITweet } from "@/entities/tweet/types";
import { Icon } from "@/shared/ui/Icon/Icon";

import { useSearch } from "../../lib/useSearch";
import { ISearchProps } from "../../types";

export const TweetSearch: FC<ISearchProps> = ({ searchValue }) => {
  const { isTyping, value: tweets } = useSearch<ITweet>(
    searchValue,
    "tweets",
    "text"
  );

  return (
    <div>
      {tweets.map(({ text, id }) => (
        <Link key={id} to={"tweets/" + id}>
          <div className="hover:bg-primary p-5 cursor-pointer">
            <h4>{text}</h4>
          </div>
        </Link>
      ))}
      {searchValue.length > 0 && isTyping && (
        <h5 className="p-5 flex items-end gap-x-2 text-primary font-bold">
          Loading
          <i className="animate-wave">
            <Icon name="twitter" className=" text-primary" />
          </i>
        </h5>
      )}
      {searchValue.length > 0 && tweets.length === 0 && !isTyping && (
        <h3 className="p-5">No results found</h3>
      )}
    </div>
  );
};
