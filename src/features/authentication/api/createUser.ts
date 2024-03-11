import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { addDoc, collection, updateDoc } from "firebase/firestore";

import { auth, db } from "@/shared/api/firebase/instance";
import { generateSlug } from "@/shared/lib/generateRandomProfileId/randomProfileId";

import { IRegistrationFormData } from "../registration/types";

export const createUser = async (userInfo: IRegistrationFormData) => {
  const { email, password, name, tel, year, month, day } = userInfo;
  const user = await createUserWithEmailAndPassword(auth, email, password);

  await updateProfile(user.user, {
    displayName: name,
  });
  const responseUser = await addDoc(collection(db, "users"), {
    name: user.user.displayName,
    email: user.user.email,
    phone: tel,
    avatar: user.user.photoURL,
    profileId: "@" + generateSlug(),
    dateOfBirthday: new Date(+year, +month, +day),
  });

  const responseUserWithId = await updateDoc(responseUser, {
    id: responseUser.id,
  });

  return responseUserWithId;
};
