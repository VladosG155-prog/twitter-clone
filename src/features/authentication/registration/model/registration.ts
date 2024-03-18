import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { appSlice } from "@/entities/app/model/slice";
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
    yield put(
      appSlice.actions.addToast({
        text: "successfuly registration",
        type: "success",
      })
    );
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        appSlice.actions.addToast({ text: error.message, type: "error" })
      );
    }

    console.error("error", error);
  } finally {
    yield put(sessionSlice.actions.userLoading(false));
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
