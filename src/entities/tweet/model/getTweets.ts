import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { fetchTweets } from "../api/fetchTweets";

import { GET_TWEETS } from "./actions";
import { tweetSlice } from "./slice";

export function* getTweets(
  action: PayloadAction<{ userId?: string }>
): Generator {
  try {
    const tweets = yield call(fetchTweets, action.payload.userId);

    yield put(tweetSlice.actions.saveTweets(tweets));
  } catch (error) {
    console.error("error", error);
  }
}

export function* watchGetTweets() {
  yield takeEvery(GET_TWEETS, getTweets);
}
