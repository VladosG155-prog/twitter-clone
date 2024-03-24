import { Link } from "react-router-dom";

import { LOGIN } from "@/entities/session/";
import { IAuthFormData } from "@/features/authentication/";
import { LoginForm } from "@/features/authentication/";
import { ROUTES } from "@/shared/const/routes";
import { useAppDispatch } from "@/shared/model/hooks";
import { Icon } from "@/shared/ui/";

export const LoginPage = () => {
  const dispatch = useAppDispatch();

  const handleSubmit = (data: IAuthFormData) => {
    dispatch(LOGIN(data));
  };

  return (
    <div className="m-auto flex h-[100vh] w-[650px] md:w-[100%] md:px-10 flex-col items-center justify-center">
      <Icon name="twitter" width={50} height={41} className="text-primary" />
      <h1 className="mb-5 self-start text-start text-2xl font-bold">
        Log in to Twitter
      </h1>
      <LoginForm onSubmit={handleSubmit} />
      <Link className="text-primary self-end hover:opacity-65" to={ROUTES.BASE}>
        Sign up to Twitter
      </Link>
    </div>
  );
};
