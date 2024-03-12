import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLeading } from "redux-saga/effects";

import { fetchTweets } from "../api/fetchTweets";

import { GET_TWEETS } from "./actions";
import { tweetSlice } from "./slice";

export function* getTweets(
  action: PayloadAction<{ userId?: string }>
): Generator {
  try {
    yield put(tweetSlice.actions.setLoading(true));
    const { userId } = action.payload;
    const tweets = yield call(fetchTweets, userId);
    yield put(tweetSlice.actions.saveTweets(tweets));
  } catch (error) {
    console.error("error", error);
  } finally {
    yield put(tweetSlice.actions.setLoading(false));
  }
}

export function* watchGetTweets() {
  yield takeLeading(GET_TWEETS, getTweets);
}
