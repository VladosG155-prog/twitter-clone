import { signOut } from "firebase/auth";

import { auth } from "@/shared/api/firebase";

export const logoutUser = async () => {
  await signOut(auth);
};
