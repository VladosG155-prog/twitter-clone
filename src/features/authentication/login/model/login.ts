import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeEvery } from "redux-saga/effects";

import { appSlice } from "@/entities/app/model/slice";
import { sessionSlice } from "@/entities/session";
import { ISLOGGEDIN, LOGIN } from "@/entities/session/model/actions";

import { loginUser } from "../../api/loginUser";

export function* login(
  data: PayloadAction<{ email: string; password: string }>
) {
  try {
    const { email, password } = data.payload;
    yield put(sessionSlice.actions.userLoading(true));
    yield call(loginUser, email, password);
    yield put(ISLOGGEDIN());
  } catch (error) {
    if (error instanceof Error) {
      yield put(
        appSlice.actions.addToast({ type: "error", text: error.message })
      );
    }
    console.error("error", error);
  } finally {
    yield put(sessionSlice.actions.userLoading(false));
  }
}

export function* watchLogin() {
  yield takeEvery(LOGIN, login);
}
