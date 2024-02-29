import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "@/shared/api/firebase/instance";

import { IRegistrationFormData } from "../model/interfaces";

export const createUser = async (userInfo: IRegistrationFormData) => {
  const { email, password, name } = userInfo;
  const user = await createUserWithEmailAndPassword(auth, email, password);
  await updateProfile(user.user, {
    displayName: name,
  });
  return user;
};
