import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tweets: [],
};

export const tweetSlice = createSlice({
  name: "tweet",
  initialState,
  reducers: {
    saveTweets: (state, action) => {
      state.tweets = action.payload;
    },
  },
});
