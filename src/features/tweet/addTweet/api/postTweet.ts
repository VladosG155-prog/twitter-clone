import { addDoc, collection } from "firebase/firestore";

import { ICreateTweetRequest } from "@/entities/tweet/interfaces";
import { db } from "@/shared/api/firebase/instance";
import { uploadFile } from "@/shared/api/storage/uploadFile";

export const postTweet = async (data: ICreateTweetRequest) => {
  try {
    const imageUrl = await uploadFile(data.image);
    console.log(imageUrl);
    console.log(data.user);

    const resp = await addDoc(collection(db, "tweets"), {
      ...data,
      user: db.doc("user/" + data.user.uid),
      image: imageUrl ?? "",
      createdAt: new Date(Date.now()),
    });
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
};
