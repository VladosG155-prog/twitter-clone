import { arrayUnion } from "firebase/firestore";

import { db } from "@/shared/api/firebase/instance";

export const postLikeTweet = async (userId: string, postId: string) => {
  console.log(postId);

  const doc2 = await db
    .collection("tweets")
    .doc(postId)
    .update({
      userLikesIds: arrayUnion(userId),
    });
};
