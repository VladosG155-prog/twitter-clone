import { Link } from "react-router-dom";

import { selectUser } from "@/entities/session/";
import { LOGOUT } from "@/entities/session/";
import { UserCard } from "@/entities/user/";
import { ROUTES } from "@/shared/const/routes";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Button } from "@/shared/ui";

export const Logout = () => {
  const dispatch = useAppDispatch();

  const profile = useAppSelector(selectUser);

  const handleClick = () => {
    dispatch(LOGOUT());
  };

  return (
    <div className="mt-16">
      <Link to={ROUTES.PROFILE}>
        <UserCard
          avatar={profile?.avatar}
          name={profile?.name}
          userId={profile?.profileId}
          isCurrentUser
        />
      </Link>
      <Button text="Log out" variant="secondary" onClick={handleClick} />
    </div>
  );
};
