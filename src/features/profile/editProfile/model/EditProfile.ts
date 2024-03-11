import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { appSlice } from "@/entities/app/model/slice";
import { sessionSlice } from "@/entities/session";
import { IUser } from "@/entities/session/types";

import { UPDATE_PROFILE } from "../../model/actions";
import { editProfileRequest } from "../api/EditProfileApi";

export function* editProfile(
  action: PayloadAction<{
    userData: IUser;
    userAvatar?: File;
  }>
): Generator {
  const { userData, userAvatar } = action.payload;
  try {
    yield put(appSlice.actions.setLoader(true));
    const user = yield call(editProfileRequest, userData, userAvatar);
    yield put(sessionSlice.actions.setUser(user));
    yield put(appSlice.actions.setLoader(false));
  } catch (error) {
    yield put(appSlice.actions.setLoader(false));
    console.error("error", error);
  }
}

export function* watchEditProfile() {
  yield takeEvery(UPDATE_PROFILE, editProfile);
}
