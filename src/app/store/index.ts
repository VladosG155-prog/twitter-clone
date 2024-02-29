import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { sessionSlice } from "@/entities/session";
import { watchRegistraion } from "@/features/authentication/model/registration/registration";

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    session: sessionSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleWare),
});

sagaMiddleWare.run(watchRegistraion);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
