import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { ITweet } from "@/entities/tweet/types";
import { client } from "@/shared/api/firebase/instance";
import { Icon } from "@/shared/ui/Icon/Icon";

import { ISearchProps } from "../../types";

export const TweetSearch: FC<ISearchProps> = ({ searchValue }) => {
  const [posts, setPosts] = useState<ITweet[]>([]);
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    setIsTyping(true);
    const getData = setTimeout(() => {
      client
        .collections("tweets")
        .documents()
        .search({ q: searchValue.toLowerCase(), query_by: "text" })
        .then((posts) => {
          const postsArray = posts.hits?.map((hit) => hit.document as ITweet);
          setPosts(postsArray || []);
          setIsTyping(false);
        });
    }, 500);
    return () => {
      clearTimeout(getData);
    };
  }, [searchValue]);

  return (
    <div>
      {posts.map((post) => (
        <Link to={"tweets/" + post.id}>
          <div className="hover:bg-primary p-5 cursor-pointer">
            <h4>{post.text}</h4>
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
      {searchValue.length > 0 && posts.length === 0 && !isTyping && (
        <h3 className="p-5">No results found</h3>
      )}
    </div>
  );
};
