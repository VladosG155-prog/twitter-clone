import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { sessionSlice } from "@/entities/session";
import { IUser } from "@/entities/session/interfaces";
import { ISLOGGEDIN, LOGIN } from "@/entities/session/model/actions";

import { loginUser } from "../../api/loginUser";

export function* login(
  data: PayloadAction<{ email: string; password: string }>
) {
  try {
    const { email, password } = data.payload;
    yield put(sessionSlice.actions.userLoading(true));
    const user: IUser = yield call(loginUser, email, password);
    yield put(ISLOGGEDIN());
    yield put(sessionSlice.actions.userLoading(false));
    console.log("f", user);
  } catch (error) {
    yield put(sessionSlice.actions.userLoading(false));
    console.error("error", error);
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}
