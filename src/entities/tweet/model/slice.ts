import { createSlice } from "@reduxjs/toolkit";

import { ITweet } from "../types";

interface IState {
  tweets: ITweet[];
}

const initialState: IState = {
  tweets: [],
};

export const tweetSlice = createSlice({
  name: "tweets",
  initialState,
  reducers: {
    saveTweets: (state, action) => {
      state.tweets = action.payload;
    },
    updateTweetLike: (state, action) => {
      const { postId, userId } = action.payload;
      const copyState = [...state.tweets];
      const tweetIdx = state.tweets.findIndex((tweet) => tweet.id === postId);

      if (copyState[tweetIdx].userLikesIds.includes(userId)) {
        copyState[tweetIdx].userLikesIds = copyState[
          tweetIdx
        ].userLikesIds.filter((id) => id !== userId);
        state.tweets = copyState;

        return;
      }

      if (copyState[tweetIdx].userLikesIds) {
        copyState[tweetIdx].userLikesIds.push(userId);
      } else {
        copyState[tweetIdx].userLikesIds = [userId];
      }
      state.tweets = copyState;
    },
  },
  /*   selectors: {
    selectTweets: (state) => state.tweets,
  }, */
});
/* 
export const { selectTweets } = tweetSlice.selectors; */
