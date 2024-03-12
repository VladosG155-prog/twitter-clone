import { signInWithPopup } from "firebase/auth";
import { addDoc, collection, updateDoc } from "firebase/firestore";

import { auth, db, provider } from "@/shared/api/firebase/instance";
import { generateSlug } from "@/shared/lib/generateRandomProfileId/randomProfileId";

export const googleAuth = async () => {
  try {
    const user = await signInWithPopup(auth, provider);

    const isUserExist = await db
      .collection("users")
      .where("email", "==", user.user.email)
      .get();
    if (!isUserExist.empty) return;

    const responseUser = await addDoc(collection(db, "users"), {
      name: user.user.displayName,
      email: user.user.email,
      bio: "",
      phone: user.user.phoneNumber,
      profileId: "@" + generateSlug(),
      avatar: user.user.photoURL,
      dateOfBirthday: null,
    });

    const responseUserWithId = await updateDoc(responseUser, {
      id: responseUser.id,
    });

    return responseUserWithId;
  } catch (error) {
    console.log(error);
  }
};
