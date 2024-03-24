import { Timestamp } from "firebase/firestore";

import { IUser } from "@/entities/session/types";
import { ITweet } from "@/entities/tweet/types";
import { db } from "@/shared/api/firebase";

export const fetchTweet = async (tweetId: string) => {
  const postSnapshot = await db.collection("tweets").doc(tweetId).get();
  const postData = postSnapshot.data();
  if (postData) {
    const userRef = postData.user;
    const userSnapshot = await userRef.get();
    const userData = userSnapshot.data() as IUser;
    return {
      ...(postData as ITweet),
      user: userData,
      createdAt: new Timestamp(
        postData.createdAt.seconds,
        postData.createdAt.nanoseconds
      ).toDate(),
    };
  }
};
