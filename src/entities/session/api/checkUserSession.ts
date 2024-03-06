import { auth, db } from "@/shared/api/firebase/instance";

import { IUser } from "../interfaces";

export const checkUserSession = (): Promise<IUser | unknown> => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const dbUser = await db
          .collection("users")
          .where("uid", "==", user.uid)
          .get();

        resolve(dbUser.docs[0].data());
      } else {
        reject(new Error("Whoops. Your session has been expired"));
      }
    });
  });
};
