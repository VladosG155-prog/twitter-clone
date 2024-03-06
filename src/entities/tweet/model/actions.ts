import { createAction } from "@reduxjs/toolkit";

import { ICreateTweetRequest } from "../interfaces";

export const GET_TWEETS = createAction("tweets/GET_TWEETS");

export const CREATE_TWEET = createAction<ICreateTweetRequest>(
  "tweets/CREATE_TWEET"
);
