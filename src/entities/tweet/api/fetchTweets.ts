import { Timestamp } from "firebase/firestore";

import { db } from "@/shared/api/firebase/instance";

import { ITweet } from "../interfaces";

export const fetchTweets = async () => {
  const { docs } = await db
    .collection("tweets")
    .orderBy("createdAt", "desc")
    .get();

  const promiseArr = docs.map(async (doc): Promise<ITweet> => {
    const { text, user, createdAt, likesCount, image } = doc.data();

    const userData = (await user.get()).data();

    const createdDate = new Timestamp(
      createdAt.seconds,
      createdAt.nanoseconds
    ).toDate();

    return {
      text,
      image,
      user: userData,
      createdAt: createdDate,
      likesCount,
    };
  });

  return Promise.all(promiseArr);
};
