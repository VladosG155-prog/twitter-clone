import { selectUser } from "@/entities/session";
import { LOGOUT } from "@/entities/session/model/actions";
import { useAppDispatch, useAppSelector } from "@/shared/model/hooks";
import { Button } from "@/shared/ui";
import { Avatar } from "@/shared/ui/Avatar/Avatar";

export const Logout = () => {
  const dispatch = useAppDispatch();

  const user = useAppSelector(selectUser);

  const handleClick = () => {
    dispatch(LOGOUT());
  };

  return (
    <div>
      <div className="flex mb-5">
        <Avatar size="xs" url={user?.avatar} />
        <div className="ml-7">
          {user?.name}
          <p> @bobur_mavlonov</p>
        </div>
      </div>
      <Button text="Log out" className="bg-gray-400" onClick={handleClick} />
    </div>
  );
};
