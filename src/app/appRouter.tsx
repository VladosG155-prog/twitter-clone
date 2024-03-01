import { createBrowserRouter } from "react-router-dom";

import { FeedPage } from "@/pages/feed/ui/FeedPage";
import { LoginPage } from "@/pages/login/ui/LoginPage";
import { RegistrationPage } from "@/pages/registration";
import { StartPage } from "@/pages/start";
import { ROUTES } from "@/shared/const/routes";

import { AuthGuard, GuestGuard } from "./guards";

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
  {
    path: ROUTES.FEED,
    element: (
      <GuestGuard>
        <FeedPage />
      </GuestGuard>
    ),
  },
]);
