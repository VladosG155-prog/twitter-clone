import { call, put, takeEvery } from "redux-saga/effects";

import { sessionSlice } from "@/entities/session";
import { ISLOGGEDIN } from "@/entities/session/model/actions";

import { checkUserSession } from "../api/checkUserSession";
import { IUser } from "../interfaces";

export function* isLoggedIn() {
  try {
    yield put(sessionSlice.actions.userLoading(true));
    const user: IUser = yield call(checkUserSession);

    yield put(sessionSlice.actions.setUser(user));

    yield put(sessionSlice.actions.userLoading(false));
  } catch (error) {
    yield put(sessionSlice.actions.userLoading(false));
    console.error(error);
  }
}

export function* watchIsLoggedIn() {
  yield takeEvery(ISLOGGEDIN, isLoggedIn);
}
