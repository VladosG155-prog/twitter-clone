import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { selectUser } from "@/entities/session";
import { IUser } from "@/entities/session/types";
import { fetchUsers } from "@/entities/user/api/fetchUsers";
import { UserCard } from "@/entities/user/ui/UserCard/UserCard";
import { ROUTES } from "@/shared/const/routes";
import { useAppSelector } from "@/shared/model/hooks";
import { Search } from "@/shared/ui/Search/Search";

export const SearchBar = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  const user = useAppSelector(selectUser);

  useEffect(() => {
    if (!user?.profileId) return;
    fetchUsers(user?.profileId).then((users) => {
      setUsers(users || []);
    });
  }, [user?.profileId]);

  console.log("@users", users);

  return (
    <div className="w-full pt-5">
      <Search />

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
