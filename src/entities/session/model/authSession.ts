import { call, put, takeEvery } from "redux-saga/effects";

import { sessionSlice } from "@/entities/session/";
import { ISLOGGEDIN } from "@/entities/session/";
import { globalSlice } from "@/shared/lib/globalSlice";

import { checkUserSession } from "../api/checkUserSession";
import { IUser } from "../types";

export function* isLoggedIn() {
  try {
    yield put(globalSlice.actions.setLoader(true));
    const user: IUser = yield call(checkUserSession);

    yield put(sessionSlice.actions.setUser(user));

    yield put(globalSlice.actions.setLoader(false));
  } catch (error) {
    yield put(sessionSlice.actions.setUser(undefined));
    yield put(globalSlice.actions.setLoader(false));
    console.error(error);
  }
}

export function* watchIsLoggedIn() {
  yield takeEvery(ISLOGGEDIN, isLoggedIn);
}
