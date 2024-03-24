import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { IUser, selectUser } from "@/entities/session/";
import { fetchUsers, UserCard } from "@/entities/user/";
import { ROUTES } from "@/shared/const/routes";
import { globalSlice } from "@/shared/lib/globalSlice";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Search } from "@/shared/ui/";

import { TweetSearch } from "./TweetSearch";
import { UserSearch } from "./UserSearch";

export const SearchBar = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchValue, setSearchValue] = useState("");
  const user = useAppSelector(selectUser);

  const location = useLocation();

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user?.profileId) return;
    dispatch(globalSlice.actions.setLoader(true));
    fetchUsers(user?.profileId)
      .then((users) => {
        setUsers(users || []);
      })
      .finally(() => {
        dispatch(globalSlice.actions.setLoader(false));
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
