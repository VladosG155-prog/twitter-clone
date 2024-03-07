import { v4 } from "uuid";

import { ICreateTweetRequest } from "@/entities/tweet/types";
import { db } from "@/shared/api/firebase/instance";
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
  } catch (error) {
    console.error(error);
  }
};
