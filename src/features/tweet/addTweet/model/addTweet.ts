import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { CREATE_TWEET, GET_TWEETS } from "@/entities/tweet/model/actions";
import { tweetSlice } from "@/entities/tweet/model/slice";
import { ICreateTweetRequest } from "@/entities/tweet/types";

import { postTweet } from "../api/postTweet";

export function* addTweet(data: PayloadAction<ICreateTweetRequest>): Generator {
  try {
    yield put(tweetSlice.actions.setLoading(true));
    console.log(data);

    yield call(postTweet, data.payload);
    yield put(GET_TWEETS({ userId: data.payload.user.id }));
    yield put(tweetSlice.actions.setLoading(false));
  } catch (error) {
    yield put(tweetSlice.actions.setLoading(false));
  }
}

export function* watchAddTweet() {
  yield takeEvery(CREATE_TWEET, addTweet);
}
