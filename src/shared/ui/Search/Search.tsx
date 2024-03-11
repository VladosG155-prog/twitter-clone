import { ChangeEvent, useEffect, useState } from "react";
import classNames from "classnames";

import { ITweet } from "@/entities/tweet/types";
import { client } from "@/shared/api/firebase/instance";
import SearchIcon from "@/shared/assets/icons/search.svg?react";

export const Search = () => {
  const [val, setVal] = useState("");
  const [posts, setPosts] = useState<ITweet[]>([]);
  const [isShowSearchHints, setIsShowSearchHints] = useState(false);
  const search = {
    q: val,
    query_by: "text",
  };

  useEffect(() => {
    setIsShowSearchHints(val.length >= 1);
  }, [val]);

  useEffect(() => {
    client
      .collections("tweets")
      .documents()
      .search(search)
      .then((posts) => {
        const postsArray = posts.hits?.map((hit) => hit.document as ITweet);
        setPosts(postsArray || []);
      });
  }, [val]);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  console.log(posts);

  return (
    <div className="relative">
      <div className="relative w-full mb-8">
        <i className="absolute -translate-y-1/2 top-1/2 left-5">
          <SearchIcon />
        </i>
        <input
          value={val}
          onChange={handleChangeInput}
          type="text"
          className="w-full h-[55px] bg-gray-100 rounded-full pl-16 text-xl"
          placeholder="Search Twitter"
        />
      </div>
      {isShowSearchHints && (
        <div className="absolute top-full bg-white w-full text-black">
          {posts.map((post) => (
            <div className="hover:bg-primary p-5 cursor-pointer">
              <h4>{post.text}</h4>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
