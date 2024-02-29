import { PayloadAction } from "@reduxjs/toolkit";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { call, put, takeEvery } from "redux-saga/effects";

import { sessionSlice } from "@/entities/session";
import { REGISTRATION } from "@/entities/session/model/actions";
import { auth } from "@/shared/api/firebase/instance";

const createUser = async (email: string, password: string) => {
  const res = await createUserWithEmailAndPassword(auth, email, password);
  return res;
};

export function* registration(
  data: PayloadAction<{ email: string; password: string }>
): Generator {
  try {
    yield put(sessionSlice.actions.userLoading(true));
    const f = yield call(createUser, data.payload.email, data.payload.password);
    yield put(sessionSlice.actions.userLoading(false));
    console.log("f", f);
  } catch (error) {
    console.error("error", error);
  }
}

export function* watchRegistraion() {
  yield takeEvery(REGISTRATION, registration);
}
