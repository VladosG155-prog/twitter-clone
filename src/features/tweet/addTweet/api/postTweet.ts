import { doc, setDoc } from "firebase/firestore";
import { v4 } from "uuid";

import { ICreateTweetRequest } from "@/entities/tweet/types";
import { client, db } from "@/shared/api/firebase/instance";
import { uploadFile } from "@/shared/api/storage/uploadFile";
export const postTweet = async (data: ICreateTweetRequest) => {
  try {
    const imageUrl = await uploadFile(data.image);
    const id = v4();

    await setDoc(doc(db, "tweets", id), {
      ...data,
      id,
      user: db.doc("users/" + data.user.id),
      image: imageUrl ?? "",
      createdAt: new Date(Date.now()),
    });

    const typesenseDoc = {
      id: id,
      text: data.text.toLowerCase(),
      image: imageUrl ?? "",
    };

    client.collections("tweets").documents().create(typesenseDoc);
  } catch (error) {
    console.error(error);
  }
};
