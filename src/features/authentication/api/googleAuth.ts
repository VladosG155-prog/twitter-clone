import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "@/shared/api/firebase/instance";

export const googleAuth = async () => {
  const user = await signInWithPopup(auth, provider);

  return user.user;
};
