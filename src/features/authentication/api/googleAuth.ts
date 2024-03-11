import { signInWithPopup } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { auth, db, provider } from "@/shared/api/firebase/instance";

export const googleAuth = async () => {
  const user = await signInWithPopup(auth, provider);
  console.log(user.user.uid);
  const responseUser = await addDoc(collection(db, "users"), {
    uid: user.user.uid,
    name: user.user.displayName,
    email: user.user.email,
    phone: user.user.phoneNumber,
    profileId: "@" + user.user.email?.split("@")[0],
    avatar: user.user.photoURL,
    dateOfBirthday: null,
  });
  return responseUser;
};
