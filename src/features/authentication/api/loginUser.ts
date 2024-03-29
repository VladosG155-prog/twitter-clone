import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "@/shared/api/firebase";

export const loginUser = async (email: string, password: string) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res.user;
};
