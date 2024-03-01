import { redirect } from "react-router-dom";
import { User } from "firebase/auth";
import { call, put, takeEvery } from "redux-saga/effects";

import { sessionSlice } from "@/entities/session";
import { ISLOGGEDIN } from "@/entities/session/model/actions";

import { checkUserSession } from "../api/checkUserSession";

export function* isLoggedIn() {
  try {
    yield put(sessionSlice.actions.userLoading(true));
    const user: User = yield call(checkUserSession);

    yield put(sessionSlice.actions.setUser(user));

    yield put(sessionSlice.actions.userLoading(false));
    redirect("/feed");
  } catch (error) {
    console.error(error);
  }
}

export function* watchIsLoggedIn() {
  yield takeEvery(ISLOGGEDIN, isLoggedIn);
}
