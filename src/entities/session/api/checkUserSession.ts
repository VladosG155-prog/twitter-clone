import { auth, db } from "@/shared/api/firebase/instance";

import { IUser } from "../types";

export const checkUserSession = (): Promise<IUser | unknown> => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        const dbUser = await db
          .collection("users")
          .where("uid", "==", user.uid)
          .get();

        const userInfo = dbUser.docs[0]?.data();

        const res = {
          ...userInfo,
          id: dbUser.docs[0]?.id,
        };
        resolve(res);
      } else {
        reject(new Error("Whoops. Your session has been expired"));
      }
    });
  });
};
