import { IUser } from "@/entities/session/types";
import { db } from "@/shared/api/firebase/instance";

export const getUserProfile = async (userId: string) => {
  try {
    const user = await db
      .collection("users")
      .where("profileId", "==", userId)
      .get();
    const userData = user.docs[0].data() as IUser;
    return userData;
  } catch (error) {
    console.log(error);
  }
};
