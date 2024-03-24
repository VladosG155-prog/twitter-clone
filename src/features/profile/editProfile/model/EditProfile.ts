import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { IUser, sessionSlice } from "@/entities/session/";
import { globalSlice } from "@/shared/lib/globalSlice";

import { editProfileRequest } from "../api/EditProfileApi";

import { UPDATE_PROFILE } from "./actions";

export function* editProfile(
  action: PayloadAction<{
    userData: IUser & { password: string };
    userAvatar?: File;
  }>
): Generator {
  const { userData, userAvatar } = action.payload;
  try {
    yield put(globalSlice.actions.setLoader(true));
    const user = yield call(editProfileRequest, userData, userAvatar);
    yield put(sessionSlice.actions.setUser(user as IUser));
    yield put(
      globalSlice.actions.addToast({
        text: "Profile has been successfuly updated",
        type: "success",
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        globalSlice.actions.addToast({
          text: error.message,
          type: "error",
        })
      );
    }
  } finally {
    yield put(globalSlice.actions.setLoader(false));
  }
}

export function* watchEditProfile() {
  yield takeEvery(UPDATE_PROFILE, editProfile);
}
