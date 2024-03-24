import { arrayRemove, arrayUnion } from "firebase/firestore";

import { db } from "@/shared/api/firebase";

export const postLikeTweet = async (userId: string, postId: string) => {
  const tweetItem = db.collection("tweets").doc(postId);
  const tweet = await tweetItem.get();

  const isUserLikeExist = tweet.data()!.userLikesIds?.includes(userId);

  await tweetItem.update({
    userLikesIds: isUserLikeExist ? arrayRemove(userId) : arrayUnion(userId),
  });
};
