import { Link, useNavigate } from "react-router-dom";

import { LOGINGOOGLE } from "@/entities/session/model/actions";
import { ROUTES } from "@/shared/const/routes";
import { useAppDispatch } from "@/shared/model/hooks";
import { Button } from "@/shared/ui/";
import { Icon } from "@/shared/ui/Icon/Icon";

export const RightSection = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleSignUpEmailClick = () => {
    navigate(ROUTES.REGISTRATION);
  };

  const handleClickSignInGoogle = () => {
    dispatch(LOGINGOOGLE());
  };

  return (
    <div>
      <Icon name="twitter" width={50} height={41} className="text-primary" />
      <h1 className="text-4xl font-roboto font-black">Happening now</h1>
      <h2 className="text-3xl font-roboto font-black mb-5">
        Join Twitter today
      </h2>
      <div className="max-w-[400px] gap-3 flex flex-col">
        <Button
          icon={<Icon name="google" />}
          text="Sign up with Google"
          variant="outlined"
          onClick={handleClickSignInGoogle}
          className="w-[400px]"
        />
        <Button
          text="Sign up with email"
          variant="outlined"
          className="w-[400px]"
          onClick={handleSignUpEmailClick}
        />
      </div>
      <p className="mt-4">
        By singing up you agree to the{" "}
        <Link className="text-primary hover:opacity-65" to={ROUTES.BASE}>
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link className="text-primary hover:opacity-65" to={ROUTES.BASE}>
          Privacy Policy
        </Link>
        , including{" "}
        <Link className="text-primary hover:opacity-65" to={ROUTES.BASE}>
          Cookie Use
        </Link>
        .
      </p>
      <p>
        Already have an account?{" "}
        <Link className="text-primary hover:opacity-65" to={ROUTES.AUTH}>
          Log in
        </Link>
      </p>
    </div>
  );
};
