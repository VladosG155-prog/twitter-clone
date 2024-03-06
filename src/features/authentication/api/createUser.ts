import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { auth, db } from "@/shared/api/firebase/instance";

import { IRegistrationFormData } from "../registration/interfaces";

export const createUser = async (userInfo: IRegistrationFormData) => {
  const { email, password, name, tel, year, month, day } = userInfo;
  const user = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(user.user, {
    displayName: name,
  });
  const responseUser = await addDoc(collection(db, "users"), {
    uid: user.user.uid,
    name: user.user.displayName,
    email: user.user.email,
    phone: tel,
    avatar: user.user.photoURL,
    dateOfBirthday: new Date(+year, +month, +day),
  });
  return responseUser;
};
