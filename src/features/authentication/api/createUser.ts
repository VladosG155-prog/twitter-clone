import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { auth, db } from "@/shared/api/firebase/instance";

import { IRegistrationFormData } from "../registration/interfaces";

export const createUser = async (userInfo: IRegistrationFormData) => {
  const { email, password, name } = userInfo;
  const user = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(user.user, {
    displayName: name,
  });
  await addDoc(collection(db, "users"), {
    uid: user.user.uid,
    name: user.user.displayName,
    email: user.user.email,
    phone: user.user.phoneNumber,
    avatar: user.user.photoURL,
  });
  return user;
};
