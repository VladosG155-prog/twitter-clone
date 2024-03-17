import { all } from "redux-saga/effects";

import { watchLogin } from "../login/model/login";
import { watchLogout } from "../logout/model/logout";
import { watchRegistraion } from "../registration/model/registration";

export function* authenticationSaga() {
  yield all([watchRegistraion(), watchLogin(), watchLogout()]);
}
