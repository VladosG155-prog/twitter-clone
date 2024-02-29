import { User } from "firebase/auth";

import { auth } from "@/shared/api/firebase/instance";

export const checkUserSession = (): Promise<User | unknown> => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        resolve(user);
      } else {
        reject(new Error("Whoops. Your session has been expired"));
      }
    });
  });
};
