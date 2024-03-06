import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

import { storage } from "../firebase/instance";

export const uploadFile = async (file?: File) => {
  if (!file) return;
  const fileId = v4();
  const storageRef = ref(storage, fileId);
  await uploadBytes(storageRef, file);

  const url = await getDownloadURL(storageRef);

  return url;
};
