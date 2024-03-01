import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { ROUTES } from "@/shared/const/routes";
import { useAppSelector } from "@/shared/model/hooks";
import { Loader } from "@/shared/ui";

export const GuestGuard = ({ children }: PropsWithChildren) => {
  const { user, isLoading } = useAppSelector((state) => state.session);

  if (isLoading) {
    return <Loader />;
  }
  if (!user) return <Navigate to={ROUTES.BASE} />;

  return children;
};

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const { user, isLoading } = useAppSelector((state) => state.session);

  if (isLoading) {
    return <Loader />;
  }

  if (user) return <Navigate to={ROUTES.FEED} />;

  return children;
};
