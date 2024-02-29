import { PayloadAction } from "@reduxjs/toolkit";
import { signInWithEmailAndPassword } from "firebase/auth";
import { call, put, takeEvery } from "redux-saga/effects";

import { sessionSlice } from "@/entities/session";
import { LOGIN } from "@/entities/session/model/actions";
import { auth } from "@/shared/api/firebase/instance";

const loginUser = async (email: string, password: string) => {
  const res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

export function* login(
  data: PayloadAction<{ email: string; password: string }>
): Generator {
  try {
    yield put(sessionSlice.actions.userLoading(true));
    const f = yield call(loginUser, data.payload.email, data.payload.password);
    yield put(sessionSlice.actions.userLoading(false));
    console.log("f", f);
  } catch (error) {
    console.error("error", error);
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}
