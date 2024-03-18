import { Timestamp } from "firebase/firestore";

import { IUser } from "@/entities/session/types";
import { ITweet } from "@/entities/tweet/types";
import { db } from "@/shared/api/firebase/instance";

export const fetchData = async (tweetId: string): Promise<ITweet> => {
  return new Promise((res) => {
    const postSnapshot = db.collection("tweets").doc(tweetId).get();
    const postData = postSnapshot.data();
    if (postData) {
      const userRef = postData.user;
      const userSnapshot = userRef.get();
      const userData = userSnapshot.data() as IUser;
      res({
        user: userData,
        ...postData,
        createdAt: new Timestamp(
          postData.createdAt.seconds,
          postData.createdAt.nanoseconds
        ).toDate(),
      });
    }
  });
};
