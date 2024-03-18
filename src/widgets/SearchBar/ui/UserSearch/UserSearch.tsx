import { FC } from "react";
import { Link } from "react-router-dom";

import { IUser } from "@/entities/session/types";
import { UserCard } from "@/entities/user/ui/UserCard/UserCard";
import { ROUTES } from "@/shared/const/routes";
import { Icon } from "@/shared/ui/";

import { useSearch } from "../../lib/useSearch";
import { ISearchProps } from "../../types";

export const UserSearch: FC<ISearchProps> = ({ searchValue }) => {
  const { isTyping, value: users } = useSearch<IUser>(
    searchValue,
    "users",
    "profileId, name"
  );

  if (!users.length) return null;

  return (
    <div>
      {users.map(({ name, avatar, profileId, id }) => (
        <Link key={id} to={ROUTES.PROFILE + "/" + profileId}>
          <div className="hover:bg-primary p-5 cursor-pointer">
            <UserCard
              name={name}
              avatar={avatar || ""}
              userId={profileId}
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
