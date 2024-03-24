import { Suspense } from "react";
import { createBrowserRouter, Outlet } from "react-router-dom";

import { ROUTES } from "@/shared/const/routes";

import { BaseLayout } from "./layouts/baseLayout";
import { ToastContainer } from "./providers/ToastContainer/ToastContainer";
import { AuthGuard, GuestGuard } from "./guards";
import {
  HomePage,
  LoginPage,
  ProfilePage,
  RegistrationPage,
  StartPage,
  TweetPage,
} from "./lazyPages";

export const appRouter = createBrowserRouter([
  {
    path: ROUTES.BASE,
    element: (
      <>
        <ToastContainer />
        <Outlet />
      </>
    ),
    children: [
      {
        path: ROUTES.BASE,
        index: true,
        element: (
          <AuthGuard>
            <Suspense>
              <StartPage />
            </Suspense>
          </AuthGuard>
        ),
      },
      {
        path: ROUTES.REGISTRATION,
        element: (
          <AuthGuard>
            <Suspense>
              <RegistrationPage />
            </Suspense>
          </AuthGuard>
        ),
      },
      {
        path: ROUTES.AUTH,
        element: (
          <AuthGuard>
            <Suspense>
              <LoginPage />
            </Suspense>
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
                <Suspense>
                  <ProfilePage />
                </Suspense>
              </GuestGuard>
            ),
          },
          {
            path: ROUTES.PROFILE_DETAIL,
            element: (
              <GuestGuard>
                <Suspense>
                  <ProfilePage />
                </Suspense>
              </GuestGuard>
            ),
          },
          {
            path: ROUTES.TWEETS_DETAIL,
            element: (
              <GuestGuard>
                <Suspense>
                  <TweetPage />
                </Suspense>
              </GuestGuard>
            ),
          },
          {
            path: ROUTES.HOME,
            element: (
              <GuestGuard>
                <Suspense>
                  <HomePage />
                </Suspense>
              </GuestGuard>
            ),
          },
        ],
      },
    ],
  },
]);
