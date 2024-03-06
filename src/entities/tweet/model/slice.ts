import { createSlice } from "@reduxjs/toolkit";

import { ITweet } from "../interfaces";

interface IState {
  tweets: ITweet[];
  isLoading: boolean;
}

const initialState: IState = {
  tweets: [],
  isLoading: false,
};

export const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    saveTweets: (state, action) => {
      state.tweets = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  /*   selectors: {
    selectTweets: (state) => state.tweets,
  }, */
});
/* 
export const { selectTweets } = tweetSlice.selectors; */
