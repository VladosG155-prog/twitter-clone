import { lazy } from "react";

export const HomePage = lazy(() =>
  import("@/pages/home/").then((module) => ({ default: module.HomePage }))
);
export const LoginPage = lazy(() =>
  import("@/pages/login/").then((module) => ({ default: module.LoginPage }))
);
export const ProfilePage = lazy(() =>
  import("@/pages/profile/").then((module) => ({ default: module.ProfilePage }))
);
export const RegistrationPage = lazy(() =>
  import("@/pages/registration").then((module) => ({
    default: module.RegistrationPage,
  }))
);
export const StartPage = lazy(() =>
  import("@/pages/start").then((module) => ({ default: module.StartPage }))
);
export const TweetPage = lazy(() =>
  import("@/pages/tweet/").then((module) => ({ default: module.TweetPage }))
);
