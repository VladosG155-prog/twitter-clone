import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { appSlice } from "@/entities/app/model/slice";
import { selectUser } from "@/entities/session";
import { IUser } from "@/entities/session/types";
import { ITweet } from "@/entities/tweet/types";
import { fetchUsers } from "@/entities/user/api/fetchUsers";
import { UserCard } from "@/entities/user/ui/UserCard/UserCard";
import { client } from "@/shared/api/firebase/instance";
import { ROUTES } from "@/shared/const/routes";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Icon } from "@/shared/ui/Icon/Icon";
import { Search } from "@/shared/ui/Search/Search";

export const SearchBar = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const [posts, setPosts] = useState<ITweet[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const user = useAppSelector(selectUser);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user?.profileId) return;
    dispatch(appSlice.actions.setLoader(true));
    fetchUsers(user?.profileId)
      .then((users) => {
        setUsers(users || []);
      })
      .finally(() => {
        dispatch(appSlice.actions.setLoader(false));
      });
  }, [user?.profileId]);

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

  const handleInputChange = (val: string) => {
    setSearchValue(val);
  };

  return (
    <div className="w-full pt-5">
      <div className="relative">
        <Search value={searchValue} onChange={handleInputChange} />

        <div className="absolute top-full bg-white w-full text-black">
          {searchValue.length > 0 &&
            !isTyping &&
            posts.map((post) => (
              // todo const tweets
              <Link to={"tweets/" + post.id}>
                <div className="hover:bg-primary p-5 cursor-pointer">
                  <h4>{post.text}</h4>
                </div>
              </Link>
            ))}
          {searchValue.length > 0 && isTyping && (
            <h5 className="p-5 flex items-end gap-x-2 text-primary font-bold">
              Loading
              <i className=" animate-wave">
                <Icon name="twitter" className=" text-primary" />
              </i>
            </h5>
          )}
          {searchValue.length > 0 && posts.length === 0 && !isTyping && (
            <h3 className="p-5">No results found</h3>
          )}
        </div>
      </div>
      <div className="py-5 px-4 bg-gray-100 rounded-lg dark:bg-[#16181C]">
        <h2 className=" font-robotoSerif font-bold text-1.75xl">
          You might like
        </h2>
        {users.map((user) => (
          <Link key={user.id} to={ROUTES.PROFILE + "/" + user.profileId}>
            <UserCard
              name={user.name}
              userId={user.profileId}
              avatar={user.avatar}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
