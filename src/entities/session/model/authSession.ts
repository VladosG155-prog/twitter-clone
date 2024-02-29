import { User } from "firebase/auth";
import { call, put, takeEvery } from "redux-saga/effects";

import { sessionSlice } from "@/entities/session";
import { ISLOGGEDIN } from "@/entities/session/model/actions";

import { checkUserSession } from "../api/checkUserSession";

export function* isLoggedIn() {
  try {
    const user: User = yield call(checkUserSession);
    console.log("user", user);

    yield put(sessionSlice.actions.setUser(user));
  } catch (error) {
    console.error(error);
  }
}

export function* watchIsLoggedIn() {
  yield takeEvery(ISLOGGEDIN, isLoggedIn);
}
