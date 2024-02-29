import { ReactElement } from "react";
import { createBrowserRouter, Navigate } from "react-router-dom";

import { LoginPage } from "@/pages/login/ui/LoginPage";
import { RegistrationPage } from "@/pages/registration";
import { StartPage } from "@/pages/start";
import { ROUTES } from "@/shared/const/routes";
import { useAppSelector } from "@/shared/model/hooks";

interface IGuardProps {
  children: ReactElement;
}

const GuestGuard = ({ children }: IGuardProps) => {
  const isAuthorized = useAppSelector((state) => state.global.user);

  if (!isAuthorized) return <Navigate to={ROUTES.AUTH} />;

  return children;
};

const AuthGuard = ({ children }: IGuardProps) => {
  const isAuthorized = useAppSelector((state) => state.global.user);

  if (isAuthorized) return <Navigate to={ROUTES.BASE} />;

  return children;
};

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: <StartPage />,
  },
  {
    path: ROUTES.REGISTRATION,
    element: <RegistrationPage />,
  },
  { path: ROUTES.AUTH, element: <LoginPage /> },
]);
