import { call, put, takeEvery } from "redux-saga/effects";

import { sessionSlice } from "@/entities/session";
import { LOGOUT } from "@/entities/session/model/actions";

import { logoutUser } from "../../api/logoutUser";

export function* logout() {
  try {
    yield call(logoutUser);
    yield put(sessionSlice.actions.setUser(null));
  } catch (error) {
    console.error("error", error);
  }
}

export function* watchLogout() {
  yield takeEvery(LOGOUT, logout);
}
