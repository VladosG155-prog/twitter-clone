import { Timestamp } from "firebase/firestore";

import { db } from "@/shared/api/firebase/instance";

import { ITweet } from "../types";

export const fetchTweets = async (userId?: string) => {
  try {
    const findedUser = db.collection("users").doc(userId);

    const currentTweets = db.collection("tweets").orderBy("createdAt", "desc");

    const userTweets = await currentTweets
      .where("user", "==", findedUser)
      .get();

    const allTweets = await currentTweets.get();

    const docs = userId ? userTweets : allTweets;

    const promiseArr = docs.docs.map(async (doc): Promise<ITweet> => {
      const { text, user, createdAt, userLikesIds, image, id } = doc.data();

      const userData = (await user.get()).data();

      const createdDate = new Timestamp(
        createdAt.seconds,
        createdAt.nanoseconds
      ).toDate();

      return {
        text,
        id,
        image,
        user: userData,
        createdAt: createdDate,
        userLikesIds: userLikesIds ?? [],
      };
    });

    return Promise.all(promiseArr);
  } catch (error) {
    console.log(error);
  }
};
