import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { sessionSlice } from "@/entities/session";
import {
  ISLOGGEDIN,
  LOGINGOOGLE,
  REGISTRATION,
} from "@/entities/session/model/actions";

import { createUser } from "../../api/createUser";
import { googleAuth } from "../../api/googleAuth";
import { IRegistrationFormData } from "../types";

export function* registration(
  data: PayloadAction<IRegistrationFormData>
): Generator {
  try {
    yield put(sessionSlice.actions.userLoading(true));
    yield call(createUser, data.payload);
    yield put(sessionSlice.actions.userLoading(false));
  } catch (error) {
    yield put(sessionSlice.actions.userLoading(false));
    console.error("error", error);
  }
}

export function* googleRegistration() {
  try {
    yield call(googleAuth);
    yield put(ISLOGGEDIN());
  } catch (error) {
    console.error("error", error);
  }
}

export function* watchRegistraion() {
  yield takeEvery(REGISTRATION, registration);
  yield takeEvery(LOGINGOOGLE, googleRegistration);
}
