import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { appSlice } from "@/entities/app/model/slice";
import { sessionSlice } from "@/entities/session";
import { IUser } from "@/entities/session/types";

import { UPDATE_PROFILE } from "../../model/actions";
import { editProfileRequest } from "../api/EditProfileApi";

export function* editProfile(
  action: PayloadAction<{
    userData: IUser & { password: string };
    userAvatar?: File;
  }>
): Generator {
  const { userData, userAvatar } = action.payload;
  try {
    yield put(appSlice.actions.setLoader(true));
    const user = yield call(editProfileRequest, userData, userAvatar);
    yield put(sessionSlice.actions.setUser(user as IUser));
    yield put(
      appSlice.actions.addToast({
        text: "Profile has been successfuly updated",
        type: "success",
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        appSlice.actions.addToast({
          text: error.message,
          type: "error",
        })
      );
    }
  } finally {
    yield put(appSlice.actions.setLoader(false));
  }
}

export function* watchEditProfile() {
  yield takeEvery(UPDATE_PROFILE, editProfile);
}
