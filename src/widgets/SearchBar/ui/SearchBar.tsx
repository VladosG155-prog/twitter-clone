import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { appSlice } from "@/entities/app/model/slice";
import { selectUser } from "@/entities/session";
import { IUser } from "@/entities/session/types";
import { fetchUsers } from "@/entities/user/api/fetchUsers";
import { UserCard } from "@/entities/user/ui/UserCard/UserCard";
import { ROUTES } from "@/shared/const/routes";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Search } from "@/shared/ui/Search/Search";

import { TweetSearch } from "./TweetSearch/TweetSearch";
import { UserSearch } from "./UserSearch/UserSearch";

export const SearchBar = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const user = useAppSelector(selectUser);

  const location = useLocation();

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user?.profileId]);

  const handleInputChange = (val: string) => {
    setSearchValue(val);
  };

  const isHomePage = location.pathname === ROUTES.HOME;

  return (
    <div className="w-full pt-5">
      <div className="relative">
        <Search value={searchValue} onChange={handleInputChange} />
        {searchValue.length > 0 && (
          <div className="absolute top-full bg-white w-full rounded-lg text-black">
            {isHomePage ? (
              <UserSearch searchValue={searchValue} />
            ) : (
              <TweetSearch searchValue={searchValue} />
            )}
          </div>
        )}
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
