import { updatePassword } from "firebase/auth";

import { IUser } from "@/entities/session/types";
import { auth, db } from "@/shared/api/firebase/instance";
import { uploadFile } from "@/shared/api/storage/uploadFile";

export const editProfileRequest = async (
  userData: Omit<IUser, "uid, "> & { password: string },
  userAvatar?: File
): Promise<IUser> => {
  const userItemRef = await db.collection("users").doc(userData.id);
  const imageUrl = await uploadFile(userAvatar);

  await userItemRef.update({
    ...userData,
  });

  if (userAvatar) {
    await userItemRef.update({
      avatar: imageUrl,
    });
  }

  if (userData.password) {
    await updatePassword(auth.currentUser!, userData.password);
  }

  const user = await userItemRef.get();
  return user.data() as IUser;
};
