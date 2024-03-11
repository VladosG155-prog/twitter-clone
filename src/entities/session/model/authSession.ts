import { call, put, takeEvery } from "redux-saga/effects";

import { appSlice } from "@/entities/app/model/slice";
import { sessionSlice } from "@/entities/session";
import { ISLOGGEDIN } from "@/entities/session/model/actions";

import { checkUserSession } from "../api/checkUserSession";
import { IUser } from "../types";

export function* isLoggedIn() {
  try {
    yield put(appSlice.actions.setLoader(true));
    const user: IUser = yield call(checkUserSession);

    yield put(sessionSlice.actions.setUser(user));

    yield put(appSlice.actions.setLoader(false));
  } catch (error) {
    yield put(appSlice.actions.setLoader(false));
    console.error(error);
  }
}

export function* watchIsLoggedIn() {
  yield takeEvery(ISLOGGEDIN, isLoggedIn);
}