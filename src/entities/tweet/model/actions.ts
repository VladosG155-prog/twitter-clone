import { createAction } from "@reduxjs/toolkit";

import { ICreateTweetRequest } from "../types";

export const GET_TWEETS = createAction<{ userId?: string }>(
  "tweets/GET_TWEETS"
);

export const CREATE_TWEET = createAction<ICreateTweetRequest>(
  "tweets/CREATE_TWEET"
);

export const LIKE_TWEET = createAction<{ userId: string; postId: string }>(
  "tweets/LIKE_TWEET"
);
