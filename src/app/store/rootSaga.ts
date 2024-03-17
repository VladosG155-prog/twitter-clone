import { all } from "redux-saga/effects";

import { watchIsLoggedIn } from "@/entities/session/model/authSession";
import { watchGetTweets } from "@/entities/tweet/model/getTweets";
import { authenticationSaga } from "@/features/authentication/model";
import { watchEditProfile } from "@/features/profile/editProfile/model/EditProfile";
import { watchAddTweet } from "@/features/tweet/addTweet/model/addTweet";
import { watchLikeTweet } from "@/features/tweet/likeTweet/model/likeTweet";

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
