import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLeading } from "redux-saga/effects";

import { appSlice } from "@/entities/app/model/slice";

import { fetchTweets } from "../api/fetchTweets";

import { GET_TWEETS } from "./actions";
import { tweetSlice } from "./slice";

export function* getTweets(
  action: PayloadAction<{ userId?: string }>
): Generator {
  try {
    const { userId } = action.payload;
    const tweets = yield call(fetchTweets, userId);
    yield put(tweetSlice.actions.saveTweets(tweets));
    yield put(appSlice.actions.setLoader(false));
  } catch (error) {
    yield put(appSlice.actions.setLoader(false));
    console.error("error", error);
  }
}

export function* watchGetTweets() {
  yield put(appSlice.actions.setLoader(true));
  yield takeLeading(GET_TWEETS, getTweets);
}
