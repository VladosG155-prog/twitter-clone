import { Link } from "react-router-dom";

import { LoginForm } from "@/features/authentication/login/ui/LoginForm";
import { ROUTES } from "@/shared/const/routes";
import { Icon } from "@/shared/ui/Icon/Icon";

export const LoginPage = () => {
  return (
    <div className="flex h-[100vh] w-[650px] flex-col m-auto justify-center items-center">
      <Icon name="twitter" width={50} height={41} className="text-primary" />
      <h1 className="font-bold text-start self-start text-2xl mb-5">
        Log in to Twitter
      </h1>
      <LoginForm />
      <Link className="text-primary hover:opacity-65 self-end" to={ROUTES.BASE}>
        Sign up to Twitter
      </Link>
    </div>
  );
};
