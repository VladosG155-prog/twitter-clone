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
  const isAuthorized = useAppSelector((state) => state.session.user);

  if (!isAuthorized) return <Navigate to={ROUTES.AUTH} />;

  return children;
};

const AuthGuard = ({ children }: IGuardProps) => {
  const isAuthorized = useAppSelector((state) => state.session.user);

  if (isAuthorized) return <Navigate to={ROUTES.HOME} />;

  return children;
};

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: (
      <AuthGuard>
        <StartPage />
      </AuthGuard>
    ),
  },
  {
    path: ROUTES.REGISTRATION,
    element: (
      <AuthGuard>
        <RegistrationPage />
      </AuthGuard>
    ),
  },
  {
    path: ROUTES.AUTH,
    element: (
      <AuthGuard>
        <LoginPage />
      </AuthGuard>
    ),
  },
]);
