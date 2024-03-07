import { all } from "redux-saga/effects";

import { watchGetTweets } from "@/entities/tweet/model/getTweets";
import { authenticationSaga } from "@/features/authentication/model";
import { watchAddTweet } from "@/features/tweet/addTweet/model/addTweet";
import { watchLikeTweet } from "@/features/tweet/likeTweet/model/likeTweet";

export default function* rootSaga() {
  yield all([
    authenticationSaga(),
    watchGetTweets(),
    watchAddTweet(),
    watchLikeTweet(),
  ]);
}
