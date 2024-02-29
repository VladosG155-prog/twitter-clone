import { createAction } from "@reduxjs/toolkit";

export const REGISTRATION = createAction<{
  email: string;
  password: string;
  name: string;
  tel: string;
}>("session/REGISTRATION");

export const LOGIN = createAction<{
  email: string;
  password: string;
}>("session/LOGIN");

export const ISLOGGEDIN = createAction("session/LOGGEDIN");
