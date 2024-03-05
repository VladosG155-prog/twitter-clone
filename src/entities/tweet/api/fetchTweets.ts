import { db } from "@/shared/api/firebase/instance";

export const fetchTweets = async () => {
  const docs = await db.collection("tweets").get();

  const tweets = [];

  docs.forEach((doc) => tweets.push(doc.data()));

  return tweets;
};
