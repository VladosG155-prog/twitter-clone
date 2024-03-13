import { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

import { selectSession } from "@/entities/session";
import { ROUTES } from "@/shared/const/routes";
import { useAppSelector } from "@/shared/model/hooks";
import { Loader } from "@/shared/ui";

export const GuestGuard = ({ children }: PropsWithChildren) => {
  const { profile } = useAppSelector(selectSession);
  const isLoading = useAppSelector((state) => state.app.showLoader);
  if (isLoading) {
    return <Loader />;
  }
  if (!profile) return <Navigate to={ROUTES.BASE} />;

  return children;
};

export const AuthGuard = ({ children }: PropsWithChildren) => {
  const { profile } = useAppSelector(selectSession);
  const isLoading = useAppSelector((state) => state.app.showLoader);
  if (isLoading) {
    return <Loader />;
  }

  if (profile) return <Navigate to={ROUTES.PROFILE} />;

  return children;
};
