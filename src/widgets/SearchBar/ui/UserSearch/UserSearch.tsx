import { FC, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IUser } from "@/entities/session/types";
import { UserCard } from "@/entities/user/ui/UserCard/UserCard";
import { client } from "@/shared/api/firebase/instance";
import { ROUTES } from "@/shared/const/routes";
import { Icon } from "@/shared/ui/Icon/Icon";

import { ISearchProps } from "../../types";

export const UserSearch: FC<ISearchProps> = ({ searchValue }) => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  useEffect(() => {
    setIsTyping(true);

    const getData = setTimeout(() => {
      client
        .collections<IUser>("users")
        .documents()
        .search({ q: searchValue.toLowerCase(), query_by: "profileId, name" })
        .then((user) => {
          const usersArray = user.hits?.map((hit) => hit.document);
          setUsers(usersArray || []);
          setIsTyping(false);
        });
    }, 500);

    return () => {
      clearTimeout(getData);
    };
  }, [searchValue]);

  return (
    <div>
      {users.map((user) => (
        <Link to={ROUTES.PROFILE + "/" + user.profileId}>
          <div className="hover:bg-primary p-5 cursor-pointer">
            <UserCard
              name={user.name}
              avatar={user.avatar || ""}
              userId={user.profileId}
              isSmallCard
              isShowFollowBtn={false}
            />
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
      {searchValue.length > 0 && users.length === 0 && !isTyping && (
        <h3 className="p-5">No results found</h3>
      )}
    </div>
  );
};
