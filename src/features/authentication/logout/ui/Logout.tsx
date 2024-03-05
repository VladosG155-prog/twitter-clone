import { LOGOUT } from "@/entities/session/model/actions";
import { useAppDispatch } from "@/shared/model/hooks";
import { Button } from "@/shared/ui";

export const Logout = () => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(LOGOUT());
  };

  return (
    <div>
      <Button text="Log out" onClick={handleClick} />
    </div>
  );
};
