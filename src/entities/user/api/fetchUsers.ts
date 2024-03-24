import { IUser } from "@/entities/session/types";
import { db } from "@/shared/api/firebase";

export const fetchUsers = async (userId: string) => {
  try {
    const usersCollectionRef = db
      .collection("users")
      .where("profileId", "!=", userId);

    const users: IUser[] = [];

    const usersCollection = await usersCollectionRef.get();

    usersCollection.docs.forEach((user) => {
      users.push(user.data() as IUser);
    });

    return users;
  } catch (error) {
    console.error(error);
  }
};
