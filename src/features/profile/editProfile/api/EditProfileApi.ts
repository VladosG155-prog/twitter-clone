import { IUser } from "@/entities/session/types";
import { db } from "@/shared/api/firebase/instance";
import { uploadFile } from "@/shared/api/storage/uploadFile";

export const editProfileRequest = async (
  userData: Omit<IUser, "uid, ">,
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
  const user = await userItemRef.get();
  return user.data() as IUser;
};
