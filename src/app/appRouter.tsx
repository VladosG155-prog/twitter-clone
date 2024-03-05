import { createBrowserRouter } from "react-router-dom";

import { HomePage } from "@/pages/home/ui/HomePage";
import { LoginPage } from "@/pages/login/ui/LoginPage";
import { ProfilePage } from "@/pages/profile/ui/ProfliePage";
import { RegistrationPage } from "@/pages/registration";
import { StartPage } from "@/pages/start";
import { ROUTES } from "@/shared/const/routes";

import { BaseLayout } from "./layouts/baseLayout";
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
    element: <BaseLayout />,
    children: [
      {
        index: true,
        path: ROUTES.PROFILE,

        element: (
          <GuestGuard>
            <ProfilePage />
          </GuestGuard>
        ),
      },
      {
        path: ROUTES.HOME,
        element: (
          <GuestGuard>
            <HomePage />
          </GuestGuard>
        ),
      },
    ],
  },
]);
