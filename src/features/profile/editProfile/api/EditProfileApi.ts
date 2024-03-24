import { updatePassword } from "firebase/auth";

import { IUser } from "@/entities/session/types";
import { auth, db } from "@/shared/api/firebase";
import { uploadFile } from "@/shared/api/storage/uploadFile";

export const editProfileRequest = async (
  userData: Omit<IUser, "uid, "> & { password: string },
  userAvatar?: File
): Promise<IUser> => {
  const userItemRef = db.collection("users").doc(userData.id);
  const imageUrl = await uploadFile(userAvatar);

  const { password, ...userInfo } = userData;

  await userItemRef.update({
    ...userInfo,
    dateOfBirthday: new Date(),
  });

  if (userAvatar) {
    await userItemRef.update({
      avatar: imageUrl,
    });
  }

  if (password) {
    await updatePassword(auth.currentUser!, password);
  }

  const user = await userItemRef.get();
  return user.data() as IUser;
};
