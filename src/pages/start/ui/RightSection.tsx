import { Link, useNavigate } from "react-router-dom";

import GoogleIcon from "@/shared/assets/icons/google.svg?react";
import TwitterIcon from "@/shared/assets/icons/twitter.svg?react";
import { ROUTES } from "@/shared/const/routes";
import { Button } from "@/shared/ui/";

export const RightSection = () => {
  const navigate = useNavigate();

  const handleSignUpEmailClick = () => {
    navigate(ROUTES.REGISTRATION);
  };

  return (
    <div>
      <TwitterIcon width={50} height={41} className="text-primary" />
      <h1 className="text-4xl font-roboto font-black">Happening now</h1>
      <h2 className="text-3xl font-roboto font-black mb-5">
        Join Twitter today
      </h2>
      <Button
        icon={<GoogleIcon />}
        text="Sign up with Google"
        variant="outlined"
        className="w-[400px]"
      />
      <Button
        text="Sign up with email"
        variant="outlined"
        className="w-[400px]"
        onClick={handleSignUpEmailClick}
      />
      <p>
        By singing up you agree to the{" "}
        <Link className="text-primary hover:opacity-65" to="/">
          Terms of Service
        </Link>{" "}
        and{" "}
        <Link className="text-primary hover:opacity-65" to="/">
          Privacy Policy
        </Link>
        , including{" "}
        <Link className="text-primary hover:opacity-65" to="/">
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
