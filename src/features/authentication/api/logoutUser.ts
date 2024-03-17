import { signOut } from "firebase/auth";

import { auth } from "@/shared/api/firebase/instance";

export const logoutUser = async () => {
  await signOut(auth);
};
