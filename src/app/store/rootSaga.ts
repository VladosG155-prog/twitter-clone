import { all } from "redux-saga/effects";

import { watchIsLoggedIn } from "@/entities/session/model/authSession";
import { watchLogin } from "@/features/authentication/model/login/login";
import { watchRegistraion } from "@/features/authentication/model/registration/registration";

export default function* rootSaga() {
  yield all([watchRegistraion(), watchLogin(), watchIsLoggedIn()]);
}
