import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, put, takeLatest } from "redux-saga/effects";

import { LIKE_TWEET } from "@/entities/tweet/model/actions";
import { tweetSlice } from "@/entities/tweet/model/slice";

import { postLikeTweet } from "../api/postLikeTweet";

function* likeTweet(
  action: PayloadAction<{ userId: string; postId: string }>
): Generator {
  const { userId, postId } = action.payload;

  try {
    yield put(tweetSlice.actions.updateTweetLike(action.payload));

    yield delay(500);
    yield call(postLikeTweet, userId, postId);
  } catch (e) {
    console.log(e);
  }
}

export function* watchLikeTweet() {
  yield takeLatest(LIKE_TWEET, likeTweet);
}
