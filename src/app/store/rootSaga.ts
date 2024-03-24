import { all } from "redux-saga/effects";

import { watchIsLoggedIn } from "@/entities/session/";
import { watchGetTweets } from "@/entities/tweet/";
import { authenticationSaga } from "@/features/authentication/";
import { watchEditProfile } from "@/features/profile/";
import { watchAddTweet, watchLikeTweet } from "@/features/tweet/";

export default function* rootSaga() {
  yield all([
    watchIsLoggedIn(),
    authenticationSaga(),
    watchGetTweets(),
    watchAddTweet(),
    watchLikeTweet(),
    watchEditProfile(),
  ]);
}
