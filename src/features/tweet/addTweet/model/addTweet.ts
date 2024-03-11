import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { appSlice } from "@/entities/app/model/slice";
import { CREATE_TWEET, GET_TWEETS } from "@/entities/tweet/model/actions";
import { ICreateTweetRequest } from "@/entities/tweet/types";

import { postTweet } from "../api/postTweet";

export function* addTweet(data: PayloadAction<ICreateTweetRequest>): Generator {
  try {
    yield put(appSlice.actions.setLoader(true));
    console.log(data);

    yield call(postTweet, data.payload);
    yield put(GET_TWEETS({ userId: data.payload.user.id }));
    yield put(appSlice.actions.setLoader(false));
  } catch (error) {
    yield put(appSlice.actions.setLoader(false));
  }
}

export function* watchAddTweet() {
  yield takeEvery(CREATE_TWEET, addTweet);
}
