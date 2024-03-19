import { v4 } from "uuid";

import { ICreateTweetRequest } from "@/entities/tweet/types";
import { client, db } from "@/shared/api/firebase/instance";
import { uploadFile } from "@/shared/api/storage/uploadFile";
export const postTweet = async (data: ICreateTweetRequest) => {
  try {
    const imageUrl = await uploadFile(data.image);
    const id = v4();
    await db
      .collection("tweets")
      .doc(id)
      .set({
        ...data,
        id,
        user: db.doc("users/" + data.user.id),
        image: imageUrl ?? "",
        createdAt: new Date(Date.now()),
      });

    const doc = await db.collection("tweets").doc(id).get();
    const responsedData = doc.data()!;
    client
      .collections("tweets")
      .documents()
      .create({
        ...responsedData,
        text: responsedData.text.toLocaleLowerCase(),
      });
  } catch (error) {
    console.error(error);
  }
};
