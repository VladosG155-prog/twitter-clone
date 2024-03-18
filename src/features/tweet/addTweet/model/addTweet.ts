import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, select, takeEvery } from "redux-saga/effects";

import { appSlice } from "@/entities/app/model/slice";
import { CREATE_TWEET, GET_TWEETS } from "@/entities/tweet/model/actions";
import { tweetSlice } from "@/entities/tweet/model/slice";
import { ICreateTweetRequest } from "@/entities/tweet/types";

import { postTweet } from "../api/postTweet";

export function* addTweet(data: PayloadAction<ICreateTweetRequest>): Generator {
  try {
    yield put(tweetSlice.actions.setLoading(true));
    const id = yield select((state: RootState) => state.session.profile?.id);

    yield call(postTweet, data.payload);
    yield put(GET_TWEETS({ userId: id as string }));
    yield put(
      appSlice.actions.addToast({
        type: "success",
        text: "tweet successfuly added",
      })
    );
  } catch (error) {
    console.log(error);
  }
}

export function* watchAddTweet() {
  yield takeEvery(CREATE_TWEET, addTweet);
}
