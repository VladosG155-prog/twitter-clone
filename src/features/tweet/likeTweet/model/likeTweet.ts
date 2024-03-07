import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { LIKE_TWEET } from "@/entities/tweet/model/actions";
import { tweetSlice } from "@/entities/tweet/model/slice";

import { postLikeTweet } from "../api/postLikeTweet";

function* likeTweet(
  action: PayloadAction<{ userId: string; postId: string }>
): Generator {
  console.log(action);
  const { userId, postId } = action.payload;

  try {
    yield put(tweetSlice.actions.updateTweetLike(action.payload));
    yield call(postLikeTweet, userId, postId);
  } catch (e) {
    console.log(e);
  }
}

export function* watchLikeTweet() {
  yield takeEvery(LIKE_TWEET, likeTweet);
}
