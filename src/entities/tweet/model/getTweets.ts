import { call, put, takeEvery } from "redux-saga/effects";

import { fetchTweets } from "../api/fetchTweets";

import { GET_TWEETS } from "./actions";
import { tweetSlice } from "./slice";

export function* getTweets(): Generator {
  try {
    const tweets = yield call(fetchTweets);

    yield put(tweetSlice.actions.saveTweets(tweets));
  } catch (error) {
    console.error("error", error);
  }
}

export function* watchGetTweets() {
  yield takeEvery(GET_TWEETS, getTweets);
}
